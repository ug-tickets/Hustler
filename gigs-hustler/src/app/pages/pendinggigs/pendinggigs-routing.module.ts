import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendinggigsPage } from './pendinggigs.page';

const routes: Routes = [
  {
    path: '',
    component: PendinggigsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendinggigsPageRoutingModule {}
