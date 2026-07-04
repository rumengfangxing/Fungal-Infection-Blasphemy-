ServerEvents.loaded(event => {
    const { server } = event
    const deletesporeb = server.persistentData.getBoolean('delete_sporeb')
    if (deletesporeb) return
    
    server.scheduleInTicks(140, callback => {
        server.runCommandSilent('spore:erase_the_fungus')
        server.persistentData.putBoolean('delete_sporeb', true)
    })
})