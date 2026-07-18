// ============================================================
// 冒险区域追踪器
// ============================================================
(function() {
    var AdventureAPI = Java.loadClass('civil_adventure.api.AdventureAPI');
    var BlockPos = Java.loadClass('net.minecraft.core.BlockPos');

    var SCAN_INTERVAL = 600;
    var BATCH_SIZE    = 20;
    var SCAN_RADIUS   = 16;
    var TOLERANCE     = 200;
    var SCORE_THRESH  = 100;
    var MAX_LOW_COUNT = 3;
    var DATA_KEY      = "adventure_zones";

    var zones = [];
    var nextId = 0;
    var scanState = null;

    // ==================== 位置采集 ====================
    function gatherData(server) {
        var scanned = {};
        var list = [];
        var players = [];

        server.getAllLevels().forEach(function(level) {
            var dim = String(level.getDimension());
            level.players.forEach(function(player) {
                players.push({ dim: dim, x: player.getX(), z: player.getZ() });
                var cp = player.chunkPosition();
                for (var dx = -SCAN_RADIUS; dx <= SCAN_RADIUS; dx++) {
                    for (var dz = -SCAN_RADIUS; dz <= SCAN_RADIUS; dz++) {
                        var key = dim + "|" + (cp.x + dx) + "|" + (cp.z + dz);
                        if (!scanned[key]) {
                            scanned[key] = true;
                            list.push({
                                dim: dim,
                                pos: new BlockPos((cp.x + dx) * 16 + 8, 64, (cp.z + dz) * 16 + 8)
                            });
                        }
                    }
                }
            });
        });
        return { positions: list, players: players };
    }

    // ==================== 单点检测 ====================
    function checkPosition(entry, level, zoneActive) {
        var pos = entry.pos;
        var rawScore = Math.round(AdventureAPI.getRawScoreAt(level, pos));
        if (rawScore <= SCORE_THRESH) return;

        var x = pos.getX();
        var z = pos.getZ();
        var limit = TOLERANCE * TOLERANCE;

        var overlapped = [];
        for (var i = 0; i < zones.length; i++) {
            if (zones[i].dim !== entry.dim) continue;
            var dx = x - zones[i].cx;
            var dz = z - zones[i].cz;
            if (dx * dx + dz * dz <= limit) overlapped.push(i);
        }

        if (overlapped.length > 0) {
            var primary = zones[overlapped[0]];
            for (var j = 1; j < overlapped.length; j++) {
                mergeBounds(primary, zones[overlapped[j]]);
                zones[overlapped[j]] = null;
            }
            if (x < primary.minX) primary.minX = x;
            if (x > primary.maxX) primary.maxX = x;
            if (z < primary.minZ) primary.minZ = z;
            if (z > primary.maxZ) primary.maxZ = z;
            if (rawScore > (primary.rawScore || 0)) primary.rawScore = rawScore;
            zones = zones.filter(function(z) { return z !== null; });
            zoneActive[primary.id] = true;
        } else {
            var nz = {
                id: nextId++, dim: entry.dim, cx: x, cz: z,
                minX: x, maxX: x, minZ: z, maxZ: z,
                rawScore: rawScore, lowScoreCount: 0,
            };
            zones.push(nz);
            zoneActive[nz.id] = true;
        }
    }

    // ==================== 批次处理 ====================
    function processBatch() {
        if (!scanState) return;
        var s = scanState;

        var end = Math.min(s.index + BATCH_SIZE, s.positions.length);
        for (var i = s.index; i < end; i++) {
            var entry = s.positions[i];
            var level = s.server.getLevel(entry.dim);
            if (!level) continue;
            checkPosition(entry, level, s.zoneActive);
        }
        s.index = end;

        if (s.index >= s.positions.length) {
            finalize(s.server);
            scanState = null;
        }
    }

    // ==================== 收尾 ====================
    function finalize(server) {
        var limit = TOLERANCE * TOLERANCE;

        for (var i = zones.length - 1; i >= 0; i--) {
            var z = zones[i];
            if (scanState.zoneActive[z.id]) {
                if (z.lowScoreCount > 0) z.lowScoreCount = 0;
                continue;
            }
            // 同维度且玩家在中心 200 格内未激活 → 记一次低分
            var playerNearby = false;
            for (var p = 0; p < scanState.players.length; p++) {
                var pl = scanState.players[p];
                if (pl.dim !== z.dim) continue;
                var dx = pl.x - z.cx;
                var dz = pl.z - z.cz;
                if (dx * dx + dz * dz <= limit) {
                    playerNearby = true;
                    break;
                }
            }
            if (playerNearby) {
                z.lowScoreCount = (z.lowScoreCount || 0) + 1;
                if (z.lowScoreCount >= MAX_LOW_COUNT) {
                    console.log("[区域追踪] 区域 #" + z.id + " 已废弃");
                    zones.splice(i, 1);
                }
            }
        }
        pushSummary();
        save(server);
    }

    // ==================== 持久化 ====================
    function load(server) {
        try {
            var raw = server.persistentData[DATA_KEY];
            if (raw) {
                var data = JSON.parse(raw);
                if (data && Array.isArray(data) && data.length > 0) {
                    zones = data;
                    var ids = data.map(function(z) { return z.id; });
                    nextId = (ids.length > 0 ? Math.max.apply(null, ids) : 0) + 1;
                    // 旧数据兼容：补维度、低分计数归零（新逻辑重算）
                    for (var i = 0; i < zones.length; i++) {
                        if (!zones[i].dim) zones[i].dim = "minecraft:overworld";
                        zones[i].lowScoreCount = 0;
                    }
                    pushSummary();
                    console.log("[区域追踪] 已加载 " + zones.length + " 个区域");
                    return;
                }
            }
        } catch (e) {}
        zones = [];
        nextId = 0;
        pushSummary();
    }

    function save(server) {
        server.persistentData[DATA_KEY] = JSON.stringify(zones);
        console.log("[区域追踪] 已保存 " + zones.length + " 个区域");
    }

    function calcStage(total) {
        if (total < 100) return 0;
        if (total < 500) return 1;
        if (total < 2000) return 2;
        if (total < 5000) return 3;
        return 4 + Math.floor((total - 5000) / 2500);
    }

    function pushSummary() {
        var total = 0;
        for (var i = 0; i < zones.length; i++) {
            total += zones[i].rawScore || 0;
        }
        global.adventureZoneSummary = {
            count: zones.length,
            totalScore: total,
            stage: calcStage(total),
        };
        global.getAdventureZones = function() { return zones.slice(); };
    }

    function mergeBounds(a, b) {
        a.minX = Math.min(a.minX, b.minX);
        a.maxX = Math.max(a.maxX, b.maxX);
        a.minZ = Math.min(a.minZ, b.minZ);
        a.maxZ = Math.max(a.maxZ, b.maxZ);
        a.rawScore = Math.max(a.rawScore || 0, b.rawScore || 0);
    }

    // ==================== 事件 ====================
    ServerEvents.tick(function(event) {
        if (scanState) { processBatch(); return; }
        if (event.server.getTickCount() % SCAN_INTERVAL !== 0) return;

        var server = event.server;
        var data = gatherData(server);
        if (data.positions.length === 0) return;

        console.log("[区域追踪] 开始扫描，共 " + data.positions.length + " 个位置");
        scanState = {
            server: server,
            positions: data.positions,
            players: data.players,
            index: 0,
            zoneActive: {},
        };
        processBatch();
    });

    ServerEvents.loaded(function(event) { load(event.server); });
    ServerEvents.unloaded(function(event) { save(event.server); });
})();
