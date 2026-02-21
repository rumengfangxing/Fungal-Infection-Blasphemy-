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
		'spore:charred_syringe'
	]),
	event.add('curios:curio',[
		'enigmaticaddons:totem_of_malice',
		'spore:gas_mask'
	])

	
	
})