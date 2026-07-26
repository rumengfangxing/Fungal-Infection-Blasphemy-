ServerEvents.recipes(event => {

    event.shaped(
        Item.of('rtsbuilding:remote_control_plugin'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            B: Item.of('spore:circuit_board', '{}'),
            A: Item.of('lightmanscurrency:coin_iron', '{}'),
            C: Item.of('createaddition:capacitor', '{}')
        }
    )
    event.shaped(
        Item.of('rtsbuilding:storage_integration_plugin'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: Item.of('lightmanscurrency:coin_gold', '{}'),
            B: Item.of('spore:circuit_board', '{}'),
            C: Item.of('createaddition:capacitor', '{}')
        }
    )
    event.shaped(
        Item.of('rtsbuilding:range_extension_i'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: Item.of('lightmanscurrency:coin_gold', '{}'),
            B: Item.of('spore:circuit_board', '{}'),
            C: Item.of('createaddition:capacitor', '{}')
        }
    )
    event.shaped(
        Item.of('rtsbuilding:range_culling_plugin'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: Item.of('lightmanscurrency:coin_gold', '{}'),
            B: Item.of('spore:circuit_board', '{}'),
            C: Item.of('createaddition:capacitor', '{}')
        }
    )
    event.shaped(
        Item.of('rtsbuilding:craft_terminal_plugin'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: Item.of('lightmanscurrency:coin_gold', '{}'),
            B: Item.of('spore:circuit_board', '{}'),
            C: Item.of('createaddition:capacitor', '{}')
        }
    )
    event.shaped(
        Item.of('rtsbuilding:blueprint_plugin'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: Item.of('lightmanscurrency:coin_gold', '{}'),
            B: Item.of('spore:circuit_board', '{}'),
            C: Item.of('createaddition:capacitor', '{}')
        }
    )
    event.shaped(
        Item.of('rtsbuilding:range_extension_ii'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            B: Item.of('spore:circuit_board', '{}'),
            C: Item.of('createaddition:capacitor', '{}'),
            A: Item.of('lightmanscurrency:coin_emerald', '{}')
        }
    )
    event.shaped(
        Item.of('rtsbuilding:area_destroy_plugin'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            B: Item.of('spore:circuit_board', '{}'),
            C: Item.of('createaddition:capacitor', '{}'),
            A: Item.of('lightmanscurrency:coin_emerald', '{}')
        }
    )
    event.shaped(
        Item.of('rtsbuilding:chain_break_plugin'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            B: Item.of('spore:circuit_board', '{}'),
            C: Item.of('createaddition:capacitor', '{}'),
            A: Item.of('lightmanscurrency:coin_emerald', '{}')
        }
    )
    event.shaped(
        Item.of('rtsbuilding:field_deployment_plugin'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            B: Item.of('spore:circuit_board', '{}'),
            A: Item.of('lightmanscurrency:coin_diamond', '{}'),
            C: Item.of('createaddition:capacitor', '{}')
        }
    )
    event.shaped(
        Item.of('rtsbuilding:range_extension_max'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            B: Item.of('spore:circuit_board', '{}'),
            A: Item.of('lightmanscurrency:coin_netherite', '{}'),
            C: Item.of('createaddition:capacitor', '{}')
        }
    )
    event.shaped(
        Item.of('tacz:ammo', '{AmmoId:"test:weaponkey1"}'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            C: Item.of('lightmanscurrency:coin_gold', '{}'),
            A: Item.of('minecraft:iron_ingot', '{}'),
            B: Item.of('refinedstorage:upgrade', '{}')
        }
    )
    event.shaped(
        Item.of('tacz:ammo', '{AmmoId:"test:spec"}'),
        [
            'ABA',
            'BCB',
            'DED'
        ],
        {
            A: Item.of('minecraft:netherite_ingot', '{}'),
            C: Item.of('refinedstorage:upgrade', '{}'),
            E: Item.of('minecraft:nether_star', '{}'),
            B: Item.of('minecraft:diamond', '{}'),
            D: Item.of('minecraft:crying_obsidian', '{}')
        }
    )
});
