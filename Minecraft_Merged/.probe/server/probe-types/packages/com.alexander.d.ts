declare module "packages/com/alexander/rootoffear/mixin/$ServerLevelAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$CustomSpawner, $CustomSpawner$Type} from "packages/net/minecraft/world/level/$CustomSpawner"

export interface $ServerLevelAccessor {

 "setCustomSpawners"(arg0: $List$Type<($CustomSpawner$Type)>): void
 "getCustomSpawners"(): $List<($CustomSpawner)>
}

export namespace $ServerLevelAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevelAccessor$Type = ($ServerLevelAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerLevelAccessor_ = $ServerLevelAccessor$Type;
}}
