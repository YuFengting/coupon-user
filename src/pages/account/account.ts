import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App} from 'ionic-angular';

import { MyBillPage } from '../account/my-bill/my-bill';
import { MyIntegralPage } from '../account/my-integral/my-integral';
import { MyCustomerPage } from '../account/my-customer/my-customer';
import { SettingPage } from '../account/setting/setting';

/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  goMyBill(){
    this.app.getRootNav().push(MyBillPage);
  }

  goMyIntegral(){
    this.app.getRootNav().push(MyIntegralPage);
  }

  goMyCustomer(){
    this.app.getRootNav().push(MyCustomerPage);
  }

  goSetting(){
    this.app.getRootNav().push(SettingPage);
  }

}
