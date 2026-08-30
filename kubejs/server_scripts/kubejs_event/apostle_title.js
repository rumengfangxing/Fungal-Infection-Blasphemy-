/**
 * 使徒头衔 → 全局实体 Tag
 *
 * 检测 goety:apostle 的 titleNumber NBT(0-11),按对应表为实体附加 scoreboard tag。
 * tag 表来自 data/fib_functions/functions/gameplay/todo.txt("标签对应"),
 * 生成后可通过 @e[tag=The_Risen] 等指令/数据包筛选。
 *
 * 触发时机:EntityEvents.spawned(实体加入世界瞬间),此时 NBT 已就位,
 * 覆盖所有生成途径(召唤演出 / summon 指令 / 自然生成)。
 */

const TITLE_TAGS = [
    'The_Risen',          // 0
    'The_Abhorrent',      // 1
    'The_Defiler',        // 2
    'The_Dark',           // 3
    'The_Great_Shadow',   // 4
    'The_Witch_King',     // 5
    'The_Pyre_Lord',      // 6
    'The_Profane',        // 7
    'The_Cruel',          // 8
    'The_Terrible',       // 9
    'The_Glorious',       // 10
    'The_Atrocious',      // 11
];

const CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag');

/** 从实体读取头衔编号,读不到返回 -1 */
function getTitleNumber(mcEntity) {
    // 候选 1:Forge 扩展 NBT(部分 mod 把自定义字段放这里)
    const persistent = mcEntity.getPersistentData();
    if (persistent.contains('titleNumber')) {
        return persistent.getInt('titleNumber');
    }
    // 候选 2:实体完整保存数据(覆盖实体 addAdditionalSaveData 写入的自定义字段,
    //         与 summon 指令 NBT 同源,最通用)
    const tag = mcEntity.saveWithoutId(new CompoundTag());
    if (tag.contains('titleNumber')) {
        return tag.getInt('titleNumber');
    }
    return -1;
}

EntityEvents.spawned(event => {
    // event.entity 直接就是原生 Entity(toString 即注册 id,如 "goety:apostle")
    const entity = event.entity;
    if (entity.getEncodeId() !== 'goety:apostle') return;

    const title = getTitleNumber(entity);
    if (title >= 0 && title < TITLE_TAGS.length) {
        const tagName = TITLE_TAGS[title];
        if (!entity.getTags().contains(tagName)) {
            entity.addTag(tagName);
        }
    }
});
