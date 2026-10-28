=== Civil Adventure 战术地图覆层预设系统 (Overlay Profiles) ===
您可以在此目录创建任意 *.json 文件来定义不同区域/派系/维度的自定义覆层样式。
支持全套可选参数：
- id: 预设唯一标识
- priority: 优先级权重 (越大越优先)
- dimensions: 维度白名单 ["minecraft:overworld", "minecraft:the_nether"] (留空为全维度通用)
- factions: 派系白名单 ["fungal", "illager"] (留空为不限派系)
- overlay_opacity: 遮罩不透明度 (0.0 ~ 1.0, 1.0=完全遮蔽消去下层地形)
- background_color: 遮罩底色 hex (如 "#FF0F0A0C")
- border_enabled: true/false
- border_color: 边框色 hex (如 "#FFE61919")
- border_style: "SOLID", "DASHED", "PULSE", "CORNER"
- phases: 阶段列表，每个阶段包含 duration_seconds, texture, glitch_mode ("NONE", "SCANLINE_JITTER", "CHROMATIC", "FULL_GLITCH", "STATIC_NOISE", "BIO_WAVE"), glitch_intensity
