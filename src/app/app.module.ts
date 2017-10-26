import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StorePage } from '../pages/store/store';              //库胖店
import { NearbyPage } from '../pages/nearby/nearby';           //附近
import { AccountPage } from '../pages/account/account';        //我的
import { HomePage } from '../pages/home/home';                 //首页
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';  /*登录页*/
import { PasswordLoginPage } from '../pages/login/password-login/password-login';  /*密码登录页*/
import { UpdatePasswordPage } from '../pages/login/update-password/update-password';  /*更新密码*/

import { CardPackagePage } from '../pages/home/card-package/card-package';  //卡包
import { CardInforPage } from '../pages/home/card-infor/card-infor';         //卡信息
import { MyTreatPage }  from '../pages/home/my-treat/my-treat';              //选卡请客
import { StandTreatPage } from  '../pages/home/my-treat/stand-treat/stand-treat'; //我请客
import { ChargeCardPage } from '../pages/home/charge-card/charge-card';     //充卡
import { PaySuccessPage } from '../pages/home/pay-success/pay-success';     //支付成功
import { PayFailPage } from '../pages/home/pay-fail/pay-fail';               //支付失败
import { TransferCardPage } from '../pages/home/transfer-card/transfer-card';    //转卡
import { EntertainSuccessPage } from '../pages/home/my-treat/entertain-success/entertain-success';   //请客成功

import { StoreDetailPage } from '../pages/store/store-detail/store-detail';       //库胖店详情
import { ConsumePage } from '../pages/store/consume/consume';                      //消费
import { SelectCityPage } from '../pages/store/select-city/select-city';          //选择城市

import { MyBillPage } from '../pages/account/my-bill/my-bill';                    //我的账单
import { MyIntegralPage } from '../pages/account/my-integral/my-integral';       //我的积分
import { MyCustomerPage } from '../pages/account/my-customer/my-customer';       //我的客服
import { SettingPage }  from '../pages/account/setting/setting';                  //设置
import { IntegralRulesPage } from '../pages/account/my-integral/integral-rules/integral-rules';      //积分规则说明
import { UserSettingPage } from '../pages/account/setting/user-setting/user-setting';                  //个人设置
import { AboutCouponPage } from '../pages/account/setting/about-coupon/about-coupon';                  //关于库胖
import { RechargeInstructionPage } from '../pages/account/setting/recharge-instruction/recharge-instruction';               //充值说明
import { PaymentInstructionPage } from '../pages/account/setting/payment-instruction/payment-instruction';                  //付款说明

import { ActivationCardPage } from '../pages/activation-card/activation-card';                              //激活卡
import { ActivationCardNologinPage } from '../pages/activation-card-nologin/activation-card-nologin';    //未登录激活卡

import { SetPasswordPage } from '../pages/account/setting/set-password/set-password';                    //设置登录密码



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    StorePage,
    NearbyPage,
    AccountPage,
    HomePage,
    TabsPage,
    LoginPage,
    PasswordLoginPage,
    UpdatePasswordPage,
    CardPackagePage,
    CardInforPage,
    MyTreatPage,
    StandTreatPage,
    ChargeCardPage,
    PaySuccessPage,
    PayFailPage,
    TransferCardPage,
    EntertainSuccessPage,
    StoreDetailPage,
    ConsumePage,
    SelectCityPage,
    MyBillPage,
    MyIntegralPage,
    MyCustomerPage,
    SettingPage,
    IntegralRulesPage,
    UserSettingPage,
    AboutCouponPage,
    RechargeInstructionPage,
    PaymentInstructionPage,
    ActivationCardPage,
    ActivationCardNologinPage,
    SetPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StorePage,
    NearbyPage,
    AccountPage,
    HomePage,
    TabsPage,
    LoginPage,
    PasswordLoginPage,
    UpdatePasswordPage,
    CardPackagePage,
    CardInforPage,
    MyTreatPage,
    StandTreatPage,
    ChargeCardPage,
    PaySuccessPage,
    PayFailPage,
    TransferCardPage,
    EntertainSuccessPage,
    StoreDetailPage,
    ConsumePage,
    SelectCityPage,
    MyBillPage,
    MyIntegralPage,
    MyCustomerPage,
    SettingPage,
    IntegralRulesPage,
    UserSettingPage,
    AboutCouponPage,
    RechargeInstructionPage,
    PaymentInstructionPage,
    ActivationCardPage,
    ActivationCardNologinPage,
    SetPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
