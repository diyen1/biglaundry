import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DmWoocommerceCartService} from '../modules/woocomerce/services/dm-woocommerce-cart.service';
import {DmWoocommerceOrdersService} from '../modules/woocomerce/services/dm-woocommerce-orders.service';
import {CheckoutConfirmationComponent} from '../checkout-confirmation/checkout-confirmation.component';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  form: FormGroup;

  // cart = [
  //   {product_id: 12, quantity: 1, price: "4000"},
  //   {product_id: 11, quantity: 2, price: "5000"},
  //   {product_id: 10, quantity: 2, price: "3000"},
  // ];

  loading = false;

  fields = {
    type: 'multistep',
    tabs: [
      {
        tabName: 'Address',
        fields: [
          {
            key: 'phone',
            name: 'Phone',
            type: 'text',
          },
          {
            key: 'addressLine2',
            name: 'Town / City',
            type: 'select',
            values: [
              {'label': 'Buea', 'value': 'buea'},
            ]
          },
          {
            key: 'addressLine1',
            name: 'Quarter / Locality',
            type: 'select',
            values: [
              {'label': 'Tarred Malingo', 'value': 'tarred-malingo'},
              {'label': 'Untarred Malingo', 'value': 'untarred-malingo'},
              {'label': 'Check Point', 'value': 'checkpoint'},
            ]
          },
        ]
      },
      {
        tabName: 'Delivery',
        fields: [
          {
            key: 'collectionDate',
            name: 'Collection Date',
            type: 'text',
          },
          {
            key: 'collectionTime',
            name: 'Collection Time',
            type: 'text',
          },
          {
            key: 'deliveryDate',
            name: 'Delivery Date',
            type: 'text',
          },
          {
            key: 'deliveryTime',
            name: 'Delivery Time',
            type: 'text',
          },
          {
            key: 'deliveryNotes',
            name: 'Delivery Notes',
            type: 'text_area',
          },
        ]
      },
      {
        tabName: 'Order Confirmation',
        fields: [
          {
            key: 'app-checkout-confirmation',
            component: CheckoutConfirmationComponent,
            name: 'app-checkout-confirmation',
            type: 'component',
          },
        ]
      },
  ]};

  constructor(
    private fb: FormBuilder,
    public woocommerceCartService: DmWoocommerceCartService,
    public woocommerceOrderService: DmWoocommerceOrdersService,
    ) {
    this.form =  fb.group({
      'phone':  ['', Validators.required],
      'addressLine1':  ['', Validators.required],
      'addressLine2':  [''],
      'postCode':  [''],
      'deliveryNotes':  [''],
      'collectionDate':  [''],
      'collectionTime':  [''],
      'deliveryDate':  [''],
      'deliveryTime':  [''],
    });
  }

  ngOnInit() {
  }

  order(formValue) {

    const orderParams = {
      'payment_method': 'MomMo',
      'payment_method_title': 'Mtn Mobile Money',
      'set_paid': true,
      'billing': {
        // "first_name": "Diyen",
        // "last_name": "Momjnag",
        'address_1': formValue.addressLine1,
        'address_2': formValue.addressLine2,
        'city': 'Buea',
        // "state": "CA",
        postcode: formValue.postCode,
        'country': 'Cameroon',
        // "email": "john.doe@example.com",
        'phone': formValue.phone,
        'deliveryNotes': formValue.deliveryNotes
      },
      'shipping': {
        // "first_name": "Diyen",
        // "last_name": "Momjnag",
        'address_1': formValue.addressLine1,
        'address_2': formValue.addressLine2,
        'city': 'Buea',
        // "state": "CA",
        postcode: formValue.postCode,
        'country': 'Cameroon',
      },
      'line_items': this.woocommerceCartService.cart,
      //   [
      //   {
      //     "product_id": 93,
      //     "quantity": 2
      //   },
      //   {
      //     "product_id": 22,
      //     "variation_id": 23,
      //     "quantity": 1
      //   }
      // ],
      // "shipping_lines": [
      //   {
      //     "method_id": "flat_rate",
      //     "method_title": "Flat Rate",
      //     "total": 10
      //   }
      // ]
    };

    this.woocommerceOrderService.addOrder(formValue).subscribe((res) => {
      console.log('order', res);
    });
  }

}
