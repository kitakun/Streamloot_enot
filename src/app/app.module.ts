import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Carousel3dModule } from './controls/carousel/carousel.module';
import { MythChestComponent } from './components/chests/myth-chest/myth-chest.component';
import { LegendChestComponent } from './components/chests/legend-chest/legend-chest.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { SmoothPanelComponent } from './pages/home/ui/smooth-panel/smooth-panel.component';
import { SHttpInterceptor } from './Interceptors/SHttpInterceptor';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { SuccessPaymentComponent } from './pages/payment/success-payment/success-payment.component';
import { FailedPaymentComponent } from './pages/payment/failed-payment/failed-payment.component';
import { LoadingIndicatorComponent } from './controls/loading-indicator/loading-indicator.component';
import { TrackOrderComponent } from './components/feature/track-order/track-order.component';
import { StaticBackgroundComponent } from './components/shared/static-background/static-background.component';
import { StaticVideoBackgroundComponent } from './components/shared/static-video-background/static-video-background.component';
import { TextWidthCalcComponent } from './components/shared/text-width-calc/text-width-calc.component';
import { ProductAttributeSelectorComponent } from './components/feature/product-attribute-selector/product-attribute-selector.component';
import { AlertsComponent } from './components/feature/alerts/alerts.component';
import { NavbarHeaderComponent } from './components/feature/navbar-header/navbar-header.component';
import { HoverParallaxComponent } from './components/shared/hover-parallax/hover-parallax.component';
import { AppFooterComponent } from './components/feature/app-footer/app-footer.component';
import { Panel2Component } from './controls/ui/purple-panel/panel2.component';
import { ScrollComponent } from './controls/ui/scroll/scroll.component';
import { ModalComponent } from './controls/modal-dialog/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticBackgroundComponent,
    NavbarHeaderComponent,
    TrackOrderComponent,
    ProductAttributeSelectorComponent,
    MythChestComponent,
    LegendChestComponent,
    HoverParallaxComponent,
    ModalComponent,
    Panel2Component,
    HomeComponent,
    CartComponent,
    FeedbackComponent,
    DeliveryComponent,
    StaticVideoBackgroundComponent,
    SmoothPanelComponent,
    AppFooterComponent,
    CreateOrderComponent,
    SuccessPaymentComponent,
    FailedPaymentComponent,
    AlertsComponent,
    TextWidthCalcComponent,
    LoadingIndicatorComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    Carousel3dModule,
    AppRoutingModule,

    HttpClientModule,
  ],
  providers: [
    { provide: 'LOCALSTORAGE', useFactory: getLocalStorage },
    { provide: HTTP_INTERCEPTORS, useClass: SHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getLocalStorage(): Storage {
  return (typeof window !== "undefined") ? window.localStorage : null;
}

