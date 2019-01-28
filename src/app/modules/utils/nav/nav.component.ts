import {Component, Input, OnInit} from '@angular/core';
import {UtilsService} from '../utils.service';
import {Router} from '@angular/router';

@Component({
  selector: 'util-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() transparent = false;
  @Input() back = null;
  @Input() displayBack = true;
  @Input() title;

  constructor(
    public utilsService: UtilsService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  goBack() {
    if (this.back && this.back != null) {
      this.router.navigate([this.back]);
    } else {
      window.history.back();
    }
  }

  goHome() {
    this.router.navigate(['shop']);
  }

  goCategories() {
    this.router.navigate(['categories']);
  }
}
