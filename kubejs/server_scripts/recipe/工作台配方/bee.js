ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:bee_spawn_egg'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            C: Item.of('goety:flame_capture', '{}'),
            B: Item.of('minecraft:honeycomb', '{}'),
            D: Item.of('enigmaticlegacy:soul_dust', '{}'),
            A: Item.of('minecraft:honey_bottle', '{}')
        }
    )
});
