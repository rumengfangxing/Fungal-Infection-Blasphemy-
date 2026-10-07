ServerEvents.loaded(event => {
    const { server } = event
    const createBeginningRoom = server.persistentData.getBoolean('create_beginning_room')
    if (createBeginningRoom) return

    server.scheduleInTicks(40, callback => {
        const structureId = 'fibstructure:beginning_room'
        const spawnPos = server.overworld().sharedSpawnPos
        const offset = { x: -26, y: -3, z: -40 }
        const px = spawnPos.x + offset.x
        const py = spawnPos.y + offset.y
        const pz = spawnPos.z + offset.z

        // 结构尺寸 42x25x44，覆盖的区块范围
        const cx1 = Math.floor((px - 4) / 16) - 1
        const cz1 = Math.floor((pz - 4) / 16) - 1
        const cx2 = Math.floor((px + 46) / 16) + 1
        const cz2 = Math.floor((pz + 48) / 16) + 1

        // 1) 强制加载结构覆盖的区块
        server.runCommandSilent('forceload add ' + (cx1*16) + ' ' + (cz1*16) + ' ' + (cx2*16) + ' ' + (cz2*16))

        // 2) 等区块真正加载
        server.scheduleInTicks(60, cb2 => {
            // 3) 放置结构
            server.runCommandSilent('execute in minecraft:overworld run place template ' + structureId + ' ' + px + ' ' + py + ' ' + pz)
            // 4) 解除强制加载
            server.scheduleInTicks(20, cb3 => {
                server.runCommandSilent('forceload remove ' + (cx1*16) + ' ' + (cz1*16) + ' ' + (cx2*16) + ' ' + (cz2*16))
                server.persistentData.putBoolean('create_beginning_room', true)
            })
        })
    })
})
