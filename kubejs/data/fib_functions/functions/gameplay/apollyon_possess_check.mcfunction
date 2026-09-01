# ============ 阿波利昂夺舍:濒死检测(as @s = 阿波利昂) ============
# 注意:阿波利昂 MaxHealth 属性 Base 是 600(Revelation 直接把 Health merge 成 6666.6,
#       实体的 MaxHealth NBT 字段不存在/被属性派生),所以不能用 MaxHealth 算阈值!
# 判定:Health <= 666(6666.6 满血的 10%,取整)。改小=更晚触发(如 333 是 5%),改大=更早(如 1333 是 20%)
# 夺舍范围:distance=..256(改此值调整搜索半径)
execute store result score @s fib_hp run data get entity @s Health
# 濒死 → 在 256 格内最近的普通使徒位置执行夺舍
execute if score @s fib_hp matches 1..666 at @s as @e[type=goety:apostle,nbt=!{isApollyon:1b},distance=..256,sort=nearest,limit=1] at @s run function fib_functions:gameplay/apollyon_possess
