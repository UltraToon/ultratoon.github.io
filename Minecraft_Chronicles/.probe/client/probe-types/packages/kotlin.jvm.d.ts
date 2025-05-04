declare module "packages/kotlin/jvm/functions/$Function3" {
import {$Function, $Function$Type} from "packages/kotlin/$Function"

export interface $Function3<P1, P2, P3, R> extends $Function<(R)> {

 "invoke"(arg0: P1, arg1: P2, arg2: P3): R

(arg0: P1, arg1: P2, arg2: P3): R
}

export namespace $Function3 {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function3$Type<P1, P2, P3, R> = ($Function3<(P1), (P2), (P3), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function3_<P1, P2, P3, R> = $Function3$Type<(P1), (P2), (P3), (R)>;
}}
declare module "packages/kotlin/jvm/internal/$DefaultConstructorMarker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DefaultConstructorMarker {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultConstructorMarker$Type = ($DefaultConstructorMarker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultConstructorMarker_ = $DefaultConstructorMarker$Type;
}}
