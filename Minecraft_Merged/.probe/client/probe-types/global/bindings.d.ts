import {$Painter, $Painter$Type} from "packages/dev/latvian/mods/kubejs/client/painter/$Painter"
import {$NBTIOWrapper, $NBTIOWrapper$Type} from "packages/dev/latvian/mods/kubejs/util/$NBTIOWrapper"
import {$FluidAmounts, $FluidAmounts$Type} from "packages/dev/latvian/mods/kubejs/util/$FluidAmounts"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$KMath, $KMath$Type} from "packages/dev/latvian/mods/kubejs/bindings/$KMath"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$ColorWrapper, $ColorWrapper$Type} from "packages/dev/latvian/mods/rhino/mod/wrapper/$ColorWrapper"
import {$PlatformWrapper, $PlatformWrapper$Type} from "packages/dev/latvian/mods/kubejs/script/$PlatformWrapper"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$NBTUtils, $NBTUtils$Type} from "packages/dev/latvian/mods/rhino/mod/util/$NBTUtils"
import {$UtilsWrapper, $UtilsWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$UtilsWrapper"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IngredientForgeHelper, $IngredientForgeHelper$Type} from "packages/dev/latvian/mods/kubejs/platform/forge/$IngredientForgeHelper"
import {$FluidWrapper, $FluidWrapper$Type} from "packages/dev/latvian/mods/kubejs/fluid/$FluidWrapper"
import {$InputItem, $InputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$InputItem"
import {$NotificationBuilder, $NotificationBuilder$Type} from "packages/dev/latvian/mods/kubejs/util/$NotificationBuilder"
import {$Blocks, $Blocks$Type} from "packages/net/minecraft/world/level/block/$Blocks"
import {$BlockWrapper, $BlockWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$BlockWrapper"
import {$BlockStateProperties, $BlockStateProperties$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockStateProperties"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$OutputItem, $OutputItem$Type} from "packages/dev/latvian/mods/kubejs/item/$OutputItem"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$UUIDWrapper, $UUIDWrapper$Type} from "packages/dev/latvian/mods/rhino/mod/wrapper/$UUIDWrapper"
import {$AABBWrapper, $AABBWrapper$Type} from "packages/dev/latvian/mods/rhino/mod/wrapper/$AABBWrapper"
import {$BlockStatePredicate, $BlockStatePredicate$Type} from "packages/dev/latvian/mods/kubejs/block/state/$BlockStatePredicate"
import {$Items, $Items$Type} from "packages/net/minecraft/world/item/$Items"
import {$TextWrapper, $TextWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$TextWrapper"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$Stats, $Stats$Type} from "packages/net/minecraft/stats/$Stats"
import {$IngredientWrapper, $IngredientWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$IngredientWrapper"
import {$Types, $Types$Type} from "packages/moe/wolfgirl/probejs/lang/typescript/code/type/$Types"
import {$Duration, $Duration$Type} from "packages/java/time/$Duration"
import {$ConsoleJS, $ConsoleJS$Type} from "packages/dev/latvian/mods/kubejs/util/$ConsoleJS"
import {$Math, $Math$Type} from "packages/java/lang/$Math"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$JavaWrapper, $JavaWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$JavaWrapper"
import {$ItemWrapper, $ItemWrapper$Type} from "packages/dev/latvian/mods/kubejs/bindings/$ItemWrapper"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$JsonIO, $JsonIO$Type} from "packages/dev/latvian/mods/kubejs/util/$JsonIO"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$RotationAxis, $RotationAxis$Type} from "packages/dev/latvian/mods/kubejs/util/$RotationAxis"
import {$DirectionWrapper, $DirectionWrapper$Type} from "packages/dev/latvian/mods/rhino/mod/wrapper/$DirectionWrapper"

declare global {
const JavaMath: typeof $Math
const Platform: typeof $PlatformWrapper
const HOUR: double
const global: $HashMap<(any), (any)>
const OutputItem: typeof $OutputItem
const IngredientHelper: $IngredientForgeHelper
const RotationAxis: typeof $RotationAxis
const Vec4f: typeof $Vector4f
const Notification: typeof $NotificationBuilder
const Matrix3f: typeof $Matrix3f
const ResourceLocation: typeof $ResourceLocation
const Painter: $Painter
const Items: typeof $Items
const MINUTE: double
const BlockPos: typeof $BlockPos
const BlockProperties: typeof $BlockStateProperties
const Component: typeof $TextWrapper
const Client: $Minecraft
const SoundType: typeof $SoundType
const console: $ConsoleJS
const Java: $JavaWrapper
const JsonIO: typeof $JsonIO
const Vec3i: typeof $Vec3i
const Blocks: typeof $Blocks
const DamageSource: typeof $DamageSource
const Fluid: typeof $FluidWrapper
const Quaternionf: typeof $Quaternionf
const Duration: typeof $Duration
const Text: typeof $TextWrapper
const Vec3f: typeof $Vector3f
const Vec3d: typeof $Vec3
const Matrix4f: typeof $Matrix4f
const KMath: typeof $KMath
const InputItem: typeof $InputItem
const Stats: typeof $Stats
const Block: typeof $BlockWrapper
const SECOND: double
export import NBT = $NBTUtils
export import Types = $Types
export import Facing = $DirectionWrapper
export import Color = $ColorWrapper
export import NBTIO = $NBTIOWrapper
export import Direction = $DirectionWrapper
export import Item = $ItemWrapper
export import Utils = $UtilsWrapper
export import Ingredient = $IngredientWrapper
export import BlockStatePredicate = $BlockStatePredicate
export import UUID = $UUIDWrapper
export import AABB = $AABBWrapper
export import FluidAmounts = $FluidAmounts
}