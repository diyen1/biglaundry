import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {CheckoutComponent} from './checkout.component';
import {CheckoutStep1Component} from './checkout-step1/checkout-step1.component';
import {CheckoutStep2Component} from './checkout-step2/checkout-step2.component';
import {CheckoutStep3Component} from './checkout-step3/checkout-step3.component';
import {CheckoutStep4Component} from './checkout-step4/checkout-step4.component';

const routes: Routes = [{
  path: '',
  component: CheckoutComponent,
  children: [
    {
      path: 'address',
      component: CheckoutStep1Component,
    },
    {
      path: 'delivery',
      component: CheckoutStep2Component,
    },
    {
      path: 'basket',
      component: CheckoutStep3Component,
    },
    {
      path: 'payment',
      component: CheckoutStep4Component,
    },
    {
      path: '',
      redirectTo: 'address',
      pathMatch: 'full',
    },
    { path: '**', component: CheckoutStep1Component },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutRoutingModule {
}
