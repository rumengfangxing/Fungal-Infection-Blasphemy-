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
			addLivingEffect(player, 'minecraft:resistance', 5, 4 * 60 * 20)
			addLivingEffect(player, 'minecraft:invisibility', 10, 10 * 60 * 20)
			checkAndEquipCursedRing(player)
			player.persistentData.putBoolean('first_join', true)
		}
	})
})

PlayerEvents.loggedOut(event => {
	const { player } = event
	player.persistentData.putFloat('last_health', player.getHealth())
})