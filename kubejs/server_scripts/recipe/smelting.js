ServerEvents.recipes(event => {

    event.smelting(
        Item.of('enigmaticlegacy:soul_dust'),
        'minecraft:soul_sand'
    )
    event.smelting(
        Item.of('minecraft:wither_skeleton_skull'),
        'minecraft:skeleton_skull'
    )
});
