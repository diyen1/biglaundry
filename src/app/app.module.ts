import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DmWoocommerceInterceptor} from './modules/woocomerce/interceptors/dm-woocommerce.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MAT_DATE_LOCALE,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {WoocomerceModule} from './modules/woocomerce/woocomerce.module';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { CartComponent } from './cart/cart.component';
import {UtilsModule} from './modules/utils/utils.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './components/product/product.component';
import {DmfbCrudModule} from './modules/crud/dmfb-crud.module';
import { CheckoutConfirmationComponent } from './checkout-confirmation/checkout-confirmation.component';
import {SharedModule} from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SubCategoriesComponent,
    ProductsComponent,
    HomeComponent,
    CartComponent,
    SearchListComponent,
    SearchComponent,
    ProductComponent,
    CheckoutConfirmationComponent,
  ],
  entryComponents: [
    CheckoutConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    UtilsModule,
    DmfbCrudModule,

    // angular material modules
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

    WoocomerceModule,
    SharedModule,

    RouterModule.forRoot(routes),
  ],
  providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: DmWoocommerceInterceptor,
  //     multi: true
  //   },
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
