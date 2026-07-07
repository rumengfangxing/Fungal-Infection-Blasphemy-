ServerEvents.recipes(event => {
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {"item": "biomancy:rejuvenation_serum"},
      {"item": "biomancy:healing_additive"},
      {"item": "biomancy:hormone_secretion"}
    ],
    "nutrientsCost": 5,
    "processingTime": 100,
    "reactant": {
      "item": "fib:injection_pen"
    },
    "result": Item.of('lrtactical:consumable', '{ConsumableId:"42labk:sj1"}').toJson()
  })
})