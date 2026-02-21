ClientEvents.tick(event => {
    handleReleaseSkillHealth(event)
    handleCameraEffect(event)
})

function handleReleaseSkillHealth(event) {
    const { player } = event
    const key = global.SkillFungifiedHealth
    
    if (!key.consumeClick()) return

    player.sendData("kubejs:fungified_skill_health")
}


function handleCameraEffect(event) {
	
	if (hungerEffect) {
		if (hungerEffectPercent < animationDuration) {
			hungerEffectPercent++
			updateHungerText(hungerEffectPercent / animationDuration)
		}
	} else {
		if (hungerEffectPercent > 0) {
			hungerEffectPercent--
			updateHungerText(hungerEffectPercent / animationDuration)
		} else if (!hungerEffectEnd) {
			hungerEffectEnd = true
			VisualJS.clearEffect()
		}
	}
	if (hungerEffectEnd) return
	const percent = hungerEffectPercent / animationDuration
	VisualJS.setUniform(0, "Saturation", [ 1- percent ])
	VisualJS.setUniform(2, "ConvergeX", [ -10.0 * percent,  0.0,  2.0  * percent ])
	VisualJS.setUniform(2, "ConvergeY", [  0.0, -10.0 * percent,  2.0  * percent ])
}
