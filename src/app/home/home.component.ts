import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DmWoocommerceProductsService} from '../modules/woocomerce/services/dm-woocommerce-products.service';
import {environment} from '../../environments/environment';
import {AppService} from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'biglaundry';

  menu = [];

  constructor(
    private woocommerceProductsService: DmWoocommerceProductsService,
    private appService: AppService,
  ) {
    // if (environment.production) {
    //   this.menu = [
    //     {
    //       'name': 'tops',
    //       'label': 'Tops',
    //       // 'woocommerceId': '16',
    //       'woocommerceId': '1385',
    //     },
    //     {
    //       'name': 'bedding',
    //       'label': 'Bedding',
    //       // 'woocommerceId': '21',
    //       'woocommerceId': '1372',
    //     },
    //     {
    //       'name': 'suits',
    //       'label': 'Suits',
    //       // 'woocommerceId': '25',
    //       'woocommerceId': '1383',
    //     },
    //     {
    //       'name': 'trousers',
    //       'label': 'Trousers',
    //       // 'woocommerceId': '26',
    //       'woocommerceId': '1386',
    //     },
    //     {
    //       'name': 'dresses',
    //       'label': 'Dresses',
    //       // 'woocommerceId': '29',
    //       'woocommerceId': '1375',
    //     },
    //     {
    //       'name': 'outdoor',
    //       'label': 'Outdoor',
    //       // 'woocommerceId': '31',
    //       'woocommerceId': '1379',
    //     },
    //     {
    //       'name': 'accessories',
    //       'label': 'Accessories',
    //       // 'woocommerceId': '34',
    //       'woocommerceId': '1372',
    //     },
    //   ];
    // }
  }

  ngOnInit() {

    this.appService.getSiteCategories().subscribe((menu: any) => {
      this.menu = menu;
    });
    /*this.wooProducs.retrieveProducts().subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err);
    });*/

    // this.woocommerceProductsService.getCategories([
    //   {
    //     key: 'parent',
    //     value: 16,
    //   }
    //   ]).subscribe((subcategories: any) => {
    //   console.log('res', subcategories);
    //   this.subcategories = subcategories;
    // });
    // environment.wcOrigin + '/products/categories?parent=16'
  }

}
