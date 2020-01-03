import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GigprogressPageRoutingModule } from './gigprogress-routing.module';

import { GigprogressPage } from './gigprogress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GigprogressPageRoutingModule
  ],
  declarations: [GigprogressPage]
})
export class GigprogressPageModule {}
