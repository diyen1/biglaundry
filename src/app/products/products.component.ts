import { Component, OnInit } from '@angular/core';
import {DmWoocommerceProductsService} from '../modules/woocomerce/services/dm-woocommerce-products.service';
import {ActivatedRoute, Params} from '@angular/router';
import {DmWoocommerceCartService} from '../modules/woocomerce/services/dm-woocommerce-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  subcategory;
  products = [];
  loading = false;

  constructor(
    private woocommerceProductsService: DmWoocommerceProductsService,
    private activatedRoute: ActivatedRoute,
    public woocommerceCartService: DmWoocommerceCartService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        // this.loading = true;
        const id = params['id'];

        // fetching category information
        this.woocommerceProductsService.getCategory(id).subscribe((subcategory: any) => {
          this.subcategory = subcategory;
        });

        this.loading = true;

        // fetching products for this category
        this.woocommerceProductsService.getProducts([
          {
            key: 'category',
            value: id,
          }
        ]).subscribe((products: any) => {
          this.products = products;
          this.loading = false;
        }, () => {
          this.loading = false;
        });
      });
  }
}
