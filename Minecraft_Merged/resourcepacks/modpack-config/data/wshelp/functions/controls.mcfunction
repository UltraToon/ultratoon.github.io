tellraw @s ["",{"text":"Timed Wither Storm","color":"gold"},{"text":"\nThis datapack makes the wither storm start after a set amount of time. The time can be set via replacing "},{"text":"{time}","color":"green"},{"text":" with a number of ticks in the command you can open via "},{"text":"clicking this","bold":true,"color":"aqua","clickEvent":{"action":"suggest_command","value":"/scoreboard players set Summon WitherStormTimer {time}"}},{"text":". You can pause the timer via "},{"text":"Clicking This Text","bold":true,"color":"aqua","clickEvent":{"action":"run_command","value":"/scoreboard players set Stage WitherStormTimer -1"}},{"text":". You can start the timer by "},{"text":"clicking this","bold":true,"color":"aqua","clickEvent":{"action":"run_command","value":"/scoreboard players set Stage WitherStormTimer 0"}},{"text":". You can reset the timer by "},{"text":"clicking this","bold":true,"color":"aqua","clickEvent":{"action":"run_command","value":"/scoreboard players set G WitherStormTimer 0"}},{"text":". The wither storm will spawn at 0 X, and 10000 Z. \n "}]

execute if score Stage WitherStormTimer matches 0 run tellraw @s {"text":"The wither storm summoning timer is going.\n "}
execute if score Stage WitherStormTimer matches -1 run tellraw @s {"text":"The wither storm summoning timer is paused.\n "}
execute if score Stage WitherStormTimer matches 1 run tellraw @s {"text":"The wither storm summoning timer has completed, and the storm has been summoned.\n "}

tellraw @s ["",{"text":"The Timer Progress: "},{"score":{"name":"G","objective":"WitherStormTimer"}},{"text":"/"},{"score":{"name":"Summon","objective":"WitherStormTimer"}},{"text":"\n "}]

scoreboard players reset @s WitherStormControls
