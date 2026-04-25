ServerEvents.recipes(event => {

    event.shaped(
        Item.of('lrtactical:melee', '{MeleeWeaponId:"ab_wt:ryuu_lchimonji"}'),
        [
            ' AB',
            'CDA',
            'EC '
        ],
        {
            C: Item.of('minecraft:bamboo', '{}'),
            E: Item.of('minecraft:iron_ingot', '{}'),
            A: Item.of('minecraft:blaze_powder', '{}'),
            D: Item.of('minecraft:netherite_ingot', '{}'),
            B: Item.of('createaddition:iron_rod', '{}')
        }
    )
});
