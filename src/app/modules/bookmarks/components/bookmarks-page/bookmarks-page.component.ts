import { Component, OnInit } from '@angular/core';
import { BookmarksFormDialogComponent } from '../bookmarks-form-dialog/bookmarks-form-dialog.component';
import { SnackBarService } from '../../services/snack-bar.service';
import { MatDialog } from '@angular/material/dialog';
import { skipWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-bookmarks-page',
  templateUrl: './bookmarks-page.component.html',
  styleUrls: ['./bookmarks-page.component.scss']
})
export class BookmarksPageComponent implements OnInit {
  private bookmarksFormDialogComponent = BookmarksFormDialogComponent;

  constructor(
    private snackBarService: SnackBarService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  public openBookmarksFormDialog(): void {
    const dialogRef = this.dialog.open(this.bookmarksFormDialogComponent);

    dialogRef.afterClosed()
      .pipe(
        skipWhile((state) => !state),
        tap(() => this.snackBarService.show('Successfully added new bookmark'))
      )
      .subscribe();
  }
}
