GoetyEvents.registerRitual(event => {
     event.create('infect', ritual => {
        ritual.range = 32;
        ritual.blocks = [
            '2x spore:brain_remnants',
            'spore:zoaholic',
            'spore:outpost_watcher',
            '4x spore:skull_soup',
            '3x spore:heart_block',
            '3x spore:cerebrum_block'
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
    event.create('research', ritual => {
        ritual.range = 32;
        ritual.blocks = [
            'minecraft:lectern'
        ];
        ritual.setJeiIcon('minecraft:writable_book');  //识文解字
    });
    event.create('basic', ritual => {
        ritual.range = 32;
        ritual.blocks = [
            'goety:cursed_cage'
        ];
        ritual.setJeiIcon('goety:cursed_cage');  //基础仪式
    });
})