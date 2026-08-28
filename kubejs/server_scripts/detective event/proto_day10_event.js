// ============================================================
// proto_day10_event — 第10天冒险区事件
// 触发: 倒计时起点(首次加载或重新开始)后第 10 天正午(12000 tick),
//       在冒险区域内生成 spore:proto
//      - 排除出生点周围 300 格
//      - 成功生成后仅触发一次(persistentData 持久化,重启不重复)
// 倒计时: 起点 3 分钟后开始,每 60 秒给全体玩家发送红色加粗动作栏,
//         只显示剩余时间,格式 分:秒
// 剧情文本: 红色加粗,每段间隔 3 秒
// 无冒险区时: 不生成,聊天框输出绿色文本"很好,继续这样下去,不要吵醒祂.....",
//       然后重新开始整个事件(不写入完成标记,可再次触发)
// 触发后: 分段发送剧情文本,最后一句播放音效 spore:calamity_incoming
// 测试指令: /protoevent_test (权限2,直接触发事件)
// ============================================================
(function() {
    var TRIGGER_DAY         = 10;    // 第几天触发
    var TRIGGER_TIME        = 12000; // 触发时刻(当天正午)
    var COUNTDOWN_AFTER     = 3600;  // 倒计时起点: 世界创建后 3 真实分钟(tick)
    var COUNTDOWN_INTERVAL  = 1200;   // 倒计时刷新间隔(tick, 1200 = 60秒)
    var EXCLUDE_RADIUS      = 300;   // 出生点排除半径(格)
    var LINE_DELAY          = 100;    // 剧情文本每段间隔(tick, 60 = 3秒)
    var EVENT_KEY           = "proto_day10_done";
    var START_KEY           = "proto_day10_start";

    var BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    var ResourceLocation  = Java.loadClass('net.minecraft.resources.ResourceLocation');
    var Heightmap         = Java.loadClass('net.minecraft.world.level.levelgen.Heightmap');

    // ==================== 剧情文本(每段一条) ====================
    var STORY = [
        "你听到远处传来一声沉闷的钟响，像是从地底深处渗上来的。",
        "空气突然变得粘稠，你的皮肤能感觉到一种被注视的压迫感。",
        "你环顾四周，一切如常，但你知道有什么东西正在看着你。",
        "那个念头不是来自你体内——它来自外面，来自某个刚刚苏醒的东西。",
        "你感觉整个世界都安静了一瞬，仿佛连风都在等待它的第一个指令。",
        "地面传来极其轻微的震动，像是有巨大的东西在很远的地方调整姿态。",
        "你意识到自己正在被评估，被衡量，被记录。",
        "它正在记住你走过的每一条路，停留的每一个角落。",
        "它正在观察你什么时候放松警惕，什么时候落单，什么时候疲惫。",
        "它还没有行动，但它已经做出了决定。",
        "有什么东西正在世界深处缓慢睁开它的眼睛。",
        "忍受吧。",
    ];

    // ==================== 状态 ====================
    var storyQueue = [];   // 待发送的剧情文本 { text, final }
    var queueTimer = 0;

    // ==================== 工具 ====================
    function overworld(server) {
        return server.getLevel("minecraft:overworld");
    }

    // 剩余 tick → 分:秒(20 tick = 1 秒,1200 tick = 1 分钟)
    function formatRemaining(rem) {
        if (rem < 0) rem = 0;
        var totalSec = Math.floor(rem / 20);
        var mins = Math.floor(totalSec / 60);
        var secs = totalSec % 60;
        return mins + ":" + (secs < 10 ? "0" : "") + secs;
    }

    // 距触发时刻剩余 tick(触发时刻 = 倒计时起点 + 第10天正午)
    function eventRemaining(server) {
        var ow = overworld(server);
        var start = server.persistentData[START_KEY];
        if (start == null) start = 0;
        return start + TRIGGER_DAY * 24000 + TRIGGER_TIME - ow.getDayTime();
    }

    // 最后一句伴随音效(向全体玩家广播;命令写法与你游戏内验证的 voice 频道一致,
    // 走包内验证过的 runCommandSilent)
    function playFinalSound(server) {
        var level = server.getLevel("minecraft:overworld");
        if (level) level.runCommandSilent("playsound spore:calamity_incoming voice @a");
    }

    // ==================== 生成 spore:proto(纯原生方式) ====================
    function spawnProto(server) {
        var ow = overworld(server);
        if (!ow) return 0;
        var lvl = ow.minecraftLevel || ow;   // 原生 ServerLevel

        var spawnPos = lvl.getSharedSpawnPos();
        var zones = global.getAdventureZones ? global.getAdventureZones() : [];
        var limit = EXCLUDE_RADIUS * EXCLUDE_RADIUS;
        var spawned = 0, excluded = 0;

        zones.forEach(function(z) {
            if (!z || z.dim !== "minecraft:overworld") { excluded++; return; }
            var x = z.cx, zc = z.cz;

            // 排除出生点周围 300 格
            if (spawnPos) {
                var dx = x - spawnPos.getX(), dz = zc - spawnPos.getZ();
                if (dx * dx + dz * dz <= limit) { excluded++; return; }
            }

            var level = server.getLevel(z.dim);
            if (!level) return;
            var lev = level.minecraftLevel || level;

            var y = lev.getHeight(Heightmap.Types.MOTION_BLOCKING, x, zc);
            var type = BuiltInRegistries.ENTITY_TYPE.get(new ResourceLocation("spore", "proto"));
            if (type == null) return;
            var entity = type.create(lev);
            if (entity == null) return;

            entity.setPos(x, y + 1, zc);
            entity.setPersistenceRequired();                            // 防止自然消失
            entity.getPersistentData().putBoolean("protoDay10", true);  // 标记来源
            lev.addFreshEntity(entity);
            spawned++;
        });

        console.log("[第10天事件] 生成 " + spawned + " 只 spore:proto(排除 " + excluded + " 个区域)");
        return spawned;
    }

    // ==================== 事件触发 ====================
    function doEvent(server) {
        var spawned = spawnProto(server);

        // 完全没有冒险区 → 不生成:绿色提示,重新开始整个事件(不写完成标记)
        if (spawned <= 0) {
            server.tell(Text.of("§a很好,继续这样下去,不要吵醒祂....."));
            server.persistentData[START_KEY] = overworld(server).getDayTime(); // 重新锚定倒计时起点
            console.log("[第10天事件] 无冒险区,未生成 spore:proto,事件重新开始");
            return;
        }

        server.persistentData[EVENT_KEY] = true;   // 仅成功生成后才持久化完成标记
        storyQueue = STORY.map(function(seg, i) {
            return { text: seg, final: i === STORY.length - 1 };
        });
        queueTimer = 0;   // 立即发送第一段
    }

    // ==================== 主循环 ====================
    ServerEvents.tick(function(event) {
        var server = event.server;

        // 1. 剧情队列优先处理(事件触发后仍需播完)
        if (storyQueue.length > 0) {
            queueTimer--;
            if (queueTimer <= 0) {
                var seg = storyQueue.shift();
                server.tell(Text.of("§c§l" + seg.text));
                if (seg.final) playFinalSound(server);
                if (storyQueue.length > 0) queueTimer = LINE_DELAY;
            }
            return;
        }

        // 2. 已完成 → 不再检测
        if (server.persistentData[EVENT_KEY]) return;

        var ow = overworld(server);
        if (!ow) return;

        // 3. 记录倒计时起点(首次运行时记录当前世界时间)
        if (server.persistentData[START_KEY] === undefined) {
            server.persistentData[START_KEY] = ow.getDayTime();
        }

        // 4. 倒计时归零 → 触发事件
        //    (成功生成才会标记完成;无冒险区时 doEvent 内部已重置起点,重新倒计时)
        var rem = eventRemaining(server);
        if (rem <= 0) {
            doEvent(server);
        }
    });

    // ==================== 倒计时动作栏(每位玩家) ====================
    // 写法同 block_right.js:PlayerEvents.tick + player.setStatusMessage
    // (server.players 是原生 ServerPlayer,对其调 sendStatusMessage 会报错,不能用)
    PlayerEvents.tick(function(event) {
        var player = event.player;
        if (player.isFake()) return;

        var server = player.server;
        if (server.persistentData[EVENT_KEY]) return;   // 已触发(含剧情播放中)

        var ow = overworld(server);
        if (!ow) return;

        var start = server.persistentData[START_KEY];
        if (start == null) return;   // 起点尚未记录

        // 起点 3 分钟后开始,每 60 秒刷新,只显示红色加粗剩余时间(分:秒)
        if (ow.getDayTime() >= start + COUNTDOWN_AFTER
                && server.getTickCount() % COUNTDOWN_INTERVAL === 0) {
            player.setStatusMessage(Text.of("§c§l" + formatRemaining(eventRemaining(server))));
        }
    });

    // ==================== 测试指令: 直接触发 ====================
    global.triggerProtoDay10Event = function(server) {
        if (server.persistentData[EVENT_KEY]) {
            server.tell(Text.of("§c[测试] 事件已触发过"));
            return;
        }
        doEvent(server);   // 成功生成才写完成标记;无冒险区时自动重置重来
    };

    ServerEvents.commandRegistry(function(event) {
        event.register(
            event.commands.literal("protoevent_test")
                .requires(function(src) { return src.hasPermission(2); })
                .executes(function(ctx) {
                    var server = ctx.getSource().getServer();
                    if (global.triggerProtoDay10Event) global.triggerProtoDay10Event(server);
                    return 1;
                })
        );
    });

    ServerEvents.loaded(function(event) {
        if (!event.server.persistentData[EVENT_KEY]) {
            console.log("[第10天事件] 就绪:倒计时于起点后 " + (COUNTDOWN_AFTER / 1200)
                + " 分钟开始,起点后第 " + TRIGGER_DAY + " 天正午触发,"
                + "无冒险区则自动重新开始;测试指令 /protoevent_test");
        }
    });
})();
