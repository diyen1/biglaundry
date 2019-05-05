import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {DmWoocommercePaymentService} from '../../services/dm-woocommerce-payment.service';
import {PaymentGateway} from '../../payment-gateway.model';
import {DmwooMomoComponent} from '../momo/dmwoo-momo.component';
import {DmwooCodComponent} from '../cod/dmwoo-cod.component';
import {DmwooOmComponent} from '../om/dmwoo-om.component';

@Component({
  selector: 'dmwoo-payment-button',
  templateUrl: './dmwoo-payment-button.component.html',
  styleUrls: ['./dmwoo-payment-button.component.scss'],
})
export class DmwooPaymentButtonComponent implements OnInit {

  // @Input() isRequired = true;
  // @Output() outputPaymentValid: any = new EventEmitter<boolean>();
  // isValid = false;
  // value = '';
  paymentOption;

  // paymentGateways: PaymentGateway[] = [];
  // loading = true;

  constructor(public paymentService: DmWoocommercePaymentService) {
  }

  ngOnInit() {
  }

  placeOrder() {
    switch (this.paymentService.currentPaymentMethod) {
      case 'mtn_mobile_money_cameroon':
        DmwooMomoComponent.process_payment(); break;
      case 'orange_money_cameroon':
        DmwooOmComponent.process_payment(); break;
      case 'cod':
        DmwooCodComponent.process_payment(); break;
    }
  }
}
