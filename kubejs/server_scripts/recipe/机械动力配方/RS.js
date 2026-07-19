ServerEvents.recipes(event => {
    const create = event.recipes.create

    // ========== 搅拌 ==========
    create.mixing("8x refinedstorage:processor_binding",
        ['minecraft:slime_ball', 'minecraft:string']
    ).heated()

    create.mixing("4x refinedstorage:quartz_enriched_iron",
        ['minecraft:quartz', '2x minecraft:iron_ingot']
    ).heated()

    // ========== 压块（修正参数顺序：输出在前，输入在后） ==========
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

    // 改良处理器（修正过渡物品为 silicon）
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

    // 神经处理器
    const SJCLQ = 'refinedstorage:raw_advanced_processor'
    create.sequenced_assembly([
        Item.of('extrastorage:raw_neural_processor')
    ],
        'refinedstorage:raw_advanced_processor',
        [
            create.deploying(SJCLQ, [SJCLQ, 'refinedstorage:raw_improved_processor']),
            create.deploying(SJCLQ, [SJCLQ, 'refinedstorage:processor_binding']),
            create.deploying(SJCLQ, [SJCLQ, 'minecraft:crafting_table']),
            create.deploying(SJCLQ, [SJCLQ, 'minecraft:quartz']),
            create.deploying(SJCLQ, [SJCLQ, 'minecraft:obsidian']),
            create.deploying(SJCLQ, [SJCLQ, 'minecraft:quartz']),
            create.cutting(SJCLQ, SJCLQ),
            create.pressing(SJCLQ, SJCLQ),
        ])
        .transitionalItem('refinedstorage:raw_advanced_processor')
        .loops(1)

    // ========== 序列装配：物品存储部件（已修正 redstone_wire → redstone） ==========
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

    // 256k (ExtraStorage)
    create.sequenced_assembly([
        Item.of('extrastorage:storagepart_256k')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'refinedstorage:64k_storage_part']),
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'refinedstorage:64k_storage_part']),
            create.deploying(K, [K, 'minecraft:redstone']),
            create.pressing(K, K),
        ])
        .transitionalItem('refinedstorage:quartz_enriched_iron')
        .loops(1)

    // 1024k
    create.sequenced_assembly([
        Item.of('extrastorage:storagepart_1024k')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'extrastorage:storagepart_256k']),
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'extrastorage:storagepart_256k']),
            create.deploying(K, [K, 'minecraft:redstone']),
            create.pressing(K, K),
        ])
        .transitionalItem('refinedstorage:quartz_enriched_iron')
        .loops(1)

    // 4096k
    create.sequenced_assembly([
        Item.of('extrastorage:storagepart_4096k')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'extrastorage:storagepart_1024k']),
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'extrastorage:storagepart_1024k']),
            create.deploying(K, [K, 'minecraft:redstone']),
            create.pressing(K, K),
        ])
        .transitionalItem('refinedstorage:quartz_enriched_iron')
        .loops(1)

    // 16384k（修正拼写：4096 → 4096k）
    create.sequenced_assembly([
        Item.of('extrastorage:storagepart_16384k')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'extrastorage:storagepart_4096k']),
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'extrastorage:storagepart_4096k']),
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

    // 16384k 流体 (ExtraStorage)
    create.sequenced_assembly([
        Item.of('extrastorage:storagepart_16384k_fluid')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, 'refinedstorage:4096k_fluid_storage_part']),
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'refinedstorage:4096k_fluid_storage_part']),
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'minecraft:bucket']),
            create.pressing(K, K),
        ])
        .transitionalItem('refinedstorage:quartz_enriched_iron')
        .loops(1)

    // 65536k 流体
    create.sequenced_assembly([
        Item.of('extrastorage:storagepart_65536k_fluid')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, 'extrastorage:storagepart_16384k_fluid']),
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'extrastorage:storagepart_16384k_fluid']),
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'minecraft:bucket']),
            create.pressing(K, K),
        ])
        .transitionalItem('refinedstorage:quartz_enriched_iron')
        .loops(1)

    // 262144k 流体
    create.sequenced_assembly([
        Item.of('extrastorage:storagepart_262144k_fluid')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, 'extrastorage:storagepart_65536k_fluid']),
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'extrastorage:storagepart_65536k_fluid']),
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'minecraft:bucket']),
            create.pressing(K, K),
        ])
        .transitionalItem('refinedstorage:quartz_enriched_iron')
        .loops(1)

    // 1048576k 流体
    create.sequenced_assembly([
        Item.of('extrastorage:storagepart_1048576k_fluid')
    ],
        'refinedstorage:quartz_enriched_iron',
        [
            create.deploying(K, [K, 'extrastorage:storagepart_262144k_fluid']),
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'extrastorage:storagepart_262144k_fluid']),
            create.deploying(K, [K, 'refinedstorage:advanced_processor']),
            create.deploying(K, [K, 'minecraft:bucket']),
            create.pressing(K, K),
        ])
        .transitionalItem('refinedstorage:quartz_enriched_iron')
        .loops(1)
})