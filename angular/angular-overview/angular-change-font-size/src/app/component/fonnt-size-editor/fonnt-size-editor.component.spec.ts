import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonntSizeEditorComponent } from './fonnt-size-editor.component';

describe('FonntSizeEditorComponent', () => {
  let component: FonntSizeEditorComponent;
  let fixture: ComponentFixture<FonntSizeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonntSizeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonntSizeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
