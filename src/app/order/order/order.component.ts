import {Component, Input, OnInit} from '@angular/core';
import {DmWoocommerceCartService} from '../../modules/woocomerce/services/dm-woocommerce-cart.service';
import {Order} from 'ngx-wooapi';
import {DateHandler} from '../../date-handler';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input() order: Order;
  orderDate: Date = null;

  constructor(
    public woocommerceCartService: DmWoocommerceCartService,
  ) { }

  ngOnInit() {
    if (this.order && this.order != null) {
      this.orderDate = new Date(DateHandler.convertToDate(this.order.customer_note));
      console.log('DateHandler.convertToDate(this.order.customer_note)', DateHandler.convertToDate('GMT+0100 (West Africa Standard Time)'));
      console.log(this.order.customer_note, this.orderDate);
      console.log('---------------------');
    }
  }

}
