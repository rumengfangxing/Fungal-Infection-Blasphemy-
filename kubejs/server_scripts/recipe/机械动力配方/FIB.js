ServerEvents.recipes(event =>{
    const create = event.recipes.create

//压块

create.compacting(
  [Fluid.of('liquid_ammonia',50),
   Fluid.of('createdieselgenerators:biodiesel',500),
   Fluid.water(250)],
   Fluid.of('magazine_gas',500))
////战术道具相关
create.compacting(
  Item.of('fib:napalm_lump',4),
  [Fluid.of('createdieselgenerators:gasoline',250),
   Fluid.of('createdieselgenerators:ethanol',100),
   Item.of('minecraft:slime_ball',2),
   Item.of('minecraft:blaze_powder',2)]).heated()
////

//石磨

create.milling([Item.of('fib:saltpeter').withChance(0.65),
  Item.of('fib:saltpeter').withChance(0.2)],
  'sandstone')

//粉碎

create.crushing([Item.of('fib:saltpeter').withChance(0.8),
  Item.of('fib:saltpeter').withChance(0.25),
  Item.of('fib:saltpeter').withChance(0.25)],
  'sandstone')
//混合搅拌
////战术道具相关
create.mixing("fib:c4_explosive",
  ["minecraft:blaze_powder",
    "minecraft:slime_ball",
    'fib:pressed_powder',
    Item.of('fib:high_energy_gunpowder',2),
    Fluid.of('createdieselgenerators:biodiesel',100)]).heated()
////
////邪术精华
create.mixing(['2x fib:hex_essence',"fib:hex_catalyst"],
  ["legendarysurvivaloverhaul:heart_fragment","fib:hex_catalyst"]
).heated()

create.mixing(['2x fib:hex_essence',"fib:hex_catalyst"],
  ["legendarysurvivaloverhaul:shield_container","fib:hex_catalyst"]
).heated()

create.mixing(['4x fib:hex_essence',"fib:hex_catalyst"],
  ["majruszsdifficulty:wither_sword","fib:hex_catalyst"]
).heated()

create.mixing(['4x fib:hex_essence',"fib:hex_catalyst"],
  ["majruszsdifficulty:soul_jar","fib:hex_catalyst"]
).heated()

create.mixing(['4x fib:hex_essence',"fib:hex_catalyst"],
  ["majruszsdifficulty:enderium_shard","fib:hex_catalyst"]
).heated()

create.mixing(['1x fib:hex_essence',"fib:hex_catalyst"],
  ["minecraft:echo_shard","fib:hex_catalyst"]
).heated()

create.mixing(['4x fib:hex_essence',"fib:hex_catalyst"],
  ["goeticlegacy:old_world_echo","fib:hex_catalyst"]
).heated()

create.mixing(['4x fib:hex_essence',"fib:hex_catalyst"],
  ["majruszsdifficulty:cerberus_fang","fib:hex_catalyst"]
).heated()

create.mixing(['4x fib:hex_essence',"fib:hex_catalyst"],
  ["minecraft:ancient_debris","fib:hex_catalyst"]
).heated()

create.mixing(['4x fib:hex_essence',"fib:hex_catalyst"],
  ["majruszsdifficulty:evoker_fang_scroll","fib:hex_catalyst"]
).heated()

create.mixing(['4x fib:hex_essence',"fib:hex_catalyst"],
  ["majruszsdifficulty:sonic_boom_scroll","fib:hex_catalyst"]
).heated()

create.mixing(['6x fib:hex_essence',"fib:hex_catalyst"],
  ["legendarysurvivaloverhaul:heart_container","fib:hex_catalyst"]
).heated()

create.mixing(['8x fib:hex_essence',"fib:hex_catalyst"],
  ["biomancy:bloomberry","fib:hex_catalyst"]
).heated()

create.mixing(['16x fib:hex_essence',"fib:hex_catalyst"],
  ["minecraft:nether_star","fib:hex_catalyst"]
).heated()

create.mixing(['16x fib:hex_essence',"fib:hex_catalyst"],
  ["fib:essenceoflife","fib:hex_catalyst"]
).heated()

create.mixing(['32x fib:hex_essence',"fib:hex_catalyst"],
  ["goety:void_echo","fib:hex_catalyst"]
).heated()
create.mixing(['4x fib:hex_essence',"fib:hex_catalyst"],
  ["majruszsdifficulty:angler_treasure_bag","fib:hex_catalyst"]
).heated()

create.mixing(['4x fib:hex_essence',"fib:hex_catalyst"],
  ["majruszsdifficulty:elder_guardian_treasure_bag","fib:hex_catalyst"]
).heated()

create.mixing(['16x fib:hex_essence',"fib:hex_catalyst"],
  ["majruszsdifficulty:ender_dragon_treasure_bag","fib:hex_catalyst"]
).heated()

create.mixing(['8x fib:hex_essence',"fib:hex_catalyst"],
  ["majruszsdifficulty:wither_treasure_bag","fib:hex_catalyst"]
).heated()

create.mixing(['8x fib:hex_essence',"fib:hex_catalyst"],
  ["majruszsdifficulty:undead_army_treasure_bag","fib:hex_catalyst"]
).heated()

create.mixing(['8x fib:hex_essence',"fib:hex_catalyst"],
  ["majruszsdifficulty:pillager_treasure_bag","fib:hex_catalyst"]
).heated()

create.mixing(['8x fib:hex_essence',"fib:hex_catalyst"],
  ["majruszsdifficulty:warden_treasure_bag","fib:hex_catalyst"]
)
create.mixing(Fluid.of('create_enchantment_industry:hyper_experience',100),
  [Fluid.of('create_enchantment_industry:experience',200),"fib:hex_essence"]
).superheated()
////
   //动力合成
   //冷却单元
    create.mechanical_crafting('fib:cooling_unit',[
         "ATFTA",
         "JSBYJ",
         "HQCQH",
         "JDBDJ",
         "ATXTA",
    ],{
       A:'create:andesite_alloy',
       T:'create:iron_sheet',
       F:'fib:liquid_ammonia_bucket',
       J:'create:sturdy_sheet',
       S:'create:speedometer',
       B:'spore:ice_canister',
       Y:'create:stressometer',
       H:'create:brass_sheet',
       Q:'fib:pressure_tank',
       C:'createdieselgenerators:canister',
       D:'spore:circuit_board',
       X:'create:propeller',
    });
    //气压罐
    create.mechanical_crafting('fib:pressure_tank',[
        "AJA",
        "BZB",
        "JMJ",
        "BHB",
        "AJA",
    ],{
        A:'create:andesite_alloy',
        J:'create:sturdy_sheet',
        B:'create:brass_sheet',
        Z:'create:speedometer',
        M:'createdieselgenerators:canister',
        H:'create:brass_ingot',
    });


//序列组装
//制冰物品配方（伪序列组装）
    create.filling(Item.of('fib:filling_cooling_unit'),
    [Item.of('fib:cooling_unit'),Fluid.water(1000)])
    
    event.custom({
      "type":"createaddition:charging",
      "input":{"item":"fib:filling_cooling_unit"},
      "result":{"item":"fib:unopened_cooling_unit"},
      "energy":50000,
      "maxChargeRate":12500
    })
    create.cutting([
      Item.of('fib:cooling_unit'),
      Item.of('minecraft:blue_ice')
    ],
  'fib:unopened_cooling_unit')


/*
//制冰机
const CU = 'fib:cooling_unit'
    create.sequenced_assembly([
      Item.of('fib_mod:ice_maker'),
    ],
      'fib:cooling_unit',
    [
      create.deploying(CU,[CU,'create_connected:kinetic_battery']),
      create.deploying(CU,[CU,'create:mechanical_press']),
      create.deploying(CU,[CU,'spore:circuit_board']),
      create.deploying(CU,[CU,'create:andesite_casing']),
      create.cutting(CU,CU),
      create.pressing(CU,CU),
    ])
    .transitionalItem('fib:cooling_unit')
    .loops(1);
*/
//CDU
const CDU = 'minecraft:dispenser'
    create.sequenced_assembly([
      Item.of('spore:cdu'),
    ],
      'minecraft:dispenser',
    [
      create.deploying(CDU,[CDU,'fib:cooling_unit']),
      create.deploying(CDU,[CDU,'spore:circuit_board']),
      create.deploying(CDU,[CDU,'spore:compound_plate']),
      create.deploying(CDU,[CDU,'iron_trapdoor']),
    ])
    .transitionalItem('minecraft:dispenser')
    .loops(1);

//T1装备组件-羽毛
const T101 = 'create:iron_sheet'
    create.sequenced_assembly([
      Item.of('fib:t1_equipment_module'),
    ],
      'create:iron_sheet',
    [
      create.deploying(T101,[T101,'minecraft:feather']),
      create.deploying(T101,[T101,'minecraft:leather']),
      create.cutting(T101,T101),
      create.pressing(T101,T101),
    ])
    .transitionalItem('create:iron_sheet')
    .loops(1);
//T1装备组件-幻翼膜
const T102 = 'create:iron_sheet'
    create.sequenced_assembly([
      Item.of('fib:t1_equipment_module'),
    ],
      'create:iron_sheet',
    [
      create.deploying(T102,[T102,'minecraft:phantom_membrane']),
      create.deploying(T102,[T102,'minecraft:leather']),
      create.cutting(T102,T102),
      create.pressing(T102,T102),
    ])
    .transitionalItem('create:iron_sheet')
    .loops(1);
//T1装备组件-翼膜
const T103 = 'create:iron_sheet'
    create.sequenced_assembly([
      Item.of('fib:t1_equipment_module'),
    ],
      'create:iron_sheet',
    [
      create.deploying(T103,[T103,'spore:wing_membrane']),
      create.deploying(T103,[T103,'minecraft:leather']),
      create.cutting(T103,T103),
      create.pressing(T103,T103),
    ])
    .transitionalItem('create:iron_sheet')
    .loops(1);
//T2装备组件
const T2 = 'fib:t1_equipment_module'
    create.sequenced_assembly([
      Item.of('fib:t2_equipment_module'),
    ],
      'fib:t1_equipment_module',
    [
      create.deploying(T2,[T2,'spore:compound_plate']),
      create.cutting(T2,T2),
      create.pressing(T2,T2),
    ])
    .transitionalItem('fib:t1_equipment_module')
    .loops(2);
//重组装备组件
const H = 'fib:t2_equipment_module'
    create.sequenced_assembly([
      Item.of('fib:h_a_equipment_module'),
    ],
      'fib:t2_equipment_module',
    [
      create.deploying(H,[H,'create:sturdy_sheet']),
      create.filling(H,[H,Fluid.lava(1000)]),
      create.pressing(H,H),
    ])
    .transitionalItem('fib:t2_equipment_module')
    .loops(3);
//魔翎装备组件
const AVI = 'fib:t2_equipment_module'
    create.sequenced_assembly([
      Item.of('fib:avi_equipment_module'),
    ],
      'fib:t2_equipment_module',
    [
      create.deploying(AVI,[AVI,'goety_revelation:gold_feather']),
      create.cutting(AVI,AVI),
      create.pressing(AVI,AVI),
    ])
    .transitionalItem('fib:t1_equipment_module')
    .loops(2);
//特种装备组件-幻翼膜
const SPEC = 'fib:t2_equipment_module'
    create.sequenced_assembly([
      Item.of('fib:spec_equipment_module'),
    ],
      'fib:t2_equipment_module',
    [
      create.deploying(SPEC,[SPEC,'minecraft:phantom_membrane']),
      create.deploying(SPEC,[SPEC,'create:iron_sheet']),
      create.deploying(SPEC,[SPEC,'minecraft:blaze_powder']),
      create.deploying(SPEC,[SPEC,'minecraft:netherite_scrap']),
      create.pressing(SPEC,SPEC),
    ])
    .transitionalItem('fib:t2_equipment_module')
    .loops(3);
//特种装备组件-翼膜
const SPEC2 = 'fib:t2_equipment_module'
    create.sequenced_assembly([
      Item.of('fib:spec_equipment_module'),
    ],
      'fib:t2_equipment_module',
    [
      create.deploying(SPEC2,[SPEC2,'spore:wing_membrane']),
      create.deploying(SPEC2,[SPEC2,'create:iron_sheet']),
      create.deploying(SPEC2,[SPEC2,'minecraft:blaze_powder']),
      create.deploying(SPEC2,[SPEC2,'minecraft:netherite_scrap']),
      create.pressing(SPEC2,SPEC2),
    ])
    .transitionalItem('fib:t2_equipment_module')
    .loops(3);
//回响装备组件
const ECHO = 'fib:t2_equipment_module'
    create.sequenced_assembly([
      Item.of('fib:echo_equipment_module'),
    ],
      'fib:t2_equipment_module',
    [
      create.filling(ECHO,[ECHO,Fluid.of('goety:void',250)]),
      create.cutting(ECHO,ECHO),
      create.deploying(ECHO,[ECHO,'minecraft:echo_shard']),
      create.deploying(ECHO,[ECHO,'goetydelight:soul_convergence_room']).keepHeldItem(),
    ])
    .transitionalItem('fib:t2_equipment_module')
    .loops(4);
//生化装备组件
    const BIO = 'fib:t2_equipment_module'
    create.sequenced_assembly([
      Item.of('fib:bio_equipment_module').withChance(0.8),
      Item.of('fib:bio_equipment_module_0').withChance(0.1),
      Item.of('spore:mutated_fiber').withChance(0.03),
      Item.of('spore:cerebrum').withChance(0.03),
      Item.of('spore:living_core').withChance(0.04),
    ],
      'fib:t2_equipment_module',
    [
      create.deploying(BIO,[BIO,'biomancy:primordial_core']),
      create.deploying(BIO,[BIO,'spore:living_core']),
      create.pressing(BIO,BIO),
      create.deploying(BIO,[BIO,'spore:mutated_fiber']),
      create.deploying(BIO,[BIO,'spore:nerves']),
      create.cutting(BIO,BIO),
    ])
    .transitionalItem('fib:t2_equipment_module')
    .loops(4);
})