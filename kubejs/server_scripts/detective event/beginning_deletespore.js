ServerEvents.loaded(event => {
    const { server } = event
    const deletespore = server.persistentData.getBoolean('delete_spore')
    if (deletespore) return
    
    server.scheduleInTicks(80, callback => {
        server.runCommandSilent('spore:erase_the_fungus')
        server.persistentData.putBoolean('delete_spore', true)
    })
})