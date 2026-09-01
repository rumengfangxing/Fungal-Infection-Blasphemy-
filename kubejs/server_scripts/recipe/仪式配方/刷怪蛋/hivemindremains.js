ServerEvents.recipes(event => {
    event.custom({
        "type": "goety:ritual",
        "ritual_type": "goety:craft",
        "activation_item": {
            "item": "spore:brain_remnants"
        },
        "craftType": "infect",
        "research": "fib:soul_research",
        "soulCost": 10000,
        "duration": 10,
        "ingredients": [
            {
                "item": "biomancy:primordial_core"
            },
            {
                "item": "biomancy:rejuvenation_serum"
            },
            {
                "item": "biomancy:frenzy_serum"
            },
            {
                "item": "biomancy:ageing_serum"
            }
        ],
        "result":Item.of('spore:brain_remnants', "{BlockEntityTag:{active:1b,fire:0b},display:{Lore:['{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"dark_gray\",\"text\":\"它已不再是死物.....\"}],\"text\":\"\"}']}}")
    })
})
