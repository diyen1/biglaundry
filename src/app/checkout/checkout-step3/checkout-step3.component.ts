import { Component, OnInit } from '@angular/core';
import {DmWoocommerceCartService} from '../../modules/woocomerce/services/dm-woocommerce-cart.service';

@Component({
  selector: 'app-checkout-step3',
  templateUrl: './checkout-step3.component.html',
  styleUrls: ['./checkout-step3.component.scss']
})
export class CheckoutStep3Component implements OnInit {

  constructor( public woocommerceCartService: DmWoocommerceCartService ) { }

  ngOnInit() {
  }

}
