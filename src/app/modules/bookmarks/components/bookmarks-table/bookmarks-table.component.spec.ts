import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksTableComponent } from './bookmarks-table.component';

describe('BookmarksTableComponent', () => {
  let component: BookmarksTableComponent;
  let fixture: ComponentFixture<BookmarksTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
