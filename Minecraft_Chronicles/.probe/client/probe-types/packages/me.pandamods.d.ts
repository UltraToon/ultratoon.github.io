declare module "packages/me/pandamods/fallingtrees/config/common/tree/$GenericTreeConfig$Algorithm" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GenericTreeConfig$Algorithm {
 "maxLeavesRadius": integer
 "maxLogAmount": integer
 "shouldIgnorePersistentLeaves": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericTreeConfig$Algorithm$Type = ($GenericTreeConfig$Algorithm);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericTreeConfig$Algorithm_ = $GenericTreeConfig$Algorithm$Type;
}}
declare module "packages/me/pandamods/fallingtrees/config/common/tree/$TreeConfig" {
import {$TreeConfig$Filter, $TreeConfig$Filter$Type} from "packages/me/pandamods/fallingtrees/config/common/tree/$TreeConfig$Filter"

export class $TreeConfig {
 "enabled": boolean
 "requireTool": boolean
 "allowedToolFilter": $TreeConfig$Filter

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeConfig$Type = ($TreeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeConfig_ = $TreeConfig$Type;
}}
declare module "packages/me/pandamods/fallingtrees/trees/$GenericTree" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TreeType, $TreeType$Type} from "packages/me/pandamods/fallingtrees/api/$TreeType"
import {$TreeEntity, $TreeEntity$Type} from "packages/me/pandamods/fallingtrees/entity/$TreeEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TreeData, $TreeData$Type} from "packages/me/pandamods/fallingtrees/api/$TreeData"
import {$GenericTreeConfig, $GenericTreeConfig$Type} from "packages/me/pandamods/fallingtrees/config/common/tree/$GenericTreeConfig"

export class $GenericTree implements $TreeType {

constructor()

public "getConfig"(): $GenericTreeConfig
public "isTreeStem"(blockState: $BlockState$Type): boolean
public "onTreeTick"(entity: $TreeEntity$Type): void
public "gatherTreeData"(blockPos: $BlockPos$Type, level: $Level$Type, player: $Player$Type): $TreeData
get "config"(): $GenericTreeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericTree$Type = ($GenericTree);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericTree_ = $GenericTree$Type;
}}
declare module "packages/me/pandamods/fallingtrees/config/common/tree/$VerticalTreeConfig" {
import {$TreeConfig$Filter, $TreeConfig$Filter$Type} from "packages/me/pandamods/fallingtrees/config/common/tree/$TreeConfig$Filter"
import {$TreeConfig, $TreeConfig$Type} from "packages/me/pandamods/fallingtrees/config/common/tree/$TreeConfig"

export class $VerticalTreeConfig extends $TreeConfig {
 "filter": $TreeConfig$Filter
 "enabled": boolean
 "requireTool": boolean
 "allowedToolFilter": $TreeConfig$Filter

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalTreeConfig$Type = ($VerticalTreeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VerticalTreeConfig_ = $VerticalTreeConfig$Type;
}}
declare module "packages/me/pandamods/fallingtrees/api/$TreeData$AwardedStat" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Stat, $Stat$Type} from "packages/net/minecraft/stats/$Stat"

export class $TreeData$AwardedStat extends $Record {

constructor(stat: $Stat$Type<(any)>, amount: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "amount"(): integer
public "stat"(): $Stat<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeData$AwardedStat$Type = ($TreeData$AwardedStat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeData$AwardedStat_ = $TreeData$AwardedStat$Type;
}}
declare module "packages/me/pandamods/fallingtrees/trees/$ChorusTree" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TreeType, $TreeType$Type} from "packages/me/pandamods/fallingtrees/api/$TreeType"
import {$TreeEntity, $TreeEntity$Type} from "packages/me/pandamods/fallingtrees/entity/$TreeEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TreeConfig, $TreeConfig$Type} from "packages/me/pandamods/fallingtrees/config/common/tree/$TreeConfig"
import {$TreeData, $TreeData$Type} from "packages/me/pandamods/fallingtrees/api/$TreeData"

export class $ChorusTree implements $TreeType {

constructor()

public "getConfig"(): $TreeConfig
public "isTreeStem"(blockState: $BlockState$Type): boolean
public "gatherTreeData"(blockPos: $BlockPos$Type, level: $Level$Type, player: $Player$Type): $TreeData
public "onTreeTick"(entity: $TreeEntity$Type): void
get "config"(): $TreeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChorusTree$Type = ($ChorusTree);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChorusTree_ = $ChorusTree$Type;
}}
declare module "packages/me/pandamods/fallingtrees/trees/mushroom/$RedMushroomTree" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TreeType, $TreeType$Type} from "packages/me/pandamods/fallingtrees/api/$TreeType"
import {$TreeEntity, $TreeEntity$Type} from "packages/me/pandamods/fallingtrees/entity/$TreeEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TreeConfig, $TreeConfig$Type} from "packages/me/pandamods/fallingtrees/config/common/tree/$TreeConfig"
import {$TreeData, $TreeData$Type} from "packages/me/pandamods/fallingtrees/api/$TreeData"

export class $RedMushroomTree implements $TreeType {

constructor()

public "getConfig"(): $TreeConfig
public "isTreeStem"(blockState: $BlockState$Type): boolean
public "gatherTreeData"(blockPos: $BlockPos$Type, level: $Level$Type, player: $Player$Type): $TreeData
public "onTreeTick"(entity: $TreeEntity$Type): void
get "config"(): $TreeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedMushroomTree$Type = ($RedMushroomTree);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedMushroomTree_ = $RedMushroomTree$Type;
}}
declare module "packages/me/pandamods/fallingtrees/trees/mushroom/$BrownMushroomTree" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TreeType, $TreeType$Type} from "packages/me/pandamods/fallingtrees/api/$TreeType"
import {$TreeEntity, $TreeEntity$Type} from "packages/me/pandamods/fallingtrees/entity/$TreeEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TreeConfig, $TreeConfig$Type} from "packages/me/pandamods/fallingtrees/config/common/tree/$TreeConfig"
import {$TreeData, $TreeData$Type} from "packages/me/pandamods/fallingtrees/api/$TreeData"

export class $BrownMushroomTree implements $TreeType {

constructor()

public "getConfig"(): $TreeConfig
public "isTreeStem"(blockState: $BlockState$Type): boolean
public "gatherTreeData"(blockPos: $BlockPos$Type, level: $Level$Type, player: $Player$Type): $TreeData
public "onTreeTick"(entity: $TreeEntity$Type): void
get "config"(): $TreeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrownMushroomTree$Type = ($BrownMushroomTree);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrownMushroomTree_ = $BrownMushroomTree$Type;
}}
declare module "packages/me/pandamods/fallingtrees/config/common/tree/$GenericTreeConfig" {
import {$GenericTreeConfig$Algorithm, $GenericTreeConfig$Algorithm$Type} from "packages/me/pandamods/fallingtrees/config/common/tree/$GenericTreeConfig$Algorithm"
import {$TreeConfig$Filter, $TreeConfig$Filter$Type} from "packages/me/pandamods/fallingtrees/config/common/tree/$TreeConfig$Filter"
import {$TreeConfig, $TreeConfig$Type} from "packages/me/pandamods/fallingtrees/config/common/tree/$TreeConfig"

export class $GenericTreeConfig extends $TreeConfig {
 "algorithm": $GenericTreeConfig$Algorithm
 "logFilter": $TreeConfig$Filter
 "leavesFilter": $TreeConfig$Filter
 "enabled": boolean
 "requireTool": boolean
 "allowedToolFilter": $TreeConfig$Filter

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericTreeConfig$Type = ($GenericTreeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericTreeConfig_ = $GenericTreeConfig$Type;
}}
declare module "packages/me/pandamods/fallingtrees/trees/mushroom/$MushroomTree" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RedMushroomTree, $RedMushroomTree$Type} from "packages/me/pandamods/fallingtrees/trees/mushroom/$RedMushroomTree"
import {$TreeType, $TreeType$Type} from "packages/me/pandamods/fallingtrees/api/$TreeType"
import {$TreeEntity, $TreeEntity$Type} from "packages/me/pandamods/fallingtrees/entity/$TreeEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TreeData, $TreeData$Type} from "packages/me/pandamods/fallingtrees/api/$TreeData"
import {$BrownMushroomTree, $BrownMushroomTree$Type} from "packages/me/pandamods/fallingtrees/trees/mushroom/$BrownMushroomTree"

export class $MushroomTree implements $TreeType {
static readonly "RED_MUSHROOM_TREE": $RedMushroomTree
static readonly "BROWN_MUSHROOM_TREE": $BrownMushroomTree

constructor()

public "isTreeStem"(blockState: $BlockState$Type): boolean
public "gatherTreeData"(blockPos: $BlockPos$Type, level: $Level$Type, player: $Player$Type): $TreeData
public "onTreeTick"(entity: $TreeEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MushroomTree$Type = ($MushroomTree);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MushroomTree_ = $MushroomTree$Type;
}}
declare module "packages/me/pandamods/fallingtrees/api/$TreeData$Builder" {
import {$TreeData$MiningSpeedModifier, $TreeData$MiningSpeedModifier$Type} from "packages/me/pandamods/fallingtrees/api/$TreeData$MiningSpeedModifier"
import {$Stat, $Stat$Type} from "packages/net/minecraft/stats/$Stat"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TreeData, $TreeData$Type} from "packages/me/pandamods/fallingtrees/api/$TreeData"
import {$TreeData$FoodExhaustionModifier, $TreeData$FoodExhaustionModifier$Type} from "packages/me/pandamods/fallingtrees/api/$TreeData$FoodExhaustionModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TreeData$Builder {


public "build"(): $TreeData
public "addAwardedStatsMap"(stats: $Map$Type<($Stat$Type<(any)>), (integer)>): $TreeData$Builder
public "addDrops"(drops: $Collection$Type<($ItemStack$Type)>): $TreeData$Builder
public "addDrops"(drop: $ItemStack$Type, ...otherDrops: ($ItemStack$Type)[]): $TreeData$Builder
public "addBlocks"(blockPos: $BlockPos$Type, ...otherBlocks: ($BlockPos$Type)[]): $TreeData$Builder
public "addBlocks"(blocks: $Collection$Type<($BlockPos$Type)>): $TreeData$Builder
public "addAwardedStats"<T>(stats: $Collection$Type<($Stat$Type<(T)>)>): $TreeData$Builder
public "setToolDamage"(toolDamage: integer): $TreeData$Builder
public "addBlock"(blockPos: $BlockPos$Type): $TreeData$Builder
public "addAwardedStat"(stat: $Stat$Type<(any)>): $TreeData$Builder
public "addAwardedStat"(stat: $Stat$Type<(any)>, amount: integer): $TreeData$Builder
public "addDrop"(drop: $ItemStack$Type): $TreeData$Builder
public "setFoodExhaustionModifier"(foodExhaustionModifier: $TreeData$FoodExhaustionModifier$Type): $TreeData$Builder
public "setMiningSpeedModifier"(miningSpeedModifier: $TreeData$MiningSpeedModifier$Type): $TreeData$Builder
set "toolDamage"(value: integer)
set "foodExhaustionModifier"(value: $TreeData$FoodExhaustionModifier$Type)
set "miningSpeedModifier"(value: $TreeData$MiningSpeedModifier$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeData$Builder$Type = ($TreeData$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeData$Builder_ = $TreeData$Builder$Type;
}}
declare module "packages/me/pandamods/fallingtrees/trees/$VerticalTree" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TreeType, $TreeType$Type} from "packages/me/pandamods/fallingtrees/api/$TreeType"
import {$TreeEntity, $TreeEntity$Type} from "packages/me/pandamods/fallingtrees/entity/$TreeEntity"
import {$VerticalTreeConfig, $VerticalTreeConfig$Type} from "packages/me/pandamods/fallingtrees/config/common/tree/$VerticalTreeConfig"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TreeData, $TreeData$Type} from "packages/me/pandamods/fallingtrees/api/$TreeData"

export class $VerticalTree implements $TreeType {

constructor()

public "getConfig"(): $VerticalTreeConfig
public "isTreeStem"(blockState: $BlockState$Type): boolean
public "gatherTreeData"(blockPos: $BlockPos$Type, level: $Level$Type, player: $Player$Type): $TreeData
public "onTreeTick"(entity: $TreeEntity$Type): void
get "config"(): $VerticalTreeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalTree$Type = ($VerticalTree);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VerticalTree_ = $VerticalTree$Type;
}}
declare module "packages/me/pandamods/fallingtrees/api/$TreeData" {
import {$TreeData$MiningSpeedModifier, $TreeData$MiningSpeedModifier$Type} from "packages/me/pandamods/fallingtrees/api/$TreeData$MiningSpeedModifier"
import {$TreeData$AwardedStat, $TreeData$AwardedStat$Type} from "packages/me/pandamods/fallingtrees/api/$TreeData$AwardedStat"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TreeData$Builder, $TreeData$Builder$Type} from "packages/me/pandamods/fallingtrees/api/$TreeData$Builder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TreeData$FoodExhaustionModifier, $TreeData$FoodExhaustionModifier$Type} from "packages/me/pandamods/fallingtrees/api/$TreeData$FoodExhaustionModifier"

export class $TreeData extends $Record {

constructor(blocks: $List$Type<($BlockPos$Type)>, drops: $List$Type<($ItemStack$Type)>, awardedStats: $List$Type<($TreeData$AwardedStat$Type)>, toolDamage: integer, miningSpeedModifier: $TreeData$MiningSpeedModifier$Type, foodExhaustionModifier: $TreeData$FoodExhaustionModifier$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $TreeData$Builder
public "drops"(): $List<($ItemStack)>
public "awardedStats"(): $List<($TreeData$AwardedStat)>
public "toolDamage"(): integer
public "blocks"(): $List<($BlockPos)>
public "foodExhaustionModifier"(): $TreeData$FoodExhaustionModifier
public "miningSpeedModifier"(): $TreeData$MiningSpeedModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeData$Type = ($TreeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeData_ = $TreeData$Type;
}}
declare module "packages/me/pandamods/fallingtrees/entity/$TreeEntity" {
import {$TreeType, $TreeType$Type} from "packages/me/pandamods/fallingtrees/api/$TreeType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TreeEntity extends $Entity {
static readonly "BLOCKS": $EntityDataAccessor<($Map<($BlockPos), ($BlockState)>)>
static readonly "DROPS": $EntityDataAccessor<($List<($ItemStack)>)>
static readonly "ORIGIN_POS": $EntityDataAccessor<($BlockPos)>
static readonly "FALL_DIRECTION": $EntityDataAccessor<($Direction)>
static readonly "TREE_TYPE_LOCATION": $EntityDataAccessor<(string)>
 "owner": $Entity
 "treeType": $TreeType
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

constructor(entityType: $EntityType$Type<(any)>, level: $Level$Type)

public "onSyncedDataUpdated"(dataAccessor: $EntityDataAccessor$Type<(any)>): void
public "tick"(): void
public "getLifetime"(partialTick: float): float
public "getOriginPos"(): $BlockPos
public "setData"(owner: $Entity$Type, tree: $TreeType$Type, originBlock: $BlockPos$Type, blockPosList: $List$Type<($BlockPos$Type)>, drops: $List$Type<($ItemStack$Type)>): void
public "getBlocks"(): $Map<($BlockPos), ($BlockState)>
public "getTreeType"(): $TreeType
public "getMaxLifeTimeTick"(): integer
public "getHorizontalFacing"(): $Direction
get "originPos"(): $BlockPos
get "blocks"(): $Map<($BlockPos), ($BlockState)>
get "treeType"(): $TreeType
get "maxLifeTimeTick"(): integer
get "horizontalFacing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeEntity$Type = ($TreeEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeEntity_ = $TreeEntity$Type;
}}
declare module "packages/me/pandamods/fallingtrees/api/$TreeData$FoodExhaustionModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TreeData$FoodExhaustionModifier {

 "getExhaustion"(arg0: float): float

(arg0: float): float
}

export namespace $TreeData$FoodExhaustionModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeData$FoodExhaustionModifier$Type = ($TreeData$FoodExhaustionModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeData$FoodExhaustionModifier_ = $TreeData$FoodExhaustionModifier$Type;
}}
declare module "packages/me/pandamods/fallingtrees/api/$TreeType" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TreeEntity, $TreeEntity$Type} from "packages/me/pandamods/fallingtrees/entity/$TreeEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TreeData, $TreeData$Type} from "packages/me/pandamods/fallingtrees/api/$TreeData"

export interface $TreeType {

 "isTreeStem"(arg0: $BlockState$Type): boolean
 "onTreeTick"(entity: $TreeEntity$Type): void
 "gatherTreeData"(arg0: $BlockPos$Type, arg1: $Level$Type, arg2: $Player$Type): $TreeData
}

export namespace $TreeType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeType$Type = ($TreeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeType_ = $TreeType$Type;
}}
declare module "packages/me/pandamods/fallingtrees/api/$TreeData$MiningSpeedModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TreeData$MiningSpeedModifier {

 "getMiningSpeed"(arg0: float): float

(arg0: float): float
}

export namespace $TreeData$MiningSpeedModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeData$MiningSpeedModifier$Type = ($TreeData$MiningSpeedModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeData$MiningSpeedModifier_ = $TreeData$MiningSpeedModifier$Type;
}}
declare module "packages/me/pandamods/fallingtrees/config/common/tree/$TreeConfig$Filter" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $TreeConfig$Filter {
 "whitelistedTags": $List<(string)>
 "whitelist": $List<(string)>
 "blacklist": $List<(string)>

constructor(whitelistedBlockTags: $List$Type<(string)>, whitelistedBlocks: $List$Type<(string)>, blacklistedBlocks: $List$Type<(string)>)

public "isValid"(itemStack: $ItemStack$Type): boolean
public "isValid"(blockState: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeConfig$Filter$Type = ($TreeConfig$Filter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeConfig$Filter_ = $TreeConfig$Filter$Type;
}}
