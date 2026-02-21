ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:cat_spawn_egg'),
        [
            ' A ',
            'BCD',
            ' E '
        ],
        {
            A: Item.of('minecraft:cod', '{}'),
            C: Item.of('goety:flame_capture', '{}'),
            E: Item.of('enigmaticlegacy:soul_dust', '{}'),
            B: Item.of('minecraft:salmon', '{}'),
            D: Item.of('minecraft:tropical_fish', '{}')
        }
    )
});
