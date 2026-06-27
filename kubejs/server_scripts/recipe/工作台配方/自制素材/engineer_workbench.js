ServerEvents.recipes(event => {

    event.shaped(
        Item.of('fib_mod:engineer_workbench'),
        [
            '   ',
            'ABC',
            'DEE'
        ],
        {
            A: 'create:wrench',
            B: 'create:andesite_table_cloth',
            C: 'create:crafting_blueprint',
            D: '#farmersdelight:cabinets',
            E: 'create:andesite_scaffolding'
        }
    )
})