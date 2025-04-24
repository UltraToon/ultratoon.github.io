execute if score Stage WitherStormTimer matches 0 run scoreboard players add G WitherStormTimer 1
execute if score Stage WitherStormTimer matches 0 in overworld positioned 0 300 10000 run forceload add ~ ~
execute if score Stage WitherStormTimer matches 0 if score G WitherStormTimer = Summon WitherStormTimer run function wshelp:summon

scoreboard players reset @a[gamemode=!creative] WitherStormControls
scoreboard players enable @a[gamemode=creative] WitherStormControls
execute as @a[gamemode=creative] if score @s WitherStormControls matches 1.. run function wshelp:controls
