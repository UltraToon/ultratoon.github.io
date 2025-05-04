declare module "packages/traben/entity_model_features/mixin/accessor/$MinecraftClientAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecraftClientAccessor {

 "getPausePartialTick"(): float

(): float
}

export namespace $MinecraftClientAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClientAccessor$Type = ($MinecraftClientAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftClientAccessor_ = $MinecraftClientAccessor$Type;
}}
declare module "packages/traben/entity_model_features/models/parts/$EMFModelPartWithState" {
import {$Int2ObjectOpenHashMap, $Int2ObjectOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectOpenHashMap"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$ModelPartData, $ModelPartData$Type} from "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelPartData"
import {$ModelPart$Cube, $ModelPart$Cube$Type} from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"
import {$EMFModelPart, $EMFModelPart$Type} from "packages/traben/entity_model_features/models/parts/$EMFModelPart"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$EMFModelPartWithState$EMFModelState, $EMFModelPartWithState$EMFModelState$Type} from "packages/traben/entity_model_features/models/parts/$EMFModelPartWithState$EMFModelState"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelPartExtended, $ModelPartExtended$Type} from "packages/org/embeddedt/embeddium/render/entity/$ModelPartExtended"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EMFModelPartWithState extends $EMFModelPart {
readonly "allKnownStateVariants": $Int2ObjectOpenHashMap<($EMFModelPartWithState$EMFModelState)>
 "currentModelVariant": integer
 "textureOverride": $ResourceLocation
 "isSetByAnimation": boolean
static readonly "DEFAULT_SCALE": float
 "x": float
 "y": float
 "z": float
 "xRot": float
 "yRot": float
 "zRot": float
 "xScale": float
 "yScale": float
 "zScale": float
 "visible": boolean
 "skipDraw": boolean
 "cubes": $List<($ModelPart$Cube)>
 "children": $Map<(string), ($ModelPart)>

constructor(cuboids: $List$Type<($ModelPart$Cube$Type)>, children: $Map$Type<(string), ($ModelPart$Type)>)

public "render"(matrices: $PoseStack$Type, vertices: $VertexConsumer$Type, light: integer, overlay: integer, red: float, green: float, blue: float, alpha: float): void
public "setVariantStateTo"(newVariant: integer): void
public static "of"(arg0: $ModelPart$Type): $ModelPartExtended
public static "from"(arg0: $ModelPart$Type): $ModelPartData
set "variantStateTo"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModelPartWithState$Type = ($EMFModelPartWithState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMFModelPartWithState_ = $EMFModelPartWithState$Type;
}}
declare module "packages/traben/entity_model_features/mixin/accessor/$CuboidAccessor" {
import {$ModelPart$Polygon, $ModelPart$Polygon$Type} from "packages/net/minecraft/client/model/geom/$ModelPart$Polygon"

export interface $CuboidAccessor {

 "setPolygons"(arg0: ($ModelPart$Polygon$Type)[]): void
 "setMinX"(arg0: float): void
 "setMinY"(arg0: float): void
 "setMinZ"(arg0: float): void
 "setMaxZ"(arg0: float): void
 "setMaxY"(arg0: float): void
 "setMaxX"(arg0: float): void
}

export namespace $CuboidAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuboidAccessor$Type = ($CuboidAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuboidAccessor_ = $CuboidAccessor$Type;
}}
declare module "packages/traben/entity_model_features/models/parts/$EMFModelPartVanilla" {
import {$Int2ObjectOpenHashMap, $Int2ObjectOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectOpenHashMap"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$ModelPartData, $ModelPartData$Type} from "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelPartData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$EMFModelPartWithState, $EMFModelPartWithState$Type} from "packages/traben/entity_model_features/models/parts/$EMFModelPartWithState"
import {$ModelPart$Cube, $ModelPart$Cube$Type} from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$EMFModelPartWithState$EMFModelState, $EMFModelPartWithState$EMFModelState$Type} from "packages/traben/entity_model_features/models/parts/$EMFModelPartWithState$EMFModelState"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelPartExtended, $ModelPartExtended$Type} from "packages/org/embeddedt/embeddium/render/entity/$ModelPartExtended"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EMFModelPartVanilla extends $EMFModelPartWithState {
readonly "allKnownStateVariants": $Int2ObjectOpenHashMap<($EMFModelPartWithState$EMFModelState)>
 "currentModelVariant": integer
 "textureOverride": $ResourceLocation
 "isSetByAnimation": boolean
static readonly "DEFAULT_SCALE": float
 "x": float
 "y": float
 "z": float
 "xRot": float
 "yRot": float
 "zRot": float
 "xScale": float
 "yScale": float
 "zScale": float
 "visible": boolean
 "skipDraw": boolean
 "cubes": $List<($ModelPart$Cube)>
 "children": $Map<(string), ($ModelPart)>

constructor(name: string, vanillaPart: $ModelPart$Type, optifinePartNames: $Collection$Type<(string)>, allVanillaParts: $Map$Type<(string), ($EMFModelPartVanilla$Type)>)

public "toString"(): string
public "getAllEMFCustomChildren"(): ($ModelPart)[]
public "setHideInTheseStates"(variant: integer): void
public "receiveRootAnimationRunnable"(variant: integer, run: $Runnable$Type): void
public "render"(matrices: $PoseStack$Type, vertices: $VertexConsumer$Type, light: integer, overlay: integer, red: float, green: float, blue: float, alpha: float): void
public "toStringShort"(): string
public static "of"(arg0: $ModelPart$Type): $ModelPartExtended
public static "from"(arg0: $ModelPart$Type): $ModelPartData
get "allEMFCustomChildren"(): ($ModelPart)[]
set "hideInTheseStates"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModelPartVanilla$Type = ($EMFModelPartVanilla);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMFModelPartVanilla_ = $EMFModelPartVanilla$Type;
}}
declare module "packages/traben/entity_model_features/models/animation/math/variables/$EMFModelOrRenderVariable" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EMFModelPart, $EMFModelPart$Type} from "packages/traben/entity_model_features/models/parts/$EMFModelPart"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"

export class $EMFModelOrRenderVariable extends $Enum<($EMFModelOrRenderVariable)> {
static readonly "TX": $EMFModelOrRenderVariable
static readonly "TY": $EMFModelOrRenderVariable
static readonly "TZ": $EMFModelOrRenderVariable
static readonly "RX": $EMFModelOrRenderVariable
static readonly "RY": $EMFModelOrRenderVariable
static readonly "RZ": $EMFModelOrRenderVariable
static readonly "SX": $EMFModelOrRenderVariable
static readonly "SY": $EMFModelOrRenderVariable
static readonly "SZ": $EMFModelOrRenderVariable
static readonly "VISIBLE": $EMFModelOrRenderVariable
static readonly "VISIBLE_BOXES": $EMFModelOrRenderVariable
static readonly "RENDER_shadow_size": $EMFModelOrRenderVariable
static readonly "RENDER_SHADOW_OPACITY": $EMFModelOrRenderVariable
static readonly "RENDER_SHADOW_X": $EMFModelOrRenderVariable
static readonly "RENDER_SHADOW_Z": $EMFModelOrRenderVariable
static readonly "RENDER_LEASH_X": $EMFModelOrRenderVariable
static readonly "RENDER_LEASH_Y": $EMFModelOrRenderVariable
static readonly "RENDER_LEASH_Z": $EMFModelOrRenderVariable


public static "get"(id: string): $EMFModelOrRenderVariable
public static "values"(): ($EMFModelOrRenderVariable)[]
public static "valueOf"(name: string): $EMFModelOrRenderVariable
public "getValue"(arg0: $ModelPart$Type): float
public "getValue"(): float
public "setValue"(arg0: $EMFModelPart$Type, arg1: float): void
public "isBoolean"(): boolean
public "isRenderVariable"(): boolean
public static "getRenderVariable"(id: string): $EMFModelOrRenderVariable
get "value"(): float
get "boolean"(): boolean
get "renderVariable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModelOrRenderVariable$Type = (("render_shadow_z") | ("visible") | ("tx") | ("render_shadow_x") | ("render_leash_y") | ("ty") | ("sx") | ("render_leash_z") | ("tz") | ("rx") | ("sy") | ("ry") | ("sz") | ("render_leash_x") | ("rz") | ("visible_boxes") | ("render_shadow_opacity") | ("render_shadow_size")) | ($EMFModelOrRenderVariable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMFModelOrRenderVariable_ = $EMFModelOrRenderVariable$Type;
}}
declare module "packages/traben/entity_model_features/models/parts/$EMFModelPart$Animator" {
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $EMFModelPart$Animator implements $Runnable {


public "run"(): void
public "setAnimation"(animation: $Runnable$Type): void
public "hasAnimation"(): boolean
public "getAnimation"(): $Runnable
set "animation"(value: $Runnable$Type)
get "animation"(): $Runnable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModelPart$Animator$Type = ($EMFModelPart$Animator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMFModelPart$Animator_ = $EMFModelPart$Animator$Type;
}}
declare module "packages/traben/entity_model_features/models/parts/$EMFModelPartRoot" {
import {$Int2ObjectOpenHashMap, $Int2ObjectOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectOpenHashMap"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$ModelPartData, $ModelPartData$Type} from "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelPartData"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$EMFJemData, $EMFJemData$Type} from "packages/traben/entity_model_features/models/jem_objects/$EMFJemData"
import {$EMFDirectoryHandler, $EMFDirectoryHandler$Type} from "packages/traben/entity_model_features/utils/$EMFDirectoryHandler"
import {$EMFAnimation, $EMFAnimation$Type} from "packages/traben/entity_model_features/models/animation/$EMFAnimation"
import {$EMFModel_ID, $EMFModel_ID$Type} from "packages/traben/entity_model_features/models/$EMFModel_ID"
import {$ModelPart$Cube, $ModelPart$Cube$Type} from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ETFApi$ETFVariantSuffixProvider, $ETFApi$ETFVariantSuffixProvider$Type} from "packages/traben/entity_texture_features/$ETFApi$ETFVariantSuffixProvider"
import {$EMFModelPartWithState$EMFModelState, $EMFModelPartWithState$EMFModelState$Type} from "packages/traben/entity_model_features/models/parts/$EMFModelPartWithState$EMFModelState"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelPartExtended, $ModelPartExtended$Type} from "packages/org/embeddedt/embeddium/render/entity/$ModelPartExtended"
import {$EntityIntLRU, $EntityIntLRU$Type} from "packages/traben/entity_texture_features/utils/$EntityIntLRU"
import {$EMFModelPartVanilla, $EMFModelPartVanilla$Type} from "packages/traben/entity_model_features/models/parts/$EMFModelPartVanilla"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EMFModelPartRoot extends $EMFModelPartVanilla {
readonly "modelName": $EMFModel_ID
readonly "vanillaRoot": $ModelPart
readonly "entitySuffixMap": $EntityIntLRU
 "directoryContext": $EMFDirectoryHandler
 "variantTester": $ETFApi$ETFVariantSuffixProvider
 "containsCustomModel": boolean
readonly "allKnownStateVariants": $Int2ObjectOpenHashMap<($EMFModelPartWithState$EMFModelState)>
 "currentModelVariant": integer
 "textureOverride": $ResourceLocation
 "isSetByAnimation": boolean
static readonly "DEFAULT_SCALE": float
 "x": float
 "y": float
 "z": float
 "xRot": float
 "yRot": float
 "zRot": float
 "xScale": float
 "yScale": float
 "zScale": float
 "visible": boolean
 "skipDraw": boolean
 "cubes": $List<($ModelPart$Cube)>
 "children": $Map<(string), ($ModelPart)>

constructor(mobNameForFileAndMap: $EMFModel_ID$Type, directoryContext: $EMFDirectoryHandler$Type, vanillaRoot: $ModelPart$Type, optifinePartNames: $Collection$Type<(string)>, mapForCreatedParts: $Map$Type<(string), ($EMFModelPartVanilla$Type)>)

public "toString"(): string
public "checkIfShouldExpireEntity"(id: $UUID$Type): void
public "getAllVanillaPartsEMF"(): $Collection<($EMFModelPartVanilla)>
public "tryRenderVanillaFormatRoot"(matrixStack: $PoseStack$Type, vertexConsumer: $VertexConsumer$Type, light: integer, overlay: integer): void
public "getTopLevelJemTexture"(): $ResourceLocation
public "resetVanillaPartsToDefaults"(): void
public "getVanillaFormatRoot"(): $ModelPart
public "tryRenderVanillaRootNormally"(matrixStack: $PoseStack$Type, vertexConsumer: $VertexConsumer$Type, light: integer, overlay: integer): void
public "doVariantCheck"(): void
public "hasAnimation"(): boolean
public "discoverAndInitVariants"(fallbackPropertiesName: string): void
public "setVariant1ToVanilla0"(): void
public "addVariantOfJem"(jemData: $EMFJemData$Type, variant: integer): void
public "receiveAnimations"(variant: integer, animationList: $Collection$Type<($EMFAnimation$Type)>): void
public "toStringShort"(): string
public static "of"(arg0: $ModelPart$Type): $ModelPartExtended
public static "from"(arg0: $ModelPart$Type): $ModelPartData
get "allVanillaPartsEMF"(): $Collection<($EMFModelPartVanilla)>
get "topLevelJemTexture"(): $ResourceLocation
get "vanillaFormatRoot"(): $ModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModelPartRoot$Type = ($EMFModelPartRoot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMFModelPartRoot_ = $EMFModelPartRoot$Type;
}}
declare module "packages/traben/entity_model_features/models/jem_objects/$EMFPartData" {
import {$LinkedList, $LinkedList$Type} from "packages/java/util/$LinkedList"
import {$EMFBoxData, $EMFBoxData$Type} from "packages/traben/entity_model_features/models/jem_objects/$EMFBoxData"
import {$LinkedHashMap, $LinkedHashMap$Type} from "packages/java/util/$LinkedHashMap"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$EMFJemData, $EMFJemData$Type} from "packages/traben/entity_model_features/models/jem_objects/$EMFJemData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Object2ObjectOpenHashMap, $Object2ObjectOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectOpenHashMap"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EMFPartData {
 "texture": string
 "textureSize": (integer)[]
 "invertAxis": string
 "translate": (float)[]
 "rotate": (float)[]
 "mirrorTexture": string
 "boxes": ($EMFBoxData)[]
 "submodel": $EMFPartData
 "submodels": $LinkedList<($EMFPartData)>
 "baseId": string
 "model": string
 "id": string
 "part": string
 "attach": boolean
 "scale": float
 "attachments": $Object2ObjectOpenHashMap<(string), ((float)[])>
 "animations": $LinkedList<($LinkedHashMap<(string), (string)>)>

constructor()

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "prepare"(textureSize: (integer)[], jem: $EMFJemData$Type): void
public "getAttachments"(): $List<($Consumer<($PoseStack)>)>
public "getCustomTexture"(): $ResourceLocation
get "attachments"(): $List<($Consumer<($PoseStack)>)>
get "customTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFPartData$Type = ($EMFPartData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMFPartData_ = $EMFPartData$Type;
}}
declare module "packages/traben/entity_model_features/models/jem_objects/$EMFBoxData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $EMFBoxData {
 "textureOffset": (float)[]
 "uvDown": (float)[]
 "uvUp": (float)[]
 "uvFront": (float)[]
 "uvBack": (float)[]
 "uvLeft": (float)[]
 "uvRight": (float)[]
 "uvNorth": (float)[]
 "uvSouth": (float)[]
 "uvWest": (float)[]
 "uvEast": (float)[]
 "coordinates": (float)[]
 "sizeAdd": float
 "sizeAddX": float
 "sizeAddY": float
 "sizeAddZ": float
 "sizesAdd": (float)[]

constructor()

public "toString"(): string
public "prepare"(invertX: boolean, invertY: boolean, invertZ: boolean): void
public "checkAndFixUVLegacyDirections"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFBoxData$Type = ($EMFBoxData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMFBoxData_ = $EMFBoxData$Type;
}}
declare module "packages/traben/entity_model_features/models/$IEMFModelNameContainer" {
import {$EMFModel_ID, $EMFModel_ID$Type} from "packages/traben/entity_model_features/models/$EMFModel_ID"

export interface $IEMFModelNameContainer {

 "emf$insertKnownMappings"(arg0: $EMFModel_ID$Type): void

(arg0: $EMFModel_ID$Type): void
}

export namespace $IEMFModelNameContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMFModelNameContainer$Type = ($IEMFModelNameContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEMFModelNameContainer_ = $IEMFModelNameContainer$Type;
}}
declare module "packages/traben/entity_model_features/models/$IEMFModel" {
import {$EMFModelPartRoot, $EMFModelPartRoot$Type} from "packages/traben/entity_model_features/models/parts/$EMFModelPartRoot"

export interface $IEMFModel {

 "emf$isEMFModel"(): boolean
 "emf$getEMFRootModel"(): $EMFModelPartRoot
}

export namespace $IEMFModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMFModel$Type = ($IEMFModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEMFModel_ = $IEMFModel$Type;
}}
declare module "packages/traben/entity_model_features/mixin/accessor/$EntityRenderDispatcherAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityRenderDispatcherAccessor {

 "isShouldRenderShadow"(): boolean

(): boolean
}

export namespace $EntityRenderDispatcherAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderDispatcherAccessor$Type = ($EntityRenderDispatcherAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRenderDispatcherAccessor_ = $EntityRenderDispatcherAccessor$Type;
}}
declare module "packages/traben/entity_model_features/utils/$EMFDirectoryHandler" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EMFDirectoryHandler {
readonly "namespace": string
readonly "rawFileName": string
readonly "isSubFolder": boolean


public "toString"(): string
public "getRelativeDirectoryLocationNoValidation"(fileName: string): string
public "getRelativeFilePossiblyEMFOverridden"(jpmOrVariantFileNameWithSuffixAndFileType: string): $ResourceLocation
public "getFinalFileLocation"(): string
public "getFileNameWithType"(): string
public static "getDirectoryManagerOrNull"(printing: boolean, namespace: string, modelFileName: string, suffixAndFileType: string): $EMFDirectoryHandler
public "validForThisBase"(propertiesOrSecond: $EMFDirectoryHandler$Type): boolean
public "packIndex"(): integer
get "finalFileLocation"(): string
get "fileNameWithType"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFDirectoryHandler$Type = ($EMFDirectoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMFDirectoryHandler_ = $EMFDirectoryHandler$Type;
}}
declare module "packages/traben/entity_model_features/models/animation/$EMFAnimation" {
import {$Object2ObjectLinkedOpenHashMap, $Object2ObjectLinkedOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectLinkedOpenHashMap"
import {$EMFModelPart, $EMFModelPart$Type} from "packages/traben/entity_model_features/models/parts/$EMFModelPart"
import {$Object2ObjectOpenHashMap, $Object2ObjectOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ObjectOpenHashMap"
import {$EMFModelOrRenderVariable, $EMFModelOrRenderVariable$Type} from "packages/traben/entity_model_features/models/animation/math/variables/$EMFModelOrRenderVariable"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"

export class $EMFAnimation {
readonly "animKey": string
readonly "expressionString": string
readonly "modelName": string
 "temp_emfAnimationVariables": $Object2ObjectLinkedOpenHashMap<(string), ($EMFAnimation)>
 "temp_allPartsBySingleAndFullHeirachicalId": $Object2ObjectOpenHashMap<(string), ($EMFModelPart)>

constructor(partToApplyTo: $EMFModelPart$Type, modelOrRenderVariableToChange: $EMFModelOrRenderVariable$Type, animKey: string, initialExpression: string, modelName: string)

public "toString"(): string
public "isValid"(): boolean
public "getLastResultOnly"(): float
public "calculateAndSetIfNotPaused"(paused: ($ModelPart$Type)[]): void
public "calculateAndSet"(): void
public "getResultViaCalculate"(): float
public "initExpression"(emfAnimationVariables: $Object2ObjectLinkedOpenHashMap$Type<(string), ($EMFAnimation$Type)>, allPartByName: $Object2ObjectOpenHashMap$Type<(string), ($EMFModelPart$Type)>): void
public "isVar"(): boolean
get "valid"(): boolean
get "lastResultOnly"(): float
get "resultViaCalculate"(): float
get "var"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFAnimation$Type = ($EMFAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMFAnimation_ = $EMFAnimation$Type;
}}
declare module "packages/traben/entity_model_features/models/$EMFModel_ID" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"

export class $EMFModel_ID implements $Comparable<($EMFModel_ID)> {
 "namespace": string

constructor(both: string, mapId: string)
constructor(both: string)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(o: $EMFModel_ID$Type): integer
public "getNamespace"(): string
public "setFileName"(fileName: string): $EMFModel_ID
public "getDisplayFileName"(): string
public "finishAndPrepAutomatedFallbacks"(): void
public "getNextFallbackModel"(): $EMFModel_ID
public "setMapIdAndAddFallbackModel"(mapId: string, fileName: string): $EMFModel_ID
public "setMapIdAndAddFallbackModel"(both: string): $EMFModel_ID
public "areBothSame"(): boolean
public "setBoth"(fileName: string, mapId: string): $EMFModel_ID
public "setBoth"(both: string): $EMFModel_ID
public "getfileName"(): string
public "addFallbackModel"(fileName: string): $EMFModel_ID
public "addFallbackModel"(namespace: string, fileName: string): $EMFModel_ID
public "getMapId"(): string
public "hasFallbackModels"(): boolean
public "forEachFallback"(action: $Consumer$Type<($EMFModel_ID$Type)>): void
get "namespace"(): string
set "fileName"(value: string)
get "displayFileName"(): string
get "nextFallbackModel"(): $EMFModel_ID
set "mapIdAndAddFallbackModel"(value: string)
set "both"(value: string)
get "fileName"(): string
get "mapId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModel_ID$Type = ($EMFModel_ID);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMFModel_ID_ = $EMFModel_ID$Type;
}}
declare module "packages/traben/entity_model_features/models/parts/$EMFModelPart" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$ModelPartData, $ModelPartData$Type} from "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelPartData"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelPartExtended, $ModelPartExtended$Type} from "packages/org/embeddedt/embeddium/render/entity/$ModelPartExtended"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$ModelPart$Cube, $ModelPart$Cube$Type} from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"
import {$Object2ReferenceOpenHashMap, $Object2ReferenceOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2ReferenceOpenHashMap"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EMFModelPart extends $ModelPart {
 "textureOverride": $ResourceLocation
 "isSetByAnimation": boolean
static readonly "DEFAULT_SCALE": float
 "x": float
 "y": float
 "z": float
 "xRot": float
 "yRot": float
 "zRot": float
 "xScale": float
 "yScale": float
 "zScale": float
 "visible": boolean
 "skipDraw": boolean
 "cubes": $List<($ModelPart$Cube)>
 "children": $Map<(string), ($ModelPart)>

constructor(cuboids: $List$Type<($ModelPart$Cube$Type)>, children: $Map$Type<(string), ($ModelPart$Type)>)

public "toString"(): string
public "simplePrintChildren"(depth: integer): string
public "renderBoxesNoChildren"(matrices: $PoseStack$Type, vertices: $VertexConsumer$Type, alpha: float): void
public "getVanillaModelPartsOfCurrentState"(): $ModelPart
public "render"(matrices: $PoseStack$Type, vertices: $VertexConsumer$Type, light: integer, overlay: integer, red: float, green: float, blue: float, alpha: float): void
public "compile"(pose: $PoseStack$Pose$Type, vertexConsumer: $VertexConsumer$Type, i: integer, j: integer, red: float, green: float, blue: float, alpha: float): void
public "renderBoxes"(matrices: $PoseStack$Type, vertices: $VertexConsumer$Type): void
public "getAllChildPartsAsAnimationMap"(prefixableParents: string, variantNum: integer, optifinePartNameMap: $Map$Type<(string), (string)>): $Object2ReferenceOpenHashMap<(string), ($EMFModelPart)>
public "toStringShort"(): string
public static "of"(arg0: $ModelPart$Type): $ModelPartExtended
public static "from"(arg0: $ModelPart$Type): $ModelPartData
get "vanillaModelPartsOfCurrentState"(): $ModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModelPart$Type = ($EMFModelPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMFModelPart_ = $EMFModelPart$Type;
}}
declare module "packages/traben/entity_model_features/utils/$IEMFCuboidDataSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEMFCuboidDataSupplier {

 "emf$getSizeAdd"(): (float)[]
 "emf$getTextureXY"(): (integer)[]
 "emf$getTextureUV"(): (integer)[]
}

export namespace $IEMFCuboidDataSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMFCuboidDataSupplier$Type = ($IEMFCuboidDataSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEMFCuboidDataSupplier_ = $IEMFCuboidDataSupplier$Type;
}}
declare module "packages/traben/entity_model_features/utils/$IEMFUnmodifiedLayerRootGetter" {
import {$ModelLayerLocation, $ModelLayerLocation$Type} from "packages/net/minecraft/client/model/geom/$ModelLayerLocation"
import {$LayerDefinition, $LayerDefinition$Type} from "packages/net/minecraft/client/model/geom/builders/$LayerDefinition"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IEMFUnmodifiedLayerRootGetter {

 "emf$getUnmodifiedRoots"(): $Map<($ModelLayerLocation), ($LayerDefinition)>

(): $Map<($ModelLayerLocation), ($LayerDefinition)>
}

export namespace $IEMFUnmodifiedLayerRootGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMFUnmodifiedLayerRootGetter$Type = ($IEMFUnmodifiedLayerRootGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEMFUnmodifiedLayerRootGetter_ = $IEMFUnmodifiedLayerRootGetter$Type;
}}
declare module "packages/traben/entity_model_features/utils/$EMFEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ETFEntity, $ETFEntity$Type} from "packages/traben/entity_texture_features/utils/$ETFEntity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Object2FloatOpenHashMap, $Object2FloatOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2FloatOpenHashMap"
import {$Team, $Team$Type} from "packages/net/minecraft/world/scores/$Team"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EMFEntity extends $ETFEntity {

 "emf$isTouchingWater"(): boolean
 "emf$getX"(): double
 "emf$prevX"(): double
 "emf$prevY"(): double
 "emf$getY"(): double
 "emf$getZ"(): double
 "emf$prevPitch"(): float
 "emf$prevZ"(): double
 "emf$getPitch"(): float
 "emf$getYaw"(): float
 "emf$isSprinting"(): boolean
 "emf$isSneaking"(): boolean
 "emf$isOnFire"(): boolean
 "emf$isInvisible"(): boolean
 "emf$isInLava"(): boolean
 "emf$hasPassengers"(): boolean
 "emf$getVelocity"(): $Vec3
 "emf$isWet"(): boolean
 "emf$isOnGround"(): boolean
 "emf$getVariableMap"(): $Object2FloatOpenHashMap<(string)>
 "emf$hasVehicle"(): boolean
 "emf$isGlowing"(): boolean
 "emf$age"(): float
 "emf$isAlive"(): boolean
 "emf$getTypeString"(): string
 "etf$getItemsEquipped"(): $Iterable<($ItemStack)>
 "etf$getScoreboardTeam"(): $Team
 "etf$canBeBright"(): boolean
 "etf$getBlockY"(): integer
 "etf$getType"(): $EntityType<(any)>
 "etf$isBlockEntity"(): boolean
 "etf$getCustomName"(): $Component
 "etf$getHandItems"(): $Iterable<($ItemStack)>
 "etf$getNbt"(): $CompoundTag
 "etf$getArmorItems"(): $Iterable<($ItemStack)>
 "etf$getOptifineId"(): integer
 "etf$distanceTo"(arg0: $Entity$Type): float
 "etf$getUuid"(): $UUID
 "etf$hasCustomName"(): boolean
/**
 * 
 * @deprecated
 */
 "etf$getPose"(): $Pose
 "etf$getVelocity"(): $Vec3
 "etf$getEntityKey"(): string
 "etf$getBlockPos"(): $BlockPos
 "etf$getWorld"(): $Level
}

export namespace $EMFEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFEntity$Type = ($EMFEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMFEntity_ = $EMFEntity$Type;
}}
declare module "packages/traben/entity_model_features/models/jem_objects/$EMFJemData" {
import {$LinkedList, $LinkedList$Type} from "packages/java/util/$LinkedList"
import {$LinkedHashMap, $LinkedHashMap$Type} from "packages/java/util/$LinkedHashMap"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EMFPartData, $EMFPartData$Type} from "packages/traben/entity_model_features/models/jem_objects/$EMFPartData"
import {$EMFDirectoryHandler, $EMFDirectoryHandler$Type} from "packages/traben/entity_model_features/utils/$EMFDirectoryHandler"
import {$EMFModel_ID, $EMFModel_ID$Type} from "packages/traben/entity_model_features/models/$EMFModel_ID"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $EMFJemData {
 "texture": string
 "textureSize": (integer)[]
 "shadow_size": double
 "models": $LinkedList<($EMFPartData)>
 "directoryContext": $EMFDirectoryHandler

constructor()

public "toString"(): string
public "prepare"(directoryContext: $EMFDirectoryHandler$Type, mobModelIDInfo: $EMFModel_ID$Type): void
public "getAllTopLevelAnimationsByVanillaPartName"(): $LinkedHashMap<(string), ($List<($LinkedHashMap<(string), (string)>)>)>
public "validateJemTexture"(textureIn: string, canRemoveRedundancy: boolean): $ResourceLocation
public "validateJemTexture"(textureIn: string): $ResourceLocation
public "getCustomTexture"(): $ResourceLocation
public "getMobModelIDInfo"(): $EMFModel_ID
get "allTopLevelAnimationsByVanillaPartName"(): $LinkedHashMap<(string), ($List<($LinkedHashMap<(string), (string)>)>)>
get "customTexture"(): $ResourceLocation
get "mobModelIDInfo"(): $EMFModel_ID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFJemData$Type = ($EMFJemData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMFJemData_ = $EMFJemData$Type;
}}
declare module "packages/traben/entity_model_features/utils/$IEMFTextureSizeSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEMFTextureSizeSupplier {

 "emf$getTextureSize"(): (integer)[]
 "emf$setTextureSize"(arg0: (integer)[]): void
}

export namespace $IEMFTextureSizeSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEMFTextureSizeSupplier$Type = ($IEMFTextureSizeSupplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEMFTextureSizeSupplier_ = $IEMFTextureSizeSupplier$Type;
}}
declare module "packages/traben/entity_model_features/models/parts/$EMFModelPartWithState$EMFModelState" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModelPart$Cube, $ModelPart$Cube$Type} from "packages/net/minecraft/client/model/geom/$ModelPart$Cube"
import {$EMFModelPart$Animator, $EMFModelPart$Animator$Type} from "packages/traben/entity_model_features/models/parts/$EMFModelPart$Animator"
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PartPose, $PartPose$Type} from "packages/net/minecraft/client/model/geom/$PartPose"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EMFModelPartWithState$EMFModelState extends $Record {

constructor(defaultTransform: $PartPose$Type, cuboids: $List$Type<($ModelPart$Cube$Type)>, variantChildren: $Map$Type<(string), ($ModelPart$Type)>, xScale: float, yScale: float, zScale: float, visible: boolean, hidden: boolean, texture: $ResourceLocation$Type, animation: $EMFModelPart$Animator$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "copy"(copyFrom: $EMFModelPartWithState$EMFModelState$Type): $EMFModelPartWithState$EMFModelState
public "visible"(): boolean
public "cuboids"(): $List<($ModelPart$Cube)>
public "defaultTransform"(): $PartPose
public "zScale"(): float
public "variantChildren"(): $Map<(string), ($ModelPart)>
public "texture"(): $ResourceLocation
public "hidden"(): boolean
public "xScale"(): float
public "yScale"(): float
public "animation"(): $EMFModelPart$Animator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EMFModelPartWithState$EMFModelState$Type = ($EMFModelPartWithState$EMFModelState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EMFModelPartWithState$EMFModelState_ = $EMFModelPartWithState$EMFModelState$Type;
}}
