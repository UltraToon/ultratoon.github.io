
tellraw @s [{"text": " "}]


execute if score stoptime refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"When there are no players online, the day light cycle and day counter stops, only continuing once a player is online. Helpful for small servers that want their daycounters to not go up so quickly."}]}},{"translate":"Offline Timestopper: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/other/stoptime_disable"}},{"translate": " "}]
execute if score stoptime refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"When there are no players online, the day light cycle and day counter stops, only continuing once a player is online. Helpful for small servers that want their daycounters to not go up so quickly."}]}},{"translate":"Offline Timestopper: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/other/stoptime_enable"}},{"translate": " "}]



tellraw @s [{"text": " "}]


tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- Page 2","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"Previous Page"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/other/settings2"}},{"translate":"    - 3/3 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"","color": "yellow"}]

tellraw @s [{"text": " "}]
