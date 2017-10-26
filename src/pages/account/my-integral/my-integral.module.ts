import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyIntegralPage } from './my-integral';

@NgModule({
  declarations: [
    MyIntegralPage,
  ],
  imports: [
    IonicPageModule.forChild(MyIntegralPage),
  ],
})
export class MyIntegralPageModule {}
