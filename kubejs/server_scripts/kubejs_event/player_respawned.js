PlayerEvents.respawned(event => {
	const { player } = event
	if (getFungifiedStage(player) != 0) {
		setFungifiedStage(player, 1)
		setFungifiedBiomass(player, 10)
	}
})