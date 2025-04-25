// Listen to item registry event
StartupEvents.registry('block', event => {
    event.create('cmd_block', 'epic')
    .tooltip('§l§fForbidden fusion§r of the §l§5Ender Dragon§rs soul.')
    .tooltip('This remnant calls forth the storm that §l§4consumes worlds.')
    .displayName('§k#§r Command Block §k#')
    .unstackable()
    .texture('minecraft:command_block')
})