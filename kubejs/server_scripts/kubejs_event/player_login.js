PlayerEvents.loggedIn(event => {
    const { player, server } = event
	
	initFungifiedSystem(player)
	
	server.scheduleInTicks(20, (callback) => {
		if (player.persistentData.contains('last_health')) {
			player.setHealth(player.persistentData.getFloat('last_health'))
		}
		
		if (!player.persistentData.getBoolean('first_join')) {
			player.inventory.clear()
			player.give(Item.of('enigmaticlegacy:unwitnessed_amulet'))
			player.give(Item.of('goety:totem_of_roots'))
			player.give(Item.of('touhou_little_maid:smart_slab_init', '{InitMaidOwner:[]}'))
			player.give(Item.of('goeticlegacy:old_world_echo', '{OneUse:1b,Rarity:"common",SourceType:"starter",State:1,TemplateName:"starter_house",display:{Lore:[\'{"italic":false,"color":"white","extra":[{"text":""},{"color":"white","text":"丑陋的临时据点"}],"text":""}\']}}'))
			player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"goety:black_book"}'))
			player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"goety:witches_brew"}'))
			player.give(Item.of('sophisticatedbackpacks:backpack'))
			addLivingEffect(player, 'minecraft:resistance', 5, 3 * 60 * 20)
			addLivingEffect(player, 'minecraft:invisibility', 10, 5 * 60 * 20)
			checkAndEquipCursedRing(player)
			player.persistentData.putBoolean('first_join', true)
		}
	})
})

PlayerEvents.loggedOut(event => {
	const { player } = event
	player.persistentData.putFloat('last_health', player.getHealth())
})