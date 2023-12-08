
function vanilla_refresh:block/anvil/drops/common
playsound block.metal.break block @a[distance=..20] ~ ~ ~ 1 .8

setblock ~ ~ ~ air
particle block coal_block ~ ~.5 ~ .3 .3 .3 0 80 normal


loot spawn ~ ~1.00 ~ fish vanilla_refresh:drop/coal ~ ~ ~
loot spawn ~ ~1.00 ~ fish vanilla_refresh:drop/coal ~ ~ ~
loot spawn ~ ~1.00 ~ fish vanilla_refresh:drop/coal ~ ~ ~
loot spawn ~ ~1.00 ~ fish vanilla_refresh:drop/coal ~ ~ ~

loot spawn ~ ~1.00 ~ fish vanilla_refresh:drop/coal ~ ~ ~
loot spawn ~ ~1.00 ~ fish vanilla_refresh:drop/coal ~ ~ ~
loot spawn ~ ~1.00 ~ fish vanilla_refresh:drop/coal ~ ~ ~
loot spawn ~ ~1.00 ~ fish vanilla_refresh:drop/coal ~ ~ ~

loot spawn ~ ~1.00 ~ fish vanilla_refresh:drop/coal ~ ~ ~

scoreboard players reset tempScore refresh_randomizer_output
