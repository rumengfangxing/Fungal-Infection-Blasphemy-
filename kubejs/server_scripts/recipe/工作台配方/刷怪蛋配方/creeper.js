ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:creeper_spawn_egg'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            C: Item.of('goety:flame_capture', '{}'),
            B: Item.of('minecraft:gunpowder', '{}'),
            A: Item.of('minecraft:tnt', '{}'),
            D: Item.of('enigmaticlegacy:soul_dust', '{}')
        }
    )
});
