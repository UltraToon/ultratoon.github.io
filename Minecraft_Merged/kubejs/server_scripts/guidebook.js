PlayerEvents.loggedIn(event => {
  if(event.player.stages.has('logged_in')) return
  event.player.stages.add('logged_in')
  event.player.give('patchouli:modpack_info')
})

ServerEvents.recipes(event => {
  event.shapeless(
  Item.of('patchouli:modpack_info', 1), // arg 1: output
  [
    'minecraft:dirt',
  ]
)
})

