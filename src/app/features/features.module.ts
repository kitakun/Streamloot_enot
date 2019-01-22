import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { ProductAttributeSelectorComponent } from './product-attribute-selector/product-attribute-selector.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { UserVisibleAttributePipe } from './pipes/UserVisibleAttributePipe';
import { SharedModule } from '../shared/shared.module';

const components = [
    AlertsComponent,
    NavbarHeaderComponent,
    ProductAttributeSelectorComponent,
    TrackOrderComponent,

    UserVisibleAttributePipe
];

@NgModule({
    imports:[
        CommonModule,
        SharedModule,
    ],
    declarations: components,
    exports: [SharedModule, ...components]
})
export class FeaturesModule {}