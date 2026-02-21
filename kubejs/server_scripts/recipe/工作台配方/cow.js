ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:cow_spawn_egg'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            C: Item.of('goety:flame_capture', '{}'),
            A: Item.of('minecraft:leather', '{}'),
            D: Item.of('enigmaticlegacy:soul_dust', '{}'),
            B: Item.of('minecraft:beef', '{}')
        }
    )
});
