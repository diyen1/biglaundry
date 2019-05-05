import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {DmWoocommerceInterceptor} from './interceptors/dm-woocommerce.interceptor';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule} from '@angular/material';
import {DmwooMomoComponent} from './payment-methods/momo/dmwoo-momo.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DmwooOmComponent} from './payment-methods/om/dmwoo-om.component';
import {DmwooCodComponent} from './payment-methods/cod/dmwoo-cod.component';
import {DmwooPaymentOptionsComponent} from './payment-methods/payment-options/dmwoo-payment-options.component';
import {DmwooPaymentButtonComponent} from './payment-methods/payment-button/dmwoo-payment-button.component';

const declarations = [
  DmwooMomoComponent,
  DmwooOmComponent,
  DmwooCodComponent,
  DmwooPaymentOptionsComponent,
  DmwooPaymentButtonComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ... declarations
  ],
  exports: [
    ... declarations
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DmWoocommerceInterceptor,
      multi: true
    },
  ],
})
export class WoocomerceModule { }
