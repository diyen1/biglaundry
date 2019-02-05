import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule, MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatSelectModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {SearchNavComponent} from '../utils/search-nav/search-nav.component';
import {ReactiveFormsModule} from '@angular/forms';
import {WoocomerceModule} from '../woocomerce/woocomerce.module';
import {BrowserModule} from '@angular/platform-browser';
import {AddToCartComponent} from './add-to-cart/add-to-cart.component';

const declarations = [
  AddToCartComponent,
];

const modules = [
  MatToolbarModule,
  MatTabsModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSelectModule,

  CommonModule,
  ReactiveFormsModule,
  WoocomerceModule,
];

@NgModule({
  declarations: [
    ... declarations
  ],
  imports: [
    ... modules
  ],
  exports: [
    ... declarations
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
