import {Component, Input, OnInit} from '@angular/core';
import {DmWoocommerceCartService} from '../../modules/woocomerce/services/dm-woocommerce-cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Input() quantity;
  @Input() cartItem;

  constructor(
    public woocommerceCartService: DmWoocommerceCartService,
  ) { }

  ngOnInit() {
  }

}
