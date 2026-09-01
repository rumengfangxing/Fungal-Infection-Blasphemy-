# ============ 亚波伦夺舍:执行(as @s = 被夺舍使徒,执行位置 = 其位置) ============
# 1) 触发被夺舍使徒的战利品表,掉落物留在原地
# 2) 最近的亚波伦 tp 到此位置(本机 NBT 完全不变,仍是它自己)
# 3) 亚波伦回血到满(6666.6 与召唤时一致,只改 Health 字段)
# 4) 打夺舍信号 tag —— apollyon_stage.js 的死亡事件据此把该使徒的全部标签
#    合并给亚波伦(通用方案,不限于 12 个称号标签),并抑制普通死亡提示
# 5) 清除被夺舍使徒
tellraw @a {"text":"血骨为薪,意志复燃——亚波伦撕碎一具使徒的躯壳,夺舍重生,伤势尽复!","color":"dark_purple"}
loot spawn ~ ~ ~ loot goety:entities/apostle
execute as @e[type=goety:apostle,nbt={isApollyon:1b},sort=nearest,limit=1] run tp @s ~ ~ ~
execute as @e[type=goety:apostle,nbt={isApollyon:1b},sort=nearest,limit=1] run data merge entity @s {Health:6666.6f}
tag @s add fib_possessed
kill @s
