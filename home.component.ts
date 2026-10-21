import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-copy">
        <p class="kicker">Welcome to your digital library</p>
        <h1>Knowledge opens every door.</h1>
        <p class="lead">
          Our library contains thousands of books related to Computer Science, Engineering,
          Management and Competitive Exams. Students can issue books, read journals, and
          access digital learning resources.
        </p>
        <div class="actions">
          <a class="btn primary" routerLink="/books">Explore books</a>
          <a class="btn" routerLink="/registration">Register now</a>
        </div>
      </div>

      <div class="shelf" aria-hidden="true">
        <span style="--h:78%;--c:#1f3a5f">Learn every day</span>
        <span style="--h:92%;--c:#b8892f">Smart Library</span>
        <span style="--h:70%;--c:#2f6f5e">Imagine more</span>
        <span style="--h:85%;--c:#7a2e3a">Knowledge</span>
      </div>
    </section>

    <section class="stats">
      <div><strong>500+</strong> Books to explore</div>
      <div><strong>24/7</strong> Digital access</div>
      <div><strong>4</strong> Library facilities</div>
    </section>

    <section class="block">
      <h2>Library facilities</h2>
      <ul class="catalog">
        <li>
          <div>
            <h3>Digital Library</h3>
            <p>Access digital learning resources for Computer Science, Engineering, Management and Competitive Exams.</p>
          </div>
          <a routerLink="/books">Browse books</a>
        </li>
        <li>
          <div>
            <h3>Reading Hall</h3>
            <p>A calm, focused space to read, prepare for exams, and work on assignments.</p>
          </div>
          <a routerLink="/about">Library rules</a>
        </li>
        <li>
          <div>
            <h3>Computer Lab &amp; Wi-Fi</h3>
            <p>Use the computer lab and free Wi-Fi to support your learning journey.</p>
          </div>
          <a routerLink="/registration">Register now</a>
        </li>
      </ul>
    </section>

    <section class="quote">
      <blockquote>A library is not a luxury but one of the necessities of life.</blockquote>
      <cite>Henry Ward Beecher</cite>
    </section>
  `,
})
export class HomeComponent {}
