BlockEvents.rightClicked(e => {
    const { block, player, hand, level, server } = e;
    const pos = block.pos;
    const posStr = `${pos.x},${pos.y},${pos.z}`;

    console.info(`[Spore残骸DEBUG] 右键触发 | 方块:${block.id} | 手部:${hand}`);

    // 副手直接拦截，不再往下执行，杜绝左右手双触发
    if (hand !== "MAIN_HAND") {
        return;
    }

    // 方块战利品映射表
    const lootMap = {
        "spore:frozen_remains": "artifacts:chests/campsite_barrel/gems",
        "spore:wall_remains": "dungeons_arise:chests/bandit_village/bandit_village_normal",
        "spore:remains": "dungeons_arise:chests/illager_campsite/illager_campsite_supply"
    };

    const lootId = lootMap[block.id];
    if (!lootId) {
        console.info(`[Spore残骸DEBUG] 方块${block.id}未绑定战利品表，退出`);
        return;
    }
    console.info(`[Spore残骸DEBUG] 匹配战利品ID:${lootId}`);

    // ========== 防重复点击核心锁 ==========
    // 判断当前位置已经不是目标残骸，直接拦截二次执行
    if (!block.id in lootMap) {
        return;
    }
    e.cancel();

    // 先标记位置，避免异步时序问题导致重复执行
    const targetPos = pos.copy();

    // 先删除原残骸方块
    block.set("air");

    // 放置箱子，模式3：通知客户端+更新状态
    level.setBlock(targetPos, "minecraft:chest", 3);
    const chestBE = level.getBlockEntity(targetPos);
    if (!chestBE) {
        console.error("[Spore残骸ERROR] 获取箱子方块实体失败");
        return;
    }

    // 战利品表校验
    const resLoc = new ResourceLocation(lootId);
    const lootTable = server.getLootData().getLootTable(resLoc);
    if (!lootTable) {
        console.error(`[Spore残骸ERROR] 战利品表不存在: ${lootId}`);
        return;
    }

    // 标准原版战利品上下文构造（补齐必要参数）
    const lootParams = new LootParams.Builder(level)
        .withLuck(player.getLuck())
        .withParameter(LootContextParams.ORIGIN, targetPos.center)
        .withParameter(LootContextParams.THIS_ENTITY, player)
        .create(LootContextParams.CHEST);

    const itemStackList = lootTable.getRandomItems(lootParams);
    console.info(`[Spore残骸DEBUG] 战利品生成数量: ${itemStackList.size()}`);

    // 填充箱子物品
    const chestInv = chestBE.inventory;
    for (const stack of itemStackList) {
        chestInv.addItem(stack);
    }
    chestBE.markDirty();

    // 打开箱子GUI
    player.openMenu(chestBE);
    console.info(`[Spore残骸DEBUG] 打开原生箱子界面完成`);

    // ========== 修复重复注册关闭回调 ==========
    // 使用单次一次性回调，避免多次叠加注册
    const menuCloseCallback = (p) => {
        // 移除自身监听，防止重复执行
        p.removeListener('menuClosed', menuCloseCallback);
        console.info(`[Spore残骸DEBUG] 关闭箱子，销毁临时箱子 (${targetPos.x},${targetPos.y},${targetPos.z})`);
        // 判断位置当前是不是箱子再删除，防止误删其他方块
        if (level.getBlock(targetPos).id === "minecraft:chest") {
            level.setBlock(targetPos, "air", 3);
        }
    };
    player.onMenuClosed(menuCloseCallback);
});