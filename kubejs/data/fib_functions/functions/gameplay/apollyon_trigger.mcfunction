# ============ 亚波伦演出:触发(as @s = 亚波伦,位置为演出中心) ============
# 1) 防重复标记
# 2) 召唤 12 个演出实体(summon_apostle,偏移与 twelve_apostle.mcfunction 一致(半径24取整),
#    450 tick 会自行生成使徒,必须在 440 tick 前回收)
# 3) 放 marker 锚点,440 tick 后经锚点定位执行回收 + 召唤真使徒
tellraw @a {"text":"死亡不过是仪式的一环——亚波伦的权柄显现,十二道虚影自深渊环伺而起!","color":"dark_red"}
tag @s add fib_apollyon_triggered
summon minecraft:marker ~ ~ ~ {Tags:["fib_apollyon_anchor"]}
summon goety:summon_apostle ~24 ~ ~0 {Tags:["fib_apostle_show"]}
summon goety:summon_apostle ~21 ~ ~12 {Tags:["fib_apostle_show"]}
summon goety:summon_apostle ~12 ~ ~21 {Tags:["fib_apostle_show"]}
summon goety:summon_apostle ~0 ~ ~24 {Tags:["fib_apostle_show"]}
summon goety:summon_apostle ~-12 ~ ~21 {Tags:["fib_apostle_show"]}
summon goety:summon_apostle ~-21 ~ ~12 {Tags:["fib_apostle_show"]}
summon goety:summon_apostle ~-24 ~ ~0 {Tags:["fib_apostle_show"]}
summon goety:summon_apostle ~-21 ~ ~-12 {Tags:["fib_apostle_show"]}
summon goety:summon_apostle ~-12 ~ ~-21 {Tags:["fib_apostle_show"]}
summon goety:summon_apostle ~0 ~ ~-24 {Tags:["fib_apostle_show"]}
summon goety:summon_apostle ~12 ~ ~-21 {Tags:["fib_apostle_show"]}
summon goety:summon_apostle ~21 ~ ~-12 {Tags:["fib_apostle_show"]}
schedule function fib_functions:gameplay/apollyon_finish 440t
