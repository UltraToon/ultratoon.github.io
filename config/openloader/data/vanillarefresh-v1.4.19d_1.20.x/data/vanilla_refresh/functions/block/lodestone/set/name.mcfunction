playsound minecraft:block.conduit.attack.target block @a[distance=..30] ~ ~ ~ 1 1.2
playsound item.lodestone_compass.lock block @a[distance=..30] ~ ~ ~ 1 1.8
playsound block.beacon.ambient block @a[distance=..30] ~ ~ ~ 1 1.65
particle poof ~ ~ ~ .02 .02 .02 .01 5 force @a[distance=..32]

execute at @s positioned ~ ~-1.2500 ~ unless entity @e[distance=..0.0001,type=armor_stand,tag=refresh_entity_name] run summon armor_stand ~ ~ ~ {NoAI:1b,Invulnerable:1b,NoGravity:1b,Invisible:1b,Silent:1b,Tags:["refresh_entity_name","refresh_entity_misc"],CustomNameVisible:1b,CustomName:'{"translate":"Lodestone"}'}

tag @e[type=item,nbt={Item:{id:"minecraft:paper",Count:1b}},distance=..0.5,limit=1] add refresh_temp1
execute at @s positioned ~ ~-1.2500 ~ run data modify entity @e[distance=..0.0001,type=armor_stand,tag=refresh_entity_name,limit=1] CustomName set from entity @e[type=item,tag=refresh_temp1,limit=1] Item.tag.display.Name
execute at @s run data modify entity @s data.CustomName set from entity @e[type=item,tag=refresh_temp1,limit=1] Item.tag.display.Name
execute at @s run data modify entity @s data.Name set value 1
tag @e[type=item,tag=refresh_temp1] remove refresh_temp1

kill @e[type=item,nbt={Item:{id:"minecraft:paper",Count:1b}},distance=..0.5]


