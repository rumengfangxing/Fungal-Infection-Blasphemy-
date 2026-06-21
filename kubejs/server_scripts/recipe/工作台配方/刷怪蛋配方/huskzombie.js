ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:husk_spawn_egg'),
        [
            ' A ',
            'ABA',
            ' C '
        ],
        {
            B: Item.of('goety:flame_capture', '{}'),
            A: Item.of('minecraft:rotten_flesh', '{}'),
            C: Item.of('enigmaticlegacy:soul_dust', '{}')
        }
    )
});
