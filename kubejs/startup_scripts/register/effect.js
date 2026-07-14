// ====================================================
// 效果注册
// ====================================================

// 冰冻抗性
// 自身不产生效果，配合 ForgePlayerEffectApplicableEvent 提供：
//   1. 对 spore:frostbite 的等级免疫（拦截施加）
//   2. 对 spore:starvation 的等级清除（每秒检查移除）
StartupEvents.registry('mob_effect', event => {
    event.create('fib:frost_resistance')
        .color(0x88DDFF)    // 浅蓝
        .beneficial()
})
