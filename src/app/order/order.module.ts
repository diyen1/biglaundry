import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {WoocomerceModule} from '../modules/woocomerce/woocomerce.module';
import {UtilsModule} from '../modules/utils/utils.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../modules/shared/shared.module';
import {CommonModule} from '@angular/common';
import {OrderSuccessfulComponent} from './order-successful/order-successful.component';
import {OrderWrapperComponent} from './order-wrapper.component';
import {OrderRoutingModule} from './order-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderComponent} from './order/order.component';

const CUSTOMER_COMPONENTS = [
  OrderWrapperComponent,
  OrderSuccessfulComponent,
  OrderComponent,
  OrderListComponent,
];

@NgModule({
  imports: [
    OrderRoutingModule,
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
    MatRadioModule,

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
export class OrderModule {
}
