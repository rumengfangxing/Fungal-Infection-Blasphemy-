ServerEvents.recipes(event => {

    event.shaped(
        Item.of('fib_mod:scientists_experimental_platform'),
        [
            '   ',
            'ABC',
            'DEF'
        ],
        {
            A: 'spore:incubator',
            B: 'create:andesite_table_cloth',
            C: 'spore:syringe',
            D: 'spore:cabinet',
            E: 'spore:container',
            F: 'create:andesite_scaffolding'
        }
    )
})