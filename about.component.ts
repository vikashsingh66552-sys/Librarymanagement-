import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-head">
      <p class="kicker">About our library</p>
      <h1>About Library</h1>
      <p class="lead">
        Our library contains thousands of books related to Computer Science, Engineering,
        Management and Competitive Exams. Students can issue books, read journals, and
        access digital learning resources.
      </p>
    </section>

    <section class="two-col">
      <div>
        <h2>Library rules</h2>
        <ol class="rules">
          @for (rule of rules; track rule) {
            <li>{{ rule }}</li>
          }
        </ol>
      </div>
      <div>
        <h2>Library facilities</h2>
        <ul class="ticks">
          @for (f of facilities; track f) {
            <li>{{ f }}</li>
          }
        </ul>
        <a class="btn primary" routerLink="/registration">Join the library</a>
      </div>
    </section>
  `,
})
export class AboutComponent {
  rules = ['Maintain silence', 'Return books on time', 'Carry library card', 'Keep books safe'];
  facilities = ['Digital Library', 'Free Wi-Fi', 'Reading Hall', 'Computer Lab'];
}
