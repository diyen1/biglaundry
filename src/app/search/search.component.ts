import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DmWoocommerceProductsService} from '../modules/woocomerce/services/dm-woocommerce-products.service';
import {DmWoocommerceCartService} from '../modules/woocomerce/services/dm-woocommerce-cart.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  loading = false;
  products = [];
  searchKey = '';

  constructor(
    public router: Router,
    private woocommerceProductsService: DmWoocommerceProductsService,
    private activatedRoute: ActivatedRoute,
    public woocommerceCartService: DmWoocommerceCartService,
  ) {
  }

  ngOnInit() {
    this.search(this.searchKey);
  }

  changedSearchKey(event, searchKey) {
    this.searchKey = searchKey;
    if (event.charCode === 13 && this.searchKey.trim() !== '') {
      this.search(searchKey);
    }
  }

  search(searchKey) {
    this.loading = true;

    // fetching products for this category
    this.woocommerceProductsService.getProducts(
      [
        {
          key: 'search',
          value: searchKey,
        },
        {
          key: 'orderby',
          value: 'title',
        },
        {
          key: 'order',
          value: 'asc',
        },
      ]
    ).subscribe((products: any) => {
      console.log('res', products);
      this.products = products;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }
}


