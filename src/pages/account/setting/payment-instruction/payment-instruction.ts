import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App } from 'ionic-angular';

/**
 * Generated class for the PaymentInstructionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-instruction',
  templateUrl: 'payment-instruction.html',
})
export class PaymentInstructionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public app:App) {
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');
  }

}
