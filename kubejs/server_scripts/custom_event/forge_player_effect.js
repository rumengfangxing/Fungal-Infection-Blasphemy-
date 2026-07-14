// ====================================================
// MobEffectEvent$Applicable 处理
// ====================================================
// 职责：
//   1. 冰冻抗性 → spore:starvation 直接免疫（Applicable）
//   2. 冰冻抗性 → spore:frostbite 等级免疫（Applicable）
//   3. 真菌化阶段 → 真菌效果免疫（Applicable）
// ====================================================

// MobEffectEvent$Applicable：效果即将施加时触发
global.ForgePlayerEffectApplicableEvent = event => {
    handleFrostResistanceImmunity(event)
    handleFungifiedPlayerEffectImmunity(event)
}

// ====================================================
// 1. 冰冻抗性 → spore:starvation 完全免疫
// ====================================================
// 逻辑：实体拥有冰冻抗性时（任意等级），无条件拒绝
//       spore:starvation 施加。
// 不限玩家，所有 LivingEntity 均生效。
// ====================================================

// ====================================================
// 2. 冰冻抗性 → spore:frostbite 等级免疫
// ====================================================
// 逻辑：实体拥有冰冻抗性时，若其等级 >= frostbite 等级，
//       则拒绝 frostbite 施加（DENY）。
// 不限玩家，所有 LivingEntity 均生效。
// 例：冰冻抗性 I → 免疫 frostbite I
//     冰冻抗性 II → 免疫 frostbite I ~ II
// ====================================================

function handleFrostResistanceImmunity(event) {
    const entity = event.entity
    if (!entity) return

    const effectInstance = event.getEffectInstance()
    if (!effectInstance) return

    // 获取效果 lang key，如 "effect.spore.frostbite"
    const effectId = effectInstance.getEffect().getDescriptionId()

    // 检查实体是否有冰冻抗性效果
    const frostResistance = entity.getEffect('fib:frost_resistance')
    if (!frostResistance) return

    // 有冰冻抗性直接免疫任意等级的 spore:starvation
    if (effectId === 'effect.spore.starvation') {
        event.setResult('DENY')
        return
    }

    // 冰冻抗性等级 >= frostbite 等级时免疫
    if (effectId === 'effect.spore.frostbite' && frostResistance.getAmplifier() >= effectInstance.getAmplifier()) {
        event.setResult('DENY')
    }
}

// ====================================================
// 3. 真菌化效果免疫
// ====================================================
// 逻辑：真菌化玩家（stage > 0）免疫特定真菌负面效果
//       （mycelium_ef、corrosion、madness）
// 注意：仅玩家生效，非玩家实体跳过
// ====================================================

function handleFungifiedPlayerEffectImmunity(event) {
    const player = event.entity
    if (!player || !player.isPlayer()) return
    if (getFungifiedStage(player) == 0) return
    const effectId = event.getEffectInstance().getEffect().getDescriptionId()

    if (!FUNGIFIED_IMMUNITY_EFFECTS.includes(effectId)) return
    event.setResult('DENY')
}
