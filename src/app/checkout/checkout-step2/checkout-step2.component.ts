import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {
  }

  ngOnInit() {

    this.collectionDate = new FormControl('', []);
    this.collectionTime = new FormControl('', []);
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
    this.router.navigate(['/checkout/payment']);
  }

}
