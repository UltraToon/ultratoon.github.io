particle dust_color_transition 1.000 0.000 0.969 1 0.000 0.267 1.000 ~ ~1 ~ 0 0 0 1 0 force @a[distance=..128]
#particle dragon_breath ~ ~1 ~ 0 0 0 0 1 force @a[distance=..64]
execute if entity @p[distance=..0.1] run particle reverse_portal ~ ~1 ~ 0 0 0 .1 50 normal @a[distance=..32]
execute unless entity @p[distance=..0.1] positioned ^ ^ ^.2 run function vanilla_refresh:block/block_anims/enchanting_table/raycast_to_player
