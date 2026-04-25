ServerEvents.recipes(event => {

    event.shaped(
        Item.of('lrtactical:melee', '{MeleeWeaponId:"ab_wt:saber"}'),
        [
            ' AB',
            'ABA',
            'CA '
        ],
        {
            B: Item.of('minecraft:iron_ingot', '{}'),
            A: Item.of('minecraft:blaze_powder', '{}'),
            C: Item.of('createaddition:iron_rod', '{}')
        }
    )
});
