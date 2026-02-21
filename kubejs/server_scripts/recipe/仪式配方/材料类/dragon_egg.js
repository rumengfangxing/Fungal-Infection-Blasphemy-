ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "minecraft:egg"
        },
        "craftType": "animation",
        "soulCost": 10000,
        "duration": 10,
        "ingredients": [
            {
                "item": "minecraft:dragon_breath"
            },
            {
                "item": "minecraft:dragon_breath"
            },
            {
                "item": "minecraft:dragon_breath"
            },
            {
                "item": "minecraft:dragon_breath"
            },
            {
                "item": "enigmaticlegacy:infinimeal"
            },
            {
                "item": "enigmaticlegacy:twisted_heart"
            },
            {
                "item": "enigmaticlegacy:abyssal_heart"
            },
            {
                "item": "minecraft:nether_star"
            },
            {
                "item": "goety:ectoplasm"
            },
            {
                "item": "goety:ectoplasm"
            },
            {
                "item": "goety:ectoplasm"
            },
            {
                "item": "goety:ectoplasm"
            }
        ],
        "result": {
            "item": "minecraft:dragon_egg"
        }
    })
})
