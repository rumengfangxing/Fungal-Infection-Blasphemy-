ServerEvents.recipes(event => {
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {"item": "biomancy:frenzy_serum"},
      {"item": "biomancy:hormone_secretion"},
      {"item": "biomancy:volatile_fluid"}
    ],
    "nutrientsCost": 5,
    "processingTime": 100,
    "reactant": {
      "item": "fib:injection_pen"
    },
    "result": Item.of('lrtactical:consumable', '{ConsumableId:"42labk:mul"}').toJson()
  })
})