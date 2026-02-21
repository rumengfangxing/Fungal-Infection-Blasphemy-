ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "enigmaticlegacy:the_acknowledgment"
        },
        "craftType": "frost",
        "soulCost": 8,
        "duration": 30,
        "ingredients": [
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "goety:ice_cube"
            },
            {
                "item": "minecraft:blue_ice"
            }
        ],
        "result": {
            "item": "fib:frozen_key"
        }
    })
})
