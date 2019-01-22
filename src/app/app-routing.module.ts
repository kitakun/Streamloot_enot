import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { SuccessPaymentComponent } from './pages/payment/success-payment/success-payment.component';
import { FailedPaymentComponent } from './pages/payment/failed-payment/failed-payment.component';
import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: '../app/pages/home/home.module#HomeModule' },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'cart', component: CartComponent },
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'PaymentSuccess', component: SuccessPaymentComponent },
  { path: 'PaymentFailed', component: FailedPaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
      scrollPositionRestoration: 'enabled'
      //preloadingStrategy: PreloadModulesStrategy
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
