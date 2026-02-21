ItemEvents.modification(event => {
    // 狂暴血液样本
    event.modify('spore:bezerk_syringe', item => {
        item.attachCapability(
            curiosWithAttributes([
				[global.ATTR_BEZERK_SYRINGE_ATTACK_DAMAGE, 0.1],
				[global.ATTR_BEZERK_SYRINGE_ATTACK_SPEED, 0.1]
			], 20)
        )
    })

    // 钙化血液样本
    event.modify('spore:calcified_syringe', item => {
        item.attachCapability(
            curiosWithAttributes([
				[global.ATTR_CALCIFIED_SYRINGE_KNOCKBACK, 1]
			])
        )
    })

    // 焦化血液样本
    event.modify('spore:charred_syringe', item => {
        item.attachCapability(
            curiosWithAttributes([], 20)
        )
    })

    // 渊流血液样本
    event.modify('spore:drowned_syringe', item => {
        item.attachCapability(
            curiosWithAttributes([], 20)
        )
    })

    // 强壮血液样本
    event.modify('spore:reinforced_syringe', item => {
        item.attachCapability(
            curiosWithAttributes([
				[global.ATTR_REINFORCED_SYRINGE_ARMOR, 0.2]
			], 20)
        )
    })

    // 吸血血液样本
    event.modify('spore:vampiric_syringe', item => {
        item.attachCapability(
            curiosWithAttributes([
				[global.ATTR_VAMPIRIC_SYRINGE_LIFE_STEAL, 0.15]
			])
        )
    })
})