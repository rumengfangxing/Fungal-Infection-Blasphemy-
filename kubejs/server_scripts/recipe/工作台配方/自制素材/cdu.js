ServerEvents.recipes(event => {

    event.shaped(
        Item.of('spore:cdu'),
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