// Framework imports code here
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Component Imports
import { AppComponent } from './app.component';

import { LCSService } from './services/string/longest-common-substring.service';

// Service Imports
import {
  // A01Service,
  // A02Service,
  // A03Service,
  // A04Service,
  // A05Service,
  // A06Service,
  // A07Service,
  // A08Service,
  // A09Service,
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
    // A01Service,
    // A02Service,
    // A03Service,
    // A04Service,
    // A05Service,
    // A06Service,
    // A07Service,
    // A08Service,
    // A09Service,
    LCSService,
  ],
})

export class AppModule { }
