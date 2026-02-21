ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "enigmaticlegacy:the_acknowledgment"
        },
        "craftType": "adept_nether",
        "soulCost": 8,
        "duration": 30,
        "ingredients": [
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "minecraft:nether_star"
            },
            {
                "item": "minecraft:netherrack"
            }
        ],
        "result": {
            "item": "fib:the_nether_key"
        }
    })
})
