import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { BOOKS } from './books.data';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  template: `
    <section class="page-head">
      <p class="kicker">Book collection</p>
      <h1>Available books</h1>
      <label class="search">
        <span>Search by book or author</span>
        <input type="search" [(ngModel)]="query" placeholder="e.g. Python" />
      </label>
    </section>

    <section class="block">
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Book name</th><th>Author</th><th class="num">Price</th></tr>
          </thead>
          <tbody>
            @for (b of filtered; track b.name) {
              <tr>
                <td>{{ b.name }}</td>
                <td>{{ b.author }}</td>
                <td class="num">{{ b.price | currency: 'INR' : 'symbol' : '1.0-0' }}</td>
              </tr>
            } @empty {
              <tr><td colspan="3" class="empty">No book matches “{{ query }}”. Try another title or author.</td></tr>
            }
          </tbody>
        </table>
      </div>
      <p class="count">{{ filtered.length }} of {{ books.length }} books shown</p>
    </section>
  `,
})
export class BooksComponent {
  books = BOOKS;
  query = '';

  get filtered() {
    const q = this.query.trim().toLowerCase();
    return this.books.filter(
      (b) => b.name.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
    );
  }
}
