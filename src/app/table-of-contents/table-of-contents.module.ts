import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableOfContentsPageRoutingModule } from './table-of-contents-routing.module';

import { TableOfContentsPage } from './table-of-contents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableOfContentsPageRoutingModule
  ],
  declarations: [TableOfContentsPage]
})
export class TableOfContentsPageModule {}
