ServerEvents.recipes(event => {

    event.shaped(
        Item.of('fib:skill_expediency'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            B: Item.of('minecraft:clock', '{}'),
            D: Item.of('goety:mystic_core', '{}'),
            C: Item.of('enigmaticlegacy:thicc_scroll', '{}'),
            A: Item.of('goety_revelation:gold_feather', '{}')
        }
    )
});
