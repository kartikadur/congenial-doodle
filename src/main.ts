// To prevent reflect-metadata shim errors
import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import './styles.scss';

if (process.env.ENV === 'production' || process.env.ENV === 'prod') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
