import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookmarksRoutingModule } from './bookmarks-routing.module';

import { COMPONENTS } from './components';
import { SERVICES } from './services';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BookmarksRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        MatSnackBarModule,
        MatTableModule,
        MatCardModule,
        MatSortModule
    ],
  providers: [
    ...SERVICES
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class BookmarksModule { }
