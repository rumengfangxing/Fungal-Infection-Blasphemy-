ServerEvents.recipes(event => {

    event.shaped(
        Item.of('gateways:gate_pearl', '{gateway:"fib:collective/explosion_carnival"}'),
        [
            '   ',
            ' A ',
            '   '
        ],
        {
            A: Item.of('minecraft:grass_block', '{}')
        }
    )
});
