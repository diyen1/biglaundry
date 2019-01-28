import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {addParamsToUrl} from '../../add-params-to-url';

@Injectable({
  providedIn: 'root'
})
export class DmWoocommerceProductsService {

  constructor(private http: HttpClient) { }

  getCategory(id, params = []) {
    let url = environment.wcOrigin + '/products/categories/' + id;
    url = addParamsToUrl(url, params);
    return this.http.get(url);
  }

  getCategories(params = []) {
    let url = environment.wcOrigin + '/products/categories';
    url = addParamsToUrl(url, params);
    return this.http.get(url);
  }

  getProducts(params = []) {
    let url = environment.wcOrigin + '/products';
    url = addParamsToUrl(url, params);
    return this.http.get(url);
  }
}
