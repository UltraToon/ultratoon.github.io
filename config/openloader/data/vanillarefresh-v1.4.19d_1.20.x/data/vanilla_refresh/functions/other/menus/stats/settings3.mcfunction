tellraw @s [{"text": " "}]


execute if score stats_deathaverage refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Tracks the average amount of deaths per hour with a decimal included in the result"}]}},{"translate":"Stats; Deaths Per Hour: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/death_average_disable"}}]
execute if score stats_deathaverage refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Tracks the average amount of deaths per hour with a decimal included in the result"}]}},{"translate":"Stats; Deaths Per Hour: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/death_average_enable"}}]


tellraw @s [{"text": " "}]


execute if score stats_kills refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Tracks direct player kills"}]}},{"translate":"Stats; Player Kills: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/player_disable"}}]
execute if score stats_kills refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Tracks direct player kills"}]}},{"translate":"Stats; Player Kills: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/player_enable"}}]


tellraw @s [{"text": " "}]

execute if score stats_deathtime refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Tracks the time the player has been alive since their last death\nThis is also known as Hours Survived"}]}},{"translate":"Stats; Time Since Last Death: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/death_time_disable"}}]
execute if score stats_deathtime refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Tracks the time the player has been alive since their last death\nThis is also known as Hours Survived"}]}},{"translate":"Stats; Time Since Last Death: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/death_time_enable"}}]



#execute if score process_stats refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"The code required to track stats. When disabling just the stats feature on page 1, stats are still tracked in the background, allowing you to re-enable it at anytime and still have accurate stats. Disabling stats processing"}]}},{"translate":"Stats; Deaths Per Hour: ","color":"gray"},{"translate":"Enabled","color":"gray","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/death_average_disable"}}]
#execute if score process_stats refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Tracks the average amount of deaths per hour with a decimal included in the result"}]}},{"translate":"Stats; Deaths Per Hour: ","color":"gray"},{"translate":"Disabled","color":"gray","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/stats/death_average_enable"}}]


tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- Page 2","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"Previous Page"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/stats/settings2"}},{"translate":"    - 3/4 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"Page 4 -->","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"Next Page"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/stats/settings4"}}]


tellraw @s [{"text": " "}]
