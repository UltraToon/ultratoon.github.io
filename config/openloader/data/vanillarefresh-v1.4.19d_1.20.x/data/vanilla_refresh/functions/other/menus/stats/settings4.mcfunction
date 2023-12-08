tellraw @s [{"text": " "}]


execute unless score process_stats_wasdisabled refresh_settings matches 1 if score process_stats refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Entirely disables stats tracking, not just the display of it"}]}},{"translate":"Stats Tracking: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/process_stats_disable"}}]
execute unless score process_stats_wasdisabled refresh_settings matches 1 if score process_stats refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Entirely disables stats tracking, not just the display of it"}]}},{"translate":"Stats Tracking: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/process_stats_enable"}}]

###########################################################################################################

execute if score process_stats_wasdisabled refresh_settings matches 1 if score process_stats refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "⚠ ","color": "yellow","hoverEvent":{"action":"show_text","contents":[{"text": "","color": "white"},{"text":"⚠ This setting was previously disabled, so some stats are no longer accurate\n","color": "yellow"},{"translate":"Entirely disables stats tracking, not just the display of it"}]}},{"translate":"Stats Tracking: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/process_stats_disable"}}]
execute if score process_stats_wasdisabled refresh_settings matches 1 if score process_stats refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "⚠ ","color": "yellow","hoverEvent":{"action":"show_text","contents":[{"text": "","color": "white"},{"text":"⚠ This setting was previously disabled, so some stats are no longer accurate\n","color": "yellow"},{"translate":"Entirely disables stats tracking, not just the display of it"}]}},{"translate":"Stats Tracking: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/process_stats_enable"}}]




tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- Page 3","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"Previous Page"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/stats/settings3"}},{"translate":"    - 3/4 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"}]


tellraw @s [{"text": " "}]
