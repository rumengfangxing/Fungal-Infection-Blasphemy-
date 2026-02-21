ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "enigmaticlegacy:the_acknowledgment"
        },
        "craftType": "end",
        "soulCost": 8,
        "duration": 30,
        "ingredients": [
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "enigmaticlegacy:abyssal_heart"
            },
            {
                "item": "minecraft:end_stone"
            }
        ],
        "result": {
            "item": "fib:the_end_key"
        }
    })
})
