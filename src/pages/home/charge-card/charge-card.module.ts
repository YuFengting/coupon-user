import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChargeCardPage } from './charge-card';

@NgModule({
  declarations: [
    ChargeCardPage,
  ],
  imports: [
    IonicPageModule.forChild(ChargeCardPage),
  ],
})
export class ChargeCardPageModule {}
