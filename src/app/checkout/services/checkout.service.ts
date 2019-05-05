import {Injectable} from '@angular/core';
import {Order} from 'ngx-wooapi';
import {DmWoocommerceCartService} from '../../modules/woocomerce/services/dm-woocommerce-cart.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  order: Order = {
    billing: {
      last_name: '',
      company: '',
      address_1: '',          // handled
      address_2: '',
      city: '',               // handled
      state: '',
      postcode: '',
      country: '',
      email: '',
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

  constructor(
    public woocommerceCartService: DmWoocommerceCartService,
  ) {
  }

  updateAddress(data) {
    this.order.billing.address_1 = data.address_1;
    this.order.billing.city = data.city;
  }

  updateCollectionTime(data) {
    this.order.customer_note = data.collectionDate + ' ' + data.collectionTime;
  }

  updateOrderItems() {
    this.order.line_items = [];
    for (let i = 0; i < this.woocommerceCartService.cart.length; i++) {
      this.order.line_items.push({
        product_id: this.woocommerceCartService.cart[i].product_id,
        quantity: this.woocommerceCartService.cart[i].quantity,
      });
    }
  }

  updatePayment(data) {
    this.order.payment_method = data.payment_method;
  }

}
