import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarcardPageRoutingModule } from './starcard-routing.module';

import { StarcardPage } from './starcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarcardPageRoutingModule
  ],
  declarations: [StarcardPage]
})
export class StarcardPageModule {}
