// ============ 阿波利昂演出 + 标签转移 ============
//
// 转阶段检测、十二使徒演出已迁移到数据包 function(命令体系,避开 getEntitiesOfClass):
//   - 入口   :minecraft:tick 标签 → fib_functions:gameplay/apollyon_tick(每 20 刻扫描)
//   - 检测   :apollyon_check —— execute store result 读 settingSecondPhase 到计分板,
//             0->1 边沿(无敌+回血开始)触发演出,计分板 prev + tag 防重复
//   - 触发   :apollyon_trigger —— 召唤 12 个 summon_apostle 演出实体 + marker 锚点,
//             schedule 440t(450t 演出实体就会自行生成使徒,须提前回收)
//   - 回收   :apollyon_finish —— 经锚点定位,杀演出实体 + 执行 twelve_apostle 召唤真使徒
//
// 本脚本只保留:阿波利昂周围使徒死亡时,把死者标签转移给阿波利昂。
// 查找阿波利昂用命令选择器 nbt 过滤(@e[...nbt={isApollyon:1b}]),不依赖实体枚举。

const NTCompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag');
const LevelClass = Java.loadClass('net.minecraft.world.level.Level');

const TAG_TRANSFER_RANGE = 128;   // 标签转移搜索半径

// 读取实体 NBT 并取 byte 字段(缺省 0)
function nbtByte(entity, key) {
    const tag = entity.saveWithoutId(new NTCompoundTag());
    return tag.contains(key) ? tag.getByte(key) : 0;
}

// 阿波利昂周围使徒死亡 → 标签转移
// 夺舍场景:apollyon_possess.mcfunction 在 kill 前打 fib_possessed 信号 tag,
// 本事件据检测该场景:标签同样合并给亚波伦,但不再发普通死亡提示(夺舍提示由数据包发)。
EntityEvents.death(event => {
    const entity = event.entity;
    if (!entity || entity.getEncodeId() !== 'goety:apostle') return;
    // 仅下界
    const server = entity.level.getServer();
    if (server == null) return;
    const netherLv = server.getLevel(LevelClass.NETHER.location());
    if (netherLv == null || entity.level !== netherLv) return;
    if (nbtByte(entity, 'isApollyon') === 1) return;  // 阿波利昂本体死亡不处理

    const possessed = entity.getTags().contains('fib_possessed');  // 夺舍场景

    // 把死者的每个标签(The_Risen 等,apostle_title.js 按 titleNumber 打标)转移给
    // 128 格内的阿波利昂。选择器 nbt 过滤 + distance 相对死者位置,完全可靠。
    const tags = entity.getTags();
    const tagList = [];
    const tagIter = tags.iterator();
    while (tagIter.hasNext()) {
        const tag = tagIter.next();
        if (tag !== 'fib_possessed') tagList.push(tag);  // 信号 tag 不转移
    }
    if (tagList.length === 0) return;  // 无标签可转移
    const pos = entity.blockPosition();
    const commands = server.getCommands();
    const source = server.createCommandSourceStack();
    tagList.forEach(tag => {
        commands.performPrefixedCommand(source,
            `execute in minecraft:the_nether positioned ${pos.getX()} ${pos.getY()} ${pos.getZ()} as @e[type=goety:apostle,nbt={isApollyon:1b},distance=..${TAG_TRANSFER_RANGE}] run tag @s add ${tag}`);
    });
    if (!possessed) {
        commands.performPrefixedCommand(source,
            'tellraw @a {"text":"一具使徒陨落……未竟的印记循着血脉,归于亚波伦。","color":"dark_red","italic":true}');
    }
});
