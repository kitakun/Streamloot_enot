import { NgModule, Optional, SkipSelf } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { CommonModule } from "@angular/common";
import { FeaturesModule } from "src/app/features/features.module";
import { EnsureModuleLoadedOnceGuard } from "src/app/core/ensure-module-loaded-once.guard";

@NgModule({
    imports: [
        CommonModule,
        FeaturesModule,
        HomeRoutingModule
    ],
    declarations: [HomeRoutingModule.components]
})
export class HomeModule extends EnsureModuleLoadedOnceGuard {
    constructor(@Optional() @SkipSelf() parentModule: HomeModule) {
        super(parentModule);
    }
}