import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DmfbFileUploadComponent} from './dmfb-file-upload/dmfb-file-upload.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';



@NgModule({
  declarations: [
    DmfbFileUploadComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DmfbFileUploadComponent,
  ],
  providers: [],
  bootstrap: []
})
export class DmfbFileUploadModule { }
