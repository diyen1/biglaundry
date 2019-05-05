import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {addParamsToUrl} from '../../add-params-to-url';
import {DmWoocommerceOrdersService} from './dm-woocommerce-orders.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DmWoocommercePaymentService {

  currentPaymentMethod = 'cod';

  constructor(
    private http: HttpClient,
    private orderService: DmWoocommerceOrdersService,
  ) {
  }

  // changePaymentMethod(currentPaymentMethod) {
  //   this.currentPaymentMethod = currentPaymentMethod;
  // }

  getPaymentOptions() {
    const url = environment.wcOrigin + '/payment_gateways';
    return this.http.get(url);
  }


  handlePayment(formValue): Observable<boolean> {
    // switch (this.currentPaymentMethod) {
    console.log(formValue);
    switch (formValue.paymentMethod) {
      case 'momo':
        return this.handleMomo(formValue);
      case 'om':
        return this.handleOM(formValue);
      case 'cod':
      default:
        return this.handleCod(formValue);
    }
  }

  handleCod(formValue): Observable<boolean> {
    return new Observable((observer) => {
      this.orderService.order.billing.phone = formValue.codPhone;
      observer.next(true);
      observer.complete();
    });
  }

  handleMomo(formValue): Observable<boolean> {
    // display popup
    // return observable
    return new Observable((observer) => {
      this.orderService.order.billing.phone = formValue.momoPhone;
      observer.next(false);
      observer.complete();
    });
  }

  handleOM(formValue): Observable<boolean> {
    // display popup
    // return observable
    return new Observable((observer) => {
      this.orderService.order.billing.phone = formValue.omPhone;
      observer.next(false);
      observer.complete();
    });
  }
}
