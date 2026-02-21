function initEvolutionText() {
	Client.player.paint({
        evolutionCountText: {
            type: 'text',
            x: 40,
            y: -22,
            text: '',
            alignX: 'left',
            alignY: 'bottom',
            visible: false
        }
    })
}

function updateEvolutionText(evolution, evolutionMax, stage) {
    let evolutionString
	let evolutionMaxString
	if (evolutionMax == -1) {
        evolutionString = '∞ '
		evolutionMaxString = ' ∞'
	} else {
        evolutionString = evolution.toString()
		evolutionMaxString = evolutionMax.toString()
	}
    Client.player.paint({ 
		evolutionCountText: { 
            text: Text.translate('gui.fungified.evolution.text', Text.translate(`stage.fungified.${stage}`).string, evolutionString, evolutionMaxString).string,
            visible: stage != 0 
        } 
	})
}