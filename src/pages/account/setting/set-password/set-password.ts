import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App } from 'ionic-angular';

import { LoginPage } from '../../../../pages/login/login';

/**
 * Generated class for the SetPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-password',
  templateUrl: 'set-password.html',
})
export class SetPasswordPage {

  ioslockoutline:string = 'ios-lock-outline';
  passwordShow:string = 'password';
  user:{password:''};
  showcodeclear: boolean = false;
  canGoSubmit: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public app:App) {
    this.user = {password:''}
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');
  }

  goLoginPage(){
    this.app.getRootNav().push(LoginPage)
    // this.navCtrl.push(LoginPage)
  }

  codeChange(){
    if(this.user.password != '' && this.user.password != null){
      this.canGoSubmit = true;
      this.showcodeclear = true;
    }else{
      this.canGoSubmit = false ;
      this.showcodeclear = false;
    }
  }
  hidetelClear(){
    // this.showtelclear = false;
  }

  showcodeClear(){
    if(this.user.password != ""){
      this.showcodeclear = true;
    }else {
      this.showcodeclear = false;
    }
  }
  hidecodeClear(){
    // this.showcodeclear = false;
  }
  //清除验证码
  clearCode(){
    this.user.password = '';
    this.canGoSubmit = false ;
    this.showcodeclear = false;
  }

  //显示隐藏密码
  changePasswordPlay(){
    if(this.ioslockoutline == 'ios-lock-outline'){
      this.ioslockoutline = 'ios-unlock-outline';
      this.passwordShow = 'number';
    }else{
      this.ioslockoutline = 'ios-lock-outline';
      this.passwordShow = 'password';
    }
  }
}
