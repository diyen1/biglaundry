import { Component, OnInit } from '@angular/core';
import {DmWoocommerceCartService} from '../../modules/woocomerce/services/dm-woocommerce-cart.service';
import {Router} from '@angular/router';
import {CheckoutService} from '../services/checkout.service';
import {DmWoocommerceOrdersService} from '../../modules/woocomerce/services/dm-woocommerce-orders.service';

@Component({
  selector: 'app-checkout-step3',
  templateUrl: './checkout-step3.component.html',
  styleUrls: ['./checkout-step3.component.scss']
})
export class CheckoutStep3Component implements OnInit {

  MINIMUM_ORDER_AMOUNT = 5000;

  constructor(
    public woocommerceCartService: DmWoocommerceCartService,
    private router: Router,
    private orderService: DmWoocommerceOrdersService,
  ) { }

  ngOnInit() { console.log('woocommerceCartService.cart', this.woocommerceCartService.cart);
  }

  orderIsValid() {
    return this.woocommerceCartService.getTotalPrice() >= this.MINIMUM_ORDER_AMOUNT;
  }

  next() {
    this.orderService.updateOrderItems();
    this.router.navigate(['/checkout/payment']);
  }
}
