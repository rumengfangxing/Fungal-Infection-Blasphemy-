ServerEvents.recipes(event => {

    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"fib:collective/blazing_land"}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: Item.of('minecraft:ender_pearl', '{}'),
            C: Item.of('minecraft:nether_star', '{}'),
            B: Item.of('minecraft:blaze_rod', '{}')
        }
    )
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"fib:collective/main_world_carnival"}'),
        [
            'ABA',
            'BCB',
            'ADA'
        ],
        {
            C: Item.of('minecraft:ender_pearl', '{}'),
            A: Item.of('goety:venomous_fang', '{}'),
            B: Item.of('minecraft:rotten_flesh', '{}'),
            D: Item.of('goety:hunters_bow', '{Damage:0}').strongNBT()
        }
    )
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"fib:collective/spider_party"}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: Item.of('minecraft:ender_pearl', '{}'),
            B: Item.of('goety:spider_egg', '{}'),
            C: Item.of('goety:spider_nest', '{}')
        }
    )
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"fib:endless/dormitory_supervisor"}'),
        [
            'ABB',
            'BCB',
            'BBA'
        ],
        {
            B: Item.of('minecraft:phantom_membrane', '{}'),
            C: Item.of('minecraft:ender_pearl', '{}'),
            A: Item.of('minecraft:blaze_rod', '{}')
        }
    )
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"fib:endless/fireball_storm"}'),
        [
            'ABB',
            'BCB',
            'BBA'
        ],
        {
            C: Item.of('minecraft:ender_pearl', '{}'),
            B: Item.of('minecraft:ghast_tear', '{}'),
            A: Item.of('minecraft:blaze_rod', '{}')
        }
    )
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"fib:endless/shadow_shell_party"}'),
        [
            'ABB',
            'BCB',
            'BBA'
        ],
        {
            C: Item.of('minecraft:ender_eye', '{}'),
            A: Item.of('minecraft:blaze_rod', '{}'),
            B: Item.of('minecraft:shulker_shell', '{}')
        }
    )
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"fib:collective/skeleton_party"}'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: Item.of('minecraft:ender_pearl', '{}'),
            B: Item.of('minecraft:ender_eye', '{}'),
            C: Item.of('minecraft:skeleton_skull', '{}')
        }
    )
    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"fib:endless/zombie_party"}'),
        [
            'ABB',
            'BCB',
            'BBA'
        ],
        {
            C: Item.of('minecraft:ender_pearl', '{}'),
            B: Item.of('minecraft:rotten_flesh', '{}'),
            A: Item.of('minecraft:blaze_rod', '{}')
        }
    )
});
