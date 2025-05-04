declare module "packages/com/faboslav/friendsandfoes/common/entity/effect/$ReachStatusEffect" {
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ReachStatusEffect extends $MobEffect {

constructor(statusEffectCategory: $MobEffectCategory$Type, color: integer)

public "isDurationEffectTick"(duration: integer, amplifier: integer): boolean
public static "getReachAttribute"(): $Attribute
get "reachAttribute"(): $Attribute
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReachStatusEffect$Type = ($ReachStatusEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReachStatusEffect_ = $ReachStatusEffect$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/events/base/$EventHandler" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"

export class $EventHandler<T> {

constructor()

public "invoke"(event: T): void
public "removeListener"(listener: $Consumer$Type<(T)>): void
public "addListener"(listener: $Consumer$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventHandler$Type<T> = ($EventHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventHandler_<T> = $EventHandler$Type<(T)>;
}}
declare module "packages/com/faboslav/friendsandfoes/common/mixin/$BundleItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BundleItemAccessor {

}

export namespace $BundleItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BundleItemAccessor$Type = ($BundleItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BundleItemAccessor_ = $BundleItemAccessor$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/mixin/$LimbAnimatorAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LimbAnimatorAccessor {

 "getPresSpeed"(): float
 "setPrevSpeed"(arg0: float): void
 "setPos"(arg0: float): void
}

export namespace $LimbAnimatorAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LimbAnimatorAccessor$Type = ($LimbAnimatorAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LimbAnimatorAccessor_ = $LimbAnimatorAccessor$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/block/$OxidizableLightningRodBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WeatheringCopper, $WeatheringCopper$Type} from "packages/net/minecraft/world/level/block/$WeatheringCopper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$WeatheringCopper$WeatherState, $WeatheringCopper$WeatherState$Type} from "packages/net/minecraft/world/level/block/$WeatheringCopper$WeatherState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$LightningRodBlock, $LightningRodBlock$Type} from "packages/net/minecraft/world/level/block/$LightningRodBlock"

export class $OxidizableLightningRodBlock extends $LightningRodBlock implements $WeatheringCopper {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "RANGE": integer
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(oxidationLevel: $WeatheringCopper$WeatherState$Type, settings: $BlockBehaviour$Properties$Type)

public "randomTick"(state: $BlockState$Type, world: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDegradationLevel"(): $WeatheringCopper$WeatherState
public "isRandomlyTicking"(state: $BlockState$Type): boolean
public static "getPrevious"(arg0: $BlockState$Type): $Optional<($BlockState)>
public static "getNext"(arg0: $Block$Type): $Optional<($Block)>
public static "getFirst"(arg0: $Block$Type): $Block
public static "getPrevious"(arg0: $Block$Type): $Optional<($Block)>
public "getNext"(arg0: $BlockState$Type): $Optional<($BlockState)>
public static "getFirst"(arg0: $BlockState$Type): $BlockState
get "degradationLevel"(): $WeatheringCopper$WeatherState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OxidizableLightningRodBlock$Type = ($OxidizableLightningRodBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OxidizableLightningRodBlock_ = $OxidizableLightningRodBlock$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/mixin/$StructurePoolAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$StructurePoolElement, $StructurePoolElement$Type} from "packages/net/minecraft/world/level/levelgen/structure/pools/$StructurePoolElement"
import {$ObjectArrayList, $ObjectArrayList$Type} from "packages/it/unimi/dsi/fastutil/objects/$ObjectArrayList"

export interface $StructurePoolAccessor {

 "getElements"(): $ObjectArrayList<($StructurePoolElement)>
 "setElements"(arg0: $ObjectArrayList$Type<($StructurePoolElement$Type)>): void
 "getElementCounts"(): $List<($Pair<($StructurePoolElement), (integer)>)>
 "setElementCounts"(arg0: $List$Type<($Pair$Type<($StructurePoolElement$Type), (integer)>)>): void
}

export namespace $StructurePoolAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePoolAccessor$Type = ($StructurePoolAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructurePoolAccessor_ = $StructurePoolAccessor$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/entity/$WildfireEntity" {
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$MobSpawnType, $MobSpawnType$Type} from "packages/net/minecraft/world/entity/$MobSpawnType"
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AttributeSupplier$Builder, $AttributeSupplier$Builder$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeSupplier$Builder"
import {$Brain, $Brain$Type} from "packages/net/minecraft/world/entity/ai/$Brain"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SpawnGroupData, $SpawnGroupData$Type} from "packages/net/minecraft/world/entity/$SpawnGroupData"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Monster, $Monster$Type} from "packages/net/minecraft/world/entity/monster/$Monster"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$ServerLevelAccessor, $ServerLevelAccessor$Type} from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DifficultyInstance, $DifficultyInstance$Type} from "packages/net/minecraft/world/$DifficultyInstance"

export class $WildfireEntity extends $Monster {
static readonly "GENERIC_ATTACK_DAMAGE": float
static readonly "GENERIC_FOLLOW_RANGE": float
static readonly "DEFAULT_ACTIVE_SHIELDS_COUNT": integer
static readonly "DEFAULT_TICKS_UNTIL_SHIELD_REGENERATION": integer
static readonly "DEFAULT_SUMMONED_BLAZES_COUNT": integer
static readonly "MAXIMUM_SUMMONED_BLAZES_COUNT": integer
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "MAX_PICKUP_LOOT_CHANCE": float
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "LEASH_TAG": string
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
 "ambientSoundTime": integer
 "navigation": $PathNavigation
readonly "goalSelector": $GoalSelector
readonly "targetSelector": $GoalSelector
 "leashInfoTag": $CompoundTag
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "dead": boolean
 "lastHurt": float
 "jumping": boolean
 "xxa": float
 "yya": float
 "zza": float
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "xo": double
 "yo": double
 "zo": double
 "yRot": float
 "yRotO": float
 "xRotO": float
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "nextStep": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
 "age": integer
 "wasTouchingWater": boolean
 "invulnerableTime": integer
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>

constructor(entityType: $EntityType$Type<(any)>, world: $Level$Type)

public "hasActiveShields"(): boolean
public "regenerateShield"(): void
public "getShockwaveSound"(): $SoundEvent
public "breakShield"(): void
public "playShootSound"(): void
public "playShockwaveSound"(): void
public "areBlazesSummoned"(): boolean
public "getShootSound"(): $SoundEvent
public "isSensitiveToWater"(): boolean
public "getActiveShieldsCount"(): integer
public "playSummonBlazeSound"(): void
public "setActiveShieldsCount"(activeShields: integer): void
public "getTicksUntilShieldRegeneration"(): integer
public "playShieldBreakSound"(): void
public "getSummonBlazeSound"(): $SoundEvent
public "setTicksUntilShieldRegeneration"(ticksUntilShieldRegeneration: integer): void
public "resetTicksUntilShieldRegeneration"(): void
public "getShieldBreakSound"(): $SoundEvent
public "tick"(): void
public "aiStep"(): void
public "readAdditionalSaveData"(nbt: $CompoundTag$Type): void
public "addAdditionalSaveData"(nbt: $CompoundTag$Type): void
public "attack"(source: $DamageSource$Type, amount: float): boolean
public "causeFallDamage"(fallDistance: float, damageMultiplier: float, damageSource: $DamageSource$Type): boolean
public "getSummonedBlazesCount"(): integer
public "setSummonedBlazesCount"(summonedBlazesCount: integer): void
public "getLightLevelDependentMagicValue"(): float
public "finalizeSpawn"(world: $ServerLevelAccessor$Type, difficulty: $DifficultyInstance$Type, spawnReason: $MobSpawnType$Type, entityData: $SpawnGroupData$Type, entityNbt: $CompoundTag$Type): $SpawnGroupData
public "getBrain"(): $Brain<($WildfireEntity)>
public "isOnFire"(): boolean
public static "createWildfireAttributes"(): $AttributeSupplier$Builder
public "lithiumOnEquipmentChanged"(): void
public static "getAlpha"(le: $LivingEntity$Type, partialTicks: float): float
public static "tickEntity"(entity: $LivingEntity$Type): void
public "getCachedFeetBlockState"(): $BlockState
get "shockwaveSound"(): $SoundEvent
get "shootSound"(): $SoundEvent
get "sensitiveToWater"(): boolean
get "activeShieldsCount"(): integer
set "activeShieldsCount"(value: integer)
get "ticksUntilShieldRegeneration"(): integer
get "summonBlazeSound"(): $SoundEvent
set "ticksUntilShieldRegeneration"(value: integer)
get "shieldBreakSound"(): $SoundEvent
get "summonedBlazesCount"(): integer
set "summonedBlazesCount"(value: integer)
get "lightLevelDependentMagicValue"(): float
get "brain"(): $Brain<($WildfireEntity)>
get "onFire"(): boolean
get "cachedFeetBlockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WildfireEntity$Type = ($WildfireEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WildfireEntity_ = $WildfireEntity$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/item/$DispenserAddedSpawnEgg" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpawnEggItem, $SpawnEggItem$Type} from "packages/net/minecraft/world/item/$SpawnEggItem"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SetupEvent, $SetupEvent$Type} from "packages/com/faboslav/friendsandfoes/common/events/lifecycle/$SetupEvent"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DispenserAddedSpawnEgg extends $SpawnEggItem {
static readonly "BY_ID": $Map<($EntityType<(any)>), ($SpawnEggItem)>
 "backgroundColor": integer
 "highlightColor": integer
 "defaultType": $EntityType<(any)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(typeIn: $Supplier$Type<(any)>, primaryColorIn: integer, secondaryColorIn: integer, builder: $Item$Properties$Type)

public "getType"(nbt: $CompoundTag$Type): $EntityType<(any)>
public static "onSetup"(event: $SetupEvent$Type): void
public "requiredFeatures"(): $FeatureFlagSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserAddedSpawnEgg$Type = ($DispenserAddedSpawnEgg);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DispenserAddedSpawnEgg_ = $DispenserAddedSpawnEgg$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/mixin/$ModelPartAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelPart$Cube, $ModelPart$Cube$Type} from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModelPartAccessor {

 "getChildren"(): $Map<(string), ($ModelPart)>
 "getCuboids"(): $List<($ModelPart$Cube)>
}

export namespace $ModelPartAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartAccessor$Type = ($ModelPartAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartAccessor_ = $ModelPartAccessor$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/events/lifecycle/$SetupEvent" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$EventHandler, $EventHandler$Type} from "packages/com/faboslav/friendsandfoes/common/events/base/$EventHandler"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $SetupEvent extends $Record {
static readonly "EVENT": $EventHandler<($SetupEvent)>

constructor(enqueue: $Consumer$Type<($Runnable$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "enqueue"(): $Consumer<($Runnable)>
public "enqueueWork"(runnable: $Runnable$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetupEvent$Type = ($SetupEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetupEvent_ = $SetupEvent$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/forge/mixin/$FireBlockAccessor" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $FireBlockAccessor {

 "invokeRegisterFlammableBlock"(arg0: $Block$Type, arg1: integer, arg2: integer): void

(arg0: $Block$Type, arg1: integer, arg2: integer): void
}

export namespace $FireBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireBlockAccessor$Type = ($FireBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireBlockAccessor_ = $FireBlockAccessor$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/block/$FriendsAndFoesOxidizable" {
import {$WeatheringCopper, $WeatheringCopper$Type} from "packages/net/minecraft/world/level/block/$WeatheringCopper"
import {$BiMap, $BiMap$Type} from "packages/com/google/common/collect/$BiMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$WeatheringCopper$WeatherState, $WeatheringCopper$WeatherState$Type} from "packages/net/minecraft/world/level/block/$WeatheringCopper$WeatherState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $FriendsAndFoesOxidizable extends $WeatheringCopper {

 "getNext"(state: $BlockState$Type): $Optional<($BlockState)>
 "getChanceModifier"(): float
 "onRandomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
 "getAge"(): $WeatheringCopper$WeatherState
 "applyChangeOverTime"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void

(block: $Block$Type): $Optional<($Block)>
}

export namespace $FriendsAndFoesOxidizable {
const OXIDATION_LEVEL_INCREASES: $Supplier<($BiMap<($Block), ($Block)>)>
const OXIDATION_LEVEL_DECREASES: $Supplier<($BiMap<($Block), ($Block)>)>
function getIncreasedOxidationBlock(block: $Block$Type): $Optional<($Block)>
function getDecreasedOxidationState(state: $BlockState$Type): $Optional<($BlockState)>
function getUnaffectedOxidationState(state: $BlockState$Type): $BlockState
function getUnaffectedOxidationBlock(block: $Block$Type): $Block
function getDecreasedOxidationBlock(block: $Block$Type): $Optional<($Block)>
function getPrevious(arg0: $BlockState$Type): $Optional<($BlockState)>
function getNext(arg0: $Block$Type): $Optional<($Block)>
function getFirst(arg0: $Block$Type): $Block
function getPrevious(arg0: $Block$Type): $Optional<($Block)>
function getFirst(arg0: $BlockState$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FriendsAndFoesOxidizable$Type = ($FriendsAndFoesOxidizable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FriendsAndFoesOxidizable_ = $FriendsAndFoesOxidizable$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/block/$OxidizableButtonBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$FriendsAndFoesOxidizable, $FriendsAndFoesOxidizable$Type} from "packages/com/faboslav/friendsandfoes/common/block/$FriendsAndFoesOxidizable"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CopperButtonBlock, $CopperButtonBlock$Type} from "packages/com/faboslav/friendsandfoes/common/block/$CopperButtonBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$WeatheringCopper$WeatherState, $WeatheringCopper$WeatherState$Type} from "packages/net/minecraft/world/level/block/$WeatheringCopper$WeatherState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $OxidizableButtonBlock extends $CopperButtonBlock implements $FriendsAndFoesOxidizable {
static readonly "POWERED": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(oxidationLevel: $WeatheringCopper$WeatherState$Type, settings: $BlockBehaviour$Properties$Type, pressTicks: integer)

public "randomTick"(state: $BlockState$Type, world: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDegradationLevel"(): $WeatheringCopper$WeatherState
public "isRandomlyTicking"(state: $BlockState$Type): boolean
public static "getIncreasedOxidationBlock"(block: $Block$Type): $Optional<($Block)>
public static "getDecreasedOxidationState"(state: $BlockState$Type): $Optional<($BlockState)>
public static "getUnaffectedOxidationState"(state: $BlockState$Type): $BlockState
public static "getUnaffectedOxidationBlock"(block: $Block$Type): $Block
public static "getDecreasedOxidationBlock"(block: $Block$Type): $Optional<($Block)>
public "getNext"(state: $BlockState$Type): $Optional<($BlockState)>
public "getChanceModifier"(): float
public static "getPrevious"(arg0: $BlockState$Type): $Optional<($BlockState)>
public static "getNext"(arg0: $Block$Type): $Optional<($Block)>
public static "getFirst"(arg0: $Block$Type): $Block
public static "getPrevious"(arg0: $Block$Type): $Optional<($Block)>
public static "getFirst"(arg0: $BlockState$Type): $BlockState
public "onRandomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "applyChangeOverTime"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
get "degradationLevel"(): $WeatheringCopper$WeatherState
get "chanceModifier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OxidizableButtonBlock$Type = ($OxidizableButtonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OxidizableButtonBlock_ = $OxidizableButtonBlock$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/entity/$BlazeEntityAccess" {
import {$WildfireEntity, $WildfireEntity$Type} from "packages/com/faboslav/friendsandfoes/common/entity/$WildfireEntity"

export interface $BlazeEntityAccess {

 "friendsandfoes_getWildfire"(): $WildfireEntity
 "friendsandfoes_setWildfire"(arg0: $WildfireEntity$Type): void
}

export namespace $BlazeEntityAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazeEntityAccess$Type = ($BlazeEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazeEntityAccess_ = $BlazeEntityAccess$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/entity/$ZombieHorseEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ZombieHorseEntityAccess {

 "friendsandfoes_isTrapped"(): boolean
 "friendsandfoes_setTrapped"(arg0: boolean): void
}

export namespace $ZombieHorseEntityAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZombieHorseEntityAccess$Type = ($ZombieHorseEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZombieHorseEntityAccess_ = $ZombieHorseEntityAccess$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/mixin/$BeeEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BeeEntityAccessor {

 "invokeSetHasNectar"(arg0: boolean): void
 "getTicksUntilCanPollinate"(): integer
 "setTicksUntilCanPollinate"(arg0: integer): void
}

export namespace $BeeEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeEntityAccessor$Type = ($BeeEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeeEntityAccessor_ = $BeeEntityAccessor$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/block/$CrabEggBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CrabEggBlock extends $Block {
static readonly "HATCH": $IntegerProperty
static readonly "EGGS": $IntegerProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(settings: $BlockBehaviour$Properties$Type)

public "randomTick"(state: $BlockState$Type, world: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "getShape"(state: $BlockState$Type, world: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "stepOn"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $Entity$Type): void
public "fallOn"(world: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, fallDistance: float): void
public "canBeReplaced"(state: $BlockState$Type, context: $BlockPlaceContext$Type): boolean
public "onPlace"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, notify: boolean): void
public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "playerDestroy"(world: $Level$Type, player: $Player$Type, pos: $BlockPos$Type, state: $BlockState$Type, blockEntity: $BlockEntity$Type, stack: $ItemStack$Type): void
public static "isSuitableBelow"(world: $BlockGetter$Type, pos: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrabEggBlock$Type = ($CrabEggBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrabEggBlock_ = $CrabEggBlock$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/mixin/$SpawnEggItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpawnEggItemAccessor {

}

export namespace $SpawnEggItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnEggItemAccessor$Type = ($SpawnEggItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnEggItemAccessor_ = $SpawnEggItemAccessor$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/entity/$IllusionerEntityAccess" {
import {$Illusioner, $Illusioner$Type} from "packages/net/minecraft/world/entity/monster/$Illusioner"

export interface $IllusionerEntityAccess {

 "friendsandfoes_tryToTeleport"(arg0: integer, arg1: integer, arg2: integer): boolean
 "friendsandfoes_setIsIllusion"(arg0: boolean): void
 "friendsandfoes_spawnCloudParticles"(): void
 "friendsandfoes_setIllusioner"(arg0: $Illusioner$Type): void
 "friendsandfoes_setTicksUntilDespawn"(arg0: integer): void
}

export namespace $IllusionerEntityAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IllusionerEntityAccess$Type = ($IllusionerEntityAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IllusionerEntityAccess_ = $IllusionerEntityAccess$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/mixin/$ServerWorldAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$CustomSpawner, $CustomSpawner$Type} from "packages/net/minecraft/world/level/$CustomSpawner"

export interface $ServerWorldAccessor {

 "setSpawners"(arg0: $List$Type<($CustomSpawner$Type)>): void
 "getSpawners"(): $List<($CustomSpawner)>
}

export namespace $ServerWorldAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldAccessor$Type = ($ServerWorldAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWorldAccessor_ = $ServerWorldAccessor$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/block/$CopperButtonBlock" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ButtonBlock, $ButtonBlock$Type} from "packages/net/minecraft/world/level/block/$ButtonBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CopperButtonBlock extends $ButtonBlock {
static readonly "POWERED": $BooleanProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "hasCollision": boolean
readonly "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(settings: $BlockBehaviour$Properties$Type, pressTicks: integer)

public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getSound"(powered: boolean): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopperButtonBlock$Type = ($CopperButtonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopperButtonBlock_ = $CopperButtonBlock$Type;
}}
declare module "packages/com/faboslav/friendsandfoes/common/item/$TotemItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TotemItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "renderProperties": any

constructor(settings: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, world: $Level$Type, tooltip: $List$Type<($Component$Type)>, context: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TotemItem$Type = ($TotemItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TotemItem_ = $TotemItem$Type;
}}
