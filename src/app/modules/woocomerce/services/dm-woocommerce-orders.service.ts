import {Injectable, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {DmWoocommerceCartService} from './dm-woocommerce-cart.service';
import {Order} from 'ngx-wooapi';
import {addParamsToUrl} from '../../add-params-to-url';
import {Billing, Shipping} from 'ngx-wooapi/orders/orders.interface';
import {LOrder} from '../l-order.model';

@Injectable({
  providedIn: 'root'
})
export class DmWoocommerceOrdersService {

  order: LOrder = {
    billing: {
      // last_name: '',
      // company: '',
      address_1: 'Tarred Malingo',          // handled
      address_2: '',
      city: 'buea',               // handled
      // state: '',
      // postcode: '',
      // country: '',
      // email: '',
      phone: ''
    },
    // cart_hash: '',
    // cart_tax: '',
    coupon_lines: [],
    // created_via: '',
    // currency: '',
    customer_id: 0,
    customer_ip_address: '',
    customer_note: '',         // handled
    customer_user_agent: '',
    // date_completed: null,
    // date_completed_gmt: null,
    // date_created: new Date(),
    // date_created_gmt: new Date(),
    // date_modified: new Date(),
    // date_modified_gmt: new Date(),
    // date_paid: null,
    // date_paid_gmt: null,
    // discount_tax: '',
    // discount_total: '',
    // fee_lines: [],
    // id: '',
    line_items: [],          // handled
    meta_data: [],
    number: '',
    order_key: '',
    parent_id: 0,
    payment_method: '',       // handled
    // payment_method_title: '',
    // prices_include_tax: false,
    refunds: [],
    set_paid: false,
    shipping: {
      last_name: '',
      company: '',
      address_1: '',
      address_2: '',
      city: '',
      state: '',
      postcode: '237',
      country: 'Cameroon',
    },
    additional_pickup_date: '',
    additional_pickup_time: '',
    // shipping_lines: [],
    // shipping_tax: '',
    // shipping_total: '',
    // status: '',
    // tax_lines: [],
    // total: '',
    // total_tax: '',
    // transaction_id: '0',
    // version: 1.0,
  };

  orderMeta: any = {
    collectionDate: '',
    collectionTime: '8:00am',
  };

  constructor(
    private http: HttpClient,
    private woocommerceCart: DmWoocommerceCartService,
  ) {
    const billingString =  localStorage.getItem('biglaundry_billing');

    if (billingString && billingString != null && billingString !== '') {
      this.order.billing = JSON.parse(billingString);
    }
  }

  getOrder(id, params = []) {
    let url = environment.wcOrigin + '/orders/' + id;
    url = addParamsToUrl(url, params);
    return this.http.get(url);
  }

  getOrders(params = []) {
    let url = environment.wcOrigin + '/orders';
    url = addParamsToUrl(url, params);
    return this.http.get(url);
  }

  updateAddress(data) {
    this.order.billing.address_1 = data.address_1;
    this.order.billing.city = data.city;
  }

  updateAccount(data) {
    this.order.billing.address_1 = data.address_1;
    this.order.billing.city = data.city;
    this.order.billing.last_name = data.name;
    this.order.billing.phone = data.phone;

    localStorage.setItem('biglaundry_billing', JSON.stringify(this.order.billing));
  }

  updateCollectionTime(data) {
    this.orderMeta.collectionDate = data.collectionDate.toString();

    this.orderMeta.collectionTime = data.collectionTime;

    this.order.additional_pickup_date = data.collectionDate;
    this.order.additional_pickup_time = data.collectionTime;
  }

  updateOrderItems() {
    this.order.line_items = [];
    for (let i = 0; i < this.woocommerceCart.cart.length; i++) {
      this.order.line_items.push({
        product_id: this.woocommerceCart.cart[i].product_id,
        quantity: this.woocommerceCart.cart[i].quantity,
      });
    }
  }

  updatePayment(data) {
    this.order.payment_method = data.paymentMethod;
  }

  addOrder() {
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
    console.log('posting order ...', this.order);
    const url = environment.wcOrigin + '/orders';
    return this.http.post(url, this.order);
  }
}
