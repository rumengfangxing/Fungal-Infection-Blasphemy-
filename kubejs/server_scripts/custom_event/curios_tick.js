global.CuriosTickEvent = (slotContext, stack) => {
    const entity = slotContext.entity()
    if (entity.isPlayer()) {
        const handler = playerCuriosTickHandler[stack.id]
        if (handler) handler(entity, stack)
    }
}

const curiosResidentEffectDuration = 15 * 20


// 佩戴特定饰品时间隔一定Tick触发
const playerCuriosTickHandler = {
    // 狂暴血液样本
    'spore:bezerk_syringe': function(player, stack) {
        addLivingEffect(player, 'minecraft:haste', 1, curiosResidentEffectDuration)
        addLivingEffect(player, 'minecraft:strength', 1, curiosResidentEffectDuration)
    },
    // 焦化血液样本
    'spore:charred_syringe': function(player, stack) {
        addLivingEffect(player, 'minecraft:fire_resistance', 1, curiosResidentEffectDuration)
    },
    // 渊流血液样本
    'spore:drowned_syringe': function(player, stack) {
        addLivingEffect(player, 'minecraft:night_vision', 1, curiosResidentEffectDuration)
        addLivingEffect(player, 'minecraft:water_breathing', 1, curiosResidentEffectDuration)
    },
    // 强壮血液样本
    'spore:reinforced_syringe': function(player, stack) {
        addLivingEffect(player, 'minecraft:absorption', 1, curiosResidentEffectDuration)
    }
}