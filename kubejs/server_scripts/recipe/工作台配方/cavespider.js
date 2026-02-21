ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:cave_spider_spawn_egg'),
        [
            ' A ',
            'BCD',
            ' E '
        ],
        {
            C: Item.of('goety:flame_capture', '{}'),
            D: Item.of('goety:spider_egg', '{}'),
            E: Item.of('enigmaticlegacy:soul_dust', '{}'),
            B: Item.of('minecraft:spider_eye', '{}'),
            A: Item.of('minecraft:string', '{}')
        }
    )
});
