ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "enigmaticlegacy:cursed_stone"
        },
        "craftType": "star",
        "research":"forbidden",  //该条用于前置（阅读禁书卷轴）
        "soulCost": 10000,  //每秒灵魂消耗
        "duration": 10,  //持续时间
        "ingredients": [
            {
                "item": "goety_revelation:broken_halo"
            },
            {
                "item": "goety_revelation:broken_halo"
            },
            {
                "item": "goety_revelation:broken_halo"
            },
            {
                "item": "goety_revelation:broken_halo"
            }
        ],
        "result": {
            "item": "enigmaticlegacy:cursed_ring"
        }
    })
})
