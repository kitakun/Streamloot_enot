import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart/cart.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { SuccessPaymentComponent } from './pages/payment/success-payment/success-payment.component';
import { FailedPaymentComponent } from './pages/payment/failed-payment/failed-payment.component';

import { BrowserModule } from '@angular/platform-browser';
import { FeaturesModule } from './features/features.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/enot' },
  ],
  declarations: [
    AppComponent,

    CartComponent,
    FeedbackComponent,
    DeliveryComponent,
    CreateOrderComponent,

    SuccessPaymentComponent,
    FailedPaymentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


