ServerEvents.recipes(event => {

    event.shaped(
        Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:100,GunFireMode:"AUTO",GunId:"applied_armorer:moritz_mg_emg_prototype",HasBulletInBarrel:1b}'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            B: Item.of('ae2:terminal', '{}'),
            C: Item.of('minecraft:comparator', '{}'),
            D: Item.of('ae2:controller', '{}'),
            E: Item.of('minecraft:repeater', '{}'),
            A: Item.of('ae2:matter_cannon', '{}'),
            F: Item.of('ae2:singularity', '{}')
        }
    )
});
