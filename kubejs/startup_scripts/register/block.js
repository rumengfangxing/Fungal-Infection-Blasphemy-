StartupEvents.registry('block', event => {
	event.create('fib:timeless_sand','falling')
		.soundType('soul_sand')
		.hardness(5)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('minecraft:mineable/shovel')
		.tagBlock('minecraft:needs_stone_tool')
})