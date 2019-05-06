import {PaymentResponseType} from './payment-response-type.enum';

export interface DmWooPaymentResponse {
  type: PaymentResponseType;
  message: string;
}
