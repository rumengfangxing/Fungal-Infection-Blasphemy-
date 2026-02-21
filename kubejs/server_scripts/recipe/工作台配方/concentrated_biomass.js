ServerEvents.recipes(event => {

    event.shaped(
        Item.of('fib:concentrated_biomass', 8),
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            C: Item.of('spore:brain_remnants', '{}'),
            B: Item.of('spore:symbiotic_reagent', '{}'),
            A: Item.of('spore:biomass', '{}'),
            D: Item.of('fib:fib_logo', '{}')
        }
    )
});
