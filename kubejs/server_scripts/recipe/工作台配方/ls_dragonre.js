ServerEvents.recipes(event => {

    event.shaped(
        Item.of('lrtactical:melee', '{MeleeWeaponId:"ab_wt:ryuu_lchimonji_kai"}'),
        [
            ' AB',
            'BCA',
            'DB '
        ],
        {
            A: Item.of('minecraft:bamboo', '{}'),
            B: Item.of('minecraft:iron_ingot', '{}'),
            C: Item.of('minecraft:netherite_ingot', '{}'),
            D: Item.of('createaddition:iron_rod', '{}')
        }
    )
});
