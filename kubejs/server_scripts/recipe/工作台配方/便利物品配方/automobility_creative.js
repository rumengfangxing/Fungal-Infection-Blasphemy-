ServerEvents.recipes(event => {

    event.shaped(
        Item.of('automobility:automobile_engine', '{engine:"automobility:creative"}'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: Item.of('minecraft:netherite_ingot', '{}'),
            B: Item.of('automobility:automobile_engine', '{engine:"automobility:diamond"}').strongNBT()
        }
    )
});
