ServerEvents.recipes(event => {

    event.shaped(
        Item.of('lrtactical:melee', '{MeleeWeaponId:"ab_wt:carian_knight_sword"}'),
        [
            ' AB',
            'CBA',
            'DC '
        ],
        {
            C: Item.of('create:brass_sheet', '{}'),
            A: Item.of('minecraft:blaze_powder', '{}'),
            B: Item.of('minecraft:netherite_ingot', '{}'),
            D: Item.of('createaddition:brass_rod', '{}')
        }
    )
});
