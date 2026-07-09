const $ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey')
const $Registries = Java.loadClass('net.minecraft.core.registries.Registries')
const $HolderSet = Java.loadClass('net.minecraft.core.HolderSet')

FTBQuestsEvents.customReward("", event => {
    const tags = event.reward.tags
    if (tags.isEmpty()) {
        console.warn('奖励tag填写错误')
        return
    }
    const tagArray = tags.toArray()
    switch (tagArray[0]) {
        case 'tp_struct':
            if (tagArray.length < 3) {
                console.warn(`${event.reward.title.string} 的结构tag填写错误`)
                return
            }
            teleportToStructure(event.player, tagArray[1] + ':' + tagArray[2], tagArray[3])
            break
        default:
            console.warn(`${event.reward.title.string} 的奖励类型 ${tagArray[0]} 不存在`)
            break
    }
})

/**
 * @param {Internal.Player} player
 * @param {string} structureName
 * @param {string} searchChunkRadius
 */
function teleportToStructure(player, structureName, searchChunkRadius) {
    searchChunkRadius = parseInt(searchChunkRadius, 10)
    if (!searchChunkRadius) searchChunkRadius = 200
    let level = player.getLevel()

    let structureRegistry = level.registryAccess().registryOrThrow($Registries.STRUCTURE)
    let structureKey = $ResourceKey.create(structureRegistry.key(), structureName)
    let holder = structureRegistry.getHolder(structureKey)
    holder.map(h => {
        let holderSet = $HolderSet.direct([h])

        let pair = level.getChunkSource().getGenerator().findNearestMapStructure(level, holderSet, player.blockPosition(), searchChunkRadius, false)
        if (pair == null) {
            player.sendSystemMessage('范围内没有找到结构')
            return
        }

        let pos = pair.getFirst()
        player.potionEffects.add('minecraft:slow_falling', 45 * 20, 0)
        player.teleportTo(level.dimension, pos.getX() + 0.5, 180, pos.getZ() + 0.5, player.yaw, player.pitch)
    }).orElseGet(() => {
        console.warn(`结构 ${structureName} 不存在`)
    })
}