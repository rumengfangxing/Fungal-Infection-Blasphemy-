ServerEvents.recipes(event => {
  event.custom({
    "type": "biomancy:bio_brewing",
    "ingredients": [
      {"item": "biomancy:bone_fragments"},
      {"item": "biomancy:flesh_bits"},
      {"item": "biomancy:exotic_dust"}
    ],
    "nutrientsCost": 5,
    "processingTime": 100,
    "reactant": {
      "item": "create:brass_sheet"
    },
    "result":{"item": "create_biotech:bionic_mechanism"}
  })
})