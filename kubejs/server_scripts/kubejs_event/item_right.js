ItemEvents.rightClicked(event => {
	const { player, item, hand } = event
	const handler = itemRightHandlers[item.id]

    if (!handler) return
	handler(event)
	
	if (hand == 'main_hand') player.swing()
})

const itemRightHandlers = {
	// 万灵药
	'goety:undeath_potion': function(event) {
		const { player } = event
		if (getFungifiedStage(attacker) == 0) return
		player.setStatusMessage(Text.translate('item.goety.undeath_potion.tip.failed'))
		event.cancel()
	},
	// 真菌化道具
	'fib:fungified_potion': function(event) {
		const { player, item } = event
		if (player.nbt?.ForgeCaps['goety:lichdom']?.lichdom == 1) {
			player.setStatusMessage(Text.translate('item.fib.fungified_potion.tip.failed.lichdom'))
			return
		}
		if (getFungifiedStage(player) != 0) {
			player.setStatusMessage(Text.translate('item.fib.fungified_potion.tip.failed.already'))
			return
		}
		item.shrink(1)
		setFungifiedStage(player, 1)
		addFungifiedBiomass(player, FUNGIFIED_STAGE_ATTR_MAP[1].biomass)
		player.setStatusMessage(Text.translate('item.fib.fungified_potion.tip.success'))
	},
	// 传送用
    'fib:frozen_key': function(event) {
        const { player } = event
        const targetDim = 'fib_dimensions:frozen_land_dimension'
        if (player.level.dimension == targetDim) return
        player.teleportTo(targetDim, player.x, player.y, player.z, 0, 0)
    },
	 'fib:overworld_key': function(event) {
        const { player } = event
        const targetDim = 'minecraft:overworld'
        if (player.level.dimension == targetDim) return
        player.teleportTo(targetDim, player.x, player.y, player.z, 0, 0)
    },
	'fib:the_end_key': function(event) {
        const { player } = event
        const targetDim = 'minecraft:the_end'
        if (player.level.dimension == targetDim) return
        player.teleportTo(targetDim, player.x, player.y, player.z, 0, 0)
    },
	 'fib:the_nether_key': function(event) {
        const { player } = event
        const targetDim = 'minecraft:the_nether'
        if (player.level.dimension == targetDim) return
        player.teleportTo(targetDim, player.x, player.y, player.z, 0, 0)
    },
	//时空之剑
    /*'fib:time_sword': function(event) {
    const { player, level } = event
    const fixedX = player.x
    const fixedY = player.y
    const fixedZ = player.z
    const posStr = `${fixedX},${fixedY},${fixedZ}`

    // 打上标记+降速
    level.runCommandSilent(`tag @e[distance=..16,x=${fixedX},y=${fixedY},z=${fixedZ}] add time_slow_tag`)
    level.runCommandSilent(`setTickrate entity @e[tag=time_slow_tag] 5`)

    level.schedule(60, () => {
        level.runCommandSilent(`setTickrate entity @e[tag=time_slow_tag] 20`)
        level.runCommandSilent(`tag @e[tag=time_slow_tag] remove time_slow_tag`)
    })
},*/
}