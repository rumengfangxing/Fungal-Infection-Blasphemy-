ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:phantom_spawn_egg'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            B: Item.of('minecraft:phantom_membrane', '{}'),
            C: Item.of('goety:flame_capture', '{}'),
            A: Item.of('goety:ectoplasm', '{}'),
            D: Item.of('enigmaticlegacy:soul_dust', '{}')
        }
    )
});
