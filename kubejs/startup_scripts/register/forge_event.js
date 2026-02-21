ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingChangeTargetEvent', event => {
	if (event.getEntity() && !event.getEntity().getLevel().isClientSide()) {
		global.ForgeLivingChangeTargetEvent(event)
	}
})

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHurtEvent', event => {
	if (event.getEntity() && !event.getEntity().getLevel().isClientSide()) {
		global.ForgeLivingHurtEvent(event)
	}
})

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingAttackEvent', event => {
	if (event.getEntity() && !event.getEntity().getLevel().isClientSide()) {
		global.ForgeLivingAttackEvent(event)
	}
})

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.MobEffectEvent$Applicable', event => {
    if (event.entity && event.entity.isPlayer() && !event.getEntity().getLevel().isClientSide()) {
        global.ForgePlayerEffectApplicableEvent(event)
    }
})

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHealEvent', event => {
    if (event.getEntity() && !event.getEntity().getLevel().isClientSide()) {
        global.ForgeLivingHealEvent(event)
    }
})