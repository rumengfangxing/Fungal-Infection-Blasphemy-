function initFungifiedBiomass(player, max, stage) {
	sendFungifiedBiomassToClient(player, player.persistentData.getInt(BIOMASS_KEY), max, stage)
}

function setFungifiedBiomass(player, value) {
	const stage = getFungifiedStage(player)
	const stageAttr = FUNGIFIED_STAGE_ATTR_MAP[stage]
	
	const biomass = Math.max(0, Math.min(value, stageAttr.biomass))
	player.persistentData.putInt(BIOMASS_KEY, biomass)
	sendFungifiedBiomassToClient(player, biomass, stageAttr.biomass, stage)
}

function addFungifiedBiomass(player, value) {
	const biomass = player.persistentData.getInt(BIOMASS_KEY)
	setFungifiedBiomass(player, biomass + value)
}

function resetFungifiedBiomassSystem(player) {
	player.persistentData.putInt(BIOMASS_KEY, 0)
	sendFungifiedBiomassToClient(player, 0, 0, 0)
}

function sendFungifiedBiomassToClient(player, biomass, max, stage) {
	player.sendData("kubejs:fungified_biomass_change", { 
		biomass: biomass,
		max: max, 
		stage: stage
	})
}