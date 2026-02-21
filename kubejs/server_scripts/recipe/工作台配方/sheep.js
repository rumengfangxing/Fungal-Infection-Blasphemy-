ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:sheep_spawn_egg'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            B: Item.of('minecraft:mutton', '{}'),
            C: Item.of('goety:flame_capture', '{}'),
            D: Item.of('enigmaticlegacy:soul_dust', '{}'),
            A: Item.of('minecraft:white_wool', '{}')
        }
    )
});
