function initFungifiedSystem(player) {
	if (!player) return

	const stage = getFungifiedStage(player)
	const stageAttr = FUNGIFIED_STAGE_ATTR_MAP[stage]
	
	initFungifiedBiomass(player, stageAttr.biomass, stage)
	initFungifiedEvolution(player, stageAttr.evolution, stage)
	
	applyFungifiedAttributes(player, stageAttr)
}

function getFungifiedStage(player) {
	if (!player) return 0
	return player.persistentData.getInt(FUNGIFIED_KEY)
}

function getFungifiedStageMax() {
	return Object.keys(FUNGIFIED_STAGE_ATTR_MAP).length - 1
}

function setFungifiedStage(player, stage) {
	if (!player) return
	stage = Math.min(getFungifiedStageMax(), stage)
	player.persistentData.putInt(FUNGIFIED_KEY, stage)
	handleFungifiedEvolution(player, stage)
	if (player.persistentData.getInt(FUNGIFIED_HIGHEST_KEY) < stage) {
		player.persistentData.putInt(FUNGIFIED_HIGHEST_KEY, stage)
	}
}

function handleFungifiedEvolution(player, stage) {
	const stageAttr = FUNGIFIED_STAGE_ATTR_MAP[stage]
	applyFungifiedAttributes(player, stageAttr)
	setFungifiedEvolution(player, 0)
	addFungifiedBiomass(player, 0)
	const handler = handleFungifiedStage[stage]
    if (!handler) return
	handler(player)
}


function applyFungifiedAttributes(player, stageAttr) {
	modifyLivingAttribute(player, global.ATTR_FUNGIFIED_HEALTH, stageAttr.health)
	modifyLivingAttribute(player, global.ATTR_FUNGIFIED_DAMAGE, stageAttr.damage)
	modifyLivingAttribute(player, global.ATTR_FUNGIFIED_ARMOR, stageAttr.armor)
	modifyPlayerCuriosSlot(player, global.ATTR_CURIOS_FUNGIFIED_ORGAN, stageAttr.organ)
}


function isSporeMob(entity) {
	return entity && entity.getType().toString().startsWith(SPORE_NAMESPACE)
}

function isFreezeDamage(source) {
	return source && FREEZE_DAMAGE_TYPES.includes(source.type().msgId())
}


const handleFungifiedStage = {
	0: function(player) {
		resetFungifiedBiomassSystem(player)
		resetFungifiedEvolutionSystem(player)
	},
	5: function(player) {
		if (player.persistentData.getInt(FUNGIFIED_HIGHEST_KEY) == 5) return
		player.server.tell(Text.translate('hivemind_summon_message'))
		player.server.players.forEach(p => {
			player.level.playSound(null, p.x, p.y, p.z, 'spore:rebirth', p.getSoundSource(), 1.0, 1.0)
		})
	}
}