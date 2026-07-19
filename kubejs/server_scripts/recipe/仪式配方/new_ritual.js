GoetyEvents.registerRitual(event => {
     event.create('infect', ritual => {
        ritual.range = 32;
        ritual.blocks = [
            '2x spore:brain_remnants',
            'spore:zoaholic',
            'spore:outpost_watcher',
            '13x spore:skull_soup'
        ];
        ritual.setJeiIcon('spore:brain_remnants');  //菌染仪式
    });
    event.create('star', ritual => {
        ritual.range = 32;
        ritual.blocks = [
            '12x enigmaticlegacy:astral_block',
            '16x create:experience_block'
        ];
        ritual.setJeiIcon('enigmaticlegacy:star_fabric');  //星辰仪式
    });
})