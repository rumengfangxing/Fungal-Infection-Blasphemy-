ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "goety:flame_capture"
        },
        "craftType": "animation",
        "soulCost": 1000,
        "duration": 10,
        "ingredients": [
            {
                "item": "fib:essenceoflife"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "minecraft:ender_pearl"
            },
            {
                "item": "minecraft:ender_eye"
            }
        ],
        "result": {
            "item": "minecraft:enderman_spawn_egg"
        }
    })
})
