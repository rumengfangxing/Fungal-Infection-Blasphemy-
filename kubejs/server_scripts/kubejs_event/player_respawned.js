PlayerEvents.respawned(event => {
	const { player } = event
	
	checkAndEquipCursedRing(player)
	
	if (getFungifiedStage(player) != 0) {
		setFungifiedStage(player, 0)
		player.sendData("kubejs:fungified_biomass_hunger", {enable: false})
	}
})