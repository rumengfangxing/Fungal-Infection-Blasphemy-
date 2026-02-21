ServerEvents.recipes(event => {

    event.shapeless(
        Item.of('minecraft:spawner'),
        [
            'goety:flame_capture',
            'goety:flame_capture',
            'goety:cursed_cage',
            'goety:flame_capture',
            'goety:flame_capture'
        ]
    )
    event.shaped(
        Item.of('minecraft:spawner'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'goety:flame_capture',
            B: 'goety:cursed_cage'
        }
    )
});
