// Framework imports code here
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Package imports go here
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

// Code imports go here
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ]
})

export class AppModule { }
