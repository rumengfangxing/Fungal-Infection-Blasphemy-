ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "geodes:lapis_crystal_block"
        },
        "craftType": "geoturgy",
        "research": "fib:soul_research",
        "soulCost": 1,
        "duration": 10,
        "ingredients": [
            {
                "item": "minecraft:lava_bucket"
            },
            {
                "item": "minecraft:lapis_lazuli"
            }
        ],
        "result": {
            "item": "geodes:budding_lapis"
        }
    })
})
