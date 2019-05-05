import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CheckoutService} from '../services/checkout.service';
import {DmWoocommerceOrdersService} from '../../modules/woocomerce/services/dm-woocommerce-orders.service';

@Component({
  selector: 'app-checkout-step1',
  templateUrl: './checkout-step1.component.html',
  styleUrls: ['./checkout-step1.component.scss']
})
export class CheckoutStep1Component implements OnInit {

  form: FormGroup;
  address_1: FormControl;
  city: FormControl;

  constructor(
    private router: Router,
    private orderService: DmWoocommerceOrdersService,
  ) {
  }

  ngOnInit() {

    this.address_1 = new FormControl(this.orderService.order.billing.address_1, [Validators.required]);
    this.city = new FormControl(this.orderService.order.billing.city, [Validators.required]);

    this.form = new FormGroup({
      address_1: this.address_1,
      city: this.city,
    });
  }

  onSubmit (formValue) {
    this.orderService.updateAddress(formValue);
    this.router.navigate(['/checkout/delivery']);
  }
}
