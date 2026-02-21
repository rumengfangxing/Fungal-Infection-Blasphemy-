ServerEvents.recipes(event => {
    removeRecipeIds.forEach(id => {
        event.remove({ id: id })
    })
})

const removeRecipeIds = [
    'majruszsdifficulty:bandage_reversed',
    'goety:focus/illusion_focus',
    'torchmaster:megatorch',
    'inqui:cleaner'
]