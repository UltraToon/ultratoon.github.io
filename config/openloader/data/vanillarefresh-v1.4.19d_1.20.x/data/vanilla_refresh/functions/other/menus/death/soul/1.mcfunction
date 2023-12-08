

tellraw @s [{"text": " "}]

tellraw @s [{"text": "Soul Link Settings","color": "aqua"}]



tellraw @s [{"text": " "}]


execute if score soul_takeitems refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Whether Soul Links take and store items on death. If disabled, they will only take XP levels."}]}},{"translate":"Take/Store Items: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/death/soul_takeitems_disable"}}]
execute if score soul_takeitems refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Whether Soul Links take and store items on death. If disabled, they will only take XP levels."}]}},{"translate":"Take/Store Items: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/death/soul_takeitems_enable"}}]



tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"The percentage of XP Levels the player had before death to give back when a soul link is collected"}]}},{"translate":"Percent of XP Levels Returned: ","color":"gray"},{"score":{"name": "soul_percentxp","objective": "refresh_settings"},"color":"light_purple","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change"}]},"clickEvent":{"action":"suggest_command","value":"/scoreboard players set @s refresh_soul_percent_xp 80"}},{"translate":"% of XP","color":"light_purple","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change"}]},"clickEvent":{"action":"suggest_command","value":"/scoreboard players set @s refresh_soul_percent_xp 80"}}]



tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"The amount of time until a soul link expires, dropping its stored items and XP on the ground"}]}},{"translate":"Expires After: ","color":"gray"},{"score":{"name": "soul_despawntime","objective": "refresh_settings"},"color":"light_purple","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change"}]},"clickEvent":{"action":"suggest_command","value":"/scoreboard players set @s refresh_soul_despawntime_minutes 120"}},{"translate":" minutes","color":"light_purple","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change"}]},"clickEvent":{"action":"suggest_command","value":"/scoreboard players set @s refresh_soul_despawntime_minutes 120"}}]

tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- Return","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"Previous Page"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/death/settings2"}}]

tellraw @s [{"text": " "}]
