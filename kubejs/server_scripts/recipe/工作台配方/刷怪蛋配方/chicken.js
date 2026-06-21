ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:chicken_spawn_egg'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            C: Item.of('goety:flame_capture', '{}'),
            B: Item.of('minecraft:chicken', '{}'),
            D: Item.of('enigmaticlegacy:soul_dust', '{}'),
            A: Item.of('minecraft:feather', '{}')
        }
    )
    event.shaped(
        Item.of('minecraft:chicken_spawn_egg'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            C: Item.of('goety:flame_capture', '{}'),
            A: Item.of('minecraft:egg', '{}'),
            B: Item.of('minecraft:chicken', '{}'),
            D: Item.of('enigmaticlegacy:soul_dust', '{}')
        }
    )
});
