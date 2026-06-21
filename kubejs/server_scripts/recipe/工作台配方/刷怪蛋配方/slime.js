ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:slime_spawn_egg'),
        [
            ' A ',
            'ABA',
            ' C '
        ],
        {
            B: Item.of('goety:flame_capture', '{}'),
            C: Item.of('enigmaticlegacy:soul_dust', '{}'),
            A: Item.of('minecraft:slime_ball', '{}')
        }
    )
});
