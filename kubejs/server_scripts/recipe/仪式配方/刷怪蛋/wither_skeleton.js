ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "goety:flame_capture"
        },
        "craftType": "necroturgy",
        "soulCost": 1000,
        "duration": 10,
        "ingredients": [
            {
                "item": "fib:essenceoflife"
            },
            {
                "item": "minecraft:wither_rose"
            },
            {
                "item": "minecraft:wither_rose"
            },
            {
                "item": "minecraft:wither_skeleton_skull"
            }
        ],
        "result": {
            "item": "minecraft:wither_skeleton_spawn_egg"
        }
    })
})
