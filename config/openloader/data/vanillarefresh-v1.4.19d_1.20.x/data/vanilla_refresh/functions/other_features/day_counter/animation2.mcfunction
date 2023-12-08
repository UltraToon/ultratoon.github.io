

execute if score @s refresh_daycounter2 matches 1000 run title @s actionbar [{"translate": "—DAY—" }]
execute if score @s refresh_daycounter2 matches 1000 run title @s actionbar [{"translate": "— DAY —" }]



execute if score @s refresh_daycounter2 matches 1010 run title @s actionbar [{"translate": "—  DAY  —" }]
execute if score @s refresh_daycounter2 matches 1012 run title @s actionbar [{"translate": "—   DAY   —" }]
execute if score @s refresh_daycounter2 matches 1016 run title @s actionbar [{"translate": "—    DAY    —" }]


execute if score @s refresh_daycounter2 matches 1025 run title @s actionbar [{"translate": "—   DAY   —" }]
execute if score @s refresh_daycounter2 matches 1029 run title @s actionbar [{"translate": "—  DAY  —" }]
execute if score @s refresh_daycounter2 matches 1030 run title @s actionbar [{"translate": "— DAY —" }]
execute if score @s refresh_daycounter2 matches 1032 run title @s actionbar [{"translate": "—DAY—" }]
execute if score @s refresh_daycounter2 matches 1033 run title @s actionbar [{"translate": "—A—" }]
execute if score @s refresh_daycounter2 matches 1034 run title @s actionbar [{"translate": "⏺" }]
execute if score @s refresh_daycounter2 matches 1038 run title @s actionbar [{"translate": "—" }]
execute if score @s refresh_daycounter2 matches 1038 run title @s actionbar [{"translate": "——" }]


execute if score @s refresh_daycounter2 matches 1000 run playsound minecraft:block.amethyst_block.step master @s ~ ~ ~ 1 1.05
execute if score @s refresh_daycounter2 matches 1010 run playsound minecraft:block.amethyst_block.step master @s ~ ~ ~ 1 1.05
execute if score @s refresh_daycounter2 matches 1015 run playsound minecraft:block.amethyst_block.step master @s ~ ~ ~ 1 1.05
execute if score @s refresh_daycounter2 matches 1020 run playsound minecraft:block.amethyst_block.step master @s ~ ~ ~ 1 1.05
execute if score @s refresh_daycounter2 matches 1030 run playsound minecraft:block.amethyst_block.step master @s ~ ~ ~ 1 1.05

execute if score @s refresh_daycounter2 matches 1040 run playsound minecraft:block.amethyst_block.step master @s ~ ~ ~ 1 1.05
execute if score @s refresh_daycounter2 matches 1040 run playsound minecraft:block.amethyst_block.step master @s ~ ~ ~ 1 1.05
execute if score @s refresh_daycounter2 matches 1040 run playsound minecraft:block.amethyst_block.step master @s ~ ~ ~ 1 1.05
execute if score @s refresh_daycounter2 matches 1040 run playsound minecraft:block.amethyst_block.step master @s ~ ~ ~ 1 1.05
execute if score @s refresh_daycounter2 matches 1040 run playsound minecraft:entity.allay.item_thrown player @s ~ ~ ~ .8 .65
execute if score @s refresh_daycounter2 matches 1040 run playsound minecraft:entity.allay.item_thrown player @s ~ ~ ~ .8 1.3
execute if score @s refresh_daycounter2 matches 1040 run playsound minecraft:block.note_block.chime player @s ~ ~ ~ .8 .63



# stars
execute if score @s refresh_daycounter2 matches 1040 run title @s actionbar [{"translate": "⭐ — DAY ","color": "yellow","bold": true},{"score":{"name":"day","objective": "refresh_daycounter"}},{"translate": " — ⭐"}]
execute if score @s refresh_daycounter2 matches 1042 run title @s actionbar [{"translate": "⭐   — DAY ","color": "yellow","bold": true},{"score":{"name":"day","objective": "refresh_daycounter"}},{"translate": " —   ⭐"}]
execute if score @s refresh_daycounter2 matches 1044 run title @s actionbar [{"translate": "⭐     — DAY ","color": "yellow","bold": true},{"score":{"name":"day","objective": "refresh_daycounter"}},{"translate": " —     ⭐"}]
execute if score @s refresh_daycounter2 matches 1046 run title @s actionbar [{"translate": "⭐      — DAY ","color": "yellow","bold": true},{"score":{"name":"day","objective": "refresh_daycounter"}},{"translate": " —      ⭐"}]
execute if score @s refresh_daycounter2 matches 1048 run title @s actionbar [{"translate": "⚫       — DAY ","color": "yellow","bold": true},{"score":{"name":"day","objective": "refresh_daycounter"}},{"translate": " —       ⚫"}]
execute if score @s refresh_daycounter2 matches 1050..1120 run title @s actionbar [{"translate": "       — DAY ","color": "yellow","bold": true},{"score":{"name":"day","objective": "refresh_daycounter"}},{"translate": " —       "}]





execute if score @s refresh_daycounter2 matches 1040 run playsound minecraft:ui.button.click master @s ~ ~ ~ .4 2
execute if score @s refresh_daycounter2 matches 1040 run playsound minecraft:ui.button.click master @s ~ ~ ~ .4 1.5
execute if score @s refresh_daycounter2 matches 1040 run playsound minecraft:block.copper.break master @s ~ ~ ~ 1 .6


execute if score @s refresh_daycounter2 matches 1000..1180 run tag @s add 1_splatus_actionbar_disabled
execute if score @s refresh_daycounter2 matches 1000..1180 run tag @s add 1_splatus_actionbar_disabled_2


execute if score @s refresh_daycounter2 matches 1180 run tag @s remove 1_splatus_actionbar_disabled
execute if score @s refresh_daycounter2 matches 1180 run tag @s remove 1_splatus_actionbar_disabled_2
execute if score @s refresh_daycounter2 matches 1180 run scoreboard players reset @s refresh_daycounter2
