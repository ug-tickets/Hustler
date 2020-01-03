import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GigprogressPage } from './gigprogress.page';

const routes: Routes = [
  {
    path: '',
    component: GigprogressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GigprogressPageRoutingModule {}
