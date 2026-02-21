ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:pig_spawn_egg'),
        [
            ' A ',
            'ABA',
            ' C '
        ],
        {
            B: Item.of('goety:flame_capture', '{}'),
            A: Item.of('minecraft:porkchop', '{}'),
            C: Item.of('enigmaticlegacy:soul_dust', '{}')
        }
    )
});
