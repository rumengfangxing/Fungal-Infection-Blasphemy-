// // ===========================================
// // 实体交易系统
// // 右键交易/送礼/砍价，好感度影响砍价与仇恨
// // 好感度按玩家独立存储
// // ===========================================

// // ===== ↓↓↓ 配置区 ↓↓↓ =====
// const TRADER_CONFIG = {
//     'minecraft:pig': {
//         display: '§e猪老板',    // 显示名：命名牌 > 此项 > 实体ID

//         /* --- 交易 --- */
//         trades: [
//             // 不写 display 则自动使用物品原名
//             { input: { item: 'minecraft:emerald', count: 5, display: '§a5颗绿宝石' }, output: { item: 'minecraft:diamond', count: 1, display: '§b1颗钻石' } },
//             { input: { item: 'minecraft:diamond', count: 3 }, output: { item: 'minecraft:diamond_sword', count: 1, nbt: '{Enchantments:[{id:"sharpness",lvl:3}]}' } },
//         ],
//         maxTradesPerDay: 3,     // 每日最多交易次数

//         /* --- 礼物 --- */
//         gifts: {
//             'minecraft:golden_apple': { friendship: [3, 8] },
//             'minecraft:carrot':        { friendship: [1, 3] },
//         },

//         /* --- 砍价 --- */
//         bargain: {
//             maxDiscount: 50,            // 最大折扣上限 %
//             discountAmount: [1, 5],     // 砍价成功时折扣增加区间（百分点）
//             priceIncrease: [1, 3],      // 砍价失败时涨价区间（百分点）
//         },

//         /* --- 错误物品 --- */
//         wrongItem: {
//             message:            '§7{entity} 对你手里的东西没什么兴趣',
//             friendshipChance:   0.1,    // 触发好感度减少的概率
//             friendshipPenalty:  -1,     // 好感度减少数值
//         },

//         /* --- 音效 --- */
//         sounds: {
//             trade:             'entity.villager.trade',
//             bargain_success:   'entity.villager.yes',
//             bargain_fail:      'entity.villager.no',
//             gift:              'entity.villager.happy',
//             friendship_down:   'entity.villager.hurt',
//         },

//         /* --- 对话文本 --- */
//         /* 可用占位符:
//          *   {entity}       — 生物显示名（命名牌 > display > ID）
//          *   {input_name}   — 交易输入物品显示名（display > 原名）
//          *   {input_count}  — 交易输入所需数量（砍价后）
//          *   {output_name}  — 交易输出物品显示名（display > 原名）
//          *   {output_count} — 交易输出数量
//          *   {max}          — 每日最大交易次数
//          *   {friendship}   — 当前好感度
//          *   {value}        — 好感度变化值（送礼增减）
//          *   {amount}       — 砍价/涨价百分比
//          */
//         messages: {
//             trade_success:       '§a交易成功！{entity} 给了你 {output_name} x{output_count}',
//             trade_max_reached:   '§c{entity} 今天的交易次数已用完（{max}/天）',
//             trade_input_short:   '§c需要 {input_name} x{input_count}，你不够',
//             wrong_item:          '§7{entity} 对你手里的东西没什么兴趣',
//             wrong_item_penalty:  '§c{entity} 似乎有点不高兴',
//             bargain_success:     '§a讨价还价成功！价格降低了 {amount}%',
//             bargain_fail:        '§c讨价还价失败！价格提高了 {amount}%',
//             bargain_already_min: '§e已经是最低价格了',
//             gift_success:        '§a{entity} 很高兴！好感度 +{value}',
//             greeting:            '§e{entity} 友好度: {friendship}/100',
//             offering:            '§e售价: {input_name} x{input_count}  §6→  §e{output_name} x{output_count}',
//             friend_down_1:       '§e好感度 -1',
//             friend_down_5:       '§e好感度 -5',
//             hostility_clear:     '§a{entity} 似乎冷静了下来',
//             hostility_deduct:    '§e好感度 -10',
//             hostility_zero:      '§c好感度已降至 0',
//         }
//     }

//     // ---------- 添加更多生物范例 ----------
//     // 'minecraft:cow': {
//     //     trades: [ ... ],
//     //     maxTradesPerDay: 2,
//     //     gifts: { 'minecraft:sugar': { friendship: [2, 5] } },
//     //     bargain: { maxDiscount: 30, discountAmount: [1, 3], priceIncrease: [1, 2] },
//     //     wrongItem: { message: '...', friendshipChance: 0.05, friendshipPenalty: -1 },
//     //     sounds: { ... },
//     //     messages: { ... },
//     // },
// }
// // ===== ↑↑↑ 配置区 ↑↑↑ =====

// // ===== 默认配置 =====
// /* 可用占位符:
//  *   {entity}       — 生物显示名（命名牌 > display > ID）
//  *   {input_name}   — 交易输入物品显示名（display > 原名）
//  *   {input_count}  — 交易输入所需数量（砍价后）
//  *   {output_name}  — 交易输出物品显示名（display > 原名）
//  *   {output_count} — 交易输出数量
//  *   {max}          — 每日最大交易次数
//  *   {friendship}   — 当前好感度
//  *   {value}        — 好感度变化值（送礼增减）
//  *   {amount}       — 砍价/涨价百分比
//  */
// const DEFAULT_MESSAGES = {
//     trade_success:       '§a交易成功！{entity} 给了你 {output_name} x{output_count}',
//     trade_max_reached:   '§c{entity} 今天的交易次数已用完（{max}/天）',
//     trade_input_short:   '§c需要 {input_name} x{input_count}，你不够',
//     wrong_item:          '§7{entity} 对你手里的东西没什么兴趣',
//     wrong_item_penalty:  '§c{entity} 似乎有点不高兴',
//     bargain_success:     '§a讨价还价成功！价格降低了 {amount}%',
//     bargain_fail:        '§c讨价还价失败！价格提高了 {amount}%',
//     bargain_already_min: '§e已经是最低价格了',
//     gift_success:        '§a{entity} 很高兴！好感度 +{value}',
//     greeting:            '§e{entity} 友好度: {friendship}/100',
//     offering:            '§e售价: {input_name} x{input_count}  §6→  §e{output_name} x{output_count}',
//     friend_down_1:       '§e好感度 -1',
//     friend_down_5:       '§e好感度 -5',
//     hostility_clear:     '§a{entity} 似乎冷静了下来',
//     hostility_deduct:    '§e好感度 -10',
//     hostility_zero:      '§c好感度已降至 0',
// }

// const DEFAULT_SOUNDS = {
//     trade:           'entity.villager.trade',
//     bargain_success: 'entity.villager.yes',
//     bargain_fail:    'entity.villager.no',
//     gift:            'entity.villager.happy',
//     friendship_down: 'entity.villager.hurt',
// }

// // ==========================================
// // ===== 逻辑代码 =====
// // ==========================================

// // ---------- NBT 键名 ----------
// const CT_KEY = 'fib_tr_ct'     // currentTrade index（实体共享）
// const PPD_KEY = 'fib_tr_ppd'   // per-player data JSON（按玩家独立）

// // ---------- 玩家独立数据存取（JSON 字符串） ----------
// function getPPD(entity) {
//     const raw = entity.persistentData.getString(PPD_KEY)
//     if (!raw) return {}
//     try { return JSON.parse(raw) } catch(e) { return {} }
// }

// function savePPD(entity, data) {
//     entity.persistentData.putString(PPD_KEY, JSON.stringify(data))
// }

// /** 获取某玩家的数据对象，不存在则创建默认 */
// function getPlayerData(entity, uuid) {
//     const ppd = getPPD(entity)
//     if (!ppd[uuid]) {
//         ppd[uuid] = { fs: 0, tt: 0, ld: -1, dc: 0 }
//         savePPD(entity, ppd)
//     }
//     return ppd[uuid]
// }

// /** 写入某玩家的单项数据 */
// function setPlayerField(entity, uuid, field, value) {
//     const ppd = getPPD(entity)
//     if (!ppd[uuid]) ppd[uuid] = { fs: 0, tt: 0, ld: -1, dc: 0 }
//     ppd[uuid][field] = value
//     savePPD(entity, ppd)
// }

// // ---------- 快捷读写 ----------
// function getFriendship(entity, uuid)  { return getPlayerData(entity, uuid).fs }
// function setFriendship(entity, uuid, v) { setPlayerField(entity, uuid, 'fs', Math.max(0, Math.min(100, Math.round(v)))) }

// function getTradesToday(entity, uuid)  { return getPlayerData(entity, uuid).tt }
// function setTradesToday(entity, uuid, v) { setPlayerField(entity, uuid, 'tt', v) }

// function getLastTradeDay(entity, uuid)  { return getPlayerData(entity, uuid).ld }
// function setLastTradeDay(entity, uuid, v) { setPlayerField(entity, uuid, 'ld', v) }

// function getDiscount(entity, uuid)  { return getPlayerData(entity, uuid).dc }
// function setDiscount(entity, uuid, v) { setPlayerField(entity, uuid, 'dc', v) }

// function getCurrentTrade(entity) { return entity.persistentData.getInt(CT_KEY) }
// function setCurrentTrade(entity, v) {
//     const cfg = getConfig(entity.type)
//     const len = cfg?.trades?.length || 1
//     entity.persistentData.putInt(CT_KEY, ((v % len) + len) % len)
// }

// // ---------- 工具函数 ----------
// function getCurrentDay(level) { return Math.floor(level.getDayTime() / 24000) }
// function getConfig(type) { return TRADER_CONFIG[type] }
// function getMsgs(config) { return Object.assign({}, DEFAULT_MESSAGES, config.messages || {}) }
// function getSounds(config) { return Object.assign({}, DEFAULT_SOUNDS, config.sounds || {}) }

// function entityName(entity, config) {
//     // 优先级: 命名牌自定义名 > 配置 display > 实体ID
//     try {
//         const cn = entity.getCustomName()
//         if (cn) return cn.getString()
//     } catch(e) {}
//     if (config && config.display) return config.display
//     try { return entity.name.getString() } catch(e) { return entity.type }
// }

// /** 模板替换 */
// function fmt(tpl, vars) {
//     let s = tpl
//     for (const [k, v] of Object.entries(vars)) s = s.replace('{' + k + '}', String(v))
//     return s
// }

// /** 获取物品显示名（优先使用配置的 display，否则自动生成） */
// function getItemName(def) {
//     if (def.display) return def.display
//     try {
//         const stack = def.nbt ? Item.of(def.item, def.count, def.nbt) : Item.of(def.item, def.count)
//         return stack.getDisplayName().getString()
//     } catch(e) { return def.item }
// }

// /** 创建物品栈（支持 NBT） */
// function makeStack(def) {
//     return def.nbt ? Item.of(def.item, def.count, def.nbt) : Item.of(def.item, def.count)
// }

// /** 遍历背包统计物品总数 */
// function countInInventory(player, itemId) {
//     let total = 0
//     for (let i = 0; i < 41; i++) {
//         try {
//             const stack = player.inventory.getItem(i)
//             if (stack && !stack.isEmpty() && stack.id === itemId) total += stack.count
//         } catch(e) {
//             try { const s = player.inventory.getSlot(i); if (s && !s.isEmpty() && s.id === itemId) total += s.count } catch(e2) {}
//         }
//     }
//     return total
// }

// /** 砍价后的最终单价 */
// function getFinalPrice(baseCount, currentDiscount) {
//     return Math.ceil(baseCount * (1 + currentDiscount / 100))
// }

// /** 播放音效（沿用项目已有的 playsound 命令方案） */
// function playSoundAt(entity, soundId) {
//     if (!soundId) return
//     const pos = entity.position()
//     entity.level.runCommandSilent('playsound ' + soundId + ' master @p ' + pos.x + ' ' + pos.y + ' ' + pos.z + ' 1 1')
// }

// // ---------- 每日重置 ----------
// function checkDailyReset(entity, uuid, level) {
//     const today = getCurrentDay(level)
//     if (today > getLastTradeDay(entity, uuid)) {
//         setTradesToday(entity, uuid, 0)
//         setLastTradeDay(entity, uuid, today)
//     }
// }

// // ==========================================
// // 交互入口 — 由 forge_event.js 桥接
// // ==========================================
// global.ForgeEntityInteractEvent = function(event) {
//     const player = event.getEntity()
//     const target = event.getTarget()
//     const config = getConfig(target.type)
//     if (!config) return

//     event.setCanceled(true)
//     const level = player.level
//     const uuid = player.getUuid().toString()
//     const held = player.getHeldItem('main_hand')
//     const heldId = held?.id || 'minecraft:air'
//     const isAir = heldId === 'minecraft:air'

//     // 初始化该玩家的数据（若不存在则自动创建）
//     const pd = getPlayerData(target, uuid)
//     const friendship = pd.fs
//     const currentDiscount = pd.dc
//     const msgs = getMsgs(config)
//     const sounds = getSounds(config)

//     // 每日重置
//     checkDailyReset(target, uuid, level)

//     // 当前活跃交易
//     const trades = config.trades || []
//     const tradeIdx = getCurrentTrade(target)
//     const activeTrade = trades.length > 0 ? trades[tradeIdx % trades.length] : null

//     // ---- 优先级1: 交易 ----
//     if (activeTrade && heldId === activeTrade.input.item) {
//         const needed = getFinalPrice(activeTrade.input.count, currentDiscount)
//         const hasTotal = countInInventory(player, activeTrade.input.item)

//         if (hasTotal < needed) {
//             const iname = getItemName(activeTrade.input)
//             player.tell(Text.red(fmt(msgs.trade_input_short, { input_name: iname, input_count: needed })))
//             return
//         }

//         if (getTradesToday(target, uuid) >= config.maxTradesPerDay) {
//             player.tell(Text.red(fmt(msgs.trade_max_reached, { entity: entityName(target, config), max: config.maxTradesPerDay })))
//             return
//         }

//         const output = makeStack(activeTrade.output)
//         player.removeItem(Item.of(activeTrade.input.item, needed))
//         const leftover = player.give(output)
//         if (leftover && leftover.count > 0) {
//             const dpos = target.position()
//             level.spawnItem(dpos.x, dpos.y + 1, dpos.z, leftover)
//         }

//         // 更新状态
//         setTradesToday(target, uuid, getTradesToday(target, uuid) + 1)
//         setCurrentTrade(target, (tradeIdx + 1) % trades.length)

//         playSoundAt(target, sounds.trade)
//         player.tell(Text.green(fmt(msgs.trade_success, {
//             entity: entityName(target, config),
//             output_name: getItemName(activeTrade.output),
//             output_count: activeTrade.output.count
//         })))
//         return
//     }

//     // ---- 优先级2: 礼物 ----
//     const giftCfg = config.gifts?.[heldId]
//     if (giftCfg && !isAir) {
//         const [minF, maxF] = giftCfg.friendship
//         const value = minF + Math.floor(Math.random() * (maxF - minF + 1))
//         setFriendship(target, uuid, friendship + value)

//         held.shrink(1)
//         player.swing()

//         playSoundAt(target, sounds.gift)
//         player.tell(Text.green(fmt(msgs.gift_success, {
//             entity: entityName(target, config),
//             value: value
//         })))
//         return
//     }

//     // ---- 优先级3: 空手 → 砍价 ----
//     if (isAir) {
//         const bargain = config.bargain
//         const discountRange = bargain.discountAmount
//         const penaltyRange = bargain.priceIncrease
//         const maxDisc = bargain.maxDiscount

//         // 判定成功率 = 好感度%
//         const roll = Math.random() * 100
//         if (roll < friendship) {
//             // 砍价成功
//             const amount = discountRange[0] + Math.floor(Math.random() * (discountRange[1] - discountRange[0] + 1))
//             const newDC = Math.max(-maxDisc, currentDiscount - amount)
//             setDiscount(target, uuid, newDC)
//             setFriendship(target, uuid, friendship - 1)

//             playSoundAt(target, sounds.bargain_success)
//             const actualAmount = currentDiscount - newDC  // 实际降低百分比
//             if (newDC > currentDiscount - amount) {
//                 player.tell(Text.yellow(msgs.bargain_already_min))
//             }
//             player.tell(Text.green(fmt(msgs.bargain_success, { amount: actualAmount })))
//             player.tell(Text.yellow(msgs.friend_down_1))
//         } else {
//             // 砍价失败 → 涨价
//             const amount = penaltyRange[0] + Math.floor(Math.random() * (penaltyRange[1] - penaltyRange[0] + 1))
//             const newDC = currentDiscount + amount
//             setDiscount(target, uuid, newDC)
//             setFriendship(target, uuid, friendship - 5)

//             playSoundAt(target, sounds.bargain_fail)
//             player.tell(Text.red(fmt(msgs.bargain_fail, { amount: amount })))
//             player.tell(Text.yellow(msgs.friend_down_5))
//         }

//         // 砍价后显示当前状态
//         showStatus(player, target, config, uuid, msgs)
//         return
//     }

//     // ---- 优先级4: 错误物品 ----
//     const wrong = config.wrongItem || {}
//     player.tell(Text.gray(fmt(wrong.message || msgs.wrong_item, { entity: entityName(target, config) })))

//     if (Math.random() < (wrong.friendshipChance || 0)) {
//         const penalty = wrong.friendshipPenalty || -1
//         setFriendship(target, uuid, friendship + penalty)
//         playSoundAt(target, sounds.friendship_down)
//         player.tell(Text.yellow(fmt(msgs.friend_down_1, {})))
//     }

//     // 显示当前状态
//     showStatus(player, target, config, uuid, msgs)
// }

// /** 显示当前状态（友好度+售价） */
// function showStatus(player, target, config, uuid, msgs) {
//     const friendship = getFriendship(target, uuid)
//     const currentDiscount = getDiscount(target, uuid)
//     const trades = config.trades || []
//     const tradeIdx = getCurrentTrade(target)
//     const activeTrade = trades.length > 0 ? trades[tradeIdx % trades.length] : null

//     player.tell(Text.gold(fmt(msgs.greeting, {
//         entity: entityName(target, config),
//         friendship: friendship
//     })))

//     if (activeTrade) {
//         const price = getFinalPrice(activeTrade.input.count, currentDiscount)
//         const iname = getItemName(activeTrade.input)
//         const oname = getItemName(activeTrade.output)
//         const sign = currentDiscount <= 0 ? '' : '+'
//         player.tell(Text.gold(fmt(msgs.offering, {
//             input_name: iname,
//             input_count: price,
//             output_name: oname,
//             output_count: activeTrade.output.count,
//             _note: '折扣 ' + sign + currentDiscount + '%'
//         })))
//         if (currentDiscount !== 0) {
//             const sign2 = currentDiscount < 0 ? '' : '+'
//             player.tell(Text.gray('§7当前价格修正: ' + sign2 + currentDiscount + '%'))
//         }
//     }
// }

// // ==========================================
// // 仇恨处理 — 由 forge_change_target.js 调用
// // ==========================================
// global.handleTraderHostility = function(event) {
//     const entity = event.getEntity()
//     const newTarget = event.getNewTarget()
//     if (!newTarget || !newTarget.isPlayer()) return

//     const config = getConfig(entity.type)
//     if (!config) return

//     const uuid = newTarget.getUuid().toString()
//     const friendship = getFriendship(entity, uuid)
//     if (friendship <= 0) return

//     // 消除仇恨
//     event.setNewTarget(null)

//     const msgs = getMsgs(config)
//     const player = newTarget

//     // 扣好感
//     const newF = Math.max(0, friendship - 10)
//     setFriendship(entity, uuid, newF)

//     player.tell(Text.green(fmt(msgs.hostility_clear, { entity: entityName(entity, config) })))
//     player.tell(Text.yellow(msgs.hostility_deduct))
//     if (newF <= 0) {
//         player.tell(Text.red(msgs.hostility_zero))
//     }
// }
