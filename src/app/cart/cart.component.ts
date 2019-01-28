import {Component, OnInit} from '@angular/core';
import {DmWoocommerceCartService} from '../modules/woocomerce/services/dm-woocommerce-cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    public woocommerceCartService: DmWoocommerceCartService,
    public router: Router,
  ) {
  }

  ngOnInit() {
  }

}
