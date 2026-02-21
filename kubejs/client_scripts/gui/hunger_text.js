function initHungerText() {
	Client.player.paint({
        hungerText: {
            type: 'text',
            x: 0,
            y: 50,
            scale: 1.6,
            shadow: true,
            alignX: 'center',
            alignY: 'center',
            visible: false
        }
    })
}

function updateHungerText(alpha) {
	alpha = Math.min(1, Math.max(0, alpha))
	const hex = Math.round(alpha * 255).toString(16).padStart(2, '0').toUpperCase()
    Client.player.paint({ 
		hungerText: {
            visible: alpha > 0,
			text: Text.translate('gui.fungified.hunger.text').string,
			color: `#${hex}FF5555`
        } 
	})
}