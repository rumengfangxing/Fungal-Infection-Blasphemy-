ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "minecraft:baked_potato"
        },
        "craftType": "magic",
        "research":"forbidden",  //该条用于前置（阅读禁书卷轴）
        "soulCost": 4000,  //每秒灵魂消耗
        "duration": 5,  //持续时间
        "ingredients": [
            {
                "item": "goety:ectoplasm"
            },
            {
                "item": "goety:ectoplasm"
            },
            {
                "item": "goety:ectoplasm"
            },
            {
                "item": "goety:ectoplasm"
            }
        ],
        "result": {
            "item": "goetydelight:gathering_soul_embryos"
        }
    })
})
