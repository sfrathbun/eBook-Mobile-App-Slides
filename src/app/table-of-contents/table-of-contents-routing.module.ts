import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableOfContentsPage } from './table-of-contents.page';

const routes: Routes = [
  {
    path: '',
    component: TableOfContentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableOfContentsPageRoutingModule {}
