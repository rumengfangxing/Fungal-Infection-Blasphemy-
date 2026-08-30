// ============ Goety 自定义研究卷轴(测试) ============
// 已改为真正的 Goety Scroll 物品,此文件不再需要注册研究或模拟右键:
//
// 1. 研究注册    → startup_scripts/register/item.js 顶层
//    goetyResearch.registerResearch('fib:fungal_knowledge')
//    (startup 时机早于物品创建与玩家读档,保证 JEI 引用比较和存档反查)
// 2. 卷轴物品    → startup_scripts/register/item.js
//    event.create('fib:fungal_scroll', 'kubejs_goety:scroll').research('fib:fungal_knowledge')
// 3. 右键学习    → 由 Goety Scroll 原生行为处理:未学则消耗+授予,
//    消息键 info.goety.research.fib:fungal_knowledge(见 kubejs/assets/fib/lang/zh_cn.json)
// 4. 仪式配方    → 配方的 "research" 字段填 'fib:fungal_knowledge',
//    未学习时祭坛仪式不生效,且 JEI 配方页会显示所需卷轴

// 若需自定义前置(如需要先学会 A 才能学 B),可在 ItemEvents.rightClicked 里
// 用 goetyResearch.hasResearch(player, 'fib:A') 检查后阻止,但不要重复 grantResearch
