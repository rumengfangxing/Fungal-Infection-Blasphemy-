ServerEvents.recipes(event => {

    event.shaped(
        Item.of('fib:skill_powerful_shooting'),
        [
            ' A ',
            'BCD',
            ' E '
        ],
        {
            E: Item.of('minecraft:potion', '{Potion:"minecraft:strength"}').strongNBT(),
            D: Item.of('goety:launch_focus', '{}'),
            C: Item.of('enigmaticlegacy:thicc_scroll', '{}'),
            A: Item.of('goety:hunters_bow', '{Damage:0}').strongNBT(),
            B: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:power",lvl:5s}]}').strongNBT()
        }
    )
});
