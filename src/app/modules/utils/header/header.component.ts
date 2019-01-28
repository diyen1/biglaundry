import {Component, Input, OnInit} from '@angular/core';
import {UtilsService} from '../utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() header = 'header';
  @Input() transparent = false;

  constructor(public utilsService: UtilsService) { }

  ngOnInit() {
  }

}
