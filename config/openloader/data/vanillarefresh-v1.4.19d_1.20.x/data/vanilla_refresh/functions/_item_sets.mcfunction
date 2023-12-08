
tellraw @s [{"text": " "}]

tellraw @s [{"translate":"Select an Item Set ","color": "yellow"},{"translate": "              ","strikethrough": true}]



tellraw @s [{"text": " "}]

tellraw @s [{"translate": "   ","color": "gray"},{"translate":"Ocean","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to Give"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:item_sets/ocean"}},{"translate": "   ","color": "gray"},{"translate":"Deepslate","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to Give"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:item_sets/deepslate"}},{"translate": "   ","color": "gray"},{"translate":"Discs","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to Give"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:item_sets/discs"}},{"translate": "   ","color": "gray"},{"translate":"Vegetation","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to Give"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:item_sets/vegetation"}},{"translate": "   ","color": "gray"},{"translate":"End Blocks","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to Give"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:item_sets/end_blocks"}}]



tellraw @s [{"text": " "}]

tellraw @s [{"translate": "   ","color": "gray"},{"translate":"Moss Blocks","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to Give"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:item_sets/moss_blocks"}},{"translate": "   ","color": "gray"},{"translate":"Stone","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to Give"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:item_sets/overworld_stones"}},{"translate": "   ","color": "gray"},{"translate":"Terrain","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to Give"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:item_sets/overworld_terrain"}},{"translate": "   ","color": "gray"},{"translate":"Stone Bricks","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to Give"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:item_sets/stone_bricks"}},{"translate": "  "}]


tellraw @s [{"text": " "}]

tellraw @s [{"translate": "   ","color": "gray"},{"translate":"Armor1","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to Give"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:item_sets/set1"}},{"translate": "   ","color": "gray"},{"translate":"Armor2","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to Give"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:item_sets/set2"}},{"translate": "   ","color": "gray"},{"translate":"Armor3","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to Give"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:item_sets/set3"}},{"translate": "   ","color": "gray"},{"translate":"Nether","color":"#408CFF","underlined":true,"hoverEvent":{"action":"show_text","contents":[{"translate":"Click to Give"}]},"clickEvent":{"action":"run_command","value":"/function vanilla_refresh:item_sets/nether"}},{"translate": "  "}]



execute if score giveclearing refresh_settings matches 1 run tellraw @s[tag=!refresh_player_openeditem_sets] [{"text": " "}]

execute if score giveclearing refresh_settings matches 1 run tellraw @s[tag=!refresh_player_openeditem_sets] {"translate":"Selecting an item set will clear your current inventory","color": "gray","italic": true}

tellraw @s [{"text": " "}]
execute if score giveclearing refresh_settings matches 1 run tag @s add refresh_player_openeditem_sets


tag @s add refresh_operator