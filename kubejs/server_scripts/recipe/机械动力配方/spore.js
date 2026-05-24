ServerEvents.recipes(event =>{
    const create = event.recipes.create
    //搅拌器
    //脑子
    create.mixing(['spore:cerebrum',
        Item.of('spore:cerebrum').withChance(0.85)],
        [Fluid.of("biofactory:nutrients_fluid",90),'spore:cerebrum']).heated()
    
    //内分泌激素
    //突变纤维
    create.mixing([Item.of('spore:mutated_fiber',4),
        Item.of('spore:mutated_fiber').withChance(0.25),
        Item.of('spore:mutated_fiber').withChance(0.25),
        Item.of('spore:mutated_fiber').withChance(0.25)],
        [Fluid.of("biofactory:nutrients_fluid",90),'spore:mutated_fiber','biomancy:hormone_secretion']).heated()
   

    //器官膜
    create.mixing([Item.of('spore:organoid_membrane',3),
        Item.of('spore:organoid_membrane').withChance(0.25),
        Item.of('spore:organoid_membrane').withChance(0.25)],
        [Fluid.of("biofactory:nutrients_fluid",90),'spore:organoid_membrane','biomancy:hormone_secretion']).heated()

    //翼膜
    create.mixing([Item.of('spore:wing_membrane',3),
        Item.of('spore:wing_membrane').withChance(0.25),
        Item.of('spore:wing_membrane').withChance(0.25)],
        [Fluid.of("biofactory:nutrients_fluid",90),'spore:wing_membrane','biomancy:hormone_secretion']).heated()

    //甲质残片
    create.mixing([Item.of('spore:armor_fragment',4),
        Item.of('spore:armor_fragment').withChance(0.25),
        Item.of('spore:armor_fragment').withChance(0.25),
        Item.of('spore:armor_fragment').withChance(0.25)],
        [Fluid.of("biofactory:nutrients_fluid",90),'spore:armor_fragment','biomancy:hormone_secretion','minecraft:bone_meal']).heated()

    //利爪残片
    create.mixing([Item.of('spore:claw_fragment',3),
        Item.of('spore:claw_fragment').withChance(0.25),
        Item.of('spore:claw_fragment').withChance(0.25)],
        [Fluid.of("biofactory:nutrients_fluid",90),'spore:claw_fragment','biomancy:hormone_secretion','minecraft:bone_meal']).heated()

    //遗传化合物
    //突变心脏
    create.mixing([Item.of('spore:mutated_heart',2),
        Item.of('spore:mutated_heart').withChance(0.25)],
        [Fluid.of("biofactory:nutrients_fluid",90),'spore:mutated_heart','biomancy:genetic_compound']).heated()

    //腐化性囊
    create.mixing([Item.of('spore:corrosive_sack',2),
        Item.of('spore:corrosive_sack').withChance(0.25),
        Item.of('spore:corrosive_sack').withChance(0.25)],
        [Fluid.of("biofactory:nutrients_fluid",90),'spore:corrosive_sack','biomancy:genetic_compound','biomancy:withering_ooze']).heated()

    //肺泡状囊
    create.mixing([Item.of('spore:alveolic_sack',2),
        Item.of('spore:alveolic_sack').withChance(0.25),
        Item.of('spore:alveolic_sack').withChance(0.25)],
        [Fluid.of("biofactory:nutrients_fluid",90),'spore:alveolic_sack','biomancy:genetic_compound']).heated()

    //变异脾脏
    create.mixing([Item.of('spore:altered_spleen',2),
        Item.of('spore:altered_spleen').withChance(0.25)],
        [Fluid.of("biofactory:nutrients_fluid",90),'spore:altered_spleen','biomancy:genetic_compound']).heated()

    //胆汁
    create.mixing(Fluid.of('spore:bile',1000),
        ['biomancy:hormone_secretion','biomancy:volatile_fluid',Item.of('biomancy:bile',2),Fluid.water(1000)])

    //动力合成
    //脑组织块
    create.mechanical_crafting('spore:brain_remnants',[
        "YNNNH",
        "NSXSN",
        "NXZXN",
        "NSXSN",
        "HNNNY",
    ],{
        N:'spore:cerebrum',
        S:'spore:nerves',
        X:'biomancy:creator_mix',
        Z:'biomancy:primordial_core',
        H:'biomancy:healing_additive',
        Y:'biomancy:organic_compound',
    });
    //腐建心智
    create.mechanical_crafting('spore:hive_spawn',[
        "QYXZQ",
        "CNKNF",
        "TKJKT",
        "HNKNB",
        "QZXYQ",
    ],{
        Q:'biomancy:living_flesh',
        Y:'biomancy:organic_compound',
        X:'spore:living_core',
        Z:'biomancy:healing_additive',
        C:'biomancy:genetic_compound',
        N:'spore:cerebrum',
        K:'spore:brain_remnants',
        F:'biomancy:decaying_additive',
        T:'spore:mutated_heart',
        J:'spore:outpost_watcher',
        H:'biomancy:exotic_compound',
        B:'biomancy:unstable_compound',
    });
    //警戒观察体
    create.mechanical_crafting('spore:outpost_watcher',[
        " HYC ",
        " TJT ",
        "QNXNW",
        " DND ",
    ],{
       H:'biomancy:rejuvenation_serum',
       Y:Item.of('spore:vigil_eye', '{Damage:0}'),
       C:'biomancy:ageing_serum',
       T:'spore:mutated_fiber',
       J:'spore:spine',
       Q:'biomancy:exotic_compound',
       N:'spore:brain_remnants',
       X:'spore:living_core',
       W:'biomancy:genetic_compound',
       D:'spore:cerebrum',
    });
})