ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "enigmaticlegacy:thicc_scroll"
        },
        "craftType": "forge",
        "soulCost": 1000,
        "duration": 10,
        "ingredients": [
            {
                "item": "goety_revelation:the_needle"
            }
        ],
        "result": {
            "item": "fib:skill_pierce"
        }
    })
})
