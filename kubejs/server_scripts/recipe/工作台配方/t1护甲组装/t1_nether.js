ServerEvents.recipes(event => {

    // T1 下界合金头盔
    event.shapeless(
        Item.of('minecraft:netherite_helmet', '{AttributeModifiers:[{Amount:4.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"head",UUID:[I;284759301,-1648295732,-1593726481,-748295631]},{Amount:4.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"head",UUID:[I;-748295631,1284759301,-1483726592,384759201]},{Amount:1.0d,AttributeName:"legendarysurvivaloverhaul:cold_resistance",Operation:0,Slot:"head",UUID:[I;384759201,-1748295632,-1893726401,984759302]},{Amount:0.1d,AttributeName:"legendarysurvivaloverhaul:head_resistance",Operation:0,Slot:"head",UUID:[I;584759102,-1348295731,-1293726482,684759203]},{Amount:0.1d,AttributeName:"minecraft:generic.knockback_resistance",Operation:0,Slot:"head",UUID:[I;111111111,-222222222,-333333333,-444444444]}],Damage:0}'),
        ['minecraft:netherite_helmet', 'fib:t1_equipment_module']
    )

    // T1 下界合金胸甲
    event.shapeless(
        Item.of('minecraft:netherite_chestplate', '{AttributeModifiers:[{Amount:10.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"chest",UUID:[I;-384759201,848295631,-1393726481,128475930]},{Amount:4.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"chest",UUID:[I;784759302,-484759201,-1593726592,984759301]},{Amount:1.25d,AttributeName:"legendarysurvivaloverhaul:cold_resistance",Operation:0,Slot:"chest",UUID:[I;-684759203,384759201,-1893726402,884759302]},{Amount:0.1d,AttributeName:"legendarysurvivaloverhaul:chest_resistance",Operation:0,Slot:"chest",UUID:[I;984759301,-1484759302,-1793726481,784759203]},{Amount:0.1d,AttributeName:"minecraft:generic.knockback_resistance",Operation:0,Slot:"chest",UUID:[I;222222222,-333333333,-444444444,-555555555]}],Damage:0}'),
        ['minecraft:netherite_chestplate', 'fib:t1_equipment_module']
    )

    // T1 下界合金护腿
    event.shapeless(
        Item.of('minecraft:netherite_leggings', '{AttributeModifiers:[{Amount:8.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"legs",UUID:[I;484759201,-984759302,-1293726482,384759203]},{Amount:4.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"legs",UUID:[I;-884759302,128475930,-1593726591,684759201]},{Amount:1.0d,AttributeName:"legendarysurvivaloverhaul:cold_resistance",Operation:0,Slot:"legs",UUID:[I;284759303,-784759201,-1893726401,984759302]},{Amount:0.1d,AttributeName:"legendarysurvivaloverhaul:legs_resistance",Operation:0,Slot:"legs",UUID:[I;-984759301,1484759302,-1793726482,284759203]},{Amount:0.1d,AttributeName:"minecraft:generic.knockback_resistance",Operation:0,Slot:"legs",UUID:[I;333333333,-444444444,-555555555,-666666666]}],Damage:0}'),
        ['minecraft:netherite_leggings', 'fib:t1_equipment_module']
    )

    // T1 下界合金靴子
    event.shapeless(
        Item.of('minecraft:netherite_boots', '{AttributeModifiers:[{Amount:4.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"feet",UUID:[I;684759201,-284759303,-1393726481,884759302]},{Amount:4.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"feet",UUID:[I;-584759102,984759301,-1593726592,128475930]},{Amount:1.0d,AttributeName:"legendarysurvivaloverhaul:cold_resistance",Operation:0,Slot:"feet",UUID:[I;384759203,-684759201,-1893726402,784759301]},{Amount:0.1d,AttributeName:"legendarysurvivaloverhaul:feet_resistance",Operation:0,Slot:"feet",UUID:[I;-784759201,1384759302,-1293726481,584759103]},{Amount:0.1d,AttributeName:"minecraft:generic.knockback_resistance",Operation:0,Slot:"feet",UUID:[I;444444444,-555555555,-666666666,-777777777]}],Damage:0}'),
        ['minecraft:netherite_boots', 'fib:t1_equipment_module']
    )

})