ServerEvents.recipes(event => {

    event.shaped(
        Item.of('fib:skill_potent'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: Item.of('goety:ectoplasm', '{}'),
            B: Item.of('goety:soul_emerald', '{}'),
            C: Item.of('goety:mystic_core', '{}'),
            D: Item.of('enigmaticlegacy:thicc_scroll', '{}'),
            E: Item.of('goety:totem_of_souls', '{"Max Souls":30000,Souls:0}').strongNBT()
        }
    )
});
