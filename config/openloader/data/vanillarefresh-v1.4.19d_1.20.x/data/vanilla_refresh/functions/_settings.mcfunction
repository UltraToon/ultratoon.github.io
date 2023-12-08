execute if entity @s[tag=!refresh_player_openedsettings] run function vanilla_refresh:other/actions/settings_message
execute if entity @s[tag=refresh_player_openedsettings] run function vanilla_refresh:other/menus/main

execute if entity @s[tag=!refresh_player_openedsettings] run playsound entity.experience_orb.pickup player @s ~ ~ ~ 1 1

tag @s add refresh_player_openedsettings

tag @s add refresh_operator