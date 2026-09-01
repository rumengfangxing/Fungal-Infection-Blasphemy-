# ============ 阿波利昂演出:每 tick 入口(经 minecraft:tick 标签执行) ============
# 20 tick 限流一次,避免每 tick 全量扫描
scoreboard players add #fib_apollyon_timer fib_apollyon 1
execute if score #fib_apollyon_timer fib_apollyon matches 20.. run function fib_functions:gameplay/apollyon_scan
execute if score #fib_apollyon_timer fib_apollyon matches 20.. run scoreboard players reset #fib_apollyon_timer fib_apollyon
