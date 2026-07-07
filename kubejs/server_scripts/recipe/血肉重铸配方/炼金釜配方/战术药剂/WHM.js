ServerEvents.recipes(event => {
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {"item": "legendarysurvivaloverhaul:sun_fern_gold_leaf"},
      {"item": "legendarysurvivaloverhaul:ice_fern_gold_leaf"},
      {"item": "biomancy:hormone_secretion"}
    ],
    "nutrientsCost": 5,
    "processingTime": 100,
    "reactant": {
      "item": "fib:injection_pen"
    },
    "result": Item.of('lrtactical:consumable', '{ConsumableId:"42labk:tgl1"}').toJson()
  })
})