(function () {
    const $AdventureAPI = Java.loadClass('civil_adventure.api.AdventureAPI');

    ItemEvents.rightClicked('civil:civil_detector', event => {
        const { player, level } = event;
        if (!player || player.isFake() || level.isClientSide()) return;

        try {
            let pos = player.blockPosition();
            let intensity = $AdventureAPI.getScoreAt(level, pos);
            let pct = Math.round(intensity * 100);
            let isAdventure = intensity >= 0.5;

            let domFaction = $AdventureAPI.getDominantFaction(level, pos);
            let factionText = '§7[荒野/无统治]';
            if (domFaction != null) {
                let translatedName = Text.translate(domFaction.nameTranslationKey()).string;
                let colorPrefix = domFaction.isCivilization() ? '§9' : (domFaction.id().getPath() === 'fungal' ? '§c' : '§6');
                factionText = `${colorPrefix}[${translatedName}]`;
            }

            let buffedCount = $AdventureAPI.getBuffedEntityUUIDs().size();
            let zoneSize = $AdventureAPI.getZoneSize(level, pos);
            let rawScore = Math.round($AdventureAPI.getRawScoreAt(level, pos));
            let center = $AdventureAPI.getZoneCenter(level, pos);

            player.tell(`§e领地派系: ${factionText}`);
            player.tell(`§e威胁强度: ${isAdventure ? '§c■ 危险区' : '§7□ 安全区'} §f${pct}%`);
            player.tell(`§c危险评估分: §f${rawScore} §7(覆盖 ${zoneSize} 个区块)`);
            player.tell(`§e参考区域中心坐标: §f${center.getX()}, ${center.getY()}, ${center.getZ()}`);
            player.tell(`§e全局受危险区影响的生物总数: §f${buffedCount} 个`);
            player.tell('§6========================');
        } catch (err) {
            player.tell(`§c探测器异常: ${err}`);
        }
    });
})();
