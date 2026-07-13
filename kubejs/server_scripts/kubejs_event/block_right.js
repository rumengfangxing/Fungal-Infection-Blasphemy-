// ===== 右键指定方块 =====
// 持工具类型决定进度条文本与互动参数
// 减速 → 进度条 → 音效 → 概率分支（战利品/破坏/替换/惩罚）
// 攻速影响执行速度；方块中途被破坏则中断

// ===== 工具类型定义（物品ID → 类型） =====
const TOOL_TYPES = {
    saw:        { items: ["spore:reaver"], text: "切割中" },
    clippers:   { items: ["minecraft:shears","createdieselgenerators:wire_cutters"],           text: "修剪中" },
    hammer:     { items: ["#forge:tools/hammers","cuisinedelight:cuisine_skillet","farmersdelight:skillet","goety:philosophers_mace","createdieselgenerators:hammer","enigmaticlegacy:astral_breaker","spore:maul","spore:mace","enigmaticdice:crucible_of_rile"], text: "锤击中" },
    precision:  { items: ["create:wrench","refinedstorage:wrench","create:extendo_grip","sophisticatedstorage:debug_tool","spore:scanner"],                             text: "精修中" }
}

// ===== 方块配置 =====
// tools 为 null/undefined ⇢ 任意工具+空手可用
// tools 包含 "none" ⇢ 任意未匹配工具+空手走 none 配置
// replaceWith 设定后 ⇢ 破坏方块变为替换为指定方块
const BLOCK_CONFIGS = [
////人类残躯    
    {
        blockId: "spore:remains",
        toolType: "none",
        interactDuration: 6,
        speedMultiplier: 0.05,
        maxDistance: 3,
        soundId: "biomancy:flesh_block.break",
        loopSoundId: "create:clipboard_check",
        loopInterval: 10,
        lootTable: "fibloot:interaction/hand/remains",
        cdTicks: 120,
        cdMin: 30,
        atkSpdBase: 4,
        minDelay: 10,
        damageMode: 'bodypart',
        bodypartHpDmg: 1,
        text: "摸索中",    // 默认进度条文本，tool 未指定时使用
        replaceWith: null,  // null=破坏  或直接填入"方块id"以替换
        results: [
            { name: '成功',          weight: 80, breakBlock: true,  giveLoot: true,  effects: [{id:'minecraft:mining_fatigue',duration:10,amplifier:1}], damage: 0, message: '§a✓ 摸索成功！' },
            { name: '惩罚-破坏',     weight: 15, breakBlock: true,  giveLoot: false, effects: [{id:'minecraft:mining_fatigue',duration:10,amplifier:3}], damage: 4, message: '§c你粗暴地破坏了它，里面的东西也跟着损毁了。' },
            { name: '惩罚-不破坏',   weight: 5, breakBlock: false, giveLoot: false, effects: [{id:'minecraft:nausea',duration:10,amplifier:1}], damage: 2, message: '§c你感到有些恶心...' }
        ]
    },
    {
        blockId: "spore:remains",
        toolType: "saw",
        interactDuration: 3,
        speedMultiplier: 0.2,
        maxDistance: 5,
        soundId: "biomancy:flesh_block.break",
        loopSoundId: "create:sanding_short",
        loopInterval: 10,
        lootTable: "fibloot:interaction/saw/remains",
        cdTicks: 40,
        cdMin: 10,
        atkSpdBase: 3,
        minDelay: 5,
        damageMode: 'bodypart',
        bodypartHpDmg: 1,
        text: "切割中",
        replaceWith: null,
        results: [
            { name: '成功',          weight: 90, breakBlock: true,  giveLoot: true,  effects: [],damage: 0, message: '§a✓ 切割成功！' },
            { name: '惩罚-破坏',     weight: 8, breakBlock: true,  giveLoot: false, effects: [], damage: 0, message: '§c你切坏了它，里面的东西也跟着损毁了。' },
            { name: '惩罚-不破坏',   weight: 2, breakBlock: false, giveLoot: false, effects: [{id:'majruszsdifficulty:bleeding',duration:10,amplifier:3}], damage: 10, message: '§c该死的，锯到手了' }
        ]
    },
    {
        blockId: "spore:remains",
        toolType: "hammer",
        interactDuration: 2,
        speedMultiplier: 0.3,
        maxDistance: 5,
        soundId: "biomancy:flesh_block.break",
        loopSoundId: "bettercombat:mace_slam",
        loopInterval: 10,
        lootTable: "fibloot:interaction/hammer/remains",
        cdTicks: 25,
        cdMin: 5,
        atkSpdBase: 1,
        minDelay: 5,
        damageMode: 'bodypart',
        bodypartHpDmg: 1,
        text: "锤击中",
        replaceWith: null,
        results: [
            { name: '成功',          weight: 75, breakBlock: true,  giveLoot: true,  effects: [],damage: 0, message: '§a✓ 一锤砸开！' },
            { name: '惩罚-破坏',     weight: 20, breakBlock: true,  giveLoot: false, effects: [], damage: 0, message: '§c砸得太重，东西全毁了。' },
            { name: '惩罚-不破坏',   weight: 5, breakBlock: false, giveLoot: false, effects: [{id:'mining_fatigue',duration:10,amplifier:2}], damage: 1, message: '§c震得你手发麻...' }
        ]
    },
    {
        blockId: "spore:remains",
        toolType: "clippers",
        interactDuration: 4,
        speedMultiplier: 0.1,
        maxDistance: 4,
        soundId: "biomancy:flesh_block.break",
        loopSoundId: "minecraft:entity.sheep.shear",
        loopInterval: 10,
        lootTable: "fibloot:interaction/clippers/remains",
        cdTicks: 80,
        cdMin: 20,
        atkSpdBase: 4,
        minDelay: 10,
        damageMode: 'bodypart',
        bodypartHpDmg: 1,
        text: "修剪中",
        replaceWith: null,
        results: [
            { name: '成功',          weight: 90, breakBlock: true,  giveLoot: true,  effects: [],damage: 0, message: '§a✓ 修剪成功！' },
            { name: '惩罚-破坏',     weight: 5, breakBlock: true,  giveLoot: false, effects: [], damage: 0, message: '§c剪坏了...。' },
            { name: '惩罚-不破坏',   weight: 5, breakBlock: false, giveLoot: false, effects: [{id:'mining_fatigue',duration:10,amplifier:2}], damage: 6, message: '§c剪到手了,痛！' }
        ]
    },
////墙壁残躯
    {
        blockId: "spore:wall_remains",
        toolType: "none",
        interactDuration: 6,
        speedMultiplier: 0.05,
        maxDistance: 3,
        soundId: "biomancy:flesh_block.break",
        loopSoundId: "create:clipboard_check",
        loopInterval: 10,
        lootTable: "fibloot:interaction/hand/remains",
        cdTicks: 120,
        cdMin: 30,
        atkSpdBase: 4,
        minDelay: 10,
        damageMode: 'bodypart',
        bodypartHpDmg: 1,
        text: "摸索中",    // 默认进度条文本，tool 未指定时使用
        replaceWith: null,  // null=破坏  或直接填入"方块id"以替换
        results: [
            { name: '成功',          weight: 80, breakBlock: true,  giveLoot: true,  effects: [{id:'minecraft:mining_fatigue',duration:10,amplifier:1}], damage: 0, message: '§a✓ 摸索成功！' },
            { name: '惩罚-破坏',     weight: 15, breakBlock: true,  giveLoot: false, effects: [{id:'minecraft:mining_fatigue',duration:10,amplifier:3}], damage: 4, message: '§c你粗暴地破坏了它，里面的东西也跟着损毁了。' },
            { name: '惩罚-不破坏',   weight: 5, breakBlock: false, giveLoot: false, effects: [{id:'minecraft:nausea',duration:10,amplifier:1}], damage: 2, message: '§c你感到有些恶心...' }
        ]
    },
    {
        blockId: "spore:wall_remains",
        toolType: "saw",
        interactDuration: 3,
        speedMultiplier: 0.2,
        maxDistance: 5,
        soundId: "biomancy:flesh_block.break",
        loopSoundId: "create:sanding_short",
        loopInterval: 10,
        lootTable: "fibloot:interaction/saw/remains",
        cdTicks: 40,
        cdMin: 10,
        atkSpdBase: 3,
        minDelay: 5,
        damageMode: 'bodypart',
        bodypartHpDmg: 1,
        text: "切割中",
        replaceWith: null,
        results: [
            { name: '成功',          weight: 90, breakBlock: true,  giveLoot: true,  effects: [],damage: 0, message: '§a✓ 切割成功！' },
            { name: '惩罚-破坏',     weight: 8, breakBlock: true,  giveLoot: false, effects: [], damage: 0, message: '§c你切坏了它，里面的东西也跟着损毁了。' },
            { name: '惩罚-不破坏',   weight: 2, breakBlock: false, giveLoot: false, effects: [{id:'majruszsdifficulty:bleeding',duration:10,amplifier:3}], damage: 10, message: '§c该死的，锯到手了' }
        ]
    },
    {
        blockId: "spore:wall_remains",
        toolType: "hammer",
        interactDuration: 2,
        speedMultiplier: 0.3,
        maxDistance: 5,
        soundId: "biomancy:flesh_block.break",
        loopSoundId: "bettercombat:mace_slam",
        loopInterval: 10,
        lootTable: "fibloot:interaction/hammer/remains",
        cdTicks: 25,
        cdMin: 5,
        atkSpdBase: 1,
        minDelay: 5,
        damageMode: 'bodypart',
        bodypartHpDmg: 1,
        text: "锤击中",
        replaceWith: null,
        results: [
            { name: '成功',          weight: 75, breakBlock: true,  giveLoot: true,  effects: [],damage: 0, message: '§a✓ 一锤砸开！' },
            { name: '惩罚-破坏',     weight: 20, breakBlock: true,  giveLoot: false, effects: [], damage: 0, message: '§c砸得太重，东西全毁了。' },
            { name: '惩罚-不破坏',   weight: 5, breakBlock: false, giveLoot: false, effects: [{id:'mining_fatigue',duration:10,amplifier:2}], damage: 1, message: '§c震得你手发麻...' }
        ]
    },
    {
        blockId: "spore:wall_remains",
        toolType: "clippers",
        interactDuration: 4,
        speedMultiplier: 0.1,
        maxDistance: 4,
        soundId: "biomancy:flesh_block.break",
        loopSoundId: "minecraft:entity.sheep.shear",
        loopInterval: 10,
        lootTable: "fibloot:interaction/clippers/remains",
        cdTicks: 80,
        cdMin: 20,
        atkSpdBase: 4,
        minDelay: 10,
        damageMode: 'bodypart',
        bodypartHpDmg: 1,
        text: "修剪中",
        replaceWith: null,
        results: [
            { name: '成功',          weight: 90, breakBlock: true,  giveLoot: true,  effects: [],damage: 0, message: '§a✓ 修剪成功！' },
            { name: '惩罚-破坏',     weight: 5, breakBlock: true,  giveLoot: false, effects: [], damage: 0, message: '§c剪坏了...。' },
            { name: '惩罚-不破坏',   weight: 5, breakBlock: false, giveLoot: false, effects: [{id:'mining_fatigue',duration:10,amplifier:2}], damage: 6, message: '§c剪到手了,痛！' }
        ]
    },
////冰冻残骸
    {
        blockId: "spore:frozen_remains",
        toolType: "saw",
        interactDuration: 3,
        speedMultiplier: 0.2,
        maxDistance: 5,
        soundId: "minecraft:block.glass.break",
        loopSoundId: "create:sanding_short",
        loopInterval: 10,
        lootTable: "fibloot:interaction/saw/frozen_remains",
        cdTicks: 40,
        cdMin: 10,
        atkSpdBase: 3,
        minDelay: 5,
        damageMode: 'bodypart',
        bodypartHpDmg: 1,
        text: "切割中",
        replaceWith: null,
        results: [
            { name: '成功',          weight: 90, breakBlock: true,  giveLoot: true,  effects: [],damage: 0, message: '§a✓ 切割成功！' },
            { name: '惩罚-破坏',     weight: 8, breakBlock: true,  giveLoot: false, effects: [], damage: 0, message: '§c你切坏了它，里面的东西也跟着损毁了。' },
            { name: '惩罚-不破坏',   weight: 2, breakBlock: false, giveLoot: false, effects: [{id:'majruszsdifficulty:bleeding',duration:10,amplifier:3}], damage: 10, message: '§c该死的，锯到手了' }
        ]
    },
    {
        blockId: "spore:frozen_remains",
        toolType: "hammer",
        interactDuration: 2,
        speedMultiplier: 0.3,
        maxDistance: 5,
        soundId: "torchesbecomesunlight:snownova.ice_crystal",
        loopSoundId: "torchesbecomesunlight:snownova.ice_crystal",
        loopInterval: 10,
        lootTable: "fibloot:interaction/hammer/frozen_remains",
        cdTicks: 25,
        cdMin: 5,
        atkSpdBase: 1,
        minDelay: 5,
        damageMode: 'bodypart',
        bodypartHpDmg: 1,
        text: "锤击中",
        replaceWith: null,
        results: [
            { name: '成功',          weight: 75, breakBlock: true,  giveLoot: true,  effects: [],damage: 0, message: '§a✓ 一锤砸开！' },
            { name: '惩罚-破坏',     weight: 20, breakBlock: true,  giveLoot: false, effects: [], damage: 0, message: '§c砸得太重，东西全毁了。' },
            { name: '惩罚-不破坏',   weight: 5, breakBlock: false, giveLoot: false, effects: [{id:'mining_fatigue',duration:10,amplifier:2}], damage: 1, message: '§c震得你手发麻...' }
        ]
    }
]

// ===== 工具函数 =====
var resolvedCache = {}
var rcSeq = 0

// 检测手持物 → 工具类型ID
function detectTool(player) {
    var held = player.getMainHandItem()
    if (held == null || held.isEmpty()) return 'hand'
    var heldId = held.id
    for (var type in TOOL_TYPES) {
        var list = TOOL_TYPES[type].items
        for (var i = 0; i < list.length; i++) {
            var entry = list[i]
            if (entry.charAt(0) === '#') {
                if (Ingredient.of(entry).test(held)) return type
            } else if (entry === heldId) {
                return type
            }
        }
    }
    return 'none'
}

// 查找方块配置
function getBlockConfig(blockId, toolType) {
    var fallback = null
    for (var i = 0; i < BLOCK_CONFIGS.length; i++) {
        var e = BLOCK_CONFIGS[i]
        if (e.blockId === blockId) {
            if (e.toolType === toolType) return e
            if (e.toolType === 'none') fallback = e
        }
    }
    return fallback
}


function getAttackSpeed(player, base) {
    try { return player.getAttributeTotalValue('minecraft:generic.attack_speed') } catch (e) { return base }
}

function rollResult(results) {
    var weights = []
    for (var i = 0; i < results.length; i++) weights.push(results[i].weight)
    var total = 0
    for (var i = 0; i < weights.length; i++) total += weights[i]
    var roll = Math.random() * total
    var sum = 0
    for (var i = 0; i < results.length; i++) {
        sum += results[i].weight
        if (roll < sum) return results[i]
    }
    return results[results.length - 1]
}

function applyDamage(player, amount, cfg) {
    if (amount <= 0) return
    if (cfg.damageMode == 'player') { player.attack(amount) }
    else if (cfg.damageMode == 'bodypart') {
        try {
            var util = Java.loadClass('sfiomn.legendarysurvivaloverhaul.api.bodydamage.BodyDamageUtil')
            var enumCls = Java.loadClass('sfiomn.legendarysurvivaloverhaul.api.bodydamage.BodyPartEnum')
            var list = new (Java.loadClass('java.util.ArrayList'))()
            list.add(enumCls.valueOf('RIGHT_ARM'))
            list.add(enumCls.valueOf('LEFT_ARM'))
            util.balancedHurtBodyParts(player, list, amount)
        } catch(e) { player.attack(amount) }
        if (cfg.bodypartHpDmg > 0) player.attack(cfg.bodypartHpDmg)
    }
}

function calcDelay(attackSpeed, cfg) {
    var ratio = cfg.atkSpdBase / attackSpeed
    var delay = Math.floor(cfg.interactDuration * 20 * ratio)
    if (delay < cfg.minDelay) delay = cfg.minDelay
    return delay
}

function calcCooldown(attackSpeed, cfg) {
    var ratio = cfg.atkSpdBase / attackSpeed
    var cd = Math.floor(cfg.cdTicks * ratio)
    if (cd < cfg.cdMin) cd = cfg.cdMin
    return cd
}

// 移速控制（独立属性修饰符，不碰基础值，无叠乘）
var $AttributeModifier = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier')
var $AttrOp = Java.loadClass('net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation')
var $Attributes = Java.loadClass('net.minecraft.world.entity.ai.attributes.Attributes')
var $UUID = Java.loadClass('java.util.UUID')

var slowModUUID = '7a8b3c4d-5e6f-7890-abcd-ef1234567890'

function applySlow(player, cfg) {
    try {
        var attr = player.self().getAttribute($Attributes.MOVEMENT_SPEED)
        attr.removeModifier($UUID.fromString(slowModUUID))
        var modifier = new $AttributeModifier(
            $UUID.fromString(slowModUUID),
            'block_interact_slow',
            cfg.speedMultiplier - 1.0,
            $AttrOp.MULTIPLY_TOTAL
        )
        attr.addTransientModifier(modifier)
    } catch(e) {
        console.log('[BlockInteract] 减速出错: ' + e)
    }
}

function restoreSlow(player) {
    try {
        var attr = player.self().getAttribute($Attributes.MOVEMENT_SPEED)
        attr.removeModifier($UUID.fromString(slowModUUID))
    } catch(e) {}
}

function buildProgressBar(progress, text) {
    var filled = Math.floor(progress * 10)
    if (filled > 10) filled = 10
    if (filled < 0) filled = 0
    var pct = Math.floor(progress * 100)
    if (pct > 100) pct = 100
    var bar = text + ': §c'
    for (var i = 0; i < filled; i++) bar += '▮'
    bar += '§v'
    for (var i = filled; i < 10; i++) bar += '▮'
    bar += ' §r' + pct + '%'
    return bar
}

function playSoundAt(level, pos, id) {
    if (id == null || id.length == 0) return
    level.runCommandSilent('playsound ' + id + ' master @p ' + pos.x + ' ' + pos.y + ' ' + pos.z + ' 1 1')
}

// 内存缓存
var cdCache = {}
var delayCache = {}

// ===== 右键触发 =====
BlockEvents.rightClicked(function(event) {
    var player = event.player
    var hand = event.hand
    var level = event.level
    var block = event.block

    if (player.isFake()) return
    if (level.isClientSide()) return

    var toolType = detectTool(player)
    var rc = getBlockConfig(block.id, toolType)
    if (rc == null) return

    var uuid = String(player.uuid) + '_' + String(player.level.dimension)
    var atkSpd = getAttackSpeed(player, rc.atkSpdBase)

    // 冷却
    var cdTicks = calcCooldown(atkSpd, rc)
    var lastAge = cdCache[uuid] || 0
    var diff = player.age - lastAge
    if (diff >= 0 && diff < cdTicks) return
    cdCache[uuid] = player.age

    if (hand == 'main_hand') player.swing()

    applySlow(player, rc)
    var p = block.pos
    playSoundAt(level, p, rc.soundId)

    var delayTicks = calcDelay(atkSpd, rc)
    player.sendData('kubejs:block_interact', { duration: delayTicks * 50 + 1000, x: p.x, y: p.y, z: p.z })

    // 缓存解析后的配置
    var rcKey = 'rc_' + (rcSeq++)
    resolvedCache[rcKey] = rc

    var dk = uuid + '_d'
    delayCache[dk + '_rcKey'] = rcKey
    delayCache[dk + '_start'] = player.age
    delayCache[dk + '_exec'] = player.age + delayTicks
    delayCache[dk + '_x'] = p.x
    delayCache[dk + '_y'] = p.y
    delayCache[dk + '_z'] = p.z
    delayCache[dk + '_dim'] = String(level.dimension)
    delayCache[dk + '_loopTick'] = player.age

    player.setStatusMessage(Text.of(buildProgressBar(0, rc.text)))
})

// ===== 进度更新 + 循环音效 + 延迟执行 =====
PlayerEvents.tick(function(event) {
    var player = event.player
    if (player.isFake()) return

    var uuid = String(player.uuid) + '_' + String(player.level.dimension)
    var dk = uuid + '_d'
    var rcKey = delayCache[dk + '_rcKey']
    if (rcKey == undefined) return

    // 死亡取消
    if (delayCache[dk + '_exec'] != undefined && player.self().getHealth() <= 0) {
        delayCache[dk + '_exec'] = undefined
        delete delayCache[dk + '_rcKey']
        delete resolvedCache[rcKey]
        return
    }

    var execTick = delayCache[dk + '_exec']
    if (execTick == undefined) return

    var cfg = resolvedCache[rcKey]
    if (cfg == null) return

    var startAge = delayCache[dk + '_start']
    var x = delayCache[dk + '_x']
    var y = delayCache[dk + '_y']
    var z = delayCache[dk + '_z']
    var dim = delayCache[dk + '_dim']

    if (player.age < execTick && startAge != undefined) {
        var blockLevel = player.server.getLevel(dim)
        if (blockLevel == null || blockLevel.getBlock(x, y, z).id !== cfg.blockId) {
            delayCache[dk + '_exec'] = undefined
            resolvedCache[rcKey] = undefined
            restoreSlow(player)
            player.setStatusMessage(Text.of('§c✗ 对象已变动，摸索中断'))
            return
        }

        var dx = player.x - (x + 0.5)
        var dy = player.y - (y + 0.5)
        var dz = player.z - (z + 0.5)
        var dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist > cfg.maxDistance) {
            delayCache[dk + '_exec'] = undefined
            resolvedCache[rcKey] = undefined
            restoreSlow(player)
            player.setStatusMessage(Text.of('§c✗ 距离过远，手长莫及'))
            return
        }

        if (cfg.loopSoundId.length > 0) {
            var lastLoop = delayCache[dk + '_loopTick']
            if (player.age - lastLoop >= cfg.loopInterval) {
                delayCache[dk + '_loopTick'] = player.age
                playSoundAt(blockLevel, {x: x, y: y, z: z}, cfg.loopSoundId)
            }
        }

        if (player.age % 2 == 0) {
            var total = execTick - startAge
            var elapsed = player.age - startAge
            var p = elapsed / total
            player.setStatusMessage(Text.of(buildProgressBar(p, cfg.text)))
        }
        return
    }

    // ---- 到期执行 ----
    delayCache[dk + '_exec'] = undefined
    var rcKeyTmp = delayCache[dk + '_rcKey']
    delayCache[dk + '_rcKey'] = undefined
    resolvedCache[rcKeyTmp] = undefined

    restoreSlow(player)
    var level = player.server.getLevel(dim)
    if (level == null) return

    var result = rollResult(cfg.results)
    if (result.message) player.setStatusMessage(Text.of(result.message))
    if (result.effects) {
        for (var i = 0; i < result.effects.length; i++) {
            var e = result.effects[i]
            player.potionEffects.add(e.id, e.duration * 20, e.amplifier, false, false)
        }
    }
    if (result.damage > 0) applyDamage(player, result.damage, cfg)
    if (result.giveLoot) level.runCommandSilent('loot spawn ' + x + ' ' + y + ' ' + z + ' loot ' + cfg.lootTable)
    if (result.breakBlock) {
        if (cfg.replaceWith && cfg.replaceWith.length > 0) {
            level.getBlock(x, y, z).set(cfg.replaceWith)
        } else {
            level.destroyBlock([x, y, z], false)
        }
    }
})
