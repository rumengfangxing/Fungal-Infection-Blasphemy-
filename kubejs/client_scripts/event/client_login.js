let hungerEffect = false
let hungerEffectEnd = true
let hungerEffectPercent = 0
const animationDuration = 20

ClientEvents.loggedIn(event => {
	initBiomassHud()
	initEvolutionText()
	initHungerText()
})

ClientEvents.loggedOut(event => {
	hungerEffect = false
	hungerEffectEnd = true
	hungerEffectPercent = 0
})