ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:crying_obsidian', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            B: Item.of('farmersdelight:onion', '{}'),
            A: Item.of('minecraft:obsidian', '{}')
        }
    )
});
