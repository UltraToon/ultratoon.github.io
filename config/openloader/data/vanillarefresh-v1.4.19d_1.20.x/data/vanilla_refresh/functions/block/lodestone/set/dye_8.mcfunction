playsound minecraft:block.conduit.attack.target block @a[distance=..30] ~ ~ ~ 1 1.2
playsound item.lodestone_compass.lock block @a[distance=..30] ~ ~ ~ 1 1.8
playsound block.beacon.ambient block @a[distance=..30] ~ ~ ~ 1 1.65
particle poof ~ ~ ~ .02 .02 .02 .01 5 force @a[distance=..32]

execute at @s positioned ~ ~-1.2500 ~ run team join refresh_purple @e[distance=..0.0001,type=armor_stand,tag=refresh_entity_name,limit=1]
execute at @s run data modify entity @s data.Dye set value 8
execute at @s run scoreboard players set @s refresh_color 8

kill @e[type=item,nbt={Item:{id:"minecraft:purple_dye",Count:1b}},distance=..0.5]


