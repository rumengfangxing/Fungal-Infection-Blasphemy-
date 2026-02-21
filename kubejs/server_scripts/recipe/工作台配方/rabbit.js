ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:rabbit_spawn_egg'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            C: Item.of('goety:flame_capture', '{}'),
            A: Item.of('minecraft:rabbit_hide', '{}'),
            D: Item.of('enigmaticlegacy:soul_dust', '{}'),
            B: Item.of('minecraft:rabbit', '{}')
        }
    )
});
