ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "fib:skill_powerful_shooting"
        },
        "craftType": "forge",
        "soulCost": 1000,
        "duration": 10,
        "ingredients": [
            {
                "item": "goety:cursed_metal_block"
            },
                {
                "item": "goety:dark_fabric"
            },
                {
                "item": "goety:magic_fabric"
            },
                {
                "item": "goety:occult_fabric"
            },
                {
                "item": "goety:spirit_fabric"
            },
                {
                "item": "goety:gale_fabric"
            }
        ],
        "result": {
            "item": "fib:skill_heavy_bow"
        }
    })
})
