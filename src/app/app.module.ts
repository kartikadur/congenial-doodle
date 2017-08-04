// Framework imports code here
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Code imports go here
import { AppComponent } from './app.component';

import {
  A01Service,
  A02Service,
  A03Service,
} from './services';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [
    A01Service,
    A02Service,
    A03Service,
  ],
})

export class AppModule { }
