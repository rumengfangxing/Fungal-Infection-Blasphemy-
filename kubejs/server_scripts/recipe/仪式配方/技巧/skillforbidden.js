ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "fib:skill_potent"
        },
        "craftType": "magic",
        "soulCost": 5000,
        "duration": 10,
        "ingredients": [
            {
                "item": "goety:unholy_blood"
            },
            {
                "item": "goety:void_bottle"
            },
            {
                "item": "goety:shadow_essence"
            },
            {
                "item": "goety:forbidden_fragment"
            }
        ],
        "result": {
            "item": "fib:skill_forbidden_spell"
        }
    })
})
