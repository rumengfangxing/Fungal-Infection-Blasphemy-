ServerEvents.recipes(event => {

    event.shaped(
        Item.of('enigmaticlegacy:darkest_scroll'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            B: Item.of('enigmaticlegacy:twisted_heart', '{}'),
            D: Item.of('enigmaticlegacy:thicc_scroll', '{}'),
            A: Item.of('minecraft:wither_rose', '{}'),
            E: Item.of('enigmaticaddons:pure_heart', '{}'),
            C: Item.of('enigmaticlegacy:evil_essence', '{}')
        }
    )
});
