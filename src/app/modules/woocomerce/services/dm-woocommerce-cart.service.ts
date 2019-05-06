import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DmWoocommerceCartService {

  cart: any = [];
  totalPrice = 0;

  constructor(private http: HttpClient) {
    console.log('this.cart', this.cart);
    this.initializeCartData();
    this.totalPrice = this.getTotalPrice();
  }

  addToCart(product, quantity = 1, variation_id = 0, variation = '') {
    const product_id = (product.id && product.id != null) ? product.id : product.product_id;
    const product_name = (product.id && product.id != null) ? product.name : product.product_name;
    const product_price = product.price;

    const data = {
      product_id: product_id,
      product_name: product_name,
      price: product_price,
      quantity: quantity,
    };

    for (let i = 0; i < this.cart.length; i++) {
      if (+this.cart[i].product_id === +data.product_id) {
        this.cart[i].quantity += quantity;
        this.totalPrice = this.getTotalPrice();
        this.storeCartData();
        return 0;
      }
    }

    this.cart.push(data);
    this.totalPrice = this.getTotalPrice();
    this.storeCartData();
    return 0;
  }

  // -1 to remove all
  removeFromCart(product, quantity = 1, variation_id = 0, variation = '') {
    const product_id = (product.id && product.id != null) ? product.id : product.product_id;
    const product_name = (product.id && product.id != null) ? product.name : product.product_name;
    const product_price = product.price;

    const data = {
      product_id: product_id,
      product_name: product_name,
      price: product_price,
      quantity: quantity,
    };

    for (let i = 0; i < this.cart.length; i++) {
      if (+this.cart[i].product_id === +data.product_id) {
        if (+this.cart[i].quantity === 1 || +quantity === -1) {
          delete this.cart[i];
          this.cart.splice(i, 1); // this.cart.indexOf('element')
        } else {
          this.cart[i].quantity -= quantity;
        }
        this.totalPrice = this.getTotalPrice();
        this.storeCartData();
        return 0;
      }
    }

    // this.cart.push(data);
    this.totalPrice = this.getTotalPrice();
    this.storeCartData();
    return 0;
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.cart.length; i++) {
      totalPrice += +this.cart[i].price * +this.cart[i].quantity;
    }
    return totalPrice;
  }

  getItemCount(id) {
    for (let i = 0; i < this.cart.length; i++) {
      if (+this.cart[i].product_id === id) {
        return this.cart[i].quantity;
      }
    }
    return 0;
  }

  getItemCountText(id) {
    const getItemCountText = this.getItemCount(id);
    return (getItemCountText > 0) ? getItemCountText + 'x' : '';
  }

  storeCartData() {
    localStorage.setItem('biglaundry_cart', JSON.stringify(this.cart));
  }

  initializeCartData() {
    if (this.cart && this.cart.length > 0) {
      return;
    }
    const storedCartStr = localStorage.getItem('biglaundry_cart');

    if (storedCartStr && storedCartStr.trim() !== '') {
      const storedCart = JSON.parse(storedCartStr);
      if (storedCart && storedCart.length > 0) {
        this.cart = storedCart;
      }
    }
  }

  clearCart() {
    this.cart = [];
    this.totalPrice = 0;
    this.storeCartData();
  }

  // getCart() {
  //   const url = environment.wcLegacyOrigin + '/cart?key=404dcc91b2aeaa7caa47487d1483e48a';
  //   return this.http.get(url).subscribe((cartData: any) => {
  //     this.cart = cartData;
  //     console.log('this.cart', this.cart);
  //   });
  // }
}
