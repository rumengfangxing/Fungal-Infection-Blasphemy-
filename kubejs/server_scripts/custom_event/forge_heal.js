global.ForgeLivingHealEvent = event => {
	handleFungifiedPlayerHunger(event)
}

function handleFungifiedPlayerHunger(event) {
	const entity = event.entity
	if (!entity || !entity.isPlayer()) return
	if (getFungifiedStage(entity) == 0) return
	
	const biomass = entity.persistentData.getInt(BIOMASS_KEY)
	if (biomass != 0) return
	
	event.setCanceled(true)
}