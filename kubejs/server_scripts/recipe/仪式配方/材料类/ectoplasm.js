ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "goety:ice_cube"
        },
        "craftType": "magic",
        "soulCost": 20,  //每秒灵魂消耗
        "duration": 5,  //持续时间
        "ingredients": [
            {
                "item": "goety:ice_cube"
            },
            {
                "item": "goety:ice_cube"
            },
            {
                "item": "goety:ice_cube"
            },
            {
                "item": "goety:ice_cube"
            }
        ],
        "result": {
            "item": "goety:ectoplasm"
        }
    })
})
