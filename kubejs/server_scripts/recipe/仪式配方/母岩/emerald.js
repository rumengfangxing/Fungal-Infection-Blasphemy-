ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "geodes:emerald_crystal_block"
        },
        "craftType": "geoturgy",
        "soulCost": 1,
        "duration": 10,
        "ingredients": [
            {
                "item": "minecraft:lava_bucket"
            },
            {
                "item": "minecraft:emerald"
            }
        ],
        "result": {
            "item": "geodes:budding_emerald"
        }
    })
})
