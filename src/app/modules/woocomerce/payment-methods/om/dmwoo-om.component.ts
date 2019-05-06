import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {PaymentOption} from '../../payment-gateway.model';
import {DmWoocommercePaymentService} from '../../services/dm-woocommerce-payment.service';

@Component({
  selector: 'dmwoo-om',
  templateUrl: './dmwoo-om.component.html',
  styleUrls: ['./dmwoo-om.component.scss'],
})
export class DmwooOmComponent implements OnInit {

  @Input() isRequired = true;
  @Output() outputPaymentValid: any = new EventEmitter<boolean>();

  form: FormGroup;
  isValid = false;
  value = '';
  phoneField;

  constructor(private paymentService: DmWoocommercePaymentService) {
  }

  ngOnInit() {
    this.phoneField = new FormControl(
      this.value, [
        //
      ],
    );

    if (this.isRequired) {
      this.phoneField.setValidators([Validators.required]);
    } else {
      this.phoneField.setValidators([]);
    }

    this.form = new FormGroup({
      phoneField: this.phoneField,
    });
  }

  change(event) {
    // console.log('event', event);
    const value = this.form.get('phoneField').value;
    const newIsValid = !!(value && value.trim() !== '' );
    this.paymentService.currentPaymentMethodVars.phone = value;

    if (newIsValid !== this.isValid) {
      this.isValid = newIsValid;
      this.outputPaymentValid.emit(newIsValid);
    }
  }

}
