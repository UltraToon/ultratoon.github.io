StartupEvents.registry('block', event => {
    event.create('ivors_wrath')
    .displayName('§k#§r Command Block §k#')
    .textureAll('minecraft:block/command_block_front')
    .item(item => {
        item
        .tooltip('§l§fForbidden fusion§r of the §l§5Ender Dragons§r soul.')
        .tooltip('This remnant calls forth the storm that §l§4consumes worlds.')
        .rarity('epic')
    })
})