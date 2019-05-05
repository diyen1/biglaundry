import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {DmWoocommercePaymentService} from '../../services/dm-woocommerce-payment.service';
import {PaymentGateway} from '../../payment-gateway.model';

@Component({
  selector: 'dmwoo-payment-options',
  templateUrl: './dmwoo-payment-options.component.html',
  styleUrls: ['./dmwoo-payment-options.component.scss'],
})
export class DmwooPaymentOptionsComponent implements OnInit {

  // @Input() isRequired = true;
  // @Output() outputPaymentValid: any = new EventEmitter<boolean>();

  form: FormGroup;
  paymentOptionField;

  paymentGateways: PaymentGateway[] = [];
  loading = true;

  constructor(private paymentService: DmWoocommercePaymentService) {
  }

  ngOnInit() {

    this.paymentService.getPaymentOptions().subscribe((res: PaymentGateway[]) => {
      console.log('payment gateways', res);

      res.forEach((value, index) => {
        if (value.enabled) {
          this.paymentGateways.push(value);
        }
      });
      this.loading = false;
    });

    this.paymentOptionField = new FormControl(
      '', [
        //
      ],
    );
    //
    // if (this.isRequired) {
    //   this.paymentOptionField.setValidators([Validators.required]);
    // } else {
    //   this.paymentOptionField.setValidators([]);
    // }

    this.form = new FormGroup({
      paymentOptionField: this.paymentOptionField,
    });
  }

  changePaymentmenthod() {
    this.paymentService.currentPaymentMethod = this.form.get('paymentOptionField').value;
  }
}
