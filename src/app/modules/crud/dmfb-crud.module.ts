import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CrudCreateComponent} from './create/crud-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import {DmfbFileUploadModule} from '../file-upload/dmfb-file-upload.module';
import {CrudCreateNormalComponent} from './create/create-normal/crud-create-normal.component';
import {CrudCreateMultistepComponent} from './create/create-multistep/crud-create-multistep.component';

const components = [
  CrudCreateComponent,
  CrudCreateNormalComponent,
  CrudCreateMultistepComponent,
];

@NgModule({
  declarations: [
    ... components,
  ],
  imports: [
    BrowserModule,
    DmfbFileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    // InfiniteScrollModule,
    RouterModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    ... components,
  ],
  bootstrap: []
})
export class DmfbCrudModule { }
