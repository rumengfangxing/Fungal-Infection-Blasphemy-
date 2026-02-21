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
                "item": "minecraft:ghast_tear"
            },
            {
                "item": "minecraft:ghast_tear"
            },
            {
                "item": "minecraft:gunpowder"
            }
        ],
        "result": {
            "item": "minecraft:ghast_spawn_egg"
        }
    })
})
