ServerEvents.tags('worldgen/biome', event => {
  event.get('witherstormmod:has_structure/desert_storm_spawn_platform').removeAll()
  event.get('witherstormmod:has_structure/forest_storm_spawn_platform').removeAll()
  event.get('witherstormmod:has_structure/jungle_storm_spawn_platform').removeAll()
  event.get('witherstormmod:has_structure/order_temple_storm_spawn_platform').removeAll()
  event.get('witherstormmod:has_structure/ruins_storm_spawn_platform').removeAll()
  event.get('witherstormmod:has_structure/savanna_storm_spawn_platform').removeAll()
  event.get('witherstormmod:has_structure/snowy_storm_spawn_platform').removeAll()
  event.get('witherstormmod:has_structure/storm_spawn_platform').removeAll()
  event.get('witherstormmod:has_structure/taiga_storm_spawn_platform').removeAll()
})
// NOTE, Try MCMeta Method.


// COMMAND BLOCK
ServerEvents.recipes(event => {
event.shaped(Item.of('minecraft:dirt', 1),
  [
    'ABC',
    'DEF', // arg 2: the shape (array of strings)
    'GBI'
  ], 
  {
    A: 'endrem:cursed_eye',
    B: 'minecraft:beacon',  //arg 3: the mapping object
    C: 'minecraft:totem_of_undying',
    D: 'minecraft:dragon_egg',
    E: 'alexsmobs:dimensional_carver',
    F: 'rediscovered:red_dragon_egg',
    G: 'minecraft:netherite_block',
    I: 'minecraft:heart_of_the_sea'
  })
})

BlockEvents.placed('kubejs:ivors_wrath', event => {
  event.block.set('minecraft:command_block')
})

BlockEvents.leftClicked('minecraft:command_block', event => {
  event.player.give('kubejs:ivors_wrath')
  event.block.set('minecraft:air')
})