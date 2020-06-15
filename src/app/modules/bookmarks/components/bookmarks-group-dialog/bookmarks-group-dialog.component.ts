import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as uuid from 'uuid';

import { Store } from '@ngrx/store';
import { addGroup } from '@store/actions/bookmarks.actions';
import { BookmarksState } from '@store/state/bookmarks.state';
import { Group } from '@store/models/bookmarks.model';


@Component({
  selector: 'app-bookmarks-group-dialog',
  templateUrl: './bookmarks-group-dialog.component.html',
  styleUrls: ['./bookmarks-group-dialog.component.scss']
})
export class BookmarksGroupDialogComponent implements OnInit {
  public addGroupFormGroup: FormGroup;

  constructor(
    private store: Store<{bookmarks: BookmarksState}>,
    private dialogRef: MatDialogRef<BookmarksGroupDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  public submit({ name }): void {
    const group: Group = {
      id: uuid.v4(),
      name: name
    };

    this.store.dispatch(addGroup({ group }));
    this.dialogRef.close(true);
  }

  private initForm(): void {
    this.addGroupFormGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
    });
  }
}
