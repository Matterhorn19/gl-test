import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksGroupDialogComponent } from './bookmarks-group-dialog.component';

describe('BookmarksGroupDialogComponent', () => {
  let component: BookmarksGroupDialogComponent;
  let fixture: ComponentFixture<BookmarksGroupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksGroupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
