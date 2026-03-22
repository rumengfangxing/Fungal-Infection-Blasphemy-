ServerEvents.recipes(event => {
    event.custom({
        "type":"biomancy:decomposing" ,
        "ingredient":{
            "count":1,
            "item":"spore:tendons"
        },
        "nutrientsCost":1,
        "processingTime":40,
        "results":[
            {
                "countRange":{
                    "type":"uniform",
                    "max":3,
                    "min":1
                },
                "item":"spore:biomass"
            }
        ]
    })
})