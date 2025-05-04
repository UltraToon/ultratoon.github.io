declare module "packages/dev/isxander/yacl3/mixin/$OptionInstanceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $OptionInstanceAccessor<T> {

 "getInitialValue"(): T

(): T
}

export namespace $OptionInstanceAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstanceAccessor$Type<T> = ($OptionInstanceAccessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionInstanceAccessor_<T> = $OptionInstanceAccessor$Type<(T)>;
}}
