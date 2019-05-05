import {Component, Input, OnInit} from '@angular/core';
import {DmWoocommerceProductsService} from '../modules/woocomerce/services/dm-woocommerce-products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-subcategories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {

  @Input() parentId;
  subcategories = [];
  loading = false;

  constructor(
    private woocommerceProductsService: DmWoocommerceProductsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.woocommerceProductsService.getCategories([
      {
        key: 'parent',
        value: this.parentId,
      }
    ]).subscribe((subcategories: any) => {
      this.subcategories = subcategories;
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

  getBackgroundImage(image) {
    let backgroundImage = './assets/img/default-category-image.jpg';
    if (image && image != null && image.src && image.src != null) {
      backgroundImage = image.src;
    }
    return backgroundImage;
  }

}
