ServerEvents.recipes(event =>{
//蛟龙
event.shaped(Item.of('lrtactical:consumable', '{ConsumableId:"42labk:pill_l",Damage:0}'),[
   " A ",
   "BCD",
   " E ",
],{
    A:'minecraft:sugar',
    B:'minecraft:prismarine_crystals',
    C:'minecraft:pufferfish',
    D:'minecraft:prismarine_shard',
    E:'minecraft:paper'
})

//浴火
event.shaped(Item.of('lrtactical:consumable', '{ConsumableId:"42labk:pill_f",Damage:0,RepairCost:1}'),[
   "EAE",
   "BCB",
   "EDE",
],{
    A:'minecraft:sugar',
    B:'minecraft:blaze_powder',
    C:'minecraft:glistering_melon_slice',
    D:'minecraft:paper',
    E:'minecraft:magma_cream'
})

//止痛
event.shaped(Item.of('lrtactical:consumable', '{ConsumableId:"42labk:pills",Damage:0}'),[
   " A ",
   "BCB",
   " D ",
],{
    A:'minecraft:sugar',
    B:'legendarysurvivaloverhaul:healing_herbs',
    C:'minecraft:scute',
    D:'minecraft:paper'
})

})