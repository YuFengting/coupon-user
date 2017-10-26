import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTreatPage } from './my-treat';

@NgModule({
  declarations: [
    MyTreatPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTreatPage),
  ],
})
export class MyTreatPageModule {}
