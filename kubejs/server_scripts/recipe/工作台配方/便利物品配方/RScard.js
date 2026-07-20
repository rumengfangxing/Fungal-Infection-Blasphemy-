ServerEvents.recipes(event => {

    event.shaped(
        Item.of('rsinfinitybooster:infinity_card'),
        [
            'ABA',
            'CDC',
            'ECE'
        ],
        {
            E: Item.of('minecraft:netherite_ingot', '{}'),
            B: Item.of('refinedstorage:range_upgrade', '{}'),
            A: Item.of('minecraft:nether_star', '{}'),
            D: Item.of('refinedstorage:upgrade', '{}'),
            C: Item.of('goety:soul_transfer', '{}')
        }
    )
    event.shaped(
        Item.of('rsinfinitybooster:dimension_card'),
        [
            'ABA',
            'BCB',
            'DDD'
        ],
        {
            A: Item.of('refinedstorage:network_card', '{}'),
            D: Item.of('minecraft:netherite_ingot', '{}'),
            B: Item.of('minecraft:nether_star', '{}'),
            C: Item.of('rsinfinitybooster:infinity_card', '{}')
        }
    )
    event.shaped(
        Item.of('darkaltarui:soul_remote_terminal'),
        [
            ' A ',
            'BCB',
            'BDB'
        ],
        {
            D: Item.of('goety:spent_totem', '{}'),
            B: Item.of('minecraft:echo_shard', '{}'),
            A: Item.of('geodes:echo_cluster', '{}'),
            C: Item.of('goety:soul_transfer', '{}')
        }
    )
});
