import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './pages/books/books.component';
import { RegistrationComponent } from './pages/registration/registration.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home | Smart Library' },
  { path: 'about', component: AboutComponent, title: 'About Library | Smart Library' },
  { path: 'books', component: BooksComponent, title: 'Books | Smart Library' },
  { path: 'registration', component: RegistrationComponent, title: 'Registration | Smart Library' },
  { path: '**', redirectTo: '' },
];
