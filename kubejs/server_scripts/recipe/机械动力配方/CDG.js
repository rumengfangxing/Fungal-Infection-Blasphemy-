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
})
})