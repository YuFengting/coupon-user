import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferCardPage } from './transfer-card';

@NgModule({
  declarations: [
    TransferCardPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferCardPage),
  ],
})
export class TransferCardPageModule {}
