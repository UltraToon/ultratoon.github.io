scoreboard players add temp2 refresh_count 1
execute positioned ^ ^ ^2 run particle dust_color_transition 0.600 1.000 0.000 .8 0.769 0.992 1.000 ~ ~ ~ .1 .1 .1 1 1 force @a[distance=..128]
execute unless score temp2 refresh_count matches 72.. rotated ~5 ~50 run function vanilla_refresh:player/anim_xp/wave_particle
execute if score temp2 refresh_count matches 72.. run scoreboard players reset temp2 refresh_count