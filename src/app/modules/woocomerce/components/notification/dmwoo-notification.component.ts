import {Component} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material';
import {DmWoocommercePaymentService} from '../../services/dm-woocommerce-payment.service';

@Component({
  selector: 'dmwoo-notification',
  templateUrl: './dmwoo-notification.component.html',
  styleUrls: ['./dmwoo-notification.component.scss'],
})
export class DmwooNotificationComponent {

  constructor(
    private bottomSheetRef: MatBottomSheetRef<DmwooNotificationComponent>,
    public paymentService: DmWoocommercePaymentService
    ) {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
