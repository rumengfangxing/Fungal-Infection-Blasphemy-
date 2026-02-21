let lastLang = null
const translationCache = new Map()

ItemEvents.tooltip(event => {
	event.addAdvancedToAll((item, advanced, text) => {
		let lang = Client.language
		if (lang !== lastLang) {
			translationCache.clear()
			lastLang = lang
		}

		let insertIndex = text.size()

		for (let i = 0; i < text.size(); i++) {
			let line = text.get(i)
			if (!line?.getContents) continue

			let contents = line.getContents()

			if (contents.key && contents.key.startsWith('item.modifiers.')) {
				insertIndex = i
				break
			}

			if (contents.text && contents.text() === item.id) {
				insertIndex = i
				break
			}
		}

		const base = `item.${item.id.replace(':', '.')}.tooltip`
		let lines = []

		if (appendModifierHintTo(lines, base, 'shift') && event.isShift()) appendTooltipLinesTo(lines, base + '.shift')
		if (appendModifierHintTo(lines, base, 'ctrl') && event.isCtrl()) appendTooltipLinesTo(lines, base + '.ctrl')
		if (appendModifierHintTo(lines, base, 'alt') && event.isAlt()) appendTooltipLinesTo(lines, base + '.alt')
			
		if (lines.length > 0) lines.push('')

		appendTooltipLinesTo(lines, base)

		for (let i = 0; i < lines.length; i++) {
			text.add(insertIndex + i, lines[i])
		}
	})
})

function getTranslatedLine(key) {
	if (translationCache.has(key)) return translationCache.get(key)

	let t = Text.translate(key).string
	let v = t !== key ? t : null
	translationCache.set(key, v)
	return v
}

function appendTooltipLinesTo(list, prefix) {
	for (let i = 1; i <= 32; i++) {
		let line = getTranslatedLine(prefix + '.' + i)
		if (!line) break
		list.push(line)
	}
}

function appendModifierHintTo(list, base, modifier) {
	if (!getTranslatedLine(`${base}.${modifier}.1`)) return false

	let hint = getTranslatedLine(`${base}.${modifier}_hint`) ||
		getTranslatedLine(`item.default.tooltip.${modifier}_hint`) ||
		`Press [${modifier}] to view more information`

	list.push(hint)
	return true
}
