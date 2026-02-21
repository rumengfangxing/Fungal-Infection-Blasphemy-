function initFungifiedEvolution(player, max, stage) {
	sendFungifiedEvolutionToClient(player, player.persistentData.getInt(EVOLUTION_KEY), max, stage)
}

function setFungifiedEvolution(player, value) {
	const stage = getFungifiedStage(player)
	const stageAttr = FUNGIFIED_STAGE_ATTR_MAP[stage]
	const evolution = Math.max(0, value)
	
	if (stage < Object.keys(FUNGIFIED_STAGE_ATTR_MAP).length - 1 && stageAttr.evolution > 0 && evolution >= stageAttr.evolution) {
		setFungifiedStage(player, stage + 1)
	} else {
		player.persistentData.putInt(EVOLUTION_KEY, evolution)
		sendFungifiedEvolutionToClient(player, evolution, stageAttr.evolution, stage)
	}
}

function addFungifiedEvolution(player, value) {
	const evolution = player.persistentData.getInt(EVOLUTION_KEY)
	setFungifiedEvolution(player, evolution + value)
}

function resetFungifiedEvolutionSystem(player) {
	player.persistentData.putInt(EVOLUTION_KEY, 0)
	sendFungifiedEvolutionToClient(player, 0, 0, 0)
}

function sendFungifiedEvolutionToClient(player, evolution, max, stage) {
	player.sendData("kubejs:fungified_evolution_change", { 
		evolution: evolution,
		max: max, 
		stage: stage
	})
}