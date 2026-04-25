ItemEvents.modification(event => {
    // 一直吃
    Ingredient.all.itemIds.forEach((id) => {
        event.modify(id, (item) => {
            if (item.foodProperties == null) return
            item.foodProperties = (properties) => {
                properties.alwaysEdible()
            }
        })
    })

    // 霜冻之刃
    event.modify('goety:frozen_blade', item => {
        item.setAttackDamage(8)
        item.setAttackSpeed(-1.5)
        itemWithAttributes(item, [
            [global.ATTR_FROZEN_BLADE_COLD_DAMAGE, 3]
        ])
    })  
    // 堕落之刃
    event.modify('goety:fell_blade', item => {
        item.setAttackDamage(15.56)
        item.setAttackSpeed(-0.67)
    })
    // 黑暗剑
    event.modify('goety:dark_sword', item => {
        item.setAttackDamage(15.0)
        item.setAttackSpeed(-1.4)
    })
    // 狂暴之斧
    event.modify('goety:rampaging_axe', item => {
        item.setAttackDamage(19.0)
        item.setAttackSpeed(-2)
    })
    // 以太阔剑
    event.modify('enigmaticlegacy:etherium_sword', item => {
        item.setAttackDamage(44)
        item.setAttackSpeed(6)
    })
    // 永冻冰核
    event.modify('enigmaticdice:permafrost', item => {
        item.setAttackDamage(15)
        item.setAttackSpeed(-1)
        itemWithAttributes(item, [
            [global.ATTR_PERMAFROST_COLD_DAMAGE, 10],
            [global.ATTR_PERMAFROST_ENTITY_REACH, 1.5]
        ])
    })
    // 血肉掠夺镰
    event.modify('biomancy:despoil_sickle', item => {
        item.setAttackDamage(17)
        item.setAttackSpeed(-2.8)
    })
})