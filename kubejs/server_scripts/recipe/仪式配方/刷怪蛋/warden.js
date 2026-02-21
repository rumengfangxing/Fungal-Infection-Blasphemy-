ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "goety:flame_capture"
        },
        "craftType": "necroturgy",
        "soulCost": 5000,
        "duration": 10,
        "ingredients": [
            {
                "item": "fib:essenceoflife"
            },
            {
                "item": "minecraft:sculk_sensor"
            },
            {
                "item": "minecraft:sculk_catalyst"
            },
            {
                "item": "minecraft:sculk_shrieker"
            },
             {
                "item": "minecraft:echo_shard"
            },
             {
                "item": "minecraft:echo_shard"
            },
             {
                "item": "minecraft:echo_shard"
            },
             {
                "item": "minecraft:echo_shard"
            }
        ],
        "result": {
            "item": "minecraft:warden_spawn_egg"
        }
    })
})
