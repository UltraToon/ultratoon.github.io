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

const witherStormHead = Item.of('minecraft:player_head', 1, {
  SkullOwner: {
    Id: 'b5d5a7b2-3f4e-4c9e-bf3e-2c2b7b5d5a7b',
    Properties: {
      textures: [{
        Value: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYWE0MzA1NTBkNzc2YmU5MWI4ZWQ1MTg1M2ZlMzg4ZDU1MjYwMjU2YWMzMWY2OGU2N2RkNzJlNGY0NTg0M2M2MCJ9fX0='
      }]
    }
  },
  display: {
    Name: '{"text":"The Core","color":"gold","bold":true,"underlined":true,"italic":false}',
    Lore: [
      '{"text":"Forged in defiance of fate—this remnant calls forth the storm that once consumed worlds.","color":"purple","italic":true}',
      '{"text":"WARNING: This can destroy worlds.","color":"red","bold":true}'
    ]
  }
});



// COMMAND BLOCK
ServerEvents.recipes(event => {
event.shaped(witherStormHead, [
    'ABC',
    'DEF', // arg 2: the shape (array of strings)
    'GBI'
  ], {
    A: 'endrem:cursed_eye',
    B: 'minecraft:beacon',  //arg 3: the mapping object
    C: 'minecraft:totem_of_undying',
    D: 'minecraft:dragon_egg',
    E: 'alexsmobs:dimensional_carver',
    F: 'rediscovered:red_dragon_egg',
    G: 'minecraft:netherite_block',
    I: 'minecraft:heart_of_the_sea'
  });
});

/*BlockEvents.rightClicked(event => {
  const { player, block } = event;
  if(player != null && block != null && player.mainHandItem != null && player.mainHandItem.id == 'minecraft:command_block'){
    player.mainHandItem.count -= 1;
    player.level.getBlock(block.x, block.y + 1, block.z).set('minecraft:command_block');
  }
})*/ // PLACEABLE COMMAND BLOCKS, complicated code tho

BlockEvents.placed(witherStormHead, event => {
  event.player.tell('What are you doing...')
  event.block.set('minecraft:command_block')
})

BlockEvents.leftClicked(witherStormHead, event => {
  event.player.give(witherStormHead)
  event.block.set('minecraft:air')
})


