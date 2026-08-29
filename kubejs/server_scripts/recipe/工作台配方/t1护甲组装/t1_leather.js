ServerEvents.recipes(event => {
  const { mods } = global.eqHelper
  const TABLE = [
    ['minecraft:leather_helmet', 'head', [['armor', 2], ['cold', 1], ['tough', 1]], null, ['minecraft:leather_helmet', 'fib:t1_equipment_module']],
    ['minecraft:leather_leggings', 'legs', [['armor', 3], ['cold', 1], ['tough', 1]], null, ['minecraft:leather_leggings', 'fib:t1_equipment_module']],
    ['minecraft:leather_chestplate', 'chest', [['armor', 4], ['cold', 1.25], ['tough', 1]], null, ['minecraft:leather_chestplate', 'fib:t1_equipment_module']],
    ['minecraft:leather_boots', 'feet', [['armor', 2], ['cold', 1], ['tough', 1]], null, ['minecraft:leather_boots', 'fib:t1_equipment_module']],
  ]
  for (const [item, slot, attrs, extra, inputs] of TABLE) {
    event.shapeless(Item.of(item, extra ? mods(slot, attrs, extra) : mods(slot, attrs)), inputs)
  }
})
