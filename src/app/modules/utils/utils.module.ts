import { NgModule } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {NavComponent} from './nav/nav.component';
import {CommonModule} from '@angular/common';
import {UtilsService} from './utils.service';
import {MatFormFieldModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {SearchNavComponent} from './search-nav/search-nav.component';

const declarations = [
  HeaderComponent,
  NavComponent,
  SearchNavComponent,
];

const modules = [
  MatToolbarModule,
  MatFormFieldModule,
  CommonModule,
  MatIconModule,
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
  providers: [
    UtilsService,
  ],
  bootstrap: []
})
export class UtilsModule { }
