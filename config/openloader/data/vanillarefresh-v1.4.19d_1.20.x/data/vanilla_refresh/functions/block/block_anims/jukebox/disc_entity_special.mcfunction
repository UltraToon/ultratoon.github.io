execute if score @s refresh_count matches 6..25 run particle entity_effect ~ ~ ~ 0 0 0 1 1 normal
execute if predicate vanilla_refresh:chance/50_percent if score @s refresh_count matches 26..40 run particle entity_effect ~ ~ ~ 0 0 0 1 1 normal
