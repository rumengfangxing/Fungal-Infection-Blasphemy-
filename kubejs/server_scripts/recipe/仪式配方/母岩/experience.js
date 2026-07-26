ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "create:experience_block"
        },
        "craftType": "magic",
        "soulCost": 1,
        "duration": 10,
        "ingredients": [
            {
                "item": "create:experience_nugget"
            },
            {
                "item": "create:experience_nugget"
            },
            {
                "item": "minecraft:lava_bucket"
            },
            {
                "item": "create:experience_nugget"
            },
            {
                "item": "create:experience_nugget"
            },
            {
                "item": "create:experience_nugget"
            },
            {
                "item": "create:experience_nugget"
            },
            {
                "item": "create:experience_nugget"
            },
            {
                "item": "create:experience_nugget"
            },
            {
                "item": "create:experience_nugget"
            },
            {
                "item": "create:experience_nugget"
            },
            {
                "item": "create:experience_nugget"
            }
        ],
        "result": {
            "item": "create_biotech:budding_experience"
        }
    })
})
