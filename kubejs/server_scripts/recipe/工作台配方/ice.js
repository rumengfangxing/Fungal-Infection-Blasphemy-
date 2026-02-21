ServerEvents.recipes(event => {

    event.shaped(
        Item.of('minecraft:ice'),
        [
            '   ',
            ' A ',
            '   '
        ],
        {
            A: Item.of('minecraft:snow_block', '{}')
        }
    )
});
