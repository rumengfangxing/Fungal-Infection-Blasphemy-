StartupEvents.registry('item', event => {
    // 技巧-弓
	event.create('fib:skill_heavy_bow')
		.rarity('epic')
		.tag('curios:skill')
		.attachCapability(
			curiosWithAttributes([
				[global.ATTR_HEAVY_BOW_ARROW_DAMAGE, 1],
				[global.ATTR_HEAVY_BOW_ARROW_VELOCITY, 1],
				[global.ATTR_HEAVY_BOW_DRAW_SPEED, -0.5]
			])
		)
	event.create('fib:skill_powerful_shooting')
		.rarity('epic')
		.tag('curios:skill')
		.attachCapability(
			curiosWithAttributes([
				[global.ATTR_POWERFUL_SHOOTING_ARROW_DAMAGE, 0.3],
				[global.ATTR_POWERFUL_SHOOTING_ARROW_VELOCITY, 0.3]
			])
		)
	event.create('fib:skill_rapid_continuous_shooting')
		.rarity('epic')
		.tag('curios:skill')
		.attachCapability(
			curiosWithAttributes([
				[global.ATTR_AUTO_SHOOTING_AUTO_FIRE, 1],
				[global.ATTR_AUTO_SHOOTING_DRAW_SPEED, 0.75]
			])
		)
	// 技巧-枪
	event.create('fib:skill_headshot')
		.rarity('epic')
		.tag('curios:skill')
		.attachCapability(
			curiosWithAttributes([
				[global.ATTR_HEADSHOT_HEADSHOT_MULTIPLIER, 1]
			])
		)
	event.create('fib:skill_shooter_experience')
		.rarity('epic')
		.tag('curios:skill')
		.attachCapability(
			curiosWithAttributes([
				[global.ATTR_SHOOTER_EXPERIENCE_ADS_TIME,-0.3],
                [global.ATTR_SHOOTER_EXPERIENCE_RELOAD_TIME,-0.3],
                [global.ATTR_SHOOTER_EXPERIENCE_EFFECTIVE_RANGE,0.3],
                [global.ATTR_SHOOTER_EXPERIENCE_ROUNDS_PER_MINUTE,0.3],
                [global.ATTR_SHOOTER_EXPERIENCE_SILENCENEW,0.5],
                [global.ATTR_SHOOTER_EXPERIENCE_RECOIL,-0.3],
                [global.ATTR_SHOOTER_EXPERIENCE_RECOIL_PITCH,-0.3],
                [global.ATTR_SHOOTER_EXPERIENCE_MOVE_SPEED,0.3]
			])
		)
	event.create('fib:skill_magic_magazine')
		.rarity('epic')
		.tag('curios:skill')
		.attachCapability(
			curiosWithAttributes([
				[global.ATTR_MAGIC_MAGAZINE_BULLET_GUNDAMAGE, 0.5],
				[global.ATTR_MAGIC_MAGAZINE_ARMOR_IGNORE, 0.75],
				[global.ATTR_MAGIC_MAGAZINE_MAGAZINE_CAPACITY, 1],
				[global.ATTR_MAGIC_MAGAZINE_ROUNDS_PER_MINUTE, 0.5]
			])
		)
	event.create('fib:skill_dead_eye')
		.rarity('epic')
		.tag('curios:skill')
		.attachCapability(
			curiosWithAttributes([
				[global.ATTR_DEAD_EYE_ADS_TIME, -0.5],
				[global.ATTR_DEAD_EYE_HEADSHOT_MULTIPLIER, 2]
			])
		)
	
	// 技巧-巫
	event.create('fib:skill_economize')
		.rarity('epic')
		.tag('curios:skill')
		.attachCapability(
			curiosWithAttributes([
				[global.ATTR_ECONOMIZE_SOUL_INCREASE_EFFICIENCY, 0.2],
				[global.ATTR_ECONOMIZE_SOUL_DECREASE_REDUCTION, 0.2],
				[global.ATTR_ECONOMIZE_SOUL_STEALING, 0.2]
			])
		)
	event.create('fib:skill_expediency')
		.rarity('epic')
		.tag('curios:skill')
		.attachCapability(
			curiosWithAttributes([
				[global.ATTR_EXPEDIENCY_CAST_DURATION, 1],
				[global.ATTR_EXPEDIENCY_SPELL_COOLDOWN, 0.3]
			])
		)
	event.create('fib:skill_forbidden_spell')
		.rarity('epic')
		.tag('curios:skill')
		.attachCapability(
			curiosWithAttributes([
				[global.ATTR_FORBIDDEN_SPELL_CAST_DURATION, -0.5],
				[global.ATTR_FORBIDDEN_SPELL_SPELL_POWER, 2],
				[global.ATTR_FORBIDDEN_SPELL_SPELL_POWER_MULTIPLIER, 1],
				[global.ATTR_FORBIDDEN_SPELL_SPELL_RADIUS, 3],
				[global.ATTR_FORBIDDEN_SPELL_SPELL_RANGE, 3]
			])
		)
	event.create('fib:skill_potent')
		.rarity('epic')
		.tag('curios:skill')
		.attachCapability(
			curiosWithAttributes([
				[global.ATTR_POTENT_SPELL_RANGE, 0.5],
				[global.ATTR_POTENT_SPELL_POWER, 1],
				[global.ATTR_POTENT_SPELL_POWER_MULTIPLIER, 0.3]
			])
		)

	// 技巧-战(通用)
	event.create('fib:skill_atrocity')
		.rarity('epic')
		.tag('curios:skill')
		.attachCapability(
			curiosWithAttributes([
				[global.ATTR_ATROCITY_CRIT_DAMAGE, 0.75]
			])
		)
	event.create('fib:skill_crit')
		.rarity('epic')
		.tag('curios:skill')
		.attachCapability(
			curiosWithAttributes([
				[global.ATTR_CRIT_CRIT_CHANCE, 0.8]
			])
		)
	event.create('fib:skill_dexterity')
		.rarity('epic')
		.tag('curios:skill')
		.attachCapability(
			curiosWithAttributes([
				[global.ATTR_DEXTERITY_STEALTH, 0.3],
				[global.ATTR_DEXTERITY_STEP_HEIGHT, 1],
				[global.ATTR_DEXTERITY_SWIM_SPEED, 0.3],
				[global.ATTR_DEXTERITY_MOVEMENT_SPEED, 0.03]
			])
		)
	event.create('fib:skill_pierce')
		.rarity('epic')
		.tag('curios:skill')
		.attachCapability(
			curiosWithAttributes([
				[global.ATTR_PIERCE_PROT_SHRED, 0.5],
				[global.ATTR_PIERCE_PROT_PIERCE, 8],
				[global.ATTR_PIERCE_ARMOR_SHRED, 0.5],
				[global.ATTR_PIERCE_ARMOR_PIERCE, 12]
			])
		)
})