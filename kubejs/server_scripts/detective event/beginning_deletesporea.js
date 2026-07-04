ServerEvents.loaded(event => {
    const { server } = event
    const deletesporea = server.persistentData.getBoolean('delete_sporea')
    if (deletesporea) return
    
    server.scheduleInTicks(40, callback => {
        server.runCommandSilent('spore:erase_the_fungus')
        server.persistentData.putBoolean('delete_sporea', true)
    })
})