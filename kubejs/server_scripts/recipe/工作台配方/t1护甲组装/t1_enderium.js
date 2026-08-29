ServerEvents.recipes(event => {
  const { mods } = global.eqHelper
  const TABLE = [
    ['majruszsdifficulty:enderium_helmet', 'head', [['armor', 5], ['tough', 4], ['kb', 0.1], ['cold', 1], ['head', 0.1]], null, ['majruszsdifficulty:enderium_helmet', 'fib:t1_equipment_module']],
    ['majruszsdifficulty:enderium_chestplate', 'chest', [['armor', 10], ['tough', 4], ['kb', 0.1], ['cold', 1.25], ['chest', 0.1]], null, ['majruszsdifficulty:enderium_chestplate', 'fib:t1_equipment_module']],
    ['majruszsdifficulty:enderium_leggings', 'legs', [['armor', 8], ['tough', 4], ['kb', 0.1], ['cold', 1], ['legs', 0.1]], null, ['majruszsdifficulty:enderium_leggings', 'fib:t1_equipment_module']],
    ['majruszsdifficulty:enderium_boots', 'feet', [['armor', 4], ['tough', 4], ['kb', 0.1], ['cold', 1], ['feet', 0.1]], null, ['majruszsdifficulty:enderium_boots', 'fib:t1_equipment_module']],
  ]
  for (const [item, slot, attrs, extra, inputs] of TABLE) {
    event.shapeless(Item.of(item, extra ? mods(slot, attrs, extra) : mods(slot, attrs)), inputs)
  }
})
