// 装备属性 NBT 生成助手
// 用法: const { mods } = global.eqHelper
//   mods(slot, list[, extraNbt]) → '{AttributeModifiers:[{Amount:6d,...},...]}' 字符串
//   list = [['armor', 6], ['cold', 1, 2], ...]  (二元组 op 默认 0, 三元组显式 op)
// UUID: 1.20.1 读取物品 AttributeModifiers 时 UUID 缺失会被跳过, 故每个条目生成随机 UUID(配方注册时固定)
global.eqHelper = {
  // 缩写 → 属性全名
  ATTR: {
    armor: 'minecraft:generic.armor',
    tough: 'minecraft:generic.armor_toughness',
    kb: 'minecraft:generic.knockback_resistance',
    maxhp: 'minecraft:generic.max_health',
    atk: 'minecraft:generic.attack_damage',
    move: 'minecraft:generic.movement_speed',
    fly: 'minecraft:generic.flying_speed',
    step: 'forge:step_height_addition',
    grav: 'forge:entity_gravity',
    swim: 'forge:swim_speed',
    cold: 'legendarysurvivaloverhaul:cold_resistance',
    heat: 'legendarysurvivaloverhaul:heat_resistance',
    thermal: 'legendarysurvivaloverhaul:thermal_resistance',
    head: 'legendarysurvivaloverhaul:head_resistance',
    chest: 'legendarysurvivaloverhaul:chest_resistance',
    legs: 'legendarysurvivaloverhaul:legs_resistance',
    feet: 'legendarysurvivaloverhaul:feet_resistance',
    heatTemp: 'legendarysurvivaloverhaul:heating_temperature',
    surHeat: 'legendarysuruality:heat_resistance',
    spellPow: 'goety_revelation:spell_power',
    spellMul: 'goety_revelation:spell_power_multiplier',
    castDur: 'goety_revelation:cast_duration',
    spellCd: 'goety_revelation:spell_cooldown',
    soulDec: 'goety_revelation:soul_decrease_reduction',
    soulInc: 'goety_revelation:soul_increase_efficiency',
    soulSteal: 'goety_revelation:soul_stealing',
    resistance: 'goety_revelation:resistance',
    stealth: 'betterstealth:stealth',
    multiJump: 'ending_library:multi_jump',
    taaBullet: 'taa:bullet_gundamage',
    taaHead: 'taa:headshot_multiplier',
    taaInacc: 'taa:inaccuracy',
    taaMove: 'taa:move_speed',
    taaRecoil: 'taa:recoil',
    taaReload: 'taa:reload_time',
    taaWeight: 'taa:weight',
  },
  mods(slot, list, extraNbt) {
    const ATTR = global.eqHelper.ATTR
    const rand = () => Math.floor(Math.random() * 4294967296) - 2147483648
    const parts = list.map(e => {
      const op = e.length > 2 ? e[2] : 0
      return `{Amount:${e[1]}d,AttributeName:"${ATTR[e[0]]}",Operation:${op},Slot:"${slot}",UUID:[I;${rand()},${rand()},${rand()},${rand()}]}`
    })
    let s = `{AttributeModifiers:[${parts.join(',')}]`
    if (extraNbt) s += ',' + extraNbt
    return s + '}'
  },
}
