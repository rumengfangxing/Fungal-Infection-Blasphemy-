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
                "item": "minecraft:shulker_shell"
            },
            {
                "item": "minecraft:shulker_shell"
            },
            {
                "item": "minecraft:end_crystal"
            }
        ],
        "result": {
            "item": "minecraft:shulker_spawn_egg"
        }
    })
})
