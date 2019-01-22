import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MythChestComponent } from "./chests/myth-chest/myth-chest.component";
import { LegendChestComponent } from "./chests/legend-chest/legend-chest.component";

const routes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
    static components = [
        HomeComponent,
        MythChestComponent,
        LegendChestComponent
    ]
}