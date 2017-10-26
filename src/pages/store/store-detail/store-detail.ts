import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController,App} from 'ionic-angular';

import { ChargeCardPage } from '../../home/charge-card/charge-card';
import { ConsumePage } from '../consume/consume';

/**
 * Generated class for the StoreDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-detail',
  templateUrl: 'store-detail.html',
})
export class StoreDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public app:App) {
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');
  }

  goChargeCard(){
    this.app.getRootNav().push(ChargeCardPage);
  }

  goConsume(){
    this.app.getRootNav().push(ConsumePage);
  }

}
