import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getSiteCategories() {
    return this.http.get(environment.origin + '/wp-json/dm/get_site_categories');
  }
}
