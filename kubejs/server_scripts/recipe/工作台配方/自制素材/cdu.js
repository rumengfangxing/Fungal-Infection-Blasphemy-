ServerEvents.recipes(event => {

    event.shaped(
        Item.of('fib_mod:scientists_experimental_platform'),
        [
            'BTB',
            'BLB',
            'DFD'
        ],
        {
            B: 'spore:compound_plate',
            T: 'iron_trapdoor',
            L: 'fib:cooling_unit',
            D: 'spore:circuit_board',
            F: 'dispenser'
        }
    )
})