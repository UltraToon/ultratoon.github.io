ServerEvents.recipes(event => {
event.shaped(
  Item.of('minecraft:command_block', 1), // arg 1: output
  [
    'ABC',
    'DEF', // arg 2: the shape (array of strings)
    'GBI'
  ],
  {
    A: 'minecraft:totem_of_undying',
    B: 'minecraft:beacon',  //arg 3: the mapping object
    C: 'endrem:cursed_eye',
    D: 'minecraft:dragon_egg',
    E: 'alexsmobs:dimensional_carver',
    F: 'rediscovered:red_dragon_egg',
    G: 'minecraft:netherite_block',
    I: 'minecraft:heart_of_the_sea'
  }
  )
})
