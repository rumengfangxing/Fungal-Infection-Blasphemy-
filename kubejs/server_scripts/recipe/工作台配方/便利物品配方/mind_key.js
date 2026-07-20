ServerEvents.recipes(event => {

    event.shaped(
        Item.of('goeticlegacy:mind_court_key'),
        [
            'AAA',
            'BCD',
            'EFG'
        ],
        {
            C: Item.of('minecraft:writable_book', '{}'),
            G: Item.of('goety:haunted_glass_mob_tinted', '{}'),
            B: Item.of('goety:haunted_glass', '{}'),
            D: Item.of('goety:haunted_glass_tinted', '{}'),
            F: Item.of('goety:shade_glass', '{}'),
            E: Item.of('goety:haunted_glass_mob', '{}'),
            A: Item.of('legendarysurvivaloverhaul:heart_container', '{}')
        }
    )
});
