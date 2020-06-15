import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

import { select, Store } from '@ngrx/store';
import { Group, Record } from '@store/models/bookmarks.model';
import { BookmarksState } from '@store/state/bookmarks.state';
import { removeBookmark } from '@store/actions/bookmarks.actions';

import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SnackBarService } from '../../services/snack-bar.service';
import { MatTableDataSource } from '@angular/material/table';

interface GroupsMap {
  [prop: string]: string;
}

const DEFAULT_SELECTED_GROUP = 'All';

@Component({
  selector: 'app-bookmarks-table',
  templateUrl: './bookmarks-table.component.html',
  styleUrls: ['./bookmarks-table.component.scss']
})
export class BookmarksTableComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  public selectedGroup: string = DEFAULT_SELECTED_GROUP;
  public displayedColumns: string[] = ['name', 'url', 'group', 'remove'];

  public records: MatTableDataSource<Record> = new MatTableDataSource([]);

  public groups: Group[] = [];
  public groupsMap: GroupsMap = {};

  private storeSubscription: Subscription;

  constructor(
    private snackBarService: SnackBarService,
    private store: Store<{bookmarks: BookmarksState}>
  ) {
    this.storeSubscription = this.store.pipe(
      select('bookmarks'),
      tap(({ records, groups }) => {
        this.groupsMap = this.getGroupsMap(groups);
        this.groups = groups;
        this.records.data = records;
      })
    ).subscribe();
  }

  ngOnInit(): void {
    this.records.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }

  public getGroupName(id: string): string {
    return this.groupsMap[id];
  }

  public removeBookmark(id: string): void {
    this.store.dispatch(removeBookmark({ id }));
    this.snackBarService.show('Successfully removed bookmark');
  }

  public groupSelectionChange({ value }): void {
    this.records.filter = value === DEFAULT_SELECTED_GROUP ? '' : value;
  }

  private getGroupsMap(groups: Group[]): GroupsMap {
    return groups.reduce((previousValue, currentValue) => {
      return { ...previousValue, [currentValue.id]: currentValue.name };
    }, {});
  }
}
