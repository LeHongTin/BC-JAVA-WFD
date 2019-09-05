import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksDoneReadsComponent } from './books-done-reads.component';

describe('BooksDoneReadsComponent', () => {
  let component: BooksDoneReadsComponent;
  let fixture: ComponentFixture<BooksDoneReadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksDoneReadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksDoneReadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
