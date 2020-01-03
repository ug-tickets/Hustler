import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GigreviewsPageRoutingModule } from './gigreviews-routing.module';

import { GigreviewsPage } from './gigreviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GigreviewsPageRoutingModule
  ],
  declarations: [GigreviewsPage]
})
export class GigreviewsPageModule {}
