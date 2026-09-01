# ============ 亚波伦演出:回收(schedule 440t 执行,console 上下文) ============
# 经锚点定位到演出中心,再执行实际回收。
# 注意:十二使徒召唤必须在 下界 执行,这里显式 in minecraft:the_nether 双保险
# (锚点在下界,at @s 会切维度;再加 in 防止 schedule/console 上下文隐式漂移)
execute in minecraft:the_nether as @e[tag=fib_apollyon_anchor] at @s run function fib_functions:gameplay/apollyon_finish_at
execute in minecraft:the_nether run kill @e[tag=fib_apollyon_anchor]
