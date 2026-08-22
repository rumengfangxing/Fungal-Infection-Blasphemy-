// ============================================================
// 冒险区域数据清除指令
// 指令：/world_forget
// ============================================================

ServerEvents.commandRegistry(function (event) {
    var Commands = event.commands
    var Component = Java.loadClass('net.minecraft.network.chat.Component')

    event.register(
        Commands.literal('world_forget')
            .requires(function (source) {
                // 需要权限等级 2 或更高
                return source.hasPermission(2)
            })
            .executes(function (context) {
                var source = context.source
                var server = source.getServer()

                // 清除冒险区域追踪器保存的长期数据
                server.persistentData.remove('adventure_zones')

                // 重置全局统计数据
                global.adventureZoneSummary = {
                    count: 0,
                    totalScore: 0,
                    stage: 0
                }

                // 防止其他脚本继续读取旧的区域列表
                global.getAdventureZones = function () {
                    return []
                }

                source.sendSuccess(
                    Component.literal('§c§l世界已遗忘伤痛......'),
                    true
                )

                console.log('[区域追踪] 已通过独立指令清除 adventure_zones 数据')
                return 1
            })
    )
})