import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CheckoutService} from '../services/checkout.service';
import {DmWoocommerceOrdersService} from '../../modules/woocomerce/services/dm-woocommerce-orders.service';

@Component({
  selector: 'app-checkout-step2',
  templateUrl: './checkout-step2.component.html',
  styleUrls: ['./checkout-step2.component.scss']
})
export class CheckoutStep2Component implements OnInit {

  form: FormGroup;
  collectionDate: FormControl;
  collectionTime: FormControl;
  deliveryDate: FormControl;
  deliveryTime: FormControl;
  deliveryNotes: FormControl;

  constructor(
    private router: Router,
    private orderService: DmWoocommerceOrdersService,
    ) {
  }

  ngOnInit() {

    this.collectionDate = new FormControl(this.orderService.orderMeta.collectionDate, [Validators.required]);
    this.collectionTime = new FormControl(this.orderService.orderMeta.collectionTime, [Validators.required]);
    this.deliveryDate = new FormControl('', []);
    this.deliveryTime = new FormControl('', []);
    this.deliveryNotes = new FormControl('', []);

    this.form = new FormGroup({
      collectionDate: this.collectionDate,
      collectionTime: this.collectionTime,
      deliveryDate: this.deliveryDate,
      deliveryTime: this.deliveryTime,
      deliveryNotes: this.deliveryNotes,
    });
  }

  onSubmit (formValue) {
    this.orderService.updateCollectionTime(formValue);
    this.router.navigate(['/checkout/basket']);
  }

}
