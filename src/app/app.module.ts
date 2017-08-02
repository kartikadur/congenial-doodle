// Framework imports code here
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Code imports go here
import { AppComponent } from './app.component';

import { A01Component } from './a01/a01.component';
import { A01Service } from './a01/a01.service';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    A01Component,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [
    A01Service,
  ],
})

export class AppModule { }
