// ============ 可复用的"带书讲台"条件 ============
// 其他仪式脚本可通过 global.lecternBookRequirement(range) 引用,
// 返回一个 (tileEntity, player, pos, level) => boolean 的检查函数,
// 直接传给 ritual.setRequirement(...)

const LecternBlockEntity = Java.loadClass('net.minecraft.world.level.block.entity.LecternBlockEntity');

/**
 * 生成"范围内存在放了书的讲台"检查函数
 * @param {number} range 搜索半径(建议与 ritual.range 一致)
 */
global.lecternBookRequirement = function (range) {
    return function (tileEntity, player, pos, level) {
        for (let x = -range; x <= range; x++) {
            for (let y = -range; y <= range; y++) {
                for (let z = -range; z <= range; z++) {
                    const bp = pos.offset(x, y, z);
                    const state = level.getBlockState(bp);
                    if (state.getBlock().getRegistryName().toString() === 'minecraft:lectern') {
                        const be = level.getBlockEntity(bp);
                        if (be instanceof LecternBlockEntity && !be.getBook().isEmpty()) {
                            return true;  // 找到放了书的讲台
                        }
                    }
                }
            }
        }
        return false;
    };
};

// ============ 使用示例 ============
// 在任意仪式注册脚本中:
//
// event.create('research', ritual => {
//     ritual.range = 32;
//     ritual.blocks = [ ... ];              // 原方块要求
//     ritual.setJeiIcon('minecraft:writable_book');
//     ritual.setRequirement(global.lecternBookRequirement(32));  // 附加讲台条件
// });
//
// ⚠️ 注意:setRequirement 会覆盖 blocks 检查!
//   即使用本函数后,ritual.blocks 里的方块要求不再自动检查,
//   如需两者都要,把方块检查一并写进自定义函数里。
