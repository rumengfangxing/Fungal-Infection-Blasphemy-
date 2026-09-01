# ============ 阿波利昂演出:初始化(经 minecraft:load 标签执行) ============
# 计分板:记录每只阿波利昂的 settingSecondPhase 状态,用于 0->1 边沿检测
scoreboard objectives add fib_apollyon dummy
scoreboard objectives add fib_setting dummy
scoreboard objectives add fib_prev dummy
# 夺舍机制:hp/maxhp/threshold —— 濒死判定(Health <= MaxHealth 的 10%)
scoreboard objectives add fib_hp dummy
scoreboard objectives add fib_maxhp dummy
scoreboard objectives add fib_threshold dummy
