StartupEvents.registry('block', event => {
	event.create('fib:timeless_sand','falling')
		.soundType('soul_sand')
		.hardness(8)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('minecraft:mineable/shovel')
		.tagBlock('minecraft:needs_stone_tool')
		.textureAll('fib:block/timeless_sand')
})
//如梦玩偶
StartupEvents.registry("block", event => {
  event.create("fib:ru_meng","cardinal").defaultCutout()
})