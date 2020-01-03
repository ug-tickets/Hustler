import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GigdetailsPageRoutingModule } from './gigdetails-routing.module';

import { GigdetailsPage } from './gigdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GigdetailsPageRoutingModule
  ],
  declarations: [GigdetailsPage]
})
export class GigdetailsPageModule {}
