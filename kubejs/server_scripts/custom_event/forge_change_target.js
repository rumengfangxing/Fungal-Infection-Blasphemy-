global.ForgeLivingChangeTargetEvent = event => {
	handleSporeIgnoreFungifiedPlayer(event)
}

function handleSporeIgnoreFungifiedPlayer(event) {
	const mob = event.entity
	const target = event.originalTarget

	if (!isSporeMob(mob)) return
	if (!target || !target.isPlayer()) return
	if (getFungifiedStage(target) == 0) return

	event.setNewTarget(null)
}