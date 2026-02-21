NetworkEvents.dataReceived("kubejs:fungified_skill_health", (event) => {
    const { player } = event
    if (getFungifiedStage(player) < 3) {
        player.setStatusMessage(Text.translate('skill.fungified.health.failed.stage'))
        return
    }

    const skillCd = player.persistentData.getInt(SKILL_HEALTH_CD_KEY) - player.age
    if (skillCd > 0) {
        player.setStatusMessage(Text.translate('skill.fungified.health.failed.cooldown', (skillCd / 20).toFixed(2)))
        return
    }

    const biomass = player.persistentData.getInt(BIOMASS_KEY)
    if (biomass < SKILL_HEALTH_BIOMASS_EXPEND) {
        player.setStatusMessage(Text.translate('skill.fungified.health.failed.biomass', SKILL_HEALTH_BIOMASS_EXPEND))
        return
    }

    player.setHealth(player.getMaxHealth())
    player.getActiveEffects().forEach(effect => {
        if (!effect.effect.isBeneficial()) {
            player.removeEffect(effect.effect)
        }
    })
    addFungifiedBiomass(player, -SKILL_HEALTH_BIOMASS_EXPEND)
    player.persistentData.putInt(SKILL_HEALTH_CD_KEY, player.age + SKILL_HEALTH_CD)
    player.setStatusMessage(Text.translate('skill.fungified.health.success'))
})