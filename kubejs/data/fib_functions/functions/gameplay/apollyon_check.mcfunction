# ============ 阿波利昂演出:单只检查(每只阿波利昂,as @s) ============
# 转阶段瞬间 settingSecondPhase 0->1(无敌+回血开始),此时触发演出
# 回血结束才变 secondPhase:1b,因此检测 settingSecondPhase 边沿
execute store result score @s fib_setting run data get entity @s settingSecondPhase
execute if score @s fib_setting matches 1 if score @s fib_prev matches 0 unless entity @s[tag=fib_apollyon_triggered] run function fib_functions:gameplay/apollyon_trigger
scoreboard players operation @s fib_prev = @s fib_setting
