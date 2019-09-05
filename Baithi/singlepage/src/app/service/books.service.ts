import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../Model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private bookURl = 'http://localhost:8081/books'

  constructor(private http: HttpClient) { }

  public getAllBooks() {
    return this.http.get<Book[]>(this.bookURl)
  }

  public createBooks(book : Book){
    return this.http.post<Book>(this.bookURl, book);
  }
}
