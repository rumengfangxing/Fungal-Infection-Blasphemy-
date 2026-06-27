ServerEvents.recipes(event =>{
    const create = event.recipes.create
    //搅拌
    //湿润火药
    create.mixing(Item.of('fib:moist_gunpowder',28),
    [Fluid.water(250),Item.of('minecraft:gunpowder',2),'minecraft:charcoal'])
    //散弹纸筒
    create.mixing(Item.of('fib:shotgun_paper_tube',10),
    [Fluid.water(250),Item.of('minecraft:paper',10),'minecraft:honeycomb','minecraft:red_dye'])

    //压块
    //压制火药
    create.compacting('fib:pressed_powder',Item.of('fib:gunpowder',4))

    //烟熏
    //火药
    event.smoking('fib:gunpowder','fib:moist_gunpowder',0,20*5)

    //动力切割
    //弹头
    create.cutting(Item.of('fib:bullet_head',16),'create:copper_nugget')
    //弹壳
    create.cutting(Item.of('fib:casing',10),'create:brass_nugget')
    //小型弹壳
    create.cutting(Item.of('fib:small_casing',12),'create:brass_nugget')
    //狙击枪子弹弹壳
    create.cutting(Item.of('fib:sniper_rifle_bullet_casing',8),'create:brass_nugget')
    //小纸片
    create.cutting(Item.of('fib:small_piece_of_paper',8),'minecraft:paper')

    //动力合成
    //一堆铁球
    create.mechanical_crafting('fib:shot_pellets',[
        "TT",
        "TT",
    ],{
       T:'minecraft:iron_nugget'
    });
  
    //高爆单元
    create.mechanical_crafting(Item.of('fib:high_explosive_unit',8),[
        " T ",
        "TYT",
        "LAL",
    ],{
        T:'create:iron_sheet',
        Y:'fib:pressed_powder',
        L:'minecraft:iron_nugget',
        A:'create:andesite_alloy',
    });
    //高爆外壳
    create.mechanical_crafting(Item.of('fib:high_explosive_casing',10),[
        "LAL",
        "TYT",
        "LDL",
    ],{
        T:'create:iron_sheet',
        Y:'fib:pressed_powder',
        L:'minecraft:iron_nugget',
        A:'create:andesite_alloy',
        D:'fib:primer',
    });
    //序列组装
    //能量罐
    const unfinished_energy_tank ='fib:unfinished_energy_tank'
    create.sequenced_assembly([
       Item.of('tacz:ammo', '{AmmoId:"tacz_unidict:fuel_tank"}'),
    ],
       'minecraft:iron_ingot',
    [
       create.cutting(unfinished_energy_tank,unfinished_energy_tank),
       create.deploying(unfinished_energy_tank,[unfinished_energy_tank,'minecraft:redstone']),
       create.deploying(unfinished_energy_tank,[unfinished_energy_tank,'minecraft:redstone']),
       create.filling(unfinished_energy_tank,[unfinished_energy_tank,Fluid.lava(100)]),
       create.pressing(unfinished_energy_tank,unfinished_energy_tank),
    ])
    .transitionalItem(unfinished_energy_tank)
    .loops(1);
    //底火
    const brass_sheet ='create:brass_sheet'
    create.sequenced_assembly([
      Item.of('fib:primer',40),
    ],
      'create:brass_sheet',
    [
      create.cutting(brass_sheet,brass_sheet),
      create.deploying(brass_sheet,[brass_sheet,'fib:high_energy_gunpowder']),
      create.deploying(brass_sheet,[brass_sheet,'create:brass_nugget']),
      create.pressing(brass_sheet,brass_sheet),
    ])
    .transitionalItem(brass_sheet)
    .loops(1);
    //步枪弹
    const casing = 'fib:casing'
    create.sequenced_assembly([
      Item.of('tacz:ammo', '{AmmoId:"tacz_unidict:rifle"}'),
    ],
      'fib:casing',
    [
      create.deploying(casing,[casing,'fib:primer']),
      create.deploying(casing,[casing,'fib:gunpowder']),
      create.deploying(casing,[casing,'fib:gunpowder']),
      create.deploying(casing,[casing,'fib:bullet_head']),
      create.pressing(casing,casing),
    ])
    .transitionalItem(casing)
    .loops(1);
    //手枪子弹
    const small_casing = 'fib:small_casing'
    create.sequenced_assembly([
      Item.of('tacz:ammo', '{AmmoId:"tacz_unidict:pistol"}'),
    ],
      'fib:small_casing',
    [
      create.deploying(small_casing,[small_casing,'fib:primer']),
      create.deploying(small_casing,[small_casing,'fib:gunpowder']),
      create.deploying(small_casing,[small_casing,'fib:small_pinch_of_gunpowder']),
      create.deploying(small_casing,[small_casing,'fib:bullet_head']),
      create.pressing(small_casing,small_casing),
    ])
    .transitionalItem(small_casing)
    .loops(1);
    //狙击枪子弹
    const sniper_rifle_bullet_casing = 'fib:sniper_rifle_bullet_casing'
    create.sequenced_assembly([
      Item.of('tacz:ammo', '{AmmoId:"tacz_unidict:sniper"}'),
    ],
      'fib:sniper_rifle_bullet_casing',
    [
      create.deploying(sniper_rifle_bullet_casing,[sniper_rifle_bullet_casing,'fib:primer']),
      create.deploying(sniper_rifle_bullet_casing,[sniper_rifle_bullet_casing,'fib:gunpowder']),
      create.deploying(sniper_rifle_bullet_casing,[sniper_rifle_bullet_casing,'fib:gunpowder']),
      create.deploying(sniper_rifle_bullet_casing,[sniper_rifle_bullet_casing,'fib:gunpowder']),
      create.deploying(sniper_rifle_bullet_casing,[sniper_rifle_bullet_casing,'fib:bullet_head']),
      create.pressing(sniper_rifle_bullet_casing,sniper_rifle_bullet_casing),
    ])
    .transitionalItem(sniper_rifle_bullet_casing)
    .loops(1);
    //散弹
    const shotgun_shell_housing ='fib:shotgun_shell_housing'
    create.sequenced_assembly([
      Item.of('tacz:ammo', '{AmmoId:"tacz_unidict:shot"}'),
    ],
      'create:brass_nugget',
    [
      create.deploying(shotgun_shell_housing,[shotgun_shell_housing,'fib:shotgun_paper_tube']),
      create.deploying(shotgun_shell_housing,[shotgun_shell_housing,'fib:primer']),
      create.deploying(shotgun_shell_housing,[shotgun_shell_housing,'fib:gunpowder']),
      create.deploying(shotgun_shell_housing,[shotgun_shell_housing,'fib:small_piece_of_paper']),
      create.deploying(shotgun_shell_housing,[shotgun_shell_housing,'fib:shot_pellets']),
      create.pressing(shotgun_shell_housing,shotgun_shell_housing),
      create.pressing(shotgun_shell_housing,shotgun_shell_housing),
    ])
    .transitionalItem(shotgun_shell_housing)
    .loops(1);
    //炮弹
    const high_explosive_casing = 'fib:high_explosive_casing'
    create.sequenced_assembly([
      Item.of('tacz:ammo', '{AmmoId:"tacz_unidict:barrel"}'),
    ],
      'fib:high_explosive_casing',
    [
      create.deploying(high_explosive_casing,[high_explosive_casing,'fib:high_explosive_unit']),
      create.pressing(high_explosive_casing,high_explosive_casing),
    ])
    .transitionalItem(high_explosive_casing)
    .loops(1);
})
