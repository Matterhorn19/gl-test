import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksFormDialogComponent } from './bookmarks-form-dialog.component';

describe('BookmarksFormDialogComponent', () => {
  let component: BookmarksFormDialogComponent;
  let fixture: ComponentFixture<BookmarksFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
