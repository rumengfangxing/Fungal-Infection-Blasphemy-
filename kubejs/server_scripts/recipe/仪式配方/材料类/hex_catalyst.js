ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "goety:philosophers_stone"
        },
        "craftType": "magic",
        "entity_to_sacrifice":{
            "tag":"goety:villagers",       //请替换实体tag
            "display_name":"entity.minecraft.villager"  //请替换实体ID
        },
        "soulCost": 3000,  //每秒灵魂消耗
        "duration": 10,  //持续时间
        "ingredients": [
            {
                "item": "goety:void_major_spread"
            },
            {
                "item": "goety:void_major_spread"
            },
            {
                "item": "goety:void_major_spread"
            },
            {
                "item": "goety:void_major_spread"
            }
        ],
        "result": {
            "item": "fib:hex_catalyst"
        }
    })
})
