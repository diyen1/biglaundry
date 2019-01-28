import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {DmWoocommerceCartService} from './dm-woocommerce-cart.service';

@Injectable({
  providedIn: 'root'
})
export class DmWoocommerceOrdersService {

  constructor(
    private http: HttpClient,
    private woocommerceCart: DmWoocommerceCartService,
    ) { }

  addOrder(params = {}) {
    // params = {
    //   "payment_method": "MomMo",
    //   "payment_method_title": "Mtn Mobile Money",
    //   "set_paid": true,
    //   "billing": {
    //     "first_name": "Diyen",
    //     "last_name": "Momjang",
    //     "address_1": "Green Court, Molyko",
    //     "address_2": "",
    //     "city": "Buea",
    //     // "state": "CA",
    //     // "postcode": "94103",
    //     "country": "Cameroon",
    //     // "email": "john.doe@example.com",
    //     "phone": "(555) 555-5555"
    //   },
    //   "shipping": {
    //     "first_name": "Diyen",
    //     "last_name": "Momjang",
    //     "address_1": "Green Court, Molyko",
    //     "address_2": "",
    //     "city": "Buea",
    //     // "state": "CA",
    //     // "postcode": "94103",
    //     "country": "Cameroon"
    //   },
    //   "line_items": this.woocommerceCart.cart,
    //   //   [
    //   //   {
    //   //     "product_id": 93,
    //   //     "quantity": 2
    //   //   },
    //   //   {
    //   //     "product_id": 22,
    //   //     "variation_id": 23,
    //   //     "quantity": 1
    //   //   }
    //   // ],
    //   // "shipping_lines": [
    //   //   {
    //   //     "method_id": "flat_rate",
    //   //     "method_title": "Flat Rate",
    //   //     "total": 10
    //   //   }
    //   // ]
    // };
    const url = environment.wcOrigin + '/orders';
    return this.http.post(url, params);
  }
}
