ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "geodes:echo_block"
        },
        "craftType": "geoturgy",
        "soulCost": 1,
        "duration": 10,
        "ingredients": [
            {
                "item": "minecraft:lava_bucket"
            },
            {
                "item": "minecraft:echo_shard"
            }
        ],
        "result": {
            "item": "geodes:budding_echo_block"
        }
    })
})
