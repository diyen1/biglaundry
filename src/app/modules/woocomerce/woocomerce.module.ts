import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {DmWoocommerceInterceptor} from './interceptors/dm-woocommerce.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DmWoocommerceInterceptor,
      multi: true
    },
  ],
})
export class WoocomerceModule { }
