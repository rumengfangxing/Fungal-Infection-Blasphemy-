ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "minecraft:nether_star"
        },
        "craftType": "animation",
        "entity_to_sacrifice":{
            "tag":"goety:villagers",       //请替换实体tag
            "display_name":"entity.minecraft.villager"  //请替换实体ID
        },
        "soulCost": 100,  //每秒灵魂消耗
        "duration": 10,  //持续时间
        "ingredients": [
            {
                "item": "spore:biomass"
            },
            {
                "item": "minecraft:golden_apple"
            },
            {
                "item": "spore:biomass"
            },
            {
                "item": "enigmaticlegacy:soul_dust"
            }
        ],
        "result": {
            "item": "fib:essenceoflife"
        }
    })
})
