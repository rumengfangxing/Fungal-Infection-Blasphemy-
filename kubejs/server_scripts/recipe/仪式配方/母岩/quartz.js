ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "geodes:quartz_crystal_block"
        },
        "craftType": "geoturgy",
        "soulCost": 1,
        "duration": 10,
        "ingredients": [
            {
                "item": "minecraft:lava_bucket"
            },
            {
                "item": "minecraft:quartz"
            }
        ],
        "result": {
            "item": "geodes:budding_quartz"
        }
    })
})
