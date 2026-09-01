# ============ 阿波利昂演出:扫描(每 20 tick) ============
# 只处理带 isApollyon:1b 的使徒(阿波利昂),选择器 nbt 过滤,天然只在下界生效
execute as @e[type=goety:apostle,nbt={isApollyon:1b}] at @s run function fib_functions:gameplay/apollyon_check
# 夺舍机制:阿波利昂濒死(Health <= MaxHealth 10%)时夺舍 256 格内最近的普通使徒
execute as @e[type=goety:apostle,nbt={isApollyon:1b}] at @s run function fib_functions:gameplay/apollyon_possess_check
