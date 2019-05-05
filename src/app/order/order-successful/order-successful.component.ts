import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-order-successful',
  templateUrl: './order-successful.component.html',
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ opacity: 0, clipPath: 'polygon(0 0, 0 100%, 0% 100%, 0 0)' }),
        animate('1s ease-in',  style({ opacity: 1, clipPath: 'polygon(0 0, 0 100%, 300% 100%, 0 0)' })),
      ]),
    ]),
  ],
  styleUrls: ['./order-successful.component.scss']
})
export class OrderSuccessfulComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
