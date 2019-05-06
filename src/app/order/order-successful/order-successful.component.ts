import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {DmWoocommerceOrdersService} from '../../modules/woocomerce/services/dm-woocommerce-orders.service';
import {ActivatedRoute, Params} from '@angular/router';
import {LOrder} from '../../modules/woocomerce/l-order.model';
import {DmWoocommerceCartService} from '../../modules/woocomerce/services/dm-woocommerce-cart.service';

@Component({
  selector: 'app-order-successful',
  templateUrl: './order-successful.component.html',
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({opacity: 0, clipPath: 'polygon(0 0, 0 100%, 0% 100%, 0 0)'}),
        animate('1s ease-in', style({opacity: 1, clipPath: 'polygon(0 0, 0 100%, 300% 100%, 0 0)'})),
      ]),
    ]),
  ],
  styleUrls: ['./order-successful.component.scss']
})
export class OrderSuccessfulComponent implements OnInit {

  order: LOrder;
  loading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: DmWoocommerceOrdersService,
    private cartService: DmWoocommerceCartService,
  ) {
  }

  ngOnInit() {

    this.cartService.clearCart();

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        const id = params['id'];
        console.log('id', id);

        this.orderService.getOrder(id).subscribe(
          (order: LOrder) => {
            console.log('order', order);
            this.order = order;
            this.loading = false;
          },
          (error) => {
            console.error(error);
            this.loading = false;
          }
        );
      });
  }

}
