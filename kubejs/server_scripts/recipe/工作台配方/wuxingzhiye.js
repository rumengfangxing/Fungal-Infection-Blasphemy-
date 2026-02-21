ServerEvents.recipes(event => {

    event.shaped(
        Item.of('goetydelight:starless_night', '{Damage:0}'),
        [
            ' AB',
            'ACA',
            'DA '
        ],
        {
            B: Item.of('minecraft:amethyst_cluster', '{}'),
            C: Item.of('fib:thestarofliferhythm', '{}'),
            D: Item.of('minecraft:budding_amethyst', '{}'),
            A: Item.of('geodes:diamond_cluster', '{}')
        }
    )
});
