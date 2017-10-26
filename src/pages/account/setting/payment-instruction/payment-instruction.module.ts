import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentInstructionPage } from './payment-instruction';

@NgModule({
  declarations: [
    PaymentInstructionPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentInstructionPage),
  ],
})
export class PaymentInstructionPageModule {}
