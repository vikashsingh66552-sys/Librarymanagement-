import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="site-header">
      <a class="brand" routerLink="/">
        <span class="brand-mark">SL</span>
        <span class="brand-text">Smart Library<small>Knowledge for everyone</small></span>
      </a>
      <button class="menu-btn" type="button" (click)="open = !open" [attr.aria-expanded]="open" aria-label="Toggle menu">☰</button>
      <nav [class.open]="open" (click)="open = false">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <a routerLink="/about" routerLinkActive="active">About Library</a>
        <a routerLink="/books" routerLinkActive="active">Books</a>
        <a routerLink="/registration" routerLinkActive="active">Registration</a>
      </nav>
    </header>

    <main><router-outlet /></main>

    <footer class="site-footer">
      <div>
        <strong>Smart Library Management System</strong>
        <span>© Smart Library | All Rights Reserved</span>
      </div>
      <a href="https://www.google.com" target="_blank" rel="noopener">Useful link: Google ↗</a>
    </footer>
  `,
})
export class AppComponent {
  open = false;
}
