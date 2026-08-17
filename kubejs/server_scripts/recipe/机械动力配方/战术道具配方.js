ServerEvents.recipes(event =>{
    const create = event.recipes.create
//C4炸药
create.mixing('2x fib:c4_explosive',[
  '2x fib:pressed_powder',
  '2x minecraft:slime_ball',
  '3x minecraft:blaze_powder',
  '5x fib:high_energy_gunpowder'
]).heated();

//凝固汽油块
create.mixing('4x fib:napalm_lump',[
  'fib:pressed_powder',
  '2x minecraft:slime_ball',
  '2x minecraft:blaze_powder',
  '2x fib:high_energy_gunpowder',
  Fluid.of('createdieselgenerators:gasoline',400),
  Fluid.of('createdieselgenerators:ethanol',100)
]).heated();

//遥控器
event.shaped('lrtactical:detonator',[
   " A ",
   "BCB",
   " D ",
],{
    A:'create:redstone_link',
    B:'create:iron_sheet',
    C:'#minecraft:buttons',
    D:'create:electron_tube'
});

//C4炸弹组装
const C4 = 'create:iron_sheet'
    create.sequenced_assembly([
      Item.of('lrtactical:throwable', '{ThrowableId:"lrtactical:c4"}'),
    ],
      'create:iron_sheet',
    [
      create.deploying(C4,[C4,'fib:c4_explosive']),
      create.deploying(C4,[C4,'fib:c4_explosive']),
      create.deploying(C4,[C4,'fib:c4_explosive']),
      create.deploying(C4,[C4,'fib:high_energy_gunpowder']),
      create.deploying(C4,[C4,'create_connected:control_chip']),
      create.deploying(C4,[C4,'createaddition:copper_wire']),
      create.deploying(C4,[C4,'create:iron_sheet']),
      create.pressing(C4,C4),
      create.deploying(C4,[C4,'lrtactical:detonator']),
    ])
    .transitionalItem('create:iron_sheet')
    .loops(1);

    //燃烧瓶
    const RSP = 'create:iron_sheet'
    create.sequenced_assembly([
      Item.of('lrtactical:throwable', '{ThrowableId:"lrtactical:molotov"}'),
    ],
      'create:iron_sheet',
    [
      create.deploying(RSP,[RSP,'fib:napalm_lump']),
      create.deploying(RSP,[RSP,'fib:napalm_lump']),
      create.deploying(RSP,[RSP,'fib:high_energy_gunpowder']),
      create.deploying(RSP,[RSP,'minecraft:flint']),
      create.deploying(RSP,[RSP,'create:iron_sheet']),
      create.pressing(RSP,RSP),
    ])
    .transitionalItem('create:iron_sheet')
    .loops(1);

    //M67
    const M67 = 'create:iron_sheet'
    create.sequenced_assembly([
      Item.of('lrtactical:throwable', '{ThrowableId:"lrtactical:m67"}'),
    ],
      'create:iron_sheet',
    [
      create.deploying(M67,[M67,'fib:high_energy_gunpowder']),
      create.deploying(M67,[M67,'fib:pressed_powder']),
      create.deploying(M67,[M67,'minecraft:quartz']),
      create.deploying(M67,[M67,'create:iron_sheet']),
      create.pressing(M67,M67),
    ])
    .transitionalItem('create:iron_sheet')
    .loops(1);

    //RGN
    const RGN = 'create:iron_sheet'
    create.sequenced_assembly([
      Item.of('lrtactical:throwable', '{ThrowableId:"lrtactical:rgn"}'),
    ],
      'create:iron_sheet',
    [
      create.deploying(RGN,[RGN,'minecraft:tripwire_hook']),
      create.deploying(RGN,[RGN,'fib:high_energy_gunpowder']),
      create.deploying(RGN,[RGN,'fib:pressed_powder']),
      create.deploying(RGN,[RGN,'create:iron_sheet']),
      create.pressing(RGN,RGN),
    ])
    .transitionalItem('create:iron_sheet')
    .loops(1);

    //M18
    const M18 = 'create:iron_sheet'
    create.sequenced_assembly([
      Item.of('lrtactical:throwable', '{ThrowableId:"lrtactical:smoke_grenade"}'),
    ],
      'create:iron_sheet',
    [
      create.deploying(M18,[M18,'minecraft:sugar']),
      create.deploying(M18,[M18,'minecraft:sugar']),
      create.deploying(M18,[M18,'fib:saltpeter']),
      create.deploying(M18,[M18,'fib:saltpeter']),
      create.deploying(M18,[M18,'fib:high_energy_gunpowder']),
      create.deploying(M18,[M18,'create:iron_sheet']),
      create.pressing(M18,M18),
    ])
    .transitionalItem('create:iron_sheet')
    .loops(1);

    //SGD
    const SGD = 'create:iron_sheet'
    create.sequenced_assembly([
      Item.of('lrtactical:throwable', '{ThrowableId:"lrtactical:flash_grenade"}'),
    ],
      'create:iron_sheet',
    [
      create.deploying(SGD,[SGD,'minecraft:quartz']),
      create.deploying(SGD,[SGD,'minecraft:blaze_powder']),
      create.deploying(SGD,[SGD,'minecraft:glowstone_dust']),
      create.deploying(SGD,[SGD,'fib:high_energy_gunpowder']),
      create.deploying(SGD,[SGD,'create:iron_sheet']),
      create.pressing(SGD,SGD),
    ])
    .transitionalItem('create:iron_sheet')
    .loops(1);

//炼乳
create.mixing(Item.of('lrtactical:consumable','{ConsumableId:"lrtactical:condensed_milk"}'),
['2x minecraft:sugar',
  Fluid.of('minecraft:milk',500),
  Fluid.of('create:honey',250)
]).heated()

//布洛芬
create.mixing(Item.of('lrtactical:consumable','{ConsumableId:"lrtactical:ibuprofen",Damage:0}'),
['minecraft:sugar',
 'minecraft:cocoa_beans',
 'biomancy:healing_additive',
 '2x minecraft:paper',
  Fluid.of('minecraft:milk',500)
])

//夜猫子
create.mixing(Item.of('lrtactical:consumable', '{ConsumableId:"42labk:pill_y",Damage:0}'),
['minecraft:sugar',
 'minecraft:cocoa_beans',
 'biomancy:insomnia_cure',
 'minecraft:paper',
 'minecraft:golden_carrot'
]).heated()
})