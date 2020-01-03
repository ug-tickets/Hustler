import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendinggigsPageRoutingModule } from './pendinggigs-routing.module';

import { PendinggigsPage } from './pendinggigs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendinggigsPageRoutingModule
  ],
  declarations: [PendinggigsPage]
})
export class PendinggigsPageModule {}
