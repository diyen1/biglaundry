import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {DmWoocommerceOrdersService} from './dm-woocommerce-orders.service';
import {Observable} from 'rxjs';
import {PaymentResponseType} from '../payment-response-type.enum';
import {DmWooPaymentResponse} from '../payment-response.interface';
import {PaymentMethod} from '../payment.method';


@Injectable({
  providedIn: 'root'
})
export class DmWoocommercePaymentService {

  currentPaymentMethod = 'cod';
  currentPaymentMethodVars: any = {};
  processingPayment = false;
  paymentResponse: DmWooPaymentResponse;

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


  handlePayment(formValue): Observable<DmWooPaymentResponse> {
    this.processingPayment = true;
    switch (this.currentPaymentMethod) {
      case PaymentMethod.MTN_MOBILE_MONEY_CAMEROON:
        return this.handleMomo(formValue);
      case PaymentMethod.ORANGE_MONEY_CAMEROON:
        return this.handleOM(formValue);
      case PaymentMethod.CASH_ON_DELIVERY:
      default:
        return this.handleCod(formValue);
    }
  }

  handleCod(formValue): Observable<DmWooPaymentResponse> {
    return new Observable((observer) => {
      this.orderService.order.billing.phone = formValue.codPhone;

      this.paymentResponse = {
        type: PaymentResponseType.SUCCESS,
        message: 'Successful'
      };

      observer.next(this.paymentResponse);
      observer.complete();
    });
  }

  handleMomo(formValue): Observable<DmWooPaymentResponse> {
    // display popup
    // return observable
    console.log('handleMomo formValue', formValue);
    if (this.currentPaymentMethodVars && this.currentPaymentMethodVars.phone && this.currentPaymentMethodVars.phone !== '') {
      return new Observable((observer) => {
        // observer.next(false);
        // observer.complete();
      });
    } else {
      return new Observable((observer) => {
        setTimeout(() => {
          this.processingPayment = false;
          this.paymentResponse = {
            type: PaymentResponseType.ERROR,
            message: 'Please input the phone number you use for Mobile Money'
          };
          observer.next(this.paymentResponse);
          observer.complete();
        }, 1000);
      });
    }
  }

  handleOM(formValue): Observable<DmWooPaymentResponse> {
    // display popup
    // return observable
    return new Observable((observer) => {
      setTimeout(() => {
        this.processingPayment = false;
        this.paymentResponse = {
          type: PaymentResponseType.ERROR,
          message: 'Error processing payment'
        };
        observer.next(this.paymentResponse);
        observer.complete();
      }, 1000);
    });
  }
}
