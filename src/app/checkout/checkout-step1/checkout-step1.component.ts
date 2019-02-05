import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout-step1',
  templateUrl: './checkout-step1.component.html',
  styleUrls: ['./checkout-step1.component.scss']
})
export class CheckoutStep1Component implements OnInit {

  form: FormGroup;
  addressLine1: FormControl;
  addressLine2: FormControl;

  constructor(private router: Router) {
  }

  ngOnInit() {

    this.addressLine1 = new FormControl('Tarred Malingo', []);
    this.addressLine2 = new FormControl('buea', []);

    this.form = new FormGroup({
      addressLine1: this.addressLine1,
      addressLine2: this.addressLine2,
    });
  }

  onSubmit (formValue) {
    this.router.navigate(['/checkout/delivery']);
  }
}
