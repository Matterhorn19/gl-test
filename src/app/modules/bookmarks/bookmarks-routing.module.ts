import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookmarksPageComponent } from './components/bookmarks-page/bookmarks-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BookmarksPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarksRoutingModule {
}
