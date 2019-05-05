import { Component, OnInit } from '@angular/core';
import {DmWoocommerceCartService} from '../../modules/woocomerce/services/dm-woocommerce-cart.service';
import {DmWoocommerceOrdersService} from '../../modules/woocomerce/services/dm-woocommerce-orders.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DmWoocommercePaymentService} from '../../modules/woocomerce/services/dm-woocommerce-payment.service';
import {Router} from '@angular/router';

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
  payment_option: FormControl;

  constructor(
    private router: Router,
    private orderService: DmWoocommerceOrdersService,
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
    this.payment_option = new FormControl('', [Validators.required]);

    this.form = new FormGroup({
      address_1: this.address_1,
      city: this.city,
      phone: this.phone,
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      terms_and_conditions: this.terms_and_conditions,
      payment_option: this.payment_option,
    });
  }

  onSubmit (formValue) {
    this.orderService.updateAccount(formValue);
  }


  order(formValue) {
    // this.orderService.updatePayment(formValue);

    // this.paymentService.handlePayment(formValue).subscribe((haspaid) => {
    //   console.log(haspaid);
    //   if (haspaid) {
    //     this.orderService.addOrder().subscribe((res) => {
    //       console.log('order', res);
    //     });
    //     this.error = null;
    //   } else {
    //     // TODO handle all the errors
    //     this.error = 'Failed to process payment';
    //   }
    // });
  }
}
