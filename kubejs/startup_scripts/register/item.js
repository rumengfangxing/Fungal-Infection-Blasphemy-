StartupEvents.registry('item', event => {
	// 材料
	event.create('fib:fungified_potion').rarity('epic')
	event.create('fib:thestarofliferhythm').rarity('epic')
	event.create('fib:essenceoflife').rarity('epic')
	event.create('fib:armistice').rarity('epic')
	event.create('fib:part_of_armistice')
		
	// 食物
	event.create('fib:fib_logo').food(food => {
		food
			.hunger(6)
			.saturation(6)
			.effect('minecraft:regeneration', 600, 1, 1) // 30s
			.fastToEat()
	})
	event.create('fib:concentrated_biomass').food(food => {
		food
			.hunger(30)
			.saturation(128)
			.effect('minecraft:saturation', 36000, 1, 1) // 30m
			.fastToEat()
	})
	
	// 工具
	event.create('fib:life_active_syringe', 'sword')
		.rarity('epic')
		.maxDamage(5)
		.attackDamageBaseline(1)
	

	//维度传送物品
   	event.create('fib:frozen_key').rarity('epic')
	event.create('fib:overworld_key').rarity('epic')
	event.create('fib:the_end_key').rarity('epic')
	event.create('fib:the_nether_key').rarity('epic')
})

