scoreboard players add temp2 refresh_count 1
execute rotated ~ 0 run particle cloud ^ ^ ^ ^ ^ ^10000000000000 0.00000000000002 0 force @a[distance=..128]
execute unless score temp2 refresh_count matches 8.. rotated ~45 ~ run function vanilla_refresh:other/particle/water/wave_particle
execute if score temp2 refresh_count matches 8.. run scoreboard players reset temp2 refresh_count