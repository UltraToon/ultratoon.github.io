scoreboard players add @s refresh_count 1
execute if score @s refresh_count matches 1.. run function vanilla_refresh:other/particle/teleport_particle
execute if score @s refresh_count matches 1.. run kill @s