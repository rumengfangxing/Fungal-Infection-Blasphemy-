const BIOMASS_KEY = 'fungified_biomass'
const EVOLUTION_KEY = 'fungified_evolution'

const FUNGIFIED_KEY = 'fungified'
const FUNGIFIED_HIGHEST_KEY = 'highest_fungified_stage'
const FUNGIFIED_DAMAGE_MUL = 0.05
const FUNGIFIED_IMMUNITY_DAMAGE_TYPES = [
	'cactus',
	'mycelium.overtake'
]
const FUNGIFIED_IMMUNITY_EFFECTS = [
	'effect.spore.mycelium_ef',
	'effect.spore.corrosion',
	'effect.spore.madness'
]
const FUNGIFIED_STAGE_ATTR_MAP = {
	0: { health: 0, damage: 0, armor: 0, organ: 0, biomass: 0, evolution: 0 },
	1: { health: 40, damage: 4, armor: 4, organ: 0, biomass: 10, evolution: 20 },
	2: { health: 80, damage: 9, armor: 8, organ: 1, biomass: 50, evolution: 100 },
	3: { health: 180, damage: 14, armor: 8, organ: 2, biomass: 200, evolution: 500 },
	4: { health: 480, damage: 19, armor: 20, organ: 3, biomass: 1000, evolution: 2000 },
	5: { health: 480, damage: 19, armor: 20, organ: 3, biomass: 10000, evolution: -1 }
}

const SPORE_NAMESPACE = 'spore:'

const FREEZE_DAMAGE_MUL = 2
const FREEZE_DAMAGE_TYPES = [
	'freeze',
	'goety.frostBreath',
	'goety.indirectFreeze',
	'goety.directFreeze'
]

const SKILL_HEALTH_CD_KEY = 'skill_cd_health'
const SKILL_HEALTH_CD = 2400 // 120s
const SKILL_HEALTH_BIOMASS_EXPEND = 100