ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "spore:syringe"
        },
        "craftType": "animation",
        "research":"forbidden",  //该条用于前置（阅读禁书卷轴）
        "entity_to_sacrifice":{
            "tag":"goety:villagers",       //请替换实体tag
            "display_name":"entity.minecraft.villager"  //请替换实体ID
        },
        "soulCost": 1000,  //每秒灵魂消耗
        "duration": 10,  //持续时间
        "ingredients": [
            {
                "item": "goety:undeath_potion"
            },
            {
                "item": "spore:charred_syringe"
            },
            {
                "item": "spore:drowned_syringe"
            },
            {
                "item": "spore:reinforced_syringe"
            },
            {
                "item": "spore:rotten_syringe"
            },
            {
                "item": "spore:toxic_syringe"
            },
            {
                "item": "spore:bezerk_syringe"
            },
            {
                "item": "spore:vampiric_syringe"
            },
            {
                "item": "spore:calcified_syringe"
            }
        ],
        "result": {
            "item": "fib:fungified_potion"
        }
    })
})
