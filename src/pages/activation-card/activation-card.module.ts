import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivationCardPage } from './activation-card';

@NgModule({
  declarations: [
    ActivationCardPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivationCardPage),
  ],
})
export class ActivationCardPageModule {}
