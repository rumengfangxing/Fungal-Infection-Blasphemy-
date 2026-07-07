ServerEvents.recipes(event => {
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {"item": "biomancy:absorption_boost"},
      {"item": "biomancy:frenzy_serum"},
      {"item": "spore:bezerk_syringe"},
      {"item": "biomancy:creator_mix"}
    ],
    "nutrientsCost": 5,
    "processingTime": 100,
    "reactant": {
      "item": "fib:injection_pen"
    },
    "result": Item.of('lrtactical:consumable', '{ConsumableId:"42labk:last"}').toJson()
  })
})