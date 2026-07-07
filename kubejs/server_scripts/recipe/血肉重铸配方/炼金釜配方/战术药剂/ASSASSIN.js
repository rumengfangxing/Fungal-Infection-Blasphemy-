ServerEvents.recipes(event => {
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {"item": "minecraft:golden_carrot"},
      {"item": "minecraft:fermented_spider_eye"},
      {"item": "biomancy:volatile_fluid"},
      {"item": "biomancy:exotic_dust"}
    ],
    "nutrientsCost": 5,
    "processingTime": 100,
    "reactant": {
      "item": "fib:injection_pen"
    },
    "result": Item.of('lrtactical:consumable', '{ConsumableId:"42labk:assassin"}').toJson()
  })
})