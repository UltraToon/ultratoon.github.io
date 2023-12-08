
tellraw @s [{"text": " "}]


execute if score anim_level refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Plays a particle animation for every 5 XP levels you level up"}]}},{"translate":"Level Up Animation: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/anim_level_disable"}}]
execute if score anim_level refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Plays a particle animation for every 5 XP levels you level up"}]}},{"translate":"Level Up Animation: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/anim_level_enable"}}]

tellraw @s [{"text": " "}]

execute if score anim_water refresh_settings matches 1 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Plays a particle animation when jumping into water from a high distance. The higher you fall, the bigger the splash."}]}},{"translate":"Water Splash Animation: ","color":"gray"},{"translate":"Enabled","color":"green","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/anim_water_disable"}}]
execute if score anim_water refresh_settings matches 0 run tellraw @s [{"translate": "","color": "gray"},{"translate": "ⓘ ","hoverEvent":{"action":"show_text","contents":[{"translate":"Plays a particle animation when jumping into water from a high distance. The higher you fall, the bigger the splash."}]}},{"translate":"Water Splash Animation: ","color":"gray"},{"translate":"Disabled","color":"red","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to change this setting"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/actions/player/anim_water_enable"}}]

tellraw @s [{"text": " "}]

tellraw @s [{"text": " "}]

tellraw @s [{"translate": "","color": "yellow"},{"translate":"<-- Page 3","color":"yellow","underlined":false,"hoverEvent":{"action":"show_text","contents":[{"translate":"Previous Page"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:other/menus/player/settings3"}},{"translate":"    - 4/4 -     ","color": "gray","italic": false},{"translate":"","color": "yellow"}]


tellraw @s [{"text": " "}]
