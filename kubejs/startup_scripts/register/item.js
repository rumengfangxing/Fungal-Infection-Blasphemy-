StartupEvents.registry('item', event => {
	// 材料
	event.create('fib:fungified_potion').rarity('epic')
	event.create('fib:thestarofliferhythm').rarity('epic')
	event.create('fib:essenceoflife').rarity('epic')
	event.create('fib:armistice').rarity('epic')
	event.create('fib:part_of_armistice')
	event.create('fib:small_pinch_of_gunpowder')
	event.create('fib:shot_pellets')
	event.create('fib:pressed_powder')
	event.create('fib:bullet_head')
    event.create('fib:primer')
    event.create('fib:high_explosive_unit')
    event.create('fib:high_explosive_casing')
    event.create('fib:high_energy_gunpowder')
    event.create('fib:gunpowder')
    event.create('fib:sniper_rifle_bullet_casing')
    event.create('fib:cooling_unit')
    event.create('fib:pressure_tank')
    event.create('fib:shotgun_shell_housing')
    event.create('fib:shotgun_paper_tube')
    event.create('fib:moist_gunpowder')
    event.create('fib:unfinished_energy_tank')
    event.create('fib:small_casing')
	event.create('fib:casing')
	event.create('fib:small_piece_of_paper')
	event.create('fib:t1_equipment_module')
	event.create('fib:t2_equipment_module')
	event.create('fib:bio_equipment_module')
	event.create('fib:bio_equipment_module_0').glow(true)
	event.create('fib:h_a_equipment_module')
	event.create('fib:spec_equipment_module')
	event.create('fib:echo_equipment_module')
	event.create('fib:avi_equipment_module')
	event.create('fib:uncompleted_module')
	event.create('fib:saltpeter')
	event.create('fib:putrid_substance')




		
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
	event.create('fib:time_sword', 'sword')
		.rarity('epic')
		.maxDamage(16)
		.attackDamageBaseline(6)
	

	//维度传送物品
   	event.create('fib:frozen_key').rarity('epic')
	event.create('fib:overworld_key').rarity('epic')
	event.create('fib:the_end_key').rarity('epic')
	event.create('fib:the_nether_key').rarity('epic')
})

