scoreboard players add temp refresh_count 1
function vanilla_refresh:block/lodestone/raycast_anim_color
particle electric_spark ~ ~ ~ 0 0 0 0 1 force @p[tag=refresh_temp_pearlholder]
execute unless score temp refresh_count matches 16.. positioned ^ ^ ^1 run function vanilla_refresh:block/lodestone/raycast_anim
scoreboard players reset temp refresh_count