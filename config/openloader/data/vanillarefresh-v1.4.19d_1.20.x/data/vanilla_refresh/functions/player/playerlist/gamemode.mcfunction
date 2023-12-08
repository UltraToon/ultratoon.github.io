



execute if entity @a[gamemode=!spectator,gamemode=!creative] run tellraw @s [{"text": " "}]

execute if entity @a[gamemode=!spectator,gamemode=!creative] run tellraw @s [{"text": "Players: ","color": "yellow"},{"selector":"@a[gamemode=!spectator,gamemode=!creative]","color": "gray"}]

################################################

execute if entity @a[gamemode=creative] run tellraw @s [{"text": " "}]

execute if entity @a[gamemode=creative] run tellraw @s [{"text": "Creative Mode: ","color": "#38ffee"},{"selector":"@a[gamemode=creative]","color": "gray"}]

################################################

execute if entity @a[gamemode=spectator] run tellraw @s [{"text": " "}]

execute if entity @a[gamemode=spectator] run tellraw @s [{"text": "Spectators: ","color": "#9b97c9"},{"selector":"@a[gamemode=spectator]","color": "gray"}]

################################################