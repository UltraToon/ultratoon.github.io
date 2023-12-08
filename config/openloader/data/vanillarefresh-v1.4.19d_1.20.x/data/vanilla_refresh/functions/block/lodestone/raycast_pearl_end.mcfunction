execute at @s run function vanilla_refresh:other/particle/teleport_particle
tp @s ~ ~ ~
execute at @s run summon marker ~ ~ ~ {Tags:["refresh_particle_teleportsound","refresh_particle"]}
data merge entity @s {Motion:[0.0,-9.0,0.0]}


