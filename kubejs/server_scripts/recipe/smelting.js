ServerEvents.recipes(event => {
    event.smelting(
        Item.of('minecraft:wither_skeleton_skull'),
        'minecraft:skeleton_skull'
    )

//铜块
event.smelting('copper_block','raw_copper_block',2.1,30*20)
//铁块
event.smelting('iron_block','raw_iron_block',2.1,30*20)
//锌块
event.smelting('create:zinc_block','create:raw_zinc_block',2.1,30*20)
//金块
event.smelting('gold_block','raw_gold_block',3,30*20)
});
