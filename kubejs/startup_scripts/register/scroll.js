// ============ Goety 自定义研究卷轴(自包含) ============
// 依赖 kubejs_goety 1.1.0+ 的卷轴支持
//
// 机制说明:
// - 研究(Research)只是 id 字符串,注册进 ResearchList 静态列表;
//   玩家存档只存 id,读档时反查,因此必须在读档前注册 → startup 顶层时机满足
// - 物品类型 'kubejs_goety:scroll' 创建的是真正的 Goety Scroll 类物品:
//   右键原生学习/消耗,tooltip 原生,JEI 仪式配方页会显示所需卷轴
//   (Goety 的 JEI 只展示 ResearchScroll 子类物品,普通 KubeJS Item 无法显示)
// - 语言键由模组自动添加(按当前语言中/英默认文案),无需在此注册:
//   右键消息 info.goety.research.<id>、tooltip 介绍 info.goety.items.<id>、
//   使用提示 info.goety.items.scroll(模组 lang 自带)

// 1. 注册研究(顶层代码,先于物品创建与玩家读档)
goetyResearch.registerResearch('fib:fungal_knowledge')   // 菌染知识
goetyResearch.registerResearch('fib:soul_research')      // 灵魂研究(初等灵魂知识卷轴)

// 2. 注册卷轴物品(类型 kubejs_goety:scroll)
StartupEvents.registry('item', event => {
	event.create('fib:soul_research_scroll', 'kubejs_goety:scroll')
		.research('fib:soul_research')                  // 绑定研究,需在步骤 1 之后
		.maxStackSize(1).rarity('epic')                    // 不可堆叠,史诗稀有度
		.consumable(false)                                 // false则不消耗,卷轴可反复使用
})
// 注意:已习得的研究再右键不会消耗物品(Goety 原版行为,显示 already 提示)

// ==========================================
// 配套:仪式配方前置
// ==========================================
// 在仪式配方 JSON 的 "research" 字段填 'fib:fungal_knowledge':
// - 未习得该研究时,祭坛仪式无法生效(gate 在 DarkAltarBlockEntity 中检查)
// - JEI 仪式配方页会显示所需的这张卷轴
//
// 如需前置研究(先学 A 才能学 B),可在此文件的 server 端脚本
// (server_scripts/) 中用 ItemEvents.rightClicked + goetyResearch.hasResearch 拦截,
// 但不要重复 grantResearch —— 原生 use 已处理学习与消耗
