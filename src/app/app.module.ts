// Framework imports code here
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Code imports go here
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
  ],
})

export class AppModule { }
