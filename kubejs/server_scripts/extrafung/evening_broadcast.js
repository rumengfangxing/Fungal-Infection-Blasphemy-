// ============================================================
// evening_broadcast — 末日电台广播系统
// 每游戏日傍晚触发:数据终端 + 新闻 + 贴士
// 数据终端使用 adventure_stage（来自 adventure_zone_tracker.js）
// ============================================================
(function() {
    // ==================== 数据广播模板（按 stage 匹配）====================
    var STAGE_TEMPLATES = [
        { stage: 0, text: "已探明区域感染情况评估分 §7暂时安全§r,无风险区域" },
        { stage: 1, text: "已探明区域感染情况评估分 §e{total}§r,已观测 §e{count}§r 个区域,较为零散,存在隐患" },
        { stage: 2, text: "已探明区域感染情况评估分 §c{total}§r,已追踪 §c{count}§r 个区域,§c基本确定存在核心感染区,请时刻关注§r" },
        { stage: 3, text: "已探明区域感染情况评估分 §c{total}§r,已追踪 §c{count}§r 个区域,§4您的世界已千疮百孔§r" },
        { stage: 4, text: "§4数据终端已断线....最后一条忠告,活下去..." },
    ];

    var SOUND_TEMPLATES = [
        { stage: 0, sound: "create:frogport_catch" },
        { stage: 1, sound: "minecraft:entity.warden.sonic_boom" },
        { stage: 2, sound: "spore:calamity_spawn" },
        { stage: 3, sound: "legendarysurvivaloverhaul:headache_heartbeat" },
        { stage: 4, sound: "legendarysurvivaloverhaul:headache_heartbeat" },
    ];

// ==================== 新闻 + 贴士 ====================
var NEWS_POOL = [
    "爱菌人士正在研究新的真菌美食",
    "生吃真菌食物导致感染的病例已屡见不鲜",
    "相传有人会在亲人临死之际为他们喂下菌丝,这样可以为他们带来第二次生命",
    "灾难之下,人性正在消失！",
    "维度意志与莱特曼银行的合作关系日益巩固",
    "莱特曼对外宣布他们旗下分行的金库将是世界上最坚固的壁垒",
    "罗德岛办事处多处据点沦陷？！人类或将无法迎来黎明",
    "网友点评:虽然迷迭香小姐拥有强大的歼灭作战能力,但照片怎么看都觉得好像是香香软软的小蛋糕",
    "罗德岛制药公司没有药？！员工到底是白衣天使还是黑衣杀手？",
    "爱国者和他的随从们正在雪原巡逻,捍卫这片净土",
    "数年前造成祸端的§c造神计划§r,受害村民预计过万",
    "现在的冥教不能解决灾难,盲目信仰只会导致愚蠢",
    "灾厄宰相:冥教内部与高层已经分崩离析,只剩信徒盲目狂热",
    "维度意志正在大量收集真菌材料,并且给予提交者奖励",
    "首领表示:文礼只是权宜之计,我们真正要做的是打磨手中的利刃",
    "关于§4终末的谣言§r渐起....",
    "经多方研究证明:经安全处理的真菌食品对身体大有益处",
    "养菌场建设引起争论,网友评论:我们连入侵的真菌都杀不完,还要自己养了吃？",
    "首领表示:如果情况进一步恶化,世界可能会迎来§c第二次遗忘§r,我们也要重新建立根据地",
    "首领正在权衡是否应该取消广播,毕竟我们广播越频繁,既定的结局来得越快",
    "在维度意志的帮助下,我们得以从§c唯心主义§r的角度探索世界",
    "首领表示:在明确无法对抗敌人的情况下,我们能做的就是尽可能地杜绝与它们的接触",
    "一名小偷在银行安防升级后前往偷盗,现位于医院抢救,面临截肢风险",
    "网友评价小偷中弹事件:有存活可能吗？",
    "大哥惨死野外,三弟化身野兽,二弟惨遭兄弟相残...一旦脱离文明区,此类事件或将成为普遍现象",
    "营养棒或将成为最具统治力的食物",
    "如梦食品有限公司正在尝试研制各种口味的营养棒和融入药物的营养棒",
    "市民呼吁营养棒工厂应该迁出市外,其散发出的恶臭影响正常生活",
    "如梦回应营养棒工厂外迁建议:拒绝,大量生物质迁入郊区或将为菌群入侵提供温床",
    "xx获评21世纪最佳工程师,其本人的获奖感言:我设计了114514个机关",
    "天意论,进化论,量子论,神意论...关于真菌大爆发起因的观点繁多,可以断定的是,这与数年前秘密进行的§c造神计划§r脱不了干系",
    "《颂乐人偶》大火,我们该如何看待其中所反映的年轻人精神状态？",
    "医学家表明:相信感染得永生就像相信癌细胞可以帮人青春永驻一样荒诞",
    "专家表明:曾遭真菌袭击的个体,会有严重的精神问题",
    "禁止填埋处理感染者尸体法案已全面施行",
    "全面落实城市边缘0观测,不观测不感染的观念已深入人心",
    "我们正在逐步推进向冰封维度迁移,更多的维度之钥和安全传送位点正在被需要",
    "城市边缘零观测政策执行满月,边缘区域异常事件报告率下降67%,但观测站工作人员心理评估合格率同步下降至41%",
    "幸存者聚居地人口登记系统崩溃,官方回应:登记人数已超过系统设计容量的300%,正紧急扩容",
    "冰封维度先遣队传回消息:永久冻土层下发现未知结构,初步判断非自然形成",
    "医疗资源调配新规:非感染者每日营养棒配额下调10%,配给差额将转用于前线抗真菌药物生产",
    "我家邻居上个月还在重症监护室吃流食,这个月居然在街上走路...据说他家里人给他喂了某种菌丝——坊间传言逐渐发酵,罗德岛发表声明辟谣",
    "某聚居地居民联名上书,要求公开§c造神计划§r全部档案,官方回应:现有档案仅有由少数幸存的受害者提供,没有更多信息了",
    "街头巷尾流传着一种新说法:在特定时间靠近隔离网观测真菌,可以见到死去的亲人——专家紧急警告:这是神经系统被侵蚀的早期症状",
    "莱特曼银行推出冻存保险库业务,客户可将贵重物品存放于零下60℃环境,首批名额开售五分钟内告罄",
    "如梦食品实验室最新进展:添加了镇静成分的安神款营养棒临床试验效果良好,但约12%的试用者报告出现奇怪的梦境",
    "年轻人中流行起一种'孢子涂鸦':将少量经灭活处理的发光真菌涂在墙壁上制作荧光壁画,市容管理部门表示担忧并考虑禁令",
    "哲学圈掀起大讨论:'如果记忆可以移植到菌丝网络中,那‘我’还是‘我’吗？'——一名自称参与过造神计划的人员在匿名论坛发布长文后账号被注销",
    "民间涌现新兴宗教'冻眠教',信徒相信将自己冰封可躲避灾厄,待'净化之日'再苏醒——聚居地管理部门已将其列为非法组织",
    "老人临终前拒绝任何菌丝处理,只说了一句话:'活了一次已经够累了,别让我再醒过来'",
    "一名母亲在论坛发帖求救:她7岁的孩子在吃了灭活真菌制成的零食后,开始在墙上反复画同一个符号——与造神计划机密档案中记载的图案高度相似",
    "记者暗访某'感染者收容所',发现收容所实际运作方式与公开宣传严重不符——该记者次日因'违反隔离条例'被带走调查",
    "一群自称'遗忘之子'的流浪者抵达聚居地,声称他们来自一个因广播过度而被'第二次遗忘'摧毁的聚居地——关于'广播加速结局'的讨论再度甚嚣尘上",
    "从感染区孤身归来的巡逻队员讲述经历:他在废墟中发现了一本日记,最后一行写道——'他们说我被感染了,但我感觉前所未有的清醒'",
    "研究报告:真菌意识网络具有'回声记忆'特性,特定频率的声波刺激可能唤醒已死亡个体的残余意识片段",
    "随着聚居地人口不断增长,心理健康服务严重短缺,非官方互助组织大量涌现,质量良莠不齐",
    "冬日将至,多个聚居地发布燃料储备告急预警——部分市民开始拆解废弃建筑的木质结构用于取暖",
    "匿名来源流出所谓'造神计划第27号实验记录',内容涉及'嫁接人类意识与菌群感知'的尝试——罗德岛对有关该技术的提问拒绝置评",
    "雪原巡逻队补给线遭不明来源袭击,爱国者发表简短讲话:'是感染者,还是别的什么——不重要,重要的是我们还在巡逻'",
    "xx设计师谦虚表示:莱特曼银行的安保系统其实是我设计的一坨史山",
    "受燃料短缺影响,部分聚居地开始焚烧废弃营养棒作为取暖材料,居民反映室内弥漫着一股甜腻的腐烂气息",
    "最新统计显示,城市边缘零观测政策实施后,边缘区域的野生真菌生物量反而激增200%——专家担忧'不观测'可能让威胁暗中壮大",
    "社会调查:受‘城市边缘零观测’政策影响,部分市民产生猎奇心理,纷纷冒险前往边缘地带自行查探,反而导致该区域的实际观测频次不降反升——以至于科学统计工作的开展变得困难,专家紧急提醒:好奇心可能成为感染扩散的帮凶,请相信专业监测体系"
    ];
var TIPS_POOL = [
    "在营火边上会慢慢回血。",
    "文明区越大,中心地带越安全。",
    "制作冰封之钥,前往冰封维度定居是一个好的选择。",
    "坚韧的意志赋予你对温变持久的抵抗力,代价是你对温变的感知更迟钝。",
    "恒温代谢剂是你对抗温变最简单便携的工具。",
    "世界只会记录玩家附近的感染地形,探索越多,越容易招致祸患。",
    "死在野外不可怕,可怕的是你为了偿还一次死亡的代价付出N次死亡的代价。",
    "钱存在银行里会涨利息哦。",
    "饰品栏不掉落,七咒之戒为你提供了便捷末影箱；背包和末影箱或许是你财产的最佳保险。",
    "在标红区域,敌方会获得额外增强。",
    "使用各个维度的钥匙传送时会完全保留你的当前坐标。",
    "那些怪物对物理攻击的抗性很高。",
    "留意家里的地狱门,小心'猪人感染'。",
    "辣椒和辣条是极佳的驱寒食物。",
    "与大部分辣椒提升体温不同,寒霜椒可以降低体温。",
    "文明区相较于荒野没那么容易陷落,但这可能导致文明区内部的危机更不容易察觉。",
    "它们不能在文明区中生成,且会主动逃离文明区,但精英单位不会遵守文礼。",
    "防患于未然,需要丰富的经验。",
    "今日运势:大吉。",
    "今日运势:吉。",
    "今日运势:小吉。",
    "今日运势:小凶。",
    "今日运势:凶。",
    "今日运势:大凶。",
    "血液的获取不一定要用注射器靠近右键,可以使用注射枪远程获取。",
    "不要在仪式完成前对祭坛和基座交互,这可能会让你损失物品。",
    "有时候,问题不需要自己亲手解决,试试让问题在摊上你之前先遇见另一个问题（借刀杀人）。",
    "一切能置敌人于死地的方法都是好方法。",
    "弱点永远是弱点,有时候只是它们用其他东西掩盖了弱点...所以,如果无法在敌人的主场干掉敌人,那就摧毁主场。",
    "不讲道理的东西在你手上就是硬道理。",
    "商店的那些定价总是不合理？那就自己另起炉灶。",
    "剥削村民或许是最快的发展方式。",
    "物极必反,否极泰来。",
    "试试直接把低温注射到它们体内。",
    "同为寒冰,经其它东西修饰之后可能不再纯粹。",
    "有你觉得不合理的地方？那大概就是有人刻意为之。"
];

    function getRandomNews() { return NEWS_POOL[Math.floor(Math.random() * NEWS_POOL.length)]; }
    function getRandomTip()  { return TIPS_POOL[Math.floor(Math.random() * TIPS_POOL.length)]; }

    // ==================== 取模板 ====================
    function getStageTemplate(stage) {
        for (var i = 0; i < STAGE_TEMPLATES.length; i++) {
            if (STAGE_TEMPLATES[i].stage === stage || (stage >= 4 && STAGE_TEMPLATES[i].stage === 4))
                return STAGE_TEMPLATES[i];
        }
        return STAGE_TEMPLATES[STAGE_TEMPLATES.length - 1];
    }

    function getSoundForStage(stage) {
        for (var i = 0; i < SOUND_TEMPLATES.length; i++) {
            if (SOUND_TEMPLATES[i].stage === stage || (stage >= 4 && SOUND_TEMPLATES[i].stage === 4))
                return SOUND_TEMPLATES[i].sound;
        }
        return null;
    }

    // ==================== 广播 ====================
    function getDataBroadcast() {
        var summary = global.adventureZoneSummary;
        if (!summary) return "§7数据终端未就绪";

        var stage = summary.stage !== undefined ? summary.stage : 0;
        var tpl = getStageTemplate(stage);
        if (!tpl) return "§7区域 " + (summary.count || 0) + " 个,总能量 " + (summary.totalScore || 0);

        return tpl.text
            .replace(/\{count\}/g, summary.count || 0)
            .replace(/\{total\}/g, summary.totalScore || 0);
    }

    function doBroadcast(server) {
        var stage = (global.adventureZoneSummary || {}).stage;
        if (stage === undefined) stage = 0;

        server.tell(Text.of("§c[数据终端] " + getDataBroadcast()));

        var sound = getSoundForStage(stage);
        if (sound) {
            var level = server.getLevel("minecraft:overworld");
            if (level) level.runCommandSilent("playsound " + sound + " master @a");
        }

        server.tell(Text.of("§e[新闻] " + getRandomNews()));
        server.tell(Text.of("§7[贴士] " + getRandomTip()));
    }

    // ==================== 傍晚触发 ====================
    var lastBroadcastDay = -1;

    ServerEvents.tick(function(event) {
        if (event.server.getTickCount() % 100 !== 0) return;
        var server = event.server;
        var overworld = server.getLevel("minecraft:overworld");
        if (!overworld) return;

        var dayTime = overworld.getDayTime();
        var timeOfDay = dayTime % 24000;
        var gameDay = Math.floor(dayTime / 24000);

        if (timeOfDay >= 12000 && timeOfDay < 13000 && lastBroadcastDay !== gameDay) {
            lastBroadcastDay = gameDay;
            doBroadcast(server);
        }
    });

    // ==================== /broadcasttest ====================
    global.triggerEveningBroadcast = function(server) {
        var overworld = server.getLevel("minecraft:overworld");
        if (!overworld) return;
        lastBroadcastDay = Math.floor(overworld.getDayTime() / 24000);
        doBroadcast(server);
    };
})();

ServerEvents.commandRegistry(function(event) {
    var commands = event.commands;
    event.register(
        commands.literal("broadcasttest")
            .requires(function(src) { return src.hasPermission(2); })
            .executes(function(ctx) {
                var server = ctx.getSource().getServer();
                var overworld = server.getLevel("minecraft:overworld");
                if (!overworld) return 0;
                overworld.setDayTime(12000);
                if (global.triggerEveningBroadcast) global.triggerEveningBroadcast(server);
                return 1;
            })
    );
});
