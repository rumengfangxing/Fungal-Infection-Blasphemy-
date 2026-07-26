ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "create:brass_sheet"
        },
        "craftType": "animation",
        "soulCost": 10,  //每秒灵魂消耗
        "duration": 10,  //持续时间
        "ingredients": [
            {
                "item": "minecraft:bone"
            },
            {
                "item": "fib:hex_essence"
            },
            {
                "tag": "biomancy:raw_meats"
            }
        ],
        "result": {
            "item": "create_biotech:bionic_mechanism"
        }
    })
})
