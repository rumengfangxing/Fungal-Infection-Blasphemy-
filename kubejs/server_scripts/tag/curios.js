ServerEvents.tags('item', event => {
	// 在这里为非私有饰品设置饰品栏
	event.add('curios:blood', [
		'spore:vampiric_syringe',
		'spore:bezerk_syringe',
		'spore:calcified_syringe',
		'spore:rotten_syringe',
		'spore:toxic_syringe',
		'spore:drowned_syringe',
		'spore:reinforced_syringe',
		'spore:charred_syringe',
		'spore:skeletal_syringe'
	]),
	event.add('curios:curio',[
		'enigmaticaddons:totem_of_malice',
		'create_biotech:super_butter'
	]),
	event.add('curios:head',[
		'spore:gas_mask'
	])
	event.add('curios:body',[
		'spore:gas_mask',
		'goety_revelation:eternal_watch'
	])
	event.add('curios:bracelet',[
		'morerelics:moodworm',
        'goety:pendant_of_hunger',
		'goety:amethyst_necklace',
        'goety:sea_amulet',
        'goety:feline_amulet',
        'goety:star_amulet',
        'morerelics:opal_necklace',
        'morerelics:slumbering_amulet',
        'relics:holy_locket',
        'relics:reflection_necklace',
        'artifacts:thorn_pendant',
        'artifacts:panic_necklace',
        'artifacts:flame_pendant',
        'artifacts:cross_necklace',
        'relics:jellyfish_necklace',
        'artifacts:charm_of_sinking',
        'artifacts:shock_pendant'
	])

	
	
})