import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './component/books/books.component';
import { BooksDoneReadsComponent } from './component/books-done-reads/books-done-reads.component';


const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'books-done-read',
    component: BooksDoneReadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
