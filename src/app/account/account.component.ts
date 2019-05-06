import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DmWoocommerceOrdersService} from '../modules/woocomerce/services/dm-woocommerce-orders.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  form: FormGroup;
  address_1: FormControl;
  city: FormControl;

  phone: FormControl;
  first_name: FormControl;
  last_name: FormControl;

  constructor(
    private router: Router,
    private orderService: DmWoocommerceOrdersService,
  ) {
  }

  ngOnInit() {

    this.address_1 = new FormControl(this.orderService.order.billing.address_1, [Validators.required]);
    this.city = new FormControl(this.orderService.order.billing.city, [Validators.required]);

    this.phone = new FormControl(this.orderService.order.billing.phone, [Validators.required]);
    this.first_name = new FormControl(
      this.orderService.order.billing.first_name,
      [Validators.required]
    );
    this.last_name = new FormControl(
      this.orderService.order.billing.last_name,
      [Validators.required]
    );

    this.form = new FormGroup({
      address_1: this.address_1,
      city: this.city,
      phone: this.phone,
      first_name: this.first_name,
      last_name: this.last_name,
    });
  }

  onSubmit (formValue) {
    this.orderService.updateAccount(formValue);
  }

}
