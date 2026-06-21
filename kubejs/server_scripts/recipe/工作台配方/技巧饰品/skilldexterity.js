ServerEvents.recipes(event => {

    event.shaped(
        Item.of('fib:skill_dexterity'),
        [
            ' A ',
            'BCB',
            ' B '
        ],
        {
            B: Item.of('minecraft:sugar', '{}'),
            C: Item.of('enigmaticlegacy:thicc_scroll', '{}'),
            A: Item.of('goety_revelation:gold_feather', '{}')
        }
    )
});
