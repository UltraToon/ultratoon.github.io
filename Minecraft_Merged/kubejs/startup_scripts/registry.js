Platform.mods.kubejs.name = ''
StartupEvents.registry('block', event => {
    event.create('ivors_wrath')
    .displayName('§k#§r Command Block §k#')
    .texture('north', 'minecraft:block/command_block_front')  // Front face
    .texture('south', 'minecraft:block/command_block_back')   // Back face
    .texture('east', 'minecraft:block/command_block_side')    // East side
    .texture('west', 'minecraft:block/command_block_side')    // West side
    .texture('up', 'minecraft:block/command_block_front')     // Top face (can be the same as front)
    .texture('down', 'minecraft:block/command_block_side')    // Bottom face (can be the same as side)
    .soundType('amethyst_cluster')
    //.textureAll('minecraft:block/command_block_front')
    .item(item => {
        item
        .tooltip('§l§fForbidden fusion§r of the §l§5Ender Dragons§r soul.')
        .tooltip('This remnant calls forth the storm that §l§4consumes worlds.')
        .rarity('epic')
    })
})