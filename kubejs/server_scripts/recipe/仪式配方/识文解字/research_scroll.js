ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": 
        {
                "type": "forge:nbt",
                "item": "patchouli:guide_book",
                "nbt": "{\"patchouli:book\":\"goety:black_book\"}"
       },
        "craftType": "research",
        "soulCost": 2,
        "duration": 30,
        "ingredients": [
            {
                "item": "minecraft:compass"
            },
            {
                "type": "forge:nbt",
                "item": "minecraft:potion",
                "nbt": "{Potion:\"minecraft:water\"}"
            },
            {
                "item": "minecraft:feather"
            },
            {
                "tag": "minecraft:coals"
            }
        ],
        "result": {
            "item": "fib:soul_research_scroll"
        }
    })
})