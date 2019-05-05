export interface PaymentGateway {
  description: string;
  enabled: boolean;
  id: string;
  method_description: string;
  method_supports: string[];
  method_title: string;
  order: number;
  settings: any; // {title: {…}, instructions: {…}}
  title: string;
}

export class PaymentOption {
  // payment_fields(): void;
  static process_payment() {
    console.log('PaymentOption process payment');
  }
  // payment_button(): void;
}
