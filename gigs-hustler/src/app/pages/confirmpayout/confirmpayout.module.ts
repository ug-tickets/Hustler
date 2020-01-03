import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmpayoutPageRoutingModule } from './confirmpayout-routing.module';

import { ConfirmpayoutPage } from './confirmpayout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmpayoutPageRoutingModule
  ],
  declarations: [ConfirmpayoutPage]
})
export class ConfirmpayoutPageModule {}
