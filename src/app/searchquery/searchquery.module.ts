import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchqueryPageRoutingModule } from './searchquery-routing.module';

import { SearchqueryPage } from './searchquery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchqueryPageRoutingModule
  ],
  declarations: [SearchqueryPage]
})
export class SearchqueryPageModule {}
