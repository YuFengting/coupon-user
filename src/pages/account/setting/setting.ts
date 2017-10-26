import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App } from 'ionic-angular';

import { UserSettingPage } from '../setting/user-setting/user-setting';                  //个人设置
import { AboutCouponPage } from '../setting/about-coupon/about-coupon';                  //关于库胖
import { RechargeInstructionPage } from '../setting/recharge-instruction/recharge-instruction';               //充值说明
import { PaymentInstructionPage } from '../setting/payment-instruction/payment-instruction';                  //付款说明
import { SetPasswordPage } from '../setting/set-password/set-password';                  //设置登录密码

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public app:App) {
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');
  }

  goUserSetting(){
    this.app.getRootNav().push(UserSettingPage);
  }

  goAboutCoupon(){
    this.app.getRootNav().push(AboutCouponPage);
  }

  goRechargeInstruction(){
    this.app.getRootNav().push(RechargeInstructionPage);
  }

  goPayInstruction(){
    this.app.getRootNav().push(PaymentInstructionPage);
  }
  goQuit(){
    this.app.getRootNav().push(SetPasswordPage);
  }


}
