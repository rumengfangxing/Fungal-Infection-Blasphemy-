ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "enigmaticlegacy:the_acknowledgment"
        },
        "craftType": "geoturgy",
        "soulCost": 8,
        "duration": 30,
        "ingredients": [
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "enigmaticlegacy:earth_heart"
            },
            {
                "item": "minecraft:grass_block"
            }
        ],
        "result": {
            "item": "fib:overworld_key"
        }
    })
})
