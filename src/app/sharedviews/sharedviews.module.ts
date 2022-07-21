import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [PageHeaderComponent]
})
export class SharedviewsModule { }
