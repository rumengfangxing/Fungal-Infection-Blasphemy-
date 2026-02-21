global.ForgeLivingHurtEvent = event => {
	handleFungifiedPlayerAttack(event)
	handleFungifiedPlayerHurt(event)
}

function handleFungifiedPlayerAttack(event) {
	const target = event.entity
	const source = event.source
	if (!source) return
	const attacker = source.getPlayer()
	if (!attacker || getFungifiedStage(attacker) == 0) return
	if (isSporeMob(target)) return

	if (!target.hasEffect('spore:mycelium_ef')) {
		addLivingEffect(target, 'spore:mycelium_ef', 1, 8 * 20)
		return
	}

	const mycelium = target.getEffect('spore:mycelium_ef')
	let amplifier = mycelium.getAmplifier() + 1
	let duration = mycelium.getDuration()

	event.amount *= FUNGIFIED_DAMAGE_MUL * amplifier + 1

	if (duration >= 30 * 20 && duration < 40 * 20 && amplifier < 5) {
		duration = 8 * 20
		amplifier += 1
	} else {
		duration = Math.min(40 * 20, duration + (8 * 20))
	}
	addLivingEffect(target, 'spore:mycelium_ef', amplifier, duration)
}

function handleFungifiedPlayerHurt(event) {
	const entity = event.entity
	const source = event.source
	if (!entity || !entity.isPlayer()) return

	const stage = getFungifiedStage(entity)
	if (stage == 0) return
	
	if (isFreezeDamage(source)) {
		event.amount *= FREEZE_DAMAGE_MUL + 1
		return
	} 
	
	if (stage >= 5) {
		event.amount = Math.min(event.amount, 20)
		return
	}
}