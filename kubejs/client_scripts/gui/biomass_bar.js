function initBiomassHud() {
	Client.player.paint({
        biomassBarBackGround: {
            type: 'rectangle',
            x: 12,
            y: -3,
            w: 160,
            h: 16,
            alignX: 'left',
            alignY: 'bottom',
            texture: 'kubejs:textures/gui/biomass_bar.png',
            visible: false
        }, biomassBarOverlay: {
            type: 'rectangle',
            x: 15,
            y: -3,
            w: 154,
            h: 16,
            u1: 1,
            alignX: 'left',
            alignY: 'bottom',
            texture: 'kubejs:textures/gui/biomass_bar_overlay.png',
            visible: false
        }, biomassBarCountText: {
            type: 'text',
            x: 180,
            y: -5,
            text: '',
            alignX: 'left',
            alignY: 'bottom',
            visible: false
        }
    })
}

function updateBiomassHud(biomass, max, stage) {
	const percent = biomass / max
    Client.player.paint({ 
		biomassBarBackGround: { 
			visible: stage != 0  
		}, 
		biomassBarOverlay: {
            w: 154 * percent,
            u1: 1 * percent,
			visible: stage != 0  
		}, 
		biomassBarCountText: { 
			text: Text.translate('gui.fungified.biomass.text', biomass.toString()).string,
			visible: stage != 0 
		} 
	})
}