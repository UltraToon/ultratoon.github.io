
tellraw @s [{"text": " "}]


execute if score join refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Joining and leaving the world will play a notification sound to you and all other players on the server. The first time someone ever joins has a special sound effect."}]}},{"translate":"Joins/Exits Sound Effects: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/join_disable"}}]
execute if score join refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Joining and leaving the world will play a notification sound to you and all other players on the server. The first time someone ever joins has a special sound effect."}]}},{"translate":"Joins/Exits Sound Effects: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/join_enable"}}]

tellraw @s [{"text": " "}]


execute if score firstjoin refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"When first joining the world, it will be displayed in chat along with your member join number."}]}},{"translate":"First Join Chat Message: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/firstjoin_disable"}}]
execute if score firstjoin refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"When first joining the world, it will be displayed in chat along with your member join number."}]}},{"translate":"First Join Chat Message: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/firstjoin_enable"}}]


tellraw @s [{"text": " "}]


execute if score ghost refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Players in Spectator Mode are given a partlcle effect ghost"}]}},{"translate":"Spectator Ghost: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/ghost_enable2"}}]
execute if score ghost refresh_settings matches 2 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Players in Spectator Mode are given a partlcle effect ghost"}]}},{"translate":"Spectator Ghost: ","color":"gray"},{"translate":"Visible Only to Others","color":"yellow","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/ghost_disable"}}]
execute if score ghost refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Players in Spectator Mode are given a partlcle effect ghost"}]}},{"translate":"Spectator Ghost: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/ghost_enable"}}]

tellraw @s [{"text": " "}]


tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- Page 1","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"Previous Page"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/player/settings1"}},{"translate":"    - 2/4 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"},{"translate":"Page 2 -->","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"Next Page"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/player/settings3"}}]


tellraw @s [{"text": " "}]
