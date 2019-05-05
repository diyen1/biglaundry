import {Billing, Order} from 'ngx-wooapi/orders/orders.interface';

export interface LOrder extends Order {
  additional_pickup_date: string;
  additional_pickup_time: string;
  billing?: LBilling;
}

export interface LBilling extends Billing {
  last_name?: string;
  first_name?: string;
  company?: string;
  address_1?: string;
  address_2?: string;
  city?: string;
  state?: string;
  postcode?: string;
  country?: string;
  email?: string;
  phone?: string;
}
