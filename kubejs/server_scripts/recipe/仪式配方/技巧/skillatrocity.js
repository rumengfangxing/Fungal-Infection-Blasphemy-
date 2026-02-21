ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "enigmaticlegacy:thicc_scroll"
        },
        "craftType": "forge",
        "soulCost": 2000,
        "duration": 10,
        "ingredients": [
            {
                "item": "enigmaticlegacy:astral_dust"
            },
                {
                "item": "minecraft:nether_star"
            },
                {
                "item": "enigmaticlegacy:abyssal_heart"
            },
                {
                "item": "enigmaticlegacy:the_twist"
            }
        ],
        "result": {
            "item": "fib:skill_atrocity"
        }
    })
})
