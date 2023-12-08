
# 1 SECOND LOOP ----------------------------------

#biome announce
#execute if score biome refresh_settings matches 1 as @a[scores={refresh_player_tick2=200..}] unless score @s refresh_player_uitoastout matches 1.. at @s run function vanilla_refresh:other_features/biome/main

execute store result score gamerule_keepInventory refresh_settings run gamerule keepInventory


execute if score cyclestats refresh_settings matches 1 run function vanilla_refresh:other_features/cycle/root




#baby zombie
execute if score babyzombie refresh_settings matches 1 as @e[type=#vanilla_refresh:baby_monster,tag=!refresh_skip_babyzombie,tag=!refresh_babyzombie,tag=!ultris_giant_troop,nbt={IsBaby:1b}] at @s run function vanilla_refresh:entity/baby_zombie/init


#tip
execute if score tips refresh_settings matches 1..2 if score tips_refresh refresh_settings matches 1 as @a run function vanilla_refresh:other_features/tip/specific/a_main2



### calculates average death count per hour
#get deaths
# deaths / hours = death average
# get deaths(2)
# deaths(2) x 1000
# deaths(2)  / hours = death average with decimal
# deaths(2) - deaths = decimal only


#inputs deaths into death average score for use
execute if score process_stats refresh_settings matches 1 as @a store result score @s refresh_player_deathaverage run scoreboard players get @s refresh_player_deaths
execute if score process_stats refresh_settings matches 1 as @a store result score @s refresh_player_deathaverage_decimal run scoreboard players get @s refresh_player_deaths

#multiplies so it
execute if score process_stats refresh_settings matches 1 as @a run scoreboard players operation @s refresh_player_deathaverage_decimal *= num_1000 refresh_constants



#the calculation
execute if score process_stats refresh_settings matches 1 as @a run scoreboard players operation @s refresh_player_deathaverage /= @s refresh_player_hours
execute if score process_stats refresh_settings matches 1 as @a run scoreboard players operation @s refresh_player_deathaverage_decimal /= @s refresh_player_hours




#subtracts whole number from decimal score
execute if score process_stats refresh_settings matches 1 as @a run scoreboard players operation @s refresh_player_deathaverage *= num_1000 refresh_constants
execute if score process_stats refresh_settings matches 1 as @a run scoreboard players operation @s refresh_player_deathaverage_decimal -= @s refresh_player_deathaverage
execute if score process_stats refresh_settings matches 1 as @a run scoreboard players operation @s refresh_player_deathaverage /= num_1000 refresh_constants

#piglin trims
execute if score armortrimmed_mobs refresh_settings matches 1 as @e[type=piglin,tag=!refresh_piglin_trimchecked,predicate=vanilla_refresh:wearing/armor] run function vanilla_refresh:entity/trims/piglin/a_main
tag @e[type=piglin] add refresh_piglin_trimchecked





scoreboard players set second refresh_count 0