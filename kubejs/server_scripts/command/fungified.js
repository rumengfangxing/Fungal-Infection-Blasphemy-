ServerEvents.commandRegistry(event => {
	const { commands, arguments } = event

	event.register(commands.literal('fungified_stage')
		.requires(src => src.hasPermission(2))
		.then(commands.literal('set')
			.then(commands.argument('target', arguments.PLAYER.create(event))
				.then(commands.argument('value', arguments.INTEGER.create(event))
					.executes(ctx => {
						let target = ctx.source.server.getPlayer(arguments.PLAYER.getResult(ctx, 'target'))
						let value = arguments.INTEGER.getResult(ctx, 'value')
						setFungifiedStage(target, value)
						target.displayClientMessage(Text.translate('command.fungified.stage', target.profile.name, value), true)
						return 1
					})
				)
			)
		)
	)

	event.register(commands.literal('fungified_biomass')
		.requires(src => src.hasPermission(2))
		.then(commands.literal('set')
			.then(commands.argument('target', arguments.PLAYER.create(event))
				.then(commands.argument('value', arguments.INTEGER.create(event))
					.executes(ctx => {
						let target = ctx.source.server.getPlayer(arguments.PLAYER.getResult(ctx, 'target'))
						let value = arguments.INTEGER.getResult(ctx, 'value')

						setFungifiedBiomass(target, value)
						target.displayClientMessage(Text.translate('command.fungified.biomass', target.profile.name, value), true)
						return 1
					})
				)
			)
		)
	)

	event.register(commands.literal('fungified_evolution')
		.requires(src => src.hasPermission(2))
		.then(commands.literal('set')
			.then(commands.argument('target', arguments.PLAYER.create(event))
				.then(commands.argument('value', arguments.INTEGER.create(event))
					.executes(ctx => {
						let target = ctx.source.server.getPlayer(arguments.PLAYER.getResult(ctx, 'target'))
						let value = arguments.INTEGER.getResult(ctx, 'value')
						setFungifiedEvolution(target, value)
						target.displayClientMessage(Text.translate('command.fungified.evolution', target.profile.name, value), true)
						return 1
					})
				)
			)
		)
	)
})