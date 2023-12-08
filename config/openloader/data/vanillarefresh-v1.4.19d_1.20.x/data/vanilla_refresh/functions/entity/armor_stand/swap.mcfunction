


execute if score @s refresh_count matches 1.. run scoreboard players add @s refresh_count 1
execute if score @s refresh_count matches 12.. run scoreboard players set @s refresh_count 1


execute if score @s refresh_count matches 1.. run data remove entity @s Pose
execute if score @s refresh_count matches 1.. run data merge entity @s {Pose:{},ShowArms:1b}

execute if score @s refresh_count matches 2 run data merge entity @s {Pose:{RightArm: [-9.2f, 0.0f, 0.0f], LeftArm: [-9.2f, 0.0f, 0.0f], RightLeg: [0.0f, 0.0f, 0.0f]},ShowArms:1b}
execute if score @s refresh_count matches 2 at @s run tp @s ^-.1 ^ ^-.5
execute if score @s refresh_count matches 3 run data merge entity @s {ShowArms:1b,Pose:{LeftArm: [-8.5f, 0.0f, 0.0f],RightArm:[260f,0f,0f]}}

#execute if score @s refresh_count matches 2 run data merge entity @s {ShowArms:1b,Pose:{RightLeg:[0f,0f,2f],LeftArm:[12f,0f,348f],RightArm:[358f,0f,10f]}}

execute if score @s refresh_count matches 4 run tp @s ^.1 ^ ^.5
execute if score @s refresh_count matches 4 run data merge entity @s {Pose:{Head:[28f,0f,0f],LeftArm:[309f,30f,0f],RightArm:[305f,328f,0f]}}
execute if score @s refresh_count matches 5 run data merge entity @s {Pose:{Head:[346f,0f,0f],LeftLeg:[14f,0f,0f],RightLeg:[358f,0f,0f],LeftArm:[18f,0f,340f],RightArm:[257f,34f,0f]}}
execute if score @s refresh_count matches 6 run data merge entity @s {Pose:{Body:[12f,0f,0f],Head:[14f,0f,0f],LeftLeg:[345f,0f,0f],RightLeg:[30f,0f,0f],RightArm:[37f,26f,20f]}}
execute if score @s refresh_count matches 7 run data merge entity @s {Pose:{Body:[12f,0f,0f],Head:[0f,328f,0f],LeftLeg:[352f,0f,2f],RightLeg:[18f,360f,0f],LeftArm:[239f,0f,70f],RightArm:[360f,304f,0f]}}
execute if score @s refresh_count matches 8 run data merge entity @s {Pose:{Head:[345f,0f,0f],LeftArm:[340f,41f,0f],RightArm:[299f,0f,328f]}}
execute if score @s refresh_count matches 9 run data merge entity @s {Pose:{Body:[16f,348f,0f],Head:[8f,328f,2f],LeftLeg:[321f,0f,0f],RightLeg:[32f,0f,0f],LeftArm:[277f,0f,32f],RightArm:[207f,58f,0f]}}
execute if score @s refresh_count matches 10 run data merge entity @s {ShowArms:1b,Pose:{Head:[18f,24f,0f],LeftArm:[249f,275f,0f],RightArm:[259f,334f,0f]}}
execute if score @s refresh_count matches 11 run data merge entity @s {ShowArms:0b,Pose:{}}

playsound minecraft:block.wood.fall neutral @a[distance=..20] ~ ~ ~ 1 1.25
execute if score @s refresh_count matches 12 run playsound minecraft:block.wood.break neutral @a[distance=..20] ~ ~ ~ 1 .8
execute if score @s refresh_count matches 1 run playsound minecraft:block.wood.place neutral @a[distance=..20] ~ ~ ~ 1 1
execute if score @s refresh_count matches 11 positioned ~ ~.75 ~ run particle block oak_planks ^-.25 ^ ^ 0 .5 0 0 8 force @a[distance=..32]
execute if score @s refresh_count matches 11 positioned ~ ~.75 ~ run particle block oak_planks ^.25 ^ ^ 0 .5 0 0 8 force @a[distance=..32]

tag @s add refresh_entity_stand_checked

