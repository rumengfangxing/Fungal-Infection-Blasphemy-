ServerEvents.recipes(event => {

    event.shaped(
        Item.of('fib:life_active_syringe', '{Damage:0}'),
        [
            'ABC',
            'BDB',
            'EBF'
        ],
        {
            A: Item.of('enigmaticaddons:ichoroot', '{}'),
            B: Item.of('fib:fib_logo', '{}'),
            F: Item.of('minecraft:potion', '{Potion:"minecraft:strong_healing"}').strongNBT(),
            C: Item.of('enigmaticlegacy:evil_essence', '{}'),
            D: Item.of('spore:syringe', '{}'),
            E: Item.of('minecraft:potion', '{Potion:"minecraft:strong_regeneration"}').strongNBT()
        }
    )
});
