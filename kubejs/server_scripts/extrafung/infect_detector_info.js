// 使用文明探测器时在聊天栏输出冒险区信息
ItemEvents.rightClicked('civil:civil_detector', event => {
  const { player, level } = event;
  if (!player || player.level.isClientSide()) return;

  try {
    var api = Java.loadClass('civil_adventure.api.AdventureAPI');
    var pos = player.blockPosition();

    var intensity = api.getScoreAt(level, pos);
    var pct = Math.round(intensity * 100);
    var isAdventure = intensity >= 0.5;
    player.tell(`§e强度: ${isAdventure ? '§c■ 感染区' : '§7□ 非感染区'} §f${pct}%`);

    var buffedCount = api.getBuffedEntityUUIDs().size();
    player.tell(`§e全局受危险区影响的生物总数: §f${buffedCount} 个`);

    console.log(`[detector] calling getZoneSize...`);
    var zoneSize = api.getZoneSize(level, pos);
    console.log(`[detector] getZoneSize = ${zoneSize}`);

    console.log(`[detector] calling getRawScoreAt...`);
    var rawScore = Math.round(api.getRawScoreAt(level, pos));
    console.log(`[detector] getRawScoreAt = ${rawScore}`);

    console.log(`[detector] calling getZoneCenter...`);
    var center = api.getZoneCenter(level, pos);
    console.log(`[detector] getZoneCenter = ${center.getX()}, ${center.getY()}, ${center.getZ()}`);

    player.tell(`§c危险评估分: §f${rawScore}`);
    player.tell(`§e参考区域中心坐标: §f${center.getX()}, ${center.getY()}, ${center.getZ()}`);
    player.tell(`§6========================`);

  } catch(err) {
    player.tell(`§c错误: ${err}`);
    console.log(`[detector] error: ${err}`);
  }
});
