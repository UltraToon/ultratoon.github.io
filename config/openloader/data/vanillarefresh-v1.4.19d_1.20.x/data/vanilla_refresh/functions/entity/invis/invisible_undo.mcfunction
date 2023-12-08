execute positioned ~ ~ ~ run kill @e[sort=nearest,limit=1,nbt={Item:{id:"minecraft:splash_potion",Count:1b,tag:{Potion:"minecraft:water"}}},distance=..1.75]

playsound entity.splash_potion.break neutral @a[distance=..20] ~ ~ ~ 1 1
playsound entity.shulker_bullet.hit neutral @a[distance=..20] ~ ~ ~ 1 .65
playsound entity.shulker_bullet.hit neutral @a[distance=..20] ~ ~ ~ 1 1.77
particle poof ~ ~ ~ .3 .5 .3 .05 25 force @a[distance=..64]
execute as @e[distance=..1,type=#vanilla_refresh:useable_invis] run data modify entity @s Invisible set value 0