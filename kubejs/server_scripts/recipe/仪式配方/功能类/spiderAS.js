ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "create_biotech:bionic_mechanism"
        },
        "craftType": "animation",
        "entity_to_sacrifice":{
            "tag": "goety:spiders",
            "display_name": "entity.minecraft.spider"
        },
        "soulCost": 100,  //每秒灵魂消耗
        "duration": 10,  //持续时间
        "ingredients": [
            {
                "item": "goety:ominous_shackles"
            },
            {
                "item": "create:cogwheel"
            }
        ],
        "result": {
            "item": "create_biotech:spider_assembly_table"
        }
    })
})
