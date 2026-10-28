(function () {
    PlayerEvents.tick(event => {
        const { player } = event;
        if (!player || player.isFake() || player.level.isClientSide()) return;
        if (player.age % 20 !== 0) return; // 统一 20 tick 降频步进
        if (player.age % 100 !== 0) return; // 每 5 秒执行一次侵蚀判定

        // 玩家身处真菌统治领地内（非白名单，携带 not_tag）
        if (player.tags.contains('civil_adventure:not_fungal')) {
            player.potionEffects.add('spore:marker', 2400, 1, false, true);
            player.potionEffects.add('spore:madness', 1200, 1, false, true);
        }
    });
})();
