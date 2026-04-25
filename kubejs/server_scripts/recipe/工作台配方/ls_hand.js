ServerEvents.recipes(event => {

    event.shaped(
        Item.of('lrtactical:melee', '{MeleeWeaponId:"ab_wt:hands"}'),
        [
            ' A ',
            'A B',
            ' B '
        ],
        {
            B: Item.of('minecraft:iron_nugget', '{}'),
            A: Item.of('minecraft:leather', '{}')
        }
    )
});
