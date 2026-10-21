import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';

// Hash routing => GitHub Pages par refresh karne par 404 nahi aata
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation())],
};
