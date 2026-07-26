ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "enigmaticlegacy:thicc_scroll"
        },
        "craftType": "magic",
        "soulCost": 3000,
        "duration": 10,
        "ingredients": [
            {
                "type": "forge:nbt",
                "item": "tacz:ammo",
                "nbt": "{\"AmmoId\":\"test:spec\"}"
            },
            {
                "item": "goety:spent_totem"
            },
            {
                "type": "forge:nbt",
                "item": "tacz:ammo",
                "nbt": "{\"AmmoId\":\"test:spec\"}"
            },
            {
                "item": "goetydelight:soul_convergence_room"
            }
        ],
        "result": {
            "item": "fib:skill_magic_magazine"
        }
    })
})