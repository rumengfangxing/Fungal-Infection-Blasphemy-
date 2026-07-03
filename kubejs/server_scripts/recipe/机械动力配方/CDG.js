ServerEvents.recipes((event) => {
// 浓缩生物质
event.custom({
  "type": "createdieselgenerators:basin_fermenting",
  "ingredients": [
    { "item": "spore:symbiotic_reagent"},
    { "item": "fib:fib_logo" },
    { "item": "spore:biomass"}
  ],
  "processingTime": 200,
  "results": [
    { "item": "fib:concentrated_biomass", "count": 8 }
  ],
  "heatRequirement": "superheated"
});
//腐臭物质+糟糕液体75mb
event.custom({
  "type": "createdieselgenerators:basin_fermenting",
  "ingredients": [
    { "item": "biomancy:nutrient_paste"},
    { 
      "fluid": "minecraft:water",
      "amount":250
    }
  ],
  "processingTime": 120,
  "results": [
    { "item": "fib:putrid_substance"},
    { 
      "fluid":"fib:bad_liquid",
      "amount":75
    }
  ],
  "heatRequirement": "heated"
});
//糟糕液体125mb
event.custom({
  "type": "createdieselgenerators:basin_fermenting",
  "ingredients": [
    { "item": "fib:putrid_substance"},
    { 
      "fluid": "minecraft:water",
      "amount":125
    }
  ],
  "processingTime": 120,
  "results": [
    { 
      "fluid":"fib:bad_liquid",
      "amount":125
    }
  ],
  "heatRequirement": "heated"
})
})