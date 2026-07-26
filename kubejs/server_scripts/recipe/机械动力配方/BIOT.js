ServerEvents.recipes(event =>{
    const create = event.recipes.create
//混合搅拌
////奶油
create.mixing(Fluid.of('create_biotech:cream',500),
  ["biomancy:nutrient_paste",
    Fluid.of('minecraft:milk',500)])
////经验转化
create.mixing(
  [
    Fluid.of('create_biotech:experience', 30),          // 输入流体 30mB
    'create_enchantment_industry:experience_rotor'      // 输入物品（转子）
  ],
  [
    'create_enchantment_industry:experience_rotor',     // 输出物品（转子返还）
    Fluid.of('create_enchantment_industry:experience', 30) // 输出流体 30mB
  ]
);
//逆向
create.mixing(
  [
    Fluid.of('create_enchantment_industry:experience', 30), // 输入流体 30mB
    'create_biotech:captured_small_slime'                   // 输入物品（捕获的小史莱姆）
  ],
  [
    'create_biotech:captured_small_slime',                  // 输出物品（返还捕获的小史莱姆）
    Fluid.of('create_biotech:experience', 30)               // 输出流体 30mB
  ]
);
})