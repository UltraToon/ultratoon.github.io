
execute if score join refresh_settings matches 1 as @a at @s run scoreboard players set @s refresh_sound_egg 0
scoreboard players reset @s refresh_sound_egg
scoreboard players set @s refresh_rejoin 0

execute if score stoptime refresh_settings matches 1 if entity @a run gamerule doDaylightCycle true