import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  bookFromAPI: Book[] = [];

  book: Book = {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6', title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald', description: 'Just a book talking about his life', createdAt: new Date()
  };

  bookList: Book[] = [
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6', title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald', description: 'Just a book talking about his life', createdAt: new Date()
    },
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa9', title: 'Mansion of the Lord',
      author: 'Charlie Manson', description: 'Just a book array item', createdAt: new Date('2023-06-01T00:00:00Z')
    },
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa8', title: 'Another Book',
      author: 'Another Author', description: 'Just another book', createdAt: new Date('1980-06-02T00:00:00Z')
    }
  ]
  // Dependency injection of the BookService
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    // Fetch books from the API when the component initializes
    this.getBooksFromAPI();
  }

  // Method to fetch books from the API using the BookService
  getBooksFromAPI(): void {
    this.bookService.getBooks().subscribe(
      books => this.bookFromAPI = books,
      error => console.error('Error fetching books from API:', error)
    )

  }

}
