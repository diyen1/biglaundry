import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {OrderSuccessfulComponent} from './order-successful/order-successful.component';
import {OrderWrapperComponent} from './order-wrapper.component';
import {OrderListComponent} from './order-list/order-list.component';

const routes: Routes = [{
  path: '',
  component: OrderWrapperComponent,
  children: [
    {
      path: 'successful/:orderId',
      component: OrderSuccessfulComponent,
    },
    {
      path: 'mine',
      component: OrderListComponent,
    },
    { path: '**', component: OrderListComponent },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {
}
