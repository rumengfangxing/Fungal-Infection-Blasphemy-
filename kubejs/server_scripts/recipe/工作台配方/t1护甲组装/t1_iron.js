ServerEvents.recipes(event => {
  const { mods } = global.eqHelper
  const TABLE = [
    ['minecraft:iron_helmet', 'head', [['armor', 3], ['tough', 1], ['cold', 1]], null, ['minecraft:iron_helmet', 'fib:t1_equipment_module']],
    ['minecraft:iron_chestplate', 'chest', [['armor', 8], ['tough', 1], ['cold', 1]], null, ['minecraft:iron_chestplate', 'fib:t1_equipment_module']],
    ['minecraft:iron_leggings', 'legs', [['armor', 6], ['tough', 1], ['cold', 1]], null, ['minecraft:iron_leggings', 'fib:t1_equipment_module']],
    ['minecraft:iron_boots', 'feet', [['armor', 3], ['tough', 1], ['cold', 1]], null, ['minecraft:iron_boots', 'fib:t1_equipment_module']],
  ]
  for (const [item, slot, attrs, extra, inputs] of TABLE) {
    event.shapeless(Item.of(item, extra ? mods(slot, attrs, extra) : mods(slot, attrs)), inputs)
  }
})
