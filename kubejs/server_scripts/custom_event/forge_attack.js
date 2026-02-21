global.ForgeLivingAttackEvent = event => {
	handleFungifiedPlayerAttackImmunity(event)
	handlePlayerItemOnHit(event)
	handlePlayerCuriosOnHit(event)
}


function handleFungifiedPlayerAttackImmunity(event) {
	const entity = event.entity
	const source = event.source
	if (!entity || !entity.isPlayer()) return
	if (!source) return
	if (getFungifiedStage(entity) == 0) return
	
	if (!FUNGIFIED_IMMUNITY_DAMAGE_TYPES.includes(source.type().msgId())) return
	event.setCanceled(true)
}

function handlePlayerItemOnHit(event) {
	const { entity, source } = event
	if (!source || !entity) return
	const player = source.getPlayer()
	if (!player) return
	const itemStack = player.getHeldItem('main_hand')
	if (!itemStack) return
	const handler = playerItemOnHitHandlers[itemStack.id]
	if (!handler) return
	handler(player, entity)
}

function handlePlayerCuriosOnHit(event) {
	const { entity, source } = event
	if (!source || !entity) return
	const player = source.getPlayer()
	if (!player) return
	const equippedCurios = getPlayerCuriosInventory(player).getEquippedCurios()
	const size = equippedCurios.getSlots()
	for (let i = 0; i < size; i++) {
		let curiosItemStack = equippedCurios.getStackInSlot(i)
		let handler = playerCuriosOnHitHandlers[curiosItemStack.id]
		if (handler) handler(player, entity)
	}
}

// ==================================

// 主手持特定物品时攻击敌人触发
const playerItemOnHitHandlers = {
	// 生命活性物质注射器
	'fib:life_active_syringe': function(player, target) {
		addLivingEffect(target, 'minecraft:regeneration', 20, 30 * 20)
		addLivingEffect(target, 'attributeslib:vitality', 10, 20 * 20)
	},
	// 永冻冰核
	'enigmaticdice:permafrost': function(player, target) {
		addLivingEffect(target, 'goety:freezing', 3, 15 * 20)
	}
}

// 佩戴特定饰品时攻击敌人触发
const playerCuriosOnHitHandlers = {
	// 通用技巧:暴行
	'fib:skill_atrocity': function(player, target) {
		addLivingEffect(target, 'attributeslib:grievous', 2, 8 * 20)
	},
    // 腐化血液样本
    'spore:rotten_syringe': function(player, target) {
        addLivingEffect(target, 'minecraft:wither', 3, 5 * 20)
    },
	// 剧毒血液样本
    'spore:toxic_syringe': function(player, target) {
        addLivingEffect(target, 'minecraft:poison', 2, 5 * 20)
    }
}