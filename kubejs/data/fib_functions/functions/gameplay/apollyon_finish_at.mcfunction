# ============ 亚波伦演出:在演出中心执行回收(as @s = 锚点) ============
# 先杀演出实体(防止它们 450 tick 时自行生成使徒),再执行 twelve_apostle 召唤真使徒
kill @e[type=goety:summon_apostle,tag=fib_apostle_show]
title @a title {"text":"十二使徒,降临于此世!","color":"gold"}
title @a subtitle {"text":"虚影焚作灰烬,灰烬凝成血肉","color":"white"}
function fib_functions:gameplay/twelve_apostle
