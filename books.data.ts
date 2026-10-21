export interface Book {
  name: string;
  author: string;
  price: number;
}

export const BOOKS: Book[] = [
  { name: 'HTML & CSS', author: 'John Smith', price: 450 },
  { name: 'Java Programming', author: 'James Gosling', price: 650 },
  { name: 'Python Basics', author: 'Guido van Rossum', price: 550 },
  { name: 'Database Management', author: 'Oracle Team', price: 700 },
];
