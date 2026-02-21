ServerEvents.recipes(event => {

    event.shaped(
        Item.of('fib:skill_rapid_continuous_shooting'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:3s}]}').strongNBT(),
            B: Item.of('enigmaticlegacy:thicc_scroll', '{}')
        }
    )
});
