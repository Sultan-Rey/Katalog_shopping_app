import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarcardPage } from './starcard.page';

const routes: Routes = [
  {
    path: '',
    component: StarcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarcardPageRoutingModule {}
