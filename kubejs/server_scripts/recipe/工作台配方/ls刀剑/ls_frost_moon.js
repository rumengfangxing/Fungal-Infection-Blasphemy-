ServerEvents.recipes(event => {

    event.shaped(
        Item.of('lrtactical:melee', '{MeleeWeaponId:"ab_wt:frost_moon"}'),
        [
            ' AB',
            'ACA',
            'CA '
        ],
        {
            B: Item.of('minecraft:bamboo', '{}'),
            C: Item.of('minecraft:iron_ingot', '{}'),
            A: Item.of('minecraft:oak_planks', '{}')
        }
    )
});
