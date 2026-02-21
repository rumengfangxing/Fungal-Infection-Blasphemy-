ServerEvents.recipes(event => {

    event.shaped(
        Item.of('fib:fib_logo', 4),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: Item.of('spore:biomass', '{}'),
            B: Item.of('fib:essenceoflife', '{}'),
            C: Item.of('tacz:statue', '{}')
        }
    )
});
