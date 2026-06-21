ServerEvents.loaded(event => {
    const { server } = event
    const createBeginningRoom = server.persistentData.getBoolean('create_beginning_room')
    if (createBeginningRoom) return
    
    server.scheduleInTicks(5, callback => {
        const structureId = 'fibstructure:beginning_room'
        const spawnPos = server.overworld().sharedSpawnPos
        const offset = { x: -19, y: -4, z: -13 }
        server.runCommandSilent(`execute in minecraft:overworld run place template ${structureId} ${spawnPos.x + offset.x} ${spawnPos.y + offset.y} ${spawnPos.z + offset.z}`)
        server.persistentData.putBoolean('create_beginning_room', true)
    })
})