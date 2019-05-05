import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {PaymentOption} from '../../payment-gateway.model';

@Component({
  selector: 'dmwoo-momo',
  templateUrl: './dmwoo-momo.component.html',
  styleUrls: ['./dmwoo-momo.component.scss'],
})
export class DmwooMomoComponent extends PaymentOption implements OnInit {

  @Input() isRequired = true;
  @Output() outputPaymentValid: any = new EventEmitter<boolean>();

  form: FormGroup;
  isValid = false;
  value = '';
  phoneField;

  constructor() {
    super();
  }

  static process_payment(): void {

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

    if (newIsValid !== this.isValid) {
      this.isValid = newIsValid;
      this.outputPaymentValid.emit(newIsValid);
    }
  }
}
