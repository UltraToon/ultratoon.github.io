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

BlockEvents.rightClicked(event => {
  const { player, block } = event;
  if(player != null && block != null && player.mainHandItem != null && player.mainHandItem.id == 'minecraft:command_block'){
    player.mainHandItem.count -= 1;
    player.level.getBlock(block.x, block.y + 1, block.z).set('minecraft:command_block');
  }
})

BlockEvents.break(event => {
  if (event.block.id !== 'minecraft:command_block') return;
  const tool = event.player?.mainHandItem;
  if (!tool || tool.id !== 'minecraft:diamond_pickaxe') {
    event.cancel();
  }
});
