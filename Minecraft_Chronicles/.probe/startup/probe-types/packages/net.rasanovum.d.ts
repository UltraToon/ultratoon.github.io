declare module "packages/net/rasanovum/viaromana/potion/$TravellersFatigueMobEffect" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $TravellersFatigueMobEffect extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "isInstantenous"(): boolean
public "getDescriptionId"(): string
get "instantenous"(): boolean
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TravellersFatigueMobEffect$Type = ($TravellersFatigueMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TravellersFatigueMobEffect_ = $TravellersFatigueMobEffect$Type;
}}
