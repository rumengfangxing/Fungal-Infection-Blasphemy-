ItemEvents.foodEaten(event => {
    const { player } = event
    if (!player) return
	if (getFungifiedStage(player) == 0) return
	
	const count = countPlayerEquippedCurios(player, 'blood')
	if (count == 0) return
	
	addLivingEffect(player, 'spore:symbiosis', count * 3, 15 * 60 * 20)
})


ItemEvents.foodEaten(event => {
	const { item } = event
	const handler = foodEatenHandlers[item.id]

    if (!handler) return
	handler(event)
})

const foodEatenHandlers = {
	// 腐生质
    'spore:biomass': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 1)
    },
	// 看板娘
	'fib:fib_logo': function(event) {
		const { player } = event
		player.tell(Text.translate('item.fib.fib_logo.message'))
		addFungifiedBiomass(player, 10)
	},
	// 增加100点生物质的道具
	'fib:concentrated_biomass': function(event) {
		const { player } = event
		addFungifiedBiomass(player, 100)
	}
}
