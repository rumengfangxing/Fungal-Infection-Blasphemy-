const maidSounds = [
    "ftbq:maid.mode.idle4",
    "ftbq:maid.mode.idle5",
    "ftbq:maid.mode.idle6",
    "ftbq:maid.mode.idle14",
    "ftbq:maid.mode.idle15",
    "ftbq:maid.mode.idle16",
    "ftbq:maid.mode.idle17",
    "ftbq:maid.mode.idle19",
    "ftbq:maid.mode.idle35",
    "ftbq:maid.mode.idle36",
    "ftbq:maid.mode.idle39"
];

let lastSound = null;

function randomMaidSound() {
    let sound;

    do {
        sound = maidSounds[Math.floor(Math.random() * maidSounds.length)];
    } while (sound === lastSound && maidSounds.length > 1);

    lastSound = sound;
    return sound;
}

ServerEvents.commandRegistry(event => {
    event.register(
        event.commands.literal("maidvoice")
            .executes(ctx => {
                let player = ctx.source.player;

                if (!player) return 0;

                let sound = randomMaidSound();

                player.server.runCommandSilent(
                    `playsound ${sound} voice ${player.name.string}`
                );

                return 1;
            })
    );
});