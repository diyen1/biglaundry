import {Component, Input, OnInit} from '@angular/core';
import {DmWoocommerceCartService} from '../../modules/woocomerce/services/dm-woocommerce-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product;

  constructor(
    public woocommerceCartService: DmWoocommerceCartService,
  ) { }

  ngOnInit() {
  }

}
