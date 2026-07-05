const $ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey')
const $Registries = Java.loadClass('net.minecraft.core.registries.Registries')
const $HolderSet = Java.loadClass('net.minecraft.core.HolderSet')

FTBQuestsEvents.customReward("5BB53983AA8BEEA9", event => {
    teleportToStructure(event.player, 'spore:lab', 200)
})

FTBQuestsEvents.customReward("5BF74FC6652D888F", event => {
    teleportToStructure(event.player, 'minecraft:village_plains', 200)
})

FTBQuestsEvents.customReward("42E0315F36424FC5", event => {
    teleportToStructure(event.player, 'minecraft:village_desert', 200)
})

FTBQuestsEvents.customReward("30EA119E0A00DF82", event => {
    teleportToStructure(event.player, 'minecraft:village_snowy', 200)
})

FTBQuestsEvents.customReward("48CA1FDA2649F4F7", event => {
    teleportToStructure(event.player, 'dungeons_arise:greenwood_pub', 200)
})

FTBQuestsEvents.customReward("23311B84B1BFE3DB", event => {
    teleportToStructure(event.player, 'dungeons_arise:fishing_hut', 200)
})

FTBQuestsEvents.customReward("3FBF5AEE6D2A7DA2", event => {
    teleportToStructure(event.player, 'minecraft:ruined_portal', 200)
})

function teleportToStructure(player, structureName, searchChunkRadius) {
    let level = player.getLevel()

    let structureRegistry = level.registryAccess().registryOrThrow($Registries.STRUCTURE);
    let structureKey = $ResourceKey.create(structureRegistry.key(), structureName);
    let holder = structureRegistry.getHolder(structureKey);
    let holderSet = $HolderSet.direct([holder.get()]);

    let pair = level.getChunkSource().getGenerator().findNearestMapStructure(level, holderSet, player.blockPosition(), searchChunkRadius, false)

    if (pair == null) {
        player.sendSystemMessage("没有找到结构")
        return
    }

    let pos = pair.getFirst()
    player.teleportTo("minecraft:overworld", pos.getX(), 0, pos.getZ(), player.yaw, player.pitch)
}