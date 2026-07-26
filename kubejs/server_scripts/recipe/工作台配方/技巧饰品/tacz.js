ServerEvents.recipes(event => {

    event.shaped(
        Item.of('fib:skill_headshot'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            B: Item.of('enigmaticlegacy:thicc_scroll', '{}'),
            A: Item.of('tacz:ammo', '{AmmoId:"test:weaponkey1"}').strongNBT()
        }
    )
    event.shaped(
        Item.of('fib:skill_shooter_experience'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            C: Item.of('lightmanscurrency:coin_gold', '{}'),
            B: Item.of('enigmaticlegacy:thicc_scroll', '{}'),
            A: Item.of('tacz:ammo', '{AmmoId:"test:weaponkey1"}').strongNBT()
        }
    )
    event.shaped(
        Item.of('fib:skill_dead_eye'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: Item.of('tacz:ammo', '{AmmoId:"test:spec"}').strongNBT(),
            B: Item.of('enigmaticlegacy:thicc_scroll', '{}')
        }
    )
});
