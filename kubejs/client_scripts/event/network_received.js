NetworkEvents.dataReceived('kubejs:fungified_biomass_change', event => {
    const data = event.data
    updateBiomassHud(data.biomass, data.max, data.stage)
	if (data.stage == 0) {
		hungerEffect = false
		hungerEffectPercent = 0
		Client.gameRenderer.shutdownEffect()
		updateHungerText(0)
		return
	}
	if (data.biomass <= 5) {
		if (!hungerEffect) {
			VisualJS.applyEffect("kubejs:desaturate", true)
			hungerEffect = true
			hungerEffectEnd = false
		}
	} else {
		if (hungerEffect) {
			hungerEffect = false
		}
	}
})

NetworkEvents.dataReceived('kubejs:fungified_evolution_change', event => {
    const data = event.data
    updateEvolutionText(data.evolution, data.max, data.stage)
})