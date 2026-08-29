ServerEvents.recipes(event => {
  const { mods } = global.eqHelper
  const TABLE = [
    ['majruszsdifficulty:tattered_helmet', 'head', [['armor', 2], ['tough', 1], ['cold', 1]], null, ['majruszsdifficulty:tattered_helmet', 'fib:t1_equipment_module']],
    ['majruszsdifficulty:tattered_leggings', 'legs', [['armor', 3], ['tough', 1], ['cold', 1]], null, ['majruszsdifficulty:tattered_leggings', 'fib:t1_equipment_module']],
    ['majruszsdifficulty:tattered_chestplate', 'chest', [['armor', 4], ['tough', 1], ['cold', 1.25]], null, ['majruszsdifficulty:tattered_chestplate', 'fib:t1_equipment_module']],
    ['majruszsdifficulty:tattered_boots', 'feet', [['armor', 2], ['tough', 1], ['cold', 1]], null, ['majruszsdifficulty:tattered_boots', 'fib:t1_equipment_module']],
  ]
  for (const [item, slot, attrs, extra, inputs] of TABLE) {
    event.shapeless(Item.of(item, extra ? mods(slot, attrs, extra) : mods(slot, attrs)), inputs)
  }
})
