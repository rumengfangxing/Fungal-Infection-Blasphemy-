ServerEvents.recipes(event => {
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {"item": "farmersdelight:milk_bottle"},
      {"item": "minecraft:cocoa_beans"},
      {"item": "biofactory:nutrients_fluid_bottle"}
    ],
    "nutrientsCost": 5,
    "processingTime": 100,
    "reactant": {
      "item": "fib:injection_pen"
    },
    "result": Item.of('lrtactical:consumable', '{ConsumableId:"42labk:p2"}').toJson()
  })
})