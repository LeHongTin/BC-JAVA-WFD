import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Model/book';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  book : Book = new Book();

  constructor(private bookService: BooksService) {
  }

  ngOnInit() {
    this.bookService.getAllBooks()
      .subscribe(data => {
        this.books = data;
      })
  }

  createBook(book){
    this.bookService.createBooks(this.book)
    .subscribe(data => {
      this.book = data; 
    })  

    window.location.reload();
  }


}
