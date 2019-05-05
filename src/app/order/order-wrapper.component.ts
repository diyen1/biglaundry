import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DmWoocommerceCartService} from '../modules/woocomerce/services/dm-woocommerce-cart.service';
import {DmWoocommerceOrdersService} from '../modules/woocomerce/services/dm-woocommerce-orders.service';
import {CheckoutConfirmationComponent} from '../checkout-confirmation/checkout-confirmation.component';

@Component({
  selector: 'app-order-wrapper',
  templateUrl: './order-wrapper.component.html',
  styleUrls: ['./order-wrapper.component.scss']
})
export class OrderWrapperComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public woocommerceCartService: DmWoocommerceCartService,
    public woocommerceOrderService: DmWoocommerceOrdersService,
    ) {
  }

  ngOnInit() {
  }
}
