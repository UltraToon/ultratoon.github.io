declare module "packages/forge/me/thosea/badoptimizations/interfaces/$EntityTypeMethods" {
import {$EntityRenderer, $EntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"

export interface $EntityTypeMethods {

 "bo$setRenderer"(arg0: $EntityRenderer$Type<(any)>): void
 "bo$getRenderer"(): $EntityRenderer<(any)>
}

export namespace $EntityTypeMethods {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTypeMethods$Type = ($EntityTypeMethods);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTypeMethods_ = $EntityTypeMethods$Type;
}}
declare module "packages/forge/me/thosea/badoptimizations/interfaces/$EntityMethods" {
import {$EntityRenderer, $EntityRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$EntityRenderer"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityMethods {

 "bo$refreshEntityData"(arg0: integer): void
 "bo$getRenderer"<T extends $Entity>(): $EntityRenderer<(T)>
}

export namespace $EntityMethods {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityMethods$Type = ($EntityMethods);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityMethods_ = $EntityMethods$Type;
}}
declare module "packages/forge/me/thosea/badoptimizations/interfaces/$BlockEntityTypeMethods" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockEntityRenderer, $BlockEntityRenderer$Type} from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRenderer"

export interface $BlockEntityTypeMethods {

 "bo$setRenderer"(arg0: $BlockEntityRenderer$Type<(any)>): void
 "bo$getRenderer"<T extends $BlockEntity>(): $BlockEntityRenderer<(T)>
}

export namespace $BlockEntityTypeMethods {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTypeMethods$Type = ($BlockEntityTypeMethods);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityTypeMethods_ = $BlockEntityTypeMethods$Type;
}}
declare module "packages/forge/me/thosea/badoptimizations/mixin/accessor/$GameRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRendererAccessor {

 "bo$getSkyDarkness"(): float

(): float
}

export namespace $GameRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRendererAccessor$Type = ($GameRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRendererAccessor_ = $GameRendererAccessor$Type;
}}
declare module "packages/forge/me/thosea/badoptimizations/mixin/accessor/$PlayerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerAccessor {

 "bo$underwaterVisibilityTicks"(): integer

(): integer
}

export namespace $PlayerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAccessor$Type = ($PlayerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerAccessor_ = $PlayerAccessor$Type;
}}
