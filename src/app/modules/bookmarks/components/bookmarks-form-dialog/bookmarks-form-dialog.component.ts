import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SnackBarService } from '../../services/snack-bar.service';
import * as uuid from 'uuid';

import { BookmarksGroupDialogComponent } from '../bookmarks-group-dialog/bookmarks-group-dialog.component';

import { select, Store } from '@ngrx/store';
import { BookmarksState } from '@store/state/bookmarks.state';
import { addBookmark } from '@store/actions/bookmarks.actions';
import { Record, Group } from '@store/models/bookmarks.model';

import { Subscription } from 'rxjs';
import { skipWhile, tap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const REG_EX_URL_PATTERN = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;

@Component({
  selector: 'app-bookmarks-form-dialog',
  templateUrl: './bookmarks-form-dialog.component.html',
  styleUrls: ['./bookmarks-form-dialog.component.scss']
})
export class BookmarksFormDialogComponent implements OnInit, OnDestroy {
  public bookmarksFormGroup: FormGroup;
  public groups: Group[] = [];

  private bookmarksGroupDialogComponent = BookmarksGroupDialogComponent;
  private storeSubscription: Subscription;

  constructor(
    private dialog: MatDialog,
    private snackBarService: SnackBarService,
    private store: Store<{bookmarks: BookmarksState}>,
    private dialogRef: MatDialogRef<BookmarksFormDialogComponent>,
  ) {
    this.storeSubscription = this.store.pipe(
      select('bookmarks'),
      tap((bookmarks) => this.groups = bookmarks.groups)
    ).subscribe();
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }

  public openBookmarksGroupDialog(): void {
    const dialogRef = this.dialog.open(this.bookmarksGroupDialogComponent);

    dialogRef.afterClosed()
      .pipe(
        skipWhile((state) => !state),
        tap(() => this.snackBarService.show('Successfully added new group'))
      )
      .subscribe();
  }

  public submit({ name, url, group }): void {
    const record: Record = {
      id: uuid.v4(),
      name: name,
      url: url,
      group: group
    }

    this.store.dispatch(addBookmark({ record }));
    this.dialogRef.close(true);
  }

  private initForm(): void {
    this.bookmarksFormGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      url: new FormControl('', [
        Validators.required,
        Validators.pattern(REG_EX_URL_PATTERN)
      ]),
      group: new FormControl('', [
        Validators.required
      ])
    });
  }
}
