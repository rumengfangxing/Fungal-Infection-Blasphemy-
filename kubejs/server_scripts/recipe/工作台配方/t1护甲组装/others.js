ServerEvents.recipes(event => {
  const { mods } = global.eqHelper
  const TABLE = [
    //t1蜘蛛
    ['goety_revelation:spider_helmet', 'head', [['armor', 4], ['tough', 4], ['kb', 0.2], ['cold', 1], ['head', 0.1]], null, ['goety_revelation:spider_helmet', 'fib:t1_equipment_module']],
    ['goety_revelation:spider_chestplate', 'chest', [['armor', 10], ['tough', 4], ['kb', 0.2], ['cold', 1.25], ['chest', 0.1]], null, ['goety_revelation:spider_chestplate', 'fib:t1_equipment_module']],
    ['goety_revelation:spider_leggings', 'legs', [['armor', 8], ['tough', 4], ['kb', 0.2], ['cold', 1], ['legs', 0.1]], null, ['goety_revelation:spider_leggings', 'fib:t1_equipment_module']],
    ['goety_revelation:spider_boots', 'feet', [['armor', 4], ['tough', 4], ['kb', 0.2], ['cold', 1], ['feet', 0.1]], null, ['goety_revelation:spider_boots', 'fib:t1_equipment_module']],
    //t1幽魂
    ['goety_revelation:spectre_helmet', 'head', [['armor', 4], ['tough', 4], ['kb', 0.2], ['cold', 1], ['head', 0.1]], null, ['goety_revelation:spectre_helmet', 'fib:t1_equipment_module']],
    ['goety_revelation:spectre_chestplate', 'chest', [['armor', 10], ['tough', 4], ['kb', 0.2], ['cold', 1.25], ['chest', 0.1]], null, ['goety_revelation:spectre_chestplate', 'fib:t1_equipment_module']],
    ['goety_revelation:spectre_leggings', 'legs', [['armor', 8], ['tough', 4], ['kb', 0.2], ['cold', 1], ['legs', 0.1]], null, ['goety_revelation:spectre_leggings', 'fib:t1_equipment_module']],
    ['goety_revelation:spectre_boots', 'feet', [['armor', 4], ['tough', 4], ['kb', 0.2], ['cold', 1], ['feet', 0.1]], null, ['goety_revelation:spectre_boots', 'fib:t1_equipment_module']],
    //t1黑铁
    ['goety:black_iron_helmet', 'head', [['armor', 3], ['tough', 3], ['kb', 0.1], ['cold', 1], ['head', 0.1]], null, ['goety:black_iron_helmet', 'fib:t1_equipment_module']],
    ['goety:black_iron_chestplate', 'chest', [['armor', 8], ['tough', 3], ['kb', 0.1], ['cold', 1.25], ['chest', 0.1]], null, ['goety:black_iron_chestplate', 'fib:t1_equipment_module']],
    ['goety:black_iron_leggings', 'legs', [['armor', 7], ['tough', 3], ['kb', 0.1], ['cold', 1], ['legs', 0.1]], null, ['goety:black_iron_leggings', 'fib:t1_equipment_module']],
    ['goety:black_iron_boots', 'feet', [['armor', 3], ['tough', 3], ['kb', 0.1], ['cold', 1], ['feet', 0.1]], null, ['goety:black_iron_boots', 'fib:t1_equipment_module']],
    //t1雪地套
    ['legendarysurvivaloverhaul:snow_helmet', 'head', [['armor', 2], ['tough', 1], ['cold', 2], ['heat', 2], ['head', 0.1]], null, ['legendarysurvivaloverhaul:snow_helmet', 'fib:t1_equipment_module']],
    ['legendarysurvivaloverhaul:snow_chestplate', 'chest', [['armor', 3], ['tough', 1], ['cold', 2], ['heat', 2], ['chest', 0.1]], null, ['legendarysurvivaloverhaul:snow_chestplate', 'fib:t1_equipment_module']],
    ['legendarysurvivaloverhaul:snow_leggings', 'legs', [['armor', 2], ['tough', 1], ['cold', 2], ['heat', 2], ['legs', 0.1]], null, ['legendarysurvivaloverhaul:snow_leggings', 'fib:t1_equipment_module']],
    ['legendarysurvivaloverhaul:snow_boots', 'feet', [['armor', 2], ['tough', 1], ['cold', 2], ['heat', 2], ['feet', 0.1]], null, ['legendarysurvivaloverhaul:snow_boots', 'fib:t1_equipment_module']],
    //t1沙漠套
    ['legendarysurvivaloverhaul:desert_helmet', 'head', [['armor', 2], ['tough', 1], ['cold', 1], ['head', 0.1]], null, ['legendarysurvivaloverhaul:desert_helmet', 'fib:t1_equipment_module']],
    ['legendarysurvivaloverhaul:desert_chestplate', 'chest', [['armor', 3], ['tough', 1], ['cold', 1], ['chest', 0.1]], null, ['legendarysurvivaloverhaul:desert_chestplate', 'fib:t1_equipment_module']],
    ['legendarysurvivaloverhaul:desert_leggings', 'legs', [['armor', 2], ['tough', 1], ['cold', 1], ['legs', 0.1]], null, ['legendarysurvivaloverhaul:desert_leggings', 'fib:t1_equipment_module']],
    ['legendarysurvivaloverhaul:desert_boots', 'feet', [['armor', 2], ['tough', 1], ['cold', 1], ['feet', 0.1]], null, ['legendarysurvivaloverhaul:desert_boots', 'fib:t1_equipment_module']],
    //t1铜潜水套
    ['create:copper_diving_helmet', 'head', [['armor', 3], ['tough', 1], ['kb', 0.1], ['cold', 2], ['head', 0.1]], null, ['create:copper_diving_helmet', 'fib:t1_equipment_module']],
    ['create:copper_backtank', 'chest', [['armor', 5], ['tough', 1], ['kb', 0.1], ['cold', 2], ['chest', 0.1]], null, ['create:copper_backtank', 'fib:t1_equipment_module']],
    ['create:copper_diving_boots', 'feet', [['armor', 2], ['tough', 1], ['kb', 0.1], ['cold', 2], ['feet', 0.1]], null, ['create:copper_diving_boots', 'fib:t1_equipment_module']],
    //t1下界合金潜水套
    ['create:netherite_diving_helmet', 'head', [['armor', 4], ['tough', 4], ['kb', 0.2], ['cold', 2], ['head', 0.1]], null, ['create:netherite_diving_helmet', 'fib:t1_equipment_module']],
    ['create:netherite_backtank', 'chest', [['armor', 10], ['tough', 4], ['kb', 0.2], ['cold', 2], ['chest', 0.1]], null, ['create:netherite_backtank', 'fib:t1_equipment_module']],
    ['create:netherite_diving_boots', 'feet', [['armor', 4], ['tough', 4], ['kb', 0.2], ['cold', 2], ['feet', 0.1]], null, ['create:netherite_diving_boots', 'fib:t1_equipment_module']],
    //t1辣金
    ['ltc2:hotaurum_helmet', 'head', [['armor', 5], ['tough', 6], ['kb', 0.35], ['cold', 1], ['heat', 1], ['head', 0.25]], null, ['ltc2:hotaurum_helmet', 'fib:t1_equipment_module']],
    ['ltc2:hotaurum_chestplate', 'chest', [['armor', 12], ['tough', 6], ['kb', 0.35], ['cold', 1.25], ['heat', 1], ['chest', 0.25]], null, ['ltc2:hotaurum_chestplate', 'fib:t1_equipment_module']],
    ['ltc2:hotaurum_leggings', 'legs', [['armor', 10], ['tough', 6], ['kb', 0.35], ['cold', 1], ['heat', 1], ['legs', 0.25]], null, ['ltc2:hotaurum_leggings', 'fib:t1_equipment_module']],
    ['ltc2:hotaurum_boots', 'feet', [['armor', 5], ['tough', 6], ['kb', 0.35], ['cold', 1], ['heat', 1], ['feet', 0.25]], null, ['ltc2:hotaurum_boots', 'fib:t1_equipment_module']],
    //t1神经蚀刻套
    ['goety_revelation:spider_darkmage_helmet', 'head', [['armor', 4], ['tough', 4], ['kb', 0.2], ['cold', 1], ['head', 0.1], ['castDur', 0.1, 2], ['spellCd', 0.1, 2], ['spellPow', 0.35], ['spellMul', 0.15]], null, ['goety_revelation:spider_darkmage_helmet', 'fib:t1_equipment_module']],
    ['goety_revelation:spider_darkmage_chestplate', 'chest', [['armor', 10], ['tough', 4], ['kb', 0.2], ['cold', 1], ['chest', 0.1], ['castDur', 0.1, 2], ['spellCd', 0.1, 2], ['spellPow', 0.35], ['spellMul', 0.15]], null, ['goety_revelation:spider_darkmage_chestplate', 'fib:t1_equipment_module']],
    ['goety_revelation:spider_darkmage_leggings', 'legs', [['armor', 8], ['tough', 4], ['kb', 0.2], ['cold', 1], ['legs', 0.1], ['castDur', 0.1, 2], ['spellCd', 0.1, 2], ['spellPow', 0.35], ['spellMul', 0.15]], null, ['goety_revelation:spider_darkmage_leggings', 'fib:t1_equipment_module']],
    ['goety_revelation:spider_darkmage_boots', 'feet', [['armor', 4], ['tough', 4], ['kb', 0.2], ['cold', 1], ['feet', 0.1], ['castDur', 0.1, 2], ['spellCd', 0.1, 2], ['spellPow', 0.35], ['spellMul', 0.15], ['step', 1]], null, ['goety_revelation:spider_darkmage_boots', 'fib:t1_equipment_module']],
    //t1渊魄黑魔法师套
    ['goety_revelation:spectre_darkmage_helmet', 'head', [['armor', 4], ['tough', 4], ['kb', 0.2], ['cold', 1], ['head', 0.1], ['castDur', 0.1, 2], ['spellCd', 0.1, 2], ['spellPow', 0.35], ['spellMul', 0.15]], null, ['goety_revelation:spectre_darkmage_helmet', 'fib:t1_equipment_module']],
    ['goety_revelation:spectre_darkmage_chestplate', 'chest', [['armor', 10], ['tough', 4], ['kb', 0.2], ['cold', 1], ['chest', 0.1], ['castDur', 0.1, 2], ['spellCd', 0.1, 2], ['spellPow', 0.35], ['spellMul', 0.15]], null, ['goety_revelation:spectre_darkmage_chestplate', 'fib:t1_equipment_module']],
    ['goety_revelation:spectre_darkmage_leggings', 'legs', [['armor', 8], ['tough', 4], ['kb', 0.2], ['cold', 1], ['legs', 0.1], ['castDur', 0.1, 2], ['spellCd', 0.1, 2], ['spellPow', 0.35], ['spellMul', 0.15]], null, ['goety_revelation:spectre_darkmage_leggings', 'fib:t1_equipment_module']],
    ['goety_revelation:spectre_darkmage_boots', 'feet', [['armor', 4], ['tough', 4], ['kb', 0.2], ['cold', 1], ['feet', 0.1], ['castDur', 0.1, 2], ['spellCd', 0.1, 2], ['spellPow', 0.35], ['spellMul', 0.15]], null, ['goety_revelation:spectre_darkmage_boots', 'fib:t1_equipment_module']],
    //t1以太套
    ['enigmaticlegacy:etherium_helmet', 'head', [['armor', 6], ['tough', 6], ['kb', 0.5], ['cold', 1], ['head', 0.3]], null, ['enigmaticlegacy:etherium_helmet', 'fib:t1_equipment_module']],
    ['enigmaticlegacy:etherium_chestplate', 'chest', [['armor', 10], ['tough', 6], ['kb', 0.5], ['cold', 1], ['chest', 0.3]], null, ['enigmaticlegacy:etherium_chestplate', 'fib:t1_equipment_module']],
    ['enigmaticlegacy:etherium_leggings', 'legs', [['armor', 10], ['tough', 6], ['kb', 0.5], ['cold', 1], ['legs', 0.3]], null, ['enigmaticlegacy:etherium_leggings', 'fib:t1_equipment_module']],
    ['enigmaticlegacy:etherium_boots', 'feet', [['armor', 6], ['tough', 6], ['kb', 0.5], ['cold', 1], ['feet', 0.3]], null, ['enigmaticlegacy:etherium_boots', 'fib:t1_equipment_module']],
    //t1纸板套
    ['create:cardboard_helmet', 'head', [['armor', 2], ['tough', 1], ['heatTemp', 1], ['head', 0.05]], null, ['create:cardboard_helmet', 'fib:t1_equipment_module']],
    ['create:cardboard_chestplate', 'chest', [['armor', 2], ['tough', 1], ['heatTemp', 1], ['chest', 0.05]], null, ['create:cardboard_chestplate', 'fib:t1_equipment_module']],
    ['create:cardboard_leggings', 'legs', [['armor', 2], ['tough', 1], ['heatTemp', 1], ['legs', 0.05]], null, ['create:cardboard_leggings', 'fib:t1_equipment_module']],
    ['create:cardboard_boots', 'feet', [['armor', 2], ['tough', 1], ['heatTemp', 1], ['feet', 0.05]], null, ['create:cardboard_boots', 'fib:t1_equipment_module']],
    //t1纸板套
    ['create:cardboard_helmet', 'head', [['armor', 2], ['tough', 1], ['heatTemp', 1], ['head', 0.05]], null, ['create:cardboard_helmet', 'fib:t1_equipment_module']],
    ['create:cardboard_chestplate', 'chest', [['armor', 2], ['tough', 1], ['heatTemp', 1], ['chest', 0.05]], null, ['create:cardboard_chestplate', 'fib:t1_equipment_module']],
    ['create:cardboard_leggings', 'legs', [['armor', 2], ['tough', 1], ['heatTemp', 1], ['legs', 0.05]], null, ['create:cardboard_leggings', 'fib:t1_equipment_module']],
    ['create:cardboard_boots', 'feet', [['armor', 2], ['tough', 1], ['heatTemp', 1], ['feet', 0.05]], null, ['create:cardboard_boots', 'fib:t1_equipment_module']],
    //t1神灵金套
    ['goety_revelation:apocalyptium_helmet', 'head', [['armor', 8], ['tough', 6], ['kb', 0.4], ['thermal', 1], ['head', 0.25], ['soulDec', 0.08, 2], ['soulInc', 0.08, 2]], null, ['goety_revelation:apocalyptium_helmet', 'fib:t1_equipment_module']],
    ['goety_revelation:apocalyptium_chestplate', 'chest', [['armor', 13], ['tough', 6], ['kb', 0.4], ['thermal', 1], ['chest', 0.25], ['soulDec', 0.08, 2], ['soulInc', 0.08, 2]], null, ['goety_revelation:apocalyptium_chestplate', 'fib:t1_equipment_module']],
    ['goety_revelation:apocalyptium_leggings', 'legs', [['armor', 12], ['tough', 6], ['kb', 0.4], ['thermal', 1], ['legs', 0.25], ['soulDec', 0.08, 2], ['soulInc', 0.08, 2]], null, ['goety_revelation:apocalyptium_leggings', 'fib:t1_equipment_module']],
    ['goety_revelation:apocalyptium_boots', 'feet', [['armor', 8], ['tough', 6], ['kb', 0.4], ['thermal', 1], ['feet', 0.25], ['soulDec', 0.08, 2], ['soulInc', 0.08, 2]], null, ['goety_revelation:apocalyptium_boots', 'fib:t1_equipment_module']],
    //t1黑暗套
    ['goety:dark_helmet', 'head', [['armor', 4], ['tough', 4], ['kb', 0.4], ['cold', 1], ['head', 0.15]], null, ['goety:dark_helmet', 'fib:t1_equipment_module']],
    ['goety:dark_chestplate', 'chest', [['armor', 10], ['tough', 4], ['kb', 0.4], ['cold', 1.25], ['chest', 0.15]], null, ['goety:dark_chestplate', 'fib:t1_equipment_module']],
    ['goety:dark_leggings', 'legs', [['armor', 8], ['tough', 4], ['kb', 0.4], ['cold', 1], ['legs', 0.15]], null, ['goety:dark_leggings', 'fib:t1_equipment_module']],
    ['goety:dark_boots', 'feet', [['armor', 4], ['tough', 4], ['kb', 0.4], ['cold', 1], ['feet', 0.15]], null, ['goety:dark_boots', 'fib:t1_equipment_module']],
  ]
  for (const [item, slot, attrs, extra, inputs] of TABLE) {
    event.shapeless(Item.of(item, extra ? mods(slot, attrs, extra) : mods(slot, attrs)), inputs)
  }
})
