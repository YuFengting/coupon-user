import { Component } from '@angular/core';
import { NavController, NavParams,ViewController,App } from 'ionic-angular';

import { UpdatePasswordPage } from '../../login/update-password/update-password';

/**
 * Generated class for the PasswordLoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-password-login',
  templateUrl: 'password-login.html',
})
export class PasswordLoginPage {
  ioslockoutline:string = 'ios-lock-outline';
  passwordShow:string = 'password';

  haveTelVal: boolean = false;
  canGoSubmit: boolean = false;
  showtelclear: boolean = false;
  showcodeclear: boolean = false;
  user:{tel:'',password:''};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public  viewCtrl:ViewController,
    public app:App
  ) {

    this.user = {tel:'', password:''}

  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');

  }

  ionViewWillEnter(){
    //进行定位
    // baidumap_location.getCurrentPosition(function (result) {
    //   alert(JSON.stringify(result, null, 4));
    // }, function (error) {
    //
    // });
  }

  telChange(){
    if(this.user.tel != '' && this.user.tel != null){
      this.haveTelVal = true;
      this.showtelclear = true;
    }else{
      this.haveTelVal = false ;
      this.showtelclear = false;
    }
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

  showtelClear(){
    if(this.user.tel != ""){
      this.showtelclear = true;
    }else {
      this.showtelclear = false;
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

  //清除手机号
  clearTel(){
    this.user.tel = '';
    this.haveTelVal = false ;
    this.showtelclear = false;
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

  updatePassword(){
    this.app.getRootNav().push(UpdatePasswordPage);
  }
}
