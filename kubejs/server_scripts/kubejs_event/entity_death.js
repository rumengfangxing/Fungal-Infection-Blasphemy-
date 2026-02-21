EntityEvents.death(event => {
	const killer = event.source.player
	if (!killer || getFungifiedStage(killer) == 0 || getFungifiedStage(killer) >= getFungifiedStageMax()) return
    addFungifiedEvolution(killer, 1)
})