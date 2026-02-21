PlayerEvents.tick(event => {
    let { player } = event
    if (player.isFake()) return

    if (player.age % 20 == 0) {
        if (getFungifiedStage(player) != 0) handleFungifiedBiomassExpend(player)
	    handePlayerMainHandItem(player)
    }
})

function handleFungifiedBiomassExpend(player) {
    const biomass = player.persistentData.getInt(BIOMASS_KEY)
	if (biomass <= 5) {
		if (biomass == 0) player.attack(2)
	} else {
        player.foodData.foodLevel = 20
    }
	if (player.age % 600 != 0) return
    addFungifiedBiomass(player, -1)
}

function handePlayerMainHandItem(player) {
    const itemStack = player.getHeldItem('main_hand')
	if (!itemStack) return
    const handler = playerTickMainHandItemHandlers[itemStack.id]
    if (!handler) return
    handler(player)
}

// ===========================================

// 根据玩家主手所持物品间隔一定Tick触发
const playerTickMainHandItemHandlers = {
    // 永冻冰核
	'enigmaticdice:permafrost': function(player) {
		addLivingEffect(player, 'goety:frosty_aura', 3, 15 * 20)
	}
}