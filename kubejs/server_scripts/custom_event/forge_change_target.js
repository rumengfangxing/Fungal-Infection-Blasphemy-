/**
 * @param {Internal.LivingChangeTargetEvent} event
 */
global.ForgeLivingChangeTargetEvent = event => {
	handleSporeIgnoreFungifiedPlayer(event)
	// // 实体交易系统 - 友好生物消除仇恨
	// if (typeof global.handleTraderHostility === 'function') {
	// 	global.handleTraderHostility(event)
	// }
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