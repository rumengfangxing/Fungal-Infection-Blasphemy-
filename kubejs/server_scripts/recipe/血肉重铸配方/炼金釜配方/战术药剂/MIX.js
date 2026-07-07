ServerEvents.recipes(event => {
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {"item": "biomancy:bloomberry"},
      {"item": "biomancy:creator_mix"},
      {"item": "biomancy:decaying_additive"},
      {"item": "biomancy:hormone_secretion"}
    ],
    "nutrientsCost": 60,
    "processingTime": 600,
    "reactant": {
      "item": "fib:injection_pen"
    },
    "result": Item.of('lrtactical:consumable', '{ConsumableId:"42labk:mix1"}').toJson()
  })
})