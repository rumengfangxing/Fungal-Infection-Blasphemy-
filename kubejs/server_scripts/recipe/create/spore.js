ServerEvents.recipes(event =>{
    const create = event.recipes.create
    //搅拌器
    //脑子
    create.mixing(['spore:cerebrum',Item.of('spore:cerebrum').withChance(0.85)],[Fluid.water(200),'biomancy:nutrient_paste','spore:cerebrum']).heated()
    
    //内分泌激素
    //突变纤维
    create.mixing([Item.of('spore:mutated_fiber',2),Item.of('spore:mutated_fiber').withChance(0.25)],[Fluid.water(200),'biomancy:nutrient_paste','spore:mutated_fiber','biomancy:hormone_secretion']).heated()

    //器官膜
    create.mixing([Item.of('spore:organoid_membrane',2),Item.of('spore:organoid_membrane').withChance(0.25)],[Fluid.water(200),'biomancy:nutrient_paste','spore:organoid_membrane','biomancy:hormone_secretion']).heated()

    //翼膜
    create.mixing([Item.of('spore:wing_membrane',2),Item.of('spore:wing_membrane').withChance(0.25)],[Fluid.water(200),'biomancy:nutrient_paste','spore:wing_membrane','biomancy:hormone_secretion']).heated()

    //甲质残片
    create.mixing([Item.of('spore:armor_fragment',2),Item.of('spore:armor_fragment').withChance(0.25)],[Fluid.water(200),'biomancy:nutrient_paste','spore:armor_fragment','biomancy:hormone_secretion','minecraft:bone_meal']).heated()

    //利爪残片
    create.mixing([Item.of('spore:claw_fragment',2),Item.of('spore:claw_fragment').withChance(0.25)],[Fluid.water(200),'biomancy:nutrient_paste','spore:claw_fragment','biomancy:hormone_secretion','minecraft:bone_meal']).heated()

    //遗传化合物
    //突变心脏
    create.mixing([Item.of('spore:mutated_heart',2),Item.of('spore:mutated_heart').withChance(0.25)],[Fluid.water(200),'biomancy:nutrient_paste','spore:mutated_heart','biomancy:genetic_compound']).heated()

    //腐蚀性囊
    create.mixing([Item.of('spore:corrosive_sack',2),Item.of('spore:corrosive_sack').withChance(0.25)],[Fluid.water(200),'biomancy:nutrient_paste','spore:corrosive_sack','biomancy:genetic_compound']).heated()

    //肺泡状囊
    create.mixing([Item.of('spore:alveolic_sack',2),Item.of('spore:alveolic_sack').withChance(0.25)],[Fluid.water(200),'biomancy:nutrient_paste','spore:alveolic_sack','biomancy:genetic_compound']).heated()

    //变异脾脏
    create.mixing([Item.of('spore:altered_spleen',2),Item.of('spore:altered_spleen').withChance(0.25)],[Fluid.water(200),'biomancy:nutrient_paste','spore:altered_spleen','biomancy:genetic_compound']).heated()

    //动力合成
    //脑组织块
    create.mechanical_crafting('spore:brain_remnants',[
        "BNNNC",
        "NSXSN",
        "NXZXN",
        "NSXSN",
        "HNNNY"
    ],{
        B:'biomancy:unstable_compound',
        N:'spore:cerebrum',
        C:'biomancy:ageing_serum',
        S:'spore:nerves',
        X:'biomancy:living_flesh',
        Z:'biomancy:primordial_core',
        H:'biomancy:rejuvenation_serum',
        Y:'biomancy:genetic_compound'
    })
    //太上老菌(腐建心智)
    create.mechanical_crafting('spore:hive_spawn',[
        "QYXZQ",
        "CNKNF",
        "TKJKT",
        "HNKNB",
        "QZXYQ"
    ],{
        Q:'biomancy:creator_mix',
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
        B:'biomancy:unstable_compound'
    })
})