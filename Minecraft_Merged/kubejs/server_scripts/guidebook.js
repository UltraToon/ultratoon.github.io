PlayerEvents.loggedIn(event => {
  if(event.player.stages.has('logged_in')) return
  event.player.stages.add('logged_in')
  event.player.give('patchouli:modpack_info')
})

event.custom({
  type: 'patchouli:shapeless_book_recipe',
  ingredients: [
    { item: 'minecraft:dirt' }
  ],
  book: "patchouli:modpack_info"
})

