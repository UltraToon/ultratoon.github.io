
scoreboard players add temp refresh_count 1

execute rotated ~ -40 run particle ambient_entity_effect ~ ~ ~ ^ ^ ^100000000000000 0.0000000000000015 0 force @a[distance=..32]
execute rotated ~18 ~ unless score temp refresh_count matches 20.. run function vanilla_refresh:block/block_anims/jukebox/disc_entity_special
scoreboard players reset temp refresh_count