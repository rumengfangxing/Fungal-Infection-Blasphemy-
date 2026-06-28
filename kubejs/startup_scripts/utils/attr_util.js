/**
 * @param {Array<[{ key: string, name: string, operation: 'addition' | 'multiply_base' | 'multiply_total' }, number]>} attrList
 * @param {number} [tickEventInterval]
 */
function curiosWithAttributes(attrList, tickEventInterval) {
	const builder = CuriosCapabilityBuilder.CURIOS.itemStack()

	builder.dynamicAttribute(ctx => {
		attrList.forEach(([attr, value]) => {
				ctx.modify(attr.key, attr.name + '_' + ctx.UUID, value, attr.operation)
			}
		)
	})
	
	if (tickEventInterval) {
		builder.curioTick((stack, slotContext) => {
            const entity = slotContext.entity()
			if (entity.level.isClientSide() || entity.age % tickEventInterval != 0) return
			global.CuriosTickEvent(slotContext, stack)
        })
	}

	return builder
}

/**
 * @param {Internal.Item} item
 * @param {Array<[{ key: string, name: string, operation: 'addition' | 'multiply_base' | 'multiply_total' }, number]>} attrList
 */
function itemWithAttributes(item, attrList) {
	attrList.forEach(([attr, value]) => {
		item.addAttribute(attr.key, $UUIDUtil.createOfflinePlayerUUID(attr.name), attr.name, value, attr.operation)
	})
}