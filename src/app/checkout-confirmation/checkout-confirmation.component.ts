import { Component, OnInit } from '@angular/core';
import {DmWoocommerceCartService} from '../modules/woocomerce/services/dm-woocommerce-cart.service';
import {DmWoocommerceOrdersService} from '../modules/woocomerce/services/dm-woocommerce-orders.service';

@Component({
  selector: 'app-checkout-confirmation',
  templateUrl: './checkout-confirmation.component.html',
  styleUrls: ['./checkout-confirmation.component.scss']
})
export class CheckoutConfirmationComponent implements OnInit {

  constructor(
    public woocommerceCartService: DmWoocommerceCartService,
    public woocommerceOrderService: DmWoocommerceOrdersService,
  ) { }

  ngOnInit() {
  }

}
