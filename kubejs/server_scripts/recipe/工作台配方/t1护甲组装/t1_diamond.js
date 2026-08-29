ServerEvents.recipes(event => {
  const { mods } = global.eqHelper
  const TABLE = [
    ['minecraft:diamond_helmet', 'head', [['armor', 4], ['tough', 3], ['cold', 1], ['head', 0.1]], null, ['minecraft:diamond_helmet', 'fib:t1_equipment_module']],
    ['minecraft:diamond_chestplate', 'chest', [['armor', 9], ['tough', 3], ['cold', 1.25], ['chest', 0.1]], null, ['minecraft:diamond_chestplate', 'fib:t1_equipment_module']],
    ['minecraft:diamond_leggings', 'legs', [['armor', 7], ['tough', 3], ['cold', 1], ['legs', 0.1]], null, ['minecraft:diamond_leggings', 'fib:t1_equipment_module']],
    ['minecraft:diamond_boots', 'feet', [['armor', 4], ['tough', 3], ['cold', 1], ['feet', 0.1]], null, ['minecraft:diamond_boots', 'fib:t1_equipment_module']],
  ]
  for (const [item, slot, attrs, extra, inputs] of TABLE) {
    event.shapeless(Item.of(item, extra ? mods(slot, attrs, extra) : mods(slot, attrs)), inputs)
  }
})
