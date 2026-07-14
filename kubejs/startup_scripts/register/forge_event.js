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
    // 不限玩家，所有 LivingEntity 均触发，各 handler 自行判断实体类型
    if (event.entity && !event.getEntity().getLevel().isClientSide()) {
        global.ForgePlayerEffectApplicableEvent(event)
    }
})

// // 实体交易系统 - 右键生物交互
// ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerInteractEvent$EntityInteract', event => {
//     if (event.getEntity() && !event.getEntity().getLevel().isClientSide()) {
//         global.ForgeEntityInteractEvent(event)
//     }
// })

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingHealEvent', event => {
    if (event.getEntity() && !event.getEntity().getLevel().isClientSide()) {
        global.ForgeLivingHealEvent(event)
    }
})