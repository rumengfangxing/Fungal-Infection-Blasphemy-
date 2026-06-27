ServerEvents.recipes(event =>{
    const create = event.recipes.create

//压块

create.compacting(
  [Fluid.of('liquid_ammonia',50),
   Fluid.of('createdieselgenerators:biodiesel',500),
   Fluid.water(250)],
   Fluid.of('magazine_gas',500))

//石磨

create.milling([Item.of('fib:saltpeter').withChance(0.65),
  Item.of('fib:saltpeter').withChance(0.2)],
  'sandstone')

//粉碎

create.crushing([Item.of('fib:saltpeter').withChance(0.8),
  Item.of('fib:saltpeter').withChance(0.25),
  Item.of('fib:saltpeter').withChance(0.25)],
  'sandstone')

  
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

//CDU
const CDU = 'dispenser'
    create.sequenced_assembly([
      Item.of('spore:cdu'),
    ],
      'dispenser',
    [
      create.deploying(CDU,[CDU,'fib:cooling_unit']),
      create.deploying(CDU,[CDU,'spore:circuit_board']),
      create.deploying(CDU,[CDU,'spore:compound_plate']),
      create.deploying(CDU,[CDU,'iron_trapdoor']),
    ])
    .transitionalItem('dispenser')
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