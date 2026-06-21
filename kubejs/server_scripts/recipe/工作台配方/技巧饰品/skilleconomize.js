ServerEvents.recipes(event => {

    event.shaped(
        Item.of('fib:skill_economize'),
        [
            ' A ',
            'BCB',
            ' D '
        ],
        {
            B: Item.of('goety:mystic_core', '{}'),
            C: Item.of('enigmaticlegacy:thicc_scroll', '{}'),
            A: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"goety:soul_eater",lvl:10s}]}').strongNBT(),
            D: Item.of('goety:totem_of_souls', '{"Max Souls":30000,Souls:0}').strongNBT()
        }
    )
});
