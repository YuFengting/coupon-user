import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App } from 'ionic-angular';

import { PaySuccessPage } from '../../home/pay-success/pay-success';

/**
 * Generated class for the ConsumePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consume',
  templateUrl: 'consume.html',
})
export class ConsumePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public app:App) {
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');
  }

  goPaymentResult(){
    // this.app.getRootNav().push(PaySuccessPage);
    this.app.getRootNav().push(PaySuccessPage);
  }

}
