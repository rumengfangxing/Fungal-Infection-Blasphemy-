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
goetyResearch.registerResearch('fib:soul_research')      // 初级灵魂知识
goetyResearch.registerResearch('fib:advanced_soul_knowledge')  // 进阶灵魂知识
goetyResearch.registerResearch('fib:scientific')// 科学研究
goetyResearch.registerResearch('fib:forging_arts')// 锻造之艺
goetyResearch.registerResearch('fib:summoning')// 唤魔
goetyResearch.registerResearch('fib:balance')// 天平
goetyResearch.registerResearch('fib:reality_creation')// 现实创生
goetyResearch.registerResearch('fib:magic_tools')// 魔法工具
goetyResearch.registerResearch('fib:neural_invasion')// 神经入侵
goetyResearch.registerResearch('fib:consciousness_takeover')// 意识接管
goetyResearch.registerResearch('fib:elemental_magic')// 元素魔导
goetyResearch.registerResearch('fib:elemental_creation')// 元素创生
//古卷
goetyResearch.registerResearch('fib:absolute_evil')// 极恶
goetyResearch.registerResearch('fib:purgatory')// 炼狱
goetyResearch.registerResearch('fib:stars')// 星辰
goetyResearch.registerResearch('fib:ancient_god_forging_fragment')// 古神锻造残章
goetyResearch.registerResearch('fib:old_world_relic')// 旧世遗藏
goetyResearch.registerResearch('fib:demon_gate')// 恶魔门扉
goetyResearch.registerResearch('fib:apocalypse')// 天启
//新卷
goetyResearch.registerResearch('fib:love_machine_flesh')// 爱,机械,血肉
goetyResearch.registerResearch('fib:human_glory')// 人之光辉

// 2. 注册卷轴物品(类型 kubejs_goety:scroll)
StartupEvents.registry('item', event => {
	//初级灵魂知识
	event.create('fib:soul_research_scroll', 'kubejs_goety:scroll')
		.research('fib:soul_research')                  // 绑定研究,需在步骤 1 之后
		.maxStackSize(1).rarity('epic')                    // 不可堆叠,史诗稀有度
		.consumable(false)                                 // false则不消耗,卷轴可反复使用
	// 进阶灵魂知识
	event.create('fib:advanced_soul_knowledge_scroll', 'kubejs_goety:scroll')
		.research('fib:advanced_soul_knowledge')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)   
	// 科学研究
	event.create('fib:scientific_scroll', 'kubejs_goety:scroll')
		.research('fib:scientific')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 锻造之艺
	event.create('fib:forging_arts_scroll', 'kubejs_goety:scroll')
		.research('fib:forging_arts')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 唤魔
	event.create('fib:summoning_scroll', 'kubejs_goety:scroll')
		.research('fib:summoning')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 天平
	event.create('fib:balance_scroll', 'kubejs_goety:scroll')
		.research('fib:balance')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 现实创生
	event.create('fib:reality_creation_scroll', 'kubejs_goety:scroll')
		.research('fib:reality_creation')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 魔法工具
	event.create('fib:magic_tools_scroll', 'kubejs_goety:scroll')
		.research('fib:magic_tools')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 神经入侵
	event.create('fib:neural_invasion_scroll', 'kubejs_goety:scroll')
		.research('fib:neural_invasion')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 意识接管
	event.create('fib:consciousness_takeover_scroll', 'kubejs_goety:scroll')
		.research('fib:consciousness_takeover')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 元素魔导
	event.create('fib:elemental_magic_scroll', 'kubejs_goety:scroll')
		.research('fib:elemental_magic')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 元素创生
	event.create('fib:elemental_creation_scroll', 'kubejs_goety:scroll')
		.research('fib:elemental_creation')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	//古卷
	// 极恶
	event.create('fib:absolute_evil_scroll', 'kubejs_goety:scroll')
		.research('fib:absolute_evil')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 炼狱
	event.create('fib:purgatory_scroll', 'kubejs_goety:scroll')
		.research('fib:purgatory')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 星辰
	event.create('fib:stars_scroll', 'kubejs_goety:scroll')
		.research('fib:stars')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 古神锻造残章
	event.create('fib:ancient_god_forging_fragment_scroll', 'kubejs_goety:scroll')
		.research('fib:ancient_god_forging_fragment')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 旧世遗藏
	event.create('fib:old_world_relic_scroll', 'kubejs_goety:scroll')
		.research('fib:old_world_relic')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 恶魔门扉
	event.create('fib:demon_gate_scroll', 'kubejs_goety:scroll')
		.research('fib:demon_gate')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 天启
	event.create('fib:apocalypse_scroll', 'kubejs_goety:scroll')
		.research('fib:apocalypse')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	//新卷
	// 爱,机械,血肉
	event.create('fib:love_machine_flesh_scroll', 'kubejs_goety:scroll')
		.research('fib:love_machine_flesh')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
	// 人之光辉
	event.create('fib:human_glory_scroll', 'kubejs_goety:scroll')
		.research('fib:human_glory')                
		.maxStackSize(1).rarity('epic')                  
		.consumable(false)
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
