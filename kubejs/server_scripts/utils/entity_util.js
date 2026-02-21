/**
 * @param {Internal.LivingEntity} entity
 * @param {string} id
 * @param {number} level
 * @param {number} time
 */
function addLivingEffect(entity, id, level, time) {
	if (time > 0 && level > 0) {
		entity.potionEffects.add(id, time, level - 1)
	}
}

/**
 * @param {Internal.LivingEntity} player
 * @param {{ key: string, name: string, operation: string }} attr
 * @param {number} value
 */
function modifyLivingAttribute(entity, attr, value) {
	if (value == 0) {
		entity.removeAttribute(attr.key, attr.name)
	} else {
		entity.modifyAttribute(attr.key, attr.name, value, attr.operation)
	}
}

/**
 * @param {Internal.ServerPlayer} player
 * @return {Internal.ICuriosItemHandler}
 */
function getPlayerCuriosInventory(player) {
	const lazyOptCapability = player.getCapability(CuriosCapabilities.INVENTORY)
	if (!lazyOptCapability.isPresent()) return
    return lazyOptCapability.resolve().get()
}

/**
 * @param {Internal.ServerPlayer} player
 * @param {{ key: string, name: string, operation: string }} curiosAttr
 * @param {number} count
 */
function modifyPlayerCuriosSlot(player, curiosAttr, count) {
	getPlayerCuriosInventory(player).addPermanentSlotModifier(
		curiosAttr.key,
		$UUIDUtil.createOfflinePlayerUUID(curiosAttr.name),
		curiosAttr.name,
		count, 
		curiosAttr.operation
	)
}

/**
 * @param {Internal.ServerPlayer} player
 * @param {string} slotId
 * @return {number}
 */
function countPlayerEquippedCurios(player, slotId) {
	const slotOpt = getPlayerCuriosInventory(player).getStacksHandler(slotId)
	if (!slotOpt.isPresent()) return 0

	const stacks = slotOpt.get().getStacks()
	const size = stacks.getSlots()

	let count = 0
	for (let i = 0; i < size; i++) {
		if (!stacks.getStackInSlot(i).isEmpty()) count++
	}

	return count
}

/**
 * @param {Internal.ServerPlayer} player
 */
function checkAndEquipCursedRing(player) {
	const slotOpt = getPlayerCuriosInventory(player).getStacksHandler('ring')
	if (!slotOpt.isPresent()) return
	const stacks = slotOpt.get().getStacks()
	if (stacks.getSlots() <= 0) return
	const stack = stacks.getStackInSlot(0)
	if (!stack.isEmpty() && stack.id === 'enigmaticlegacy:cursed_ring') return
    if (!stack.isEmpty() && stack.id === 'enigmaticaddons:bless_ring') return
	stacks.setStackInSlot(0, Item.of('enigmaticlegacy:cursed_ring'))
}