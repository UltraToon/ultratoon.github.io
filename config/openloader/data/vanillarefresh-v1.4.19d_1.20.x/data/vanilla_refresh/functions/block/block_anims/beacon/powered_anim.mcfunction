particle effect ^ ^.5 ^1.5 ~ ~-10000000000000 ~ 0 0 normal

execute if predicate vanilla_refresh:chance/2_percent run playsound block.beacon.ambient block @a[distance=..32] ~ ~ ~ 3 1






###################################################################
# level 4




### fully powered
execute if entity @s[tag=!refresh_entity_blockanim_beacon_fullypowered] if block ~ ~ ~ beacon{Levels:4} run function vanilla_refresh:block/block_anims/beacon/fully_powered
execute if score @s refresh_count matches 0..31 run function vanilla_refresh:block/block_anims/beacon/fully_powered_anim



execute if block ~ ~ ~ beacon{Levels:4} run particle effect ^ ^.5 ^-1.5 ~ ~-10000000000000 ~ 0 0 normal

execute if score @s refresh_count matches 30.. if score second refresh_count matches 1 if block ~ ~ ~ beacon{Levels:4} positioned ~ ~-.4 ~ run function vanilla_refresh:block/block_anims/beacon/wave_particle_less
execute unless score blockanims_beacon_sound refresh_settings matches 0 if block ~ ~ ~ beacon{Levels:4} if predicate vanilla_refresh:chance/2_percent run playsound block.beacon.ambient block @a[distance=..64] ~ ~ ~ 4 1.5
