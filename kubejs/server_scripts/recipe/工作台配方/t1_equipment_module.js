ServerEvents.recipes(event => {

    event.shaped(
        Item.of('fib:t1_equipment_module'),
        [
            'ABB',
            'CBB',
            'DCA'
        ],
        {
            B: Item.of('minecraft:iron_nugget', '{}'),
            C: Item.of('minecraft:leather', '{}'),
            D: Item.of('minecraft:iron_ingot', '{}'),
            A: Item.of('minecraft:feather', '{}')
        }
    )
    event.shaped(
        Item.of('fib:t1_equipment_module'),
        [
            'ABB',
            'CBB',
            'DCA'
        ],
        {
            A: Item.of('minecraft:phantom_membrane', '{}'),
            B: Item.of('minecraft:iron_nugget', '{}'),
            C: Item.of('minecraft:leather', '{}'),
            D: Item.of('minecraft:iron_ingot', '{}')
        }
    )
    event.shaped(
        Item.of('fib:t1_equipment_module'),
        [
            'ABB',
            'CBB',
            'DCA'
        ],
        {
            B: Item.of('minecraft:iron_nugget', '{}'),
            C: Item.of('minecraft:leather', '{}'),
            D: Item.of('minecraft:iron_ingot', '{}'),
            A: Item.of('spore:wing_membrane', '{}')
        }
    )
});
