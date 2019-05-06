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

  loading = false;

  constructor(
    private fb: FormBuilder,
    public woocommerceCartService: DmWoocommerceCartService,
    public woocommerceOrderService: DmWoocommerceOrdersService,
    public cartService: DmWoocommerceCartService,
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

    // this.woocommerceOrderService.addOrder(formValue).subscribe((res) => {
    //   console.log('order', res);
    // });
  }

}
