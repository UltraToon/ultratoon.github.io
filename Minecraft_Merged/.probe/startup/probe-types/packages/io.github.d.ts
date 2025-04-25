declare module "packages/io/github/gaming32/worldhost/mixin/$MinecraftAccessor" {
import {$YggdrasilAuthenticationService, $YggdrasilAuthenticationService$Type} from "packages/com/mojang/authlib/yggdrasil/$YggdrasilAuthenticationService"

export interface $MinecraftAccessor {

 "getAuthenticationService"(): $YggdrasilAuthenticationService

(): $YggdrasilAuthenticationService
}

export namespace $MinecraftAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftAccessor$Type = ($MinecraftAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftAccessor_ = $MinecraftAccessor$Type;
}}
declare module "packages/io/github/gaming32/worldhost/ext/$ServerDataExt" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerDataExt {

 "wh$setConnectionId"(arg0: long): void
 "wh$getConnectionId"(): long
}

export namespace $ServerDataExt {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerDataExt$Type = ($ServerDataExt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerDataExt_ = $ServerDataExt$Type;
}}
declare module "packages/io/github/gaming32/worldhost/mixin/$ServerConnectionListenerAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ChannelFuture, $ChannelFuture$Type} from "packages/io/netty/channel/$ChannelFuture"

export interface $ServerConnectionListenerAccessor {

 "getChannels"(): $List<($ChannelFuture)>

(): $List<($ChannelFuture)>
}

export namespace $ServerConnectionListenerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerConnectionListenerAccessor$Type = ($ServerConnectionListenerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerConnectionListenerAccessor_ = $ServerConnectionListenerAccessor$Type;
}}
