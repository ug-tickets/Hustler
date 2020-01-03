import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GigreviewsPage } from './gigreviews.page';

const routes: Routes = [
  {
    path: '',
    component: GigreviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GigreviewsPageRoutingModule {}
