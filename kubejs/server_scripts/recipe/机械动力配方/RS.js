ServerEvents.recipes(event => {
    const create = event.recipes.create

    // ========== 搅拌 ==========
    create.mixing("8x refinedstorage:processor_binding",
        ['minecraft:slime_ball', 'minecraft:string']
    ).heated()

    create.mixing("4x refinedstorage:quartz_enriched_iron",
        ['minecraft:quartz', '2x minecraft:iron_ingot']
    ).heated()

    // ========== 压块==========
    create.compacting('refinedstorage:machine_casing',
        ['4x refinedstorage:quartz_enriched_iron', '#forge:stone']
    )

    // ========== 序列装配：处理器 ==========
    const CLQ = 'refinedstorage:silicon'

    // 基础处理器
    create.sequenced_assembly([
        Item.of('refinedstorage:raw_basic_processor', 2)
    ],
        'refinedstorage:silicon',
        [
            create.deploying(CLQ, [CLQ, 'minecraft:iron_ingot']),
            create.deploying(CLQ, [CLQ, 'refinedstorage:silicon']),
            create.deploying(CLQ, [CLQ, '2x minecraft:redstone']),
            create.deploying(CLQ, [CLQ, 'refinedstorage:processor_binding']),
            create.cutting(CLQ, CLQ),
            create.pressing(CLQ, CLQ),
        ])
        .transitionalItem('refinedstorage:silicon')
        .loops(1)

    // 改良处理器
    create.sequenced_assembly([
        Item.of('refinedstorage:raw_improved_processor', 2)
    ],
        'refinedstorage:silicon',
        [
            create.deploying(CLQ, [CLQ, 'minecraft:gold_ingot']),
            create.deploying(CLQ, [CLQ, 'refinedstorage:silicon']),
            create.deploying(CLQ, [CLQ, '2x minecraft:redstone']),
            create.deploying(CLQ, [CLQ, 'refinedstorage:processor_binding']),
            create.cutting(CLQ, CLQ),
            create.pressing(CLQ, CLQ),
        ])
        .transitionalItem('refinedstorage:silicon')
        .loops(1)

    // 高级处理器
    create.sequenced_assembly([
        Item.of('refinedstorage:raw_advanced_processor', 2)
    ],
        'refinedstorage:silicon',
        [
            create.deploying(CLQ, [CLQ, 'minecraft:diamond']),
            create.deploying(CLQ, [CLQ, 'refinedstorage:silicon']),
            create.deploying(CLQ, [CLQ, '2x minecraft:redstone']),
            create.deploying(CLQ, [CLQ, 'refinedstorage:processor_binding']),
            create.cutting(CLQ, CLQ),
            create.pressing(CLQ, CLQ),
        ])
        .transitionalItem('refinedstorage:silicon')
        .loops(1)

    // ========== 序列装配：物品存储部件 ==========
    const K = 'refinedstorage:quartz_enriched_iron'

    // 1k
    create.sequenced_assembly([
        Item.of('refinedstorage:1k_storage_part')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, '#forge:glass']),
            create.deploying(K, [K, 'refinedstorage:silicon']),
            create.deploying(K, [K, '#forge:glass']),
            create.deploying(K, [K, 'refinedstorage:silicon']),
            create.deploying(K, [K, 'minecraft:redstone']),
            create.pressing(K, K),
        ])
        .transitionalItem('refinedstorage:quartz_enriched_iron')
        .loops(1)

    // 4k
    create.sequenced_assembly([
        Item.of('refinedstorage:4k_storage_part')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, 'refinedstorage:basic_processor']),
            create.deploying(K, [K, 'refinedstorage:1k_storage_part']),
            create.deploying(K, [K, 'refinedstorage:basic_processor']),
            create.deploying(K, [K, 'refinedstorage:1k_storage_part']),
            create.deploying(K, [K, 'minecraft:redstone']),
            create.pressing(K, K),
        ])
        .transitionalItem('refinedstorage:quartz_enriched_iron')
        .loops(1)

    // 16k
    create.sequenced_assembly([
        Item.of('refinedstorage:16k_storage_part')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, 'refinedstorage:improved_processor']),
            create.deploying(K, [K, 'refinedstorage:4k_storage_part']),
            create.deploying(K, [K, 'refinedstorage:improved_processor']),
            create.deploying(K, [K, 'refinedstorage:4k_storage_part']),
            create.deploying(K, [K, 'minecraft:redstone']),
            create.pressing(K, K),
        ])
        .transitionalItem('refinedstorage:quartz_enriched_iron')
        .loops(1)

    // 64k
    create.sequenced_assembly([
        Item.of('refinedstorage:64k_storage_part')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'refinedstorage:16k_storage_part']),
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'refinedstorage:16k_storage_part']),
            create.deploying(K, [K, 'minecraft:redstone']),
            create.pressing(K, K),
        ])
        .transitionalItem('refinedstorage:quartz_enriched_iron')
        .loops(1)
    // ========== 序列装配：流体存储部件（全部正常，无需修改） ==========
    // 64k 流体
    create.sequenced_assembly([
        Item.of('refinedstorage:64k_fluid_storage_part')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, 'refinedstorage:silicon']),
            create.deploying(K, [K, '#forge:glass']),
            create.deploying(K, [K, 'refinedstorage:silicon']),
            create.deploying(K, [K, '#forge:glass']),
            create.deploying(K, [K, 'minecraft:bucket']),
            create.pressing(K, K),
        ])
        .transitionalItem('refinedstorage:quartz_enriched_iron')
        .loops(1)

    // 256k 流体
    create.sequenced_assembly([
        Item.of('refinedstorage:256k_fluid_storage_part')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, 'refinedstorage:64k_fluid_storage_part']),
            create.deploying(K, [K, 'refinedstorage:basic_processor']),
            create.deploying(K, [K, 'refinedstorage:64k_fluid_storage_part']),
            create.deploying(K, [K, 'refinedstorage:basic_processor']),
            create.deploying(K, [K, 'minecraft:bucket']),
            create.pressing(K, K),
        ])
        .transitionalItem('refinedstorage:quartz_enriched_iron')
        .loops(1)

    // 1024k 流体
    create.sequenced_assembly([
        Item.of('refinedstorage:1024k_fluid_storage_part')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, 'refinedstorage:256k_fluid_storage_part']),
            create.deploying(K, [K, 'refinedstorage:improved_processor']),
            create.deploying(K, [K, 'refinedstorage:256k_fluid_storage_part']),
            create.deploying(K, [K, 'refinedstorage:improved_processor']),
            create.deploying(K, [K, 'minecraft:bucket']),
            create.pressing(K, K),
        ])
        .transitionalItem('refinedstorage:quartz_enriched_iron')
        .loops(1)

    // 4096k 流体
    create.sequenced_assembly([
        Item.of('refinedstorage:4096k_fluid_storage_part')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, 'refinedstorage:1024k_fluid_storage_part']),
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'refinedstorage:1024k_fluid_storage_part']),
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'minecraft:bucket']),
            create.pressing(K, K),
        ])
        .transitionalItem('refinedstorage:quartz_enriched_iron')
        .loops(1)
})