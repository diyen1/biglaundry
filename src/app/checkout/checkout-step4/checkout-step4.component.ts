import {Component, OnInit} from '@angular/core';
import {DmWoocommerceOrdersService} from '../../modules/woocomerce/services/dm-woocommerce-orders.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DmWoocommercePaymentService} from '../../modules/woocomerce/services/dm-woocommerce-payment.service';
import {Router} from '@angular/router';
import {MatBottomSheet} from '@angular/material';
import {DmwooNotificationComponent} from '../../modules/woocomerce/components/notification/dmwoo-notification.component';
import {DmWooPaymentResponse} from '../../modules/woocomerce/payment-response.interface';
import {PaymentResponseType} from '../../modules/woocomerce/payment-response-type.enum';
import {LOrder} from '../../modules/woocomerce/l-order.model';
import {PaymentGateway} from '../../modules/woocomerce/payment-gateway.model';
import {PaymentMethod} from '../../modules/woocomerce/payment.method';

@Component({
  selector: 'app-checkout-step4',
  templateUrl: './checkout-step4.component.html',
  styleUrls: ['./checkout-step4.component.scss']
})
export class CheckoutStep4Component implements OnInit {

  form: FormGroup;
  address_1: FormControl;
  city: FormControl;

  phone: FormControl;
  email: FormControl;
  first_name: FormControl;
  last_name: FormControl;
  terms_and_conditions: FormControl;
  payment_method: FormControl;

  paymentGateways: PaymentGateway[] = [];
  loading = true;

  constructor(
    private router: Router,
    private orderService: DmWoocommerceOrdersService,
    public paymentService: DmWoocommercePaymentService,
    private bottomSheet: MatBottomSheet,
  ) {
  }

  ngOnInit() {

    this.address_1 = new FormControl(this.orderService.order.billing.address_1, [Validators.required]);
    this.city = new FormControl(this.orderService.order.billing.city, [Validators.required]);

    this.phone = new FormControl(this.orderService.order.billing.phone, [Validators.required]);
    this.email = new FormControl(this.orderService.order.billing.email, [Validators.required]);
    this.first_name = new FormControl(
      this.orderService.order.billing.first_name,
      [Validators.required]
    );
    this.last_name = new FormControl(
      this.orderService.order.billing.last_name,
      [Validators.required]
    );
    this.terms_and_conditions = new FormControl('', [Validators.required]);
    this.payment_method = new FormControl('', [Validators.required]);

    /////////////

    this.paymentService.getPaymentOptions().subscribe((res: PaymentGateway[]) => {
      res.forEach((value, index) => {
        if (value.enabled) {
          this.paymentGateways.push(value);
        }
      });
      this.loading = false;
    });
    /////////////

    this.form = new FormGroup({
      address_1: this.address_1,
      city: this.city,
      phone: this.phone,
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      terms_and_conditions: this.terms_and_conditions,
      payment_method: this.payment_method,
    });
  }

  changePaymentmenthod() {
    this.paymentService.currentPaymentMethod = this.form.get('payment_method').value;
  }

  isMomo(paymentGatewayId) {
    return paymentGatewayId === PaymentMethod.MTN_MOBILE_MONEY_CAMEROON;
  }

  isOM(paymentGatewayId) {
    return paymentGatewayId === PaymentMethod.ORANGE_MONEY_CAMEROON;
  }

  onSubmit (formValue) {
    this.order(formValue);
  }

  order(formValue) {
    for ( let i = 0; i < this.paymentGateways.length; i++) {
      if (formValue.payment_method === this.paymentGateways[i].id) {
        formValue.payment_method_title = this.paymentGateways[i].method_title;
        break;
      }
    }

    this.orderService.updatePayment(formValue);

    this.paymentService.handlePayment(formValue).subscribe((paymentResponse: DmWooPaymentResponse) => {
      console.log(paymentResponse);
      if (paymentResponse.type === PaymentResponseType.SUCCESS) {
        this.orderService.addOrder().subscribe((order: LOrder) => {
          console.log('order', order);
          this.paymentService.processingPayment = false;
          this.router.navigate(['/order/successful/' + order.id ]);
        });
      } else {
        this.bottomSheet.open(DmwooNotificationComponent);
      }
    });
  }
}
