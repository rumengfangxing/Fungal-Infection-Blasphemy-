ServerEvents.recipes(event => {

    event.shaped(
        Item.of('lrtactical:melee', '{MeleeWeaponId:"ab_wt:jade_bamboo"}'),
        [
            'ABC',
            'BCB',
            'DBA'
        ],
        {
            B: Item.of('minecraft:bamboo', '{}'),
            C: Item.of('minecraft:iron_ingot', '{}'),
            A: Item.of('minecraft:blaze_powder', '{}'),
            D: Item.of('createaddition:iron_rod', '{}')
        }
    )
});
