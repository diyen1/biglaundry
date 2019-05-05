import { Component, OnInit } from '@angular/core';
import {Order, WoocommerceOrderService} from 'ngx-wooapi';
import {DmWoocommerceOrdersService} from '../../modules/woocomerce/services/dm-woocommerce-orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  loading = false;

  orders: Order[] = [];

  constructor(
    private woocommerceOrderService: DmWoocommerceOrdersService,
  ) { }

  ngOnInit() {
    this.loading = true;

    // fetching products for this category
    this.woocommerceOrderService.getOrders().subscribe((orders: Order[]) => {
      console.log('res', orders);
      this.orders = orders;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

}
