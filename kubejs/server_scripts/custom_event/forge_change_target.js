/**
 * @param {Internal.LivingChangeTargetEvent} event
 */
global.ForgeLivingChangeTargetEvent = event => {
	handleSporeIgnoreFungifiedPlayer(event)
}

/**
 * @param {Internal.LivingChangeTargetEvent} event
 */
function handleSporeIgnoreFungifiedPlayer(event) {
    const { entity, newTarget, originalTarget } = event

    if (!isSporeMob(entity)) return

    if (!newTarget || !newTarget.isPlayer()) return
	if (!originalTarget) return

    if (entity.lastHurtByMob === newTarget || entity.lastHurtByMob === originalTarget) return
    
    if (getFungifiedStage(newTarget) <= 0) return
    event.setNewTarget(null)
}