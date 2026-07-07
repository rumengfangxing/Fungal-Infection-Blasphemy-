ServerEvents.recipes(event => {
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {"item": "biomancy:absorption_boost"},
      {"item": "spore:biomass_bacon"},
      {"item": "biomancy:regenerative_fluid"}
    ],
    "nutrientsCost": 5,
    "processingTime": 100,
    "reactant": {
      "item": "fib:injection_pen"
    },
    "result": Item.of('lrtactical:consumable', '{ConsumableId:"42labk:dfs"}').toJson()
  })
})