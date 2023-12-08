summon marker ~ ~1.64 ~ {Tags:["refresh_entity_playersoul","refresh_entity_playersoul_temp"]}

playsound minecraft:ambient.soul_sand_valley.mood player @a[distance=..48] ~ ~ ~ 1 1.85
playsound entity.allay.ambient_without_item player @a[distance=..48] ~ ~ ~ .5 .5
playsound entity.allay.ambient_without_item player @a[distance=..48] ~ ~ ~ .5 .6

execute as @e[sort=nearest,limit=1,type=marker,tag=refresh_entity_playersoul_temp,predicate=!vanilla_refresh:condition/has_refresh_count] store result score @s refresh_uuid1 run data get entity @p UUID[0]
execute as @e[sort=nearest,limit=1,type=marker,tag=refresh_entity_playersoul_temp,predicate=!vanilla_refresh:condition/has_refresh_count] store result score @s refresh_uuid2 run data get entity @p UUID[1]
execute as @e[sort=nearest,limit=1,type=marker,tag=refresh_entity_playersoul_temp,predicate=!vanilla_refresh:condition/has_refresh_count] store result score @s refresh_uuid3 run data get entity @p UUID[2]
execute as @e[sort=nearest,limit=1,type=marker,tag=refresh_entity_playersoul_temp,predicate=!vanilla_refresh:condition/has_refresh_count] store result score @s refresh_uuid4 run data get entity @p UUID[3]

execute if score soul_takeitems refresh_settings matches 1 as @e[sort=nearest,limit=1,type=marker,tag=refresh_entity_playersoul_temp,predicate=!vanilla_refresh:condition/has_refresh_count] run data modify entity @s data.Inventory set from entity @p Inventory
execute if score soul_takeitems refresh_settings matches 1 as @e[sort=nearest,limit=1,type=marker,tag=refresh_entity_playersoul_temp,predicate=!vanilla_refresh:condition/has_refresh_count] run tag @s add refresh_entity_playersoul_hasitems
execute as @e[sort=nearest,limit=1,type=marker,tag=refresh_entity_playersoul_temp,predicate=!vanilla_refresh:condition/has_refresh_count] run data modify entity @s data.XP set from entity @p XpLevel

execute as @e[sort=nearest,limit=1,type=marker,tag=refresh_entity_playersoul_temp,predicate=!vanilla_refresh:condition/has_refresh_count] run tag @s remove refresh_entity_playersoul_temp

particle end_rod ~ ~1.64 ~ 0 0 0 .12 6 force @a[distance=..32] 
execute if score soul_takeitems refresh_settings matches 1 run clear @s
xp set @s 0 levels
xp set @s 0 points


execute as @s[predicate=vanilla_refresh:position/overworld,predicate=vanilla_refresh:position/y-64] anchored eyes as @e[sort=nearest,limit=1,type=marker,tag=refresh_entity_playersoul,predicate=!vanilla_refresh:condition/has_refresh_count] at @s run function vanilla_refresh:death/soul/find_ground_after_void
execute as @s[predicate=!vanilla_refresh:position/overworld,predicate=vanilla_refresh:position/y1] anchored eyes as @e[sort=nearest,limit=1,type=marker,tag=refresh_entity_playersoul,predicate=!vanilla_refresh:condition/has_refresh_count] at @s run function vanilla_refresh:death/soul/find_ground_after_void
