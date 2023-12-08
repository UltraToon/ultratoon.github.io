loot spawn ~ ~ ~ loot vanilla_refresh:other/randomize_72
execute store result score tempScore refresh_randomizer_output run data get entity @e[distance=..0.01,type=item,limit=1,nbt={Item:{tag:{RefreshRandomizerItem:1}}}] Item.tag.RefreshRandomizerOutput

tellraw @a[tag=refresh_debug] [{"translate":"[Vanilla Refresh: Displayed tip ","color": "gray","italic": true},{"score":{"objective": "refresh_randomizer_output","name": "tempScore"}},{"translate":" in chat]"}]

execute if score tempScore refresh_randomizer_output matches 0 run tellraw @a {"translate": "Tip: - Cauldrons with water still work in the Nether without evaporating","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 1 run tellraw @a {"translate": "Tip: - Swift Sneak allows you to quickly bridge across areas with the same speed as walking","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 2 run tellraw @a {"translate": "Tip: - This chat message is not from a player","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 3 run tellraw @a {"translate": "Tip: - You can use Charged Creepers on Wither Skeletons to instantly get their skull","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 4 run tellraw @a {"translate": "Tip: - The explosion of beds can be used to mine through netherrack for ancient debris","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 5 run tellraw @a {"translate": "Tip: - Below the deepslate layer underground you'll find significantly more diamonds","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 6 run tellraw @a {"translate": "Tip: - Flooded caves contain more exposed ores than generic open caves","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 7 run tellraw @a {"translate": "Tip: - Iron isn't typically found on the surface of the world, but mountains generate high amounts of iron exposed to air.","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 8 run tellraw @a {"translate": "Tip: - The lower a wolf's tail is, the less health it has","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 9 run tellraw @a {"translate": "Tip: - Cats scare away Creepers, but also Phantoms","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 10 run tellraw @a {"translate": "Tip: - Goats can be milked as an alternative to cows","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 11 run tellraw @a {"translate": "Tip: - On Hard Mode, villagers have an 100% chance of zombifying from a zombie attack","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 12 run tellraw @a {"translate": "Tip: - You can equip a banner on a shield to give your shields awesome designs.","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 13 run tellraw @a {"translate": "Tip: - Setting your FOV to 40 or less makes for great, cinematic base screenshots without FOV warp.","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 14 run tellraw @a {"translate": "Tip: - Golden carrots make a great food source for those who just have an abundance of gold","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 15 run tellraw @a {"translate": "Tip: - Feather Falling IV only has a approximate 2.7% chance of appearing on a enchanting table","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 16 run tellraw @a {"translate": "Tip: - The sea lantern block, warped and crimson stems' textures are actually animated","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 17 run tellraw @a {"translate": "Tip: - A Hoe can be used to quickly remove leaves from a tree","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 18 run tellraw @a {"translate": "Tip: - The Wither is immune to projectiles in its final phase","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 19 run tellraw @a {"translate": "Tip: - Using Silk Touch to get nether gold ore and then smelting it into an ingot is more efficent","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 20 run tellraw @a {"translate": "Tip: - Barrels below other barrels can still be opened, unlike chests","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 21 run tellraw @a {"translate": "Tip: - Placing a cauldron while its snowing in a biome will fill the cauldron with powdered snow","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 22 run tellraw @a {"translate": "Tip: - You can create your own mud blocks by pouring a water bottle on a block of dirt","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 23 run tellraw @a {"translate": "Tip: - Lava can be farmed by placing a lava source block above pointed dripstone, and then placing a cauldron below the dripstone","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 24 run tellraw @a {"translate": "Tip: - Endermen don't like endermites","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 25 run tellraw @a {"translate": "Tip: - If you have too much emeralds, iron etc, you can convert them into blocks to save x9 space in your chests","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 26 run tellraw @a {"translate": "Tip: - Aside from ores, Fortune III also works on most crops","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 27 run tellraw @a {"translate": "Tip: - Fighting mobs with axolotls regenerates your health","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 28 run tellraw @a {"translate": "Tip: - Crops dont need to be directly touching water to grow, up to 4 blocks away the crop can still be hydrated","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 29 run tellraw @a {"translate": "Tip: - Elytras can be repaired using phantom membranes or mending","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 30 run tellraw @a {"translate": "Tip: - Amethysts can be used to breed allays","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 31 run tellraw @a [{"translate": "Tip: - Wolves scare away and attack skeletons","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 32 run tellraw @a [{"translate": "Tip: - A goat has a 2% chance of spawning as a screaming varient","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 33 run tellraw @a [{"translate": "Tip: - The spyglass, fov 30, and modded zoom can be merged to make a beautiful ","color": "yellow"},{"translate": "U","color": "#87c3ff","italic": true},{"translate": "L","color": "#87afff","italic": true},{"translate": "T","color": "#87a3ff","italic": true},{"translate": "R","color": "#9387ff","italic": true},{"translate": "A","color": "#af87ff","italic": true},{"translate": " Z","color": "#c387ff","italic": true},{"translate": "O","color": "#dd87ff","italic": true},{"translate": "O","color": "#e987ff","italic": true},{"translate": "M","color": "#ff87f5","italic": true},{"translate": "!","color": "#ff73dc","italic": true}]

execute if score tempScore refresh_randomizer_output matches 34 run tellraw @a {"translate": "Tip: - These tips are sent out from Vanilla Refresh","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 35 run tellraw @a {"translate": "Tip: - Ancient cities only generate at the very bottom of the world near y-64","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 36 run tellraw @a {"translate": "Tip: - A bow cannot have both the Mending and Infinity enchantments","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 37 run tellraw @a {"translate": "Tip: - The rarest ores are deepslate coal and deepslate emerald","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 38 run tellraw @a {"translate": "Tip: - Use a blast furnance to quickly smelt ores","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 39 run tellraw @a {"translate": "Tip: - Use a smoker to quickly smelt food items","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 40 run tellraw @a {"translate": "Tip: - Campfires smelt food without using fuel","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 41 run tellraw @a {"translate": "Tip: - Lava buckets can be used as a fuel source in furnaces to smelt tons of items","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 42 run tellraw @a {"translate": "Tip: - Enderchests can only be mined with a Silk Touch pickaxe","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 43 run tellraw @a {"translate": "Tip: - Water buckets and a lava pool can be used to make a nether portal without ever needing to mine obsidian","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 44 run tellraw @a {"translate": "Tip: - Sculk can be mined instantly with an efficiency V hoe","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 45 run tellraw @a {"translate": "Tip: - You can instantly dry wet sponges by placing them in the Nether","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 46 run tellraw @a {"translate": "Tip: - Warm oceans are the only ocean type without a deep variant","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 47 run tellraw @a {"translate": "Tip: - Diamond armor can be bought from armorer villagers for as cheap as 1 emerald","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 48 run tellraw @a {"translate": "Tip: - Candles can be placed on cakes for a colorful touch","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 49 run tellraw @a {"translate": "Tip: - Each disc in a jukebox gives a different power level to comparitors","color": "yellow"}

execute if score tempScore refresh_randomizer_output matches 50 run tellraw @a [{"translate": "Tip: - You can hold ","color": "yellow"},{"keybind":"key.playerlist"},{"translate":" to view a list of all current players online"}]

execute if score tempScore refresh_randomizer_output matches 51 run tellraw @a [{"translate": "Tip: - Hold ","color": "yellow"},{"keybind":"key.sneak"},{"translate":" to sneak around sculk sensors and avoid being detected"}]

execute if score tempScore refresh_randomizer_output matches 52 run tellraw @a [{"translate": "Tip: - Wool can cancel out vibrations, placing it or walking over it wont be detected by nearby Sculk Sensors ","color": "yellow"}]






execute if score tempScore refresh_randomizer_output matches 53 run tellraw @a [{"translate": "Tip: - End portal frames have a 10% chance of generating already filled with an Eye of Ender. ","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 54 run tellraw @a [{"translate": "Tip: - Sculk shriekers wont shriek when broken, though their breaking vibration can be delivered to a nearby Sculk Sensor. ","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 55 run tellraw @a [{"translate": "Tip: - Challenge advancements when completed can earn you some experience points","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 56 run tellraw @a [{"translate": "Tip: - Coal stops generating below y0 in the deepslate layer of the world","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 57 run tellraw @a [{"translate": "Tip: - Mobs can only spawn on blocks with a light level of 0","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 58 run tellraw @a [{"translate": "Tip: - Blazes take damage from snowballs","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 59 run tellraw @a [{"translate": "Tip: - You can use a water bucket and place it below yourself to stop levitating from a Shulker attack.","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 60 run tellraw @a [{"translate": "Tip: - An Efficiency enchanted hoe can be used to quickly remove leaves from a tree","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 61 run tellraw @a [{"translate": "Tip: - Cactus destroys any item that touches it","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 62 run tellraw @a [{"translate": "Tip: - You can sleep during thunderstorms even if its daytime","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 63 run tellraw @a [{"translate": "Tip: - Carpet can be placed on a fence allowing players to jump on it but not mobs","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 64 run tellraw @a [{"translate": "Tip: - Splash water bottles extinguish fire","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 65 run tellraw @a [{"translate": "Tip: - Along with magma blocks and soul sand, you can use doors and torches to regain air underwater","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 66 run tellraw @a [{"translate": "Tip: - If you wear a carved pumpkin on your head, endermen wont attack you","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 67 run tellraw @a [{"translate": "Tip: - Eyes of Ender have a 20% chance of shattering after being thrown","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 68 run tellraw @a [{"translate": "Tip: - You can ride inside a boat and fall any height without taking damage","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 69 run tellraw @a [{"translate": "Tip: - Mobs won't despawn if they're inside a boat","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 70 run tellraw @a [{"translate": "Tip: - Netherite tools and armor can't burn in lava","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 71 run tellraw @a [{"translate": "Tip: - Frogs love to eat slime, but if you mistakenly feed them a magma cube, they'll toss out a neat froglight block","color": "yellow"}]

execute if score tempScore refresh_randomizer_output matches 72 run tellraw @a [{"translate": "Tip: - Beacon blocks right next to each other can share their pyramid base blocks","color": "yellow"}]


scoreboard players reset tempScore refresh_randomizer_output
kill @e[distance=..0.01,type=item,nbt={Item:{tag:{RefreshRandomizerItem:1}}}]