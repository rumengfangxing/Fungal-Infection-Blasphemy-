ItemEvents.foodEaten(event => {
    const { player } = event
    if (!player) return
	if (getFungifiedStage(player) == 0) return
	
	const count = countPlayerEquippedCurios(player, 'blood')
	if (count == 0) return
	
	addLivingEffect(player, 'spore:symbiosis', count * 3, 15 * 60 * 20)
})


ItemEvents.foodEaten(event => {
	const { item } = event
	const handler = foodEatenHandlers[item.id]

    if (!handler) return
	handler(event)
})

const foodEatenHandlers = {
	// 腐生质
    'spore:biomass': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 1)
    },
	// 营养膏
    'biomancy:nutrient_paste': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 1)
    },
	// 营养瓶
    'biofactory:nutrients_fluid_bottle': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 10)
    },
	// 营养棒
    'biomancy:nutrient_bar': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 10)
    },
	// 肉肠
    'spore:sausage': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 5)
		addFungifiedEvolution(player, 3)
    },
	// 生心脏串
    'spore:heart_kebab': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 5)
		addFungifiedEvolution(player, 3)
    },
	// 心脏串
    'spore:roasted_heart_kebab': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 5)
		addFungifiedEvolution(player, 3)
    },
	//肌腱筋
    'spore:tendon_gum': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 5)
		addFungifiedEvolution(player, 3)
    },
	//血腥肉排
    'spore:fleshy_ribs': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 5)
		addFungifiedEvolution(player, 3)
    },
	//纤维煲
    'spore:fiber_stew': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 5)
		addFungifiedEvolution(player, 3)
    },
	//器官浓汤
    'spore:organoid_soup': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 10)
		addFungifiedEvolution(player, 10)
    },
	//碗装菌酱
    'spore:fungal_sauce': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 10)
		addFungifiedEvolution(player, 10)
    },
	//生肉冰淇淋
    'spore:meaty_icecream': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 10)
		addFungifiedEvolution(player, 10)
    },
	//心脏馅饼片
    'spore:slice_of_heartpie': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 10)
		addFungifiedEvolution(player, 10)
    },
	//幸存者汉堡
    'spore:fungal_burger': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 100)
		addFungifiedEvolution(player, 50)
    },
	//填馅憎恶
    'spore:stuffed_abomination': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 500)
		addFungifiedEvolution(player, 100)
    },
	//诡异寿司
    'spore:eldritch_sushi': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 500)
		addFungifiedEvolution(player, 100)
    },
	//重组肉排
    'spore:amalgamated_roast': function(event) {
        const { player } = event
        addFungifiedBiomass(player, 500)
		addFungifiedEvolution(player, 100)
    },
	//看板娘
	'fib:fib_logo': function(event) {
		const { player } = event
		player.tell(Text.translate('item.fib.fib_logo.message'))
		addFungifiedBiomass(player, 10)
	},
	// 浓缩腐生质
	'fib:concentrated_biomass': function(event) {
		const { player } = event
		addFungifiedBiomass(player, 100)
	}
}
