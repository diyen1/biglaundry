import { NgModule } from '@angular/core';
import {CheckoutStep1Component} from './checkout-step1/checkout-step1.component';
import {CheckoutStep2Component} from './checkout-step2/checkout-step2.component';
import {CheckoutStep3Component} from './checkout-step3/checkout-step3.component';
import {CheckoutStep4Component} from './checkout-step4/checkout-step4.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatSelectModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {WoocomerceModule} from '../modules/woocomerce/woocomerce.module';
import {CheckoutRoutingModule} from './checkout-routing.module';
import {CheckoutComponent} from './checkout.component';
import {UtilsModule} from '../modules/utils/utils.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../modules/shared/shared.module';
import {CommonModule} from '@angular/common';

const CUSTOMER_COMPONENTS = [
  CheckoutComponent,
  CheckoutStep1Component,
  CheckoutStep2Component,
  CheckoutStep3Component,
  CheckoutStep4Component,
];

@NgModule({
  imports: [
    CheckoutRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSelectModule,

    ReactiveFormsModule,
    CommonModule,
    WoocomerceModule,
    UtilsModule,
    SharedModule,
  ],
  declarations: [
    ...CUSTOMER_COMPONENTS,
  ],
  exports: [
    ...CUSTOMER_COMPONENTS,
  ],
  entryComponents: [],
})
export class CheckoutModule {
}
