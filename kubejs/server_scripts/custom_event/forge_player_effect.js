global.ForgePlayerEffectApplicableEvent = event => {
	handleFungifiedPlayerEffectImmunity(event)
}

function handleFungifiedPlayerEffectImmunity(event) {
	const player = event.entity
	if (getFungifiedStage(player) == 0) return
	const effectId = event.getEffectInstance().getEffect().getDescriptionId()
	
	if (!FUNGIFIED_IMMUNITY_EFFECTS.includes(effectId)) return
	event.setResult('DENY')
}