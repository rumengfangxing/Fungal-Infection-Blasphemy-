ServerEvents.recipes(event => {

    event.shaped(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"applied_armorer:special_melee_task_manager",HasBulletInBarrel:1b}'),
        [
            ' AB',
            'CDA',
            'EC '
        ],
        {
            C: Item.of('minecraft:iron_ingot', '{}'),
            E: Item.of('minecraft:budding_amethyst', '{}'),
            A: Item.of('minecraft:blaze_powder', '{}'),
            B: Item.of('minecraft:netherite_ingot', '{}'),
            D: Item.of('minecraft:blaze_rod', '{}')
        }
    )
});
