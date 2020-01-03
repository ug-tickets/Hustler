import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmpayoutPage } from './confirmpayout.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmpayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmpayoutPageRoutingModule {}
