// Listen to item registry event
StartupEvents.registry('block', event => {
    event.create('ivors_wrath')
    //.tooltip('§l§fForbidden fusion§r of the §l§5Ender Dragon§rs soul.')
    //.tooltip('This remnant calls forth the storm that §l§4consumes worlds.')
    .displayName('§k#§r Command Block §k#')
    .texture('minecraft:command_block')
    //.rarity('epic')
})