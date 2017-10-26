import { Component } from '@angular/core';
import { NavController,ViewController, NavParams,App } from 'ionic-angular';

import { PasswordLoginPage } from '../login/password-login/password-login';

// declare var baidumap_location;
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public showAgreement:string = '';

  haveTelVal: boolean = false;
  canGoSubmit: boolean = false;
  showtelclear: boolean = false;
  showcodeclear: boolean = false;
  user:{tel:'',code:''};
  showCodeOrTime:boolean = true;
  coutTime:number = 60;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public  viewCtrl:ViewController,
    public  app:App
  ) {

    this.user = {tel:'', code:''}

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
    if(this.user.code != '' && this.user.code != null){
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
    if(this.user.code != ""){
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
    this.user.code = '';
    this.canGoSubmit = false ;
    this.showcodeclear = false;
  }

  codeOrTimeDisplay(){
    if(this.haveTelVal){
      this.showCodeOrTime = false;
      let setInter = setInterval( ()=>{
        this.coutTime -= 1;
        if(this.coutTime == 0){
          clearInterval(setInter);
          this.showCodeOrTime = true;
          this.coutTime = 60;
        }
      },1000);
    }
  }

  showAgreementbtn(){
    this.showAgreement = 'translateY(0)'
  }

  closeAgreementBtn(){
    this.showAgreement = 'translateY(100%)'
  }

  /*跳转密码登录页面*/
  goPasswordLoginPage(){
    this.app.getRootNav().push(PasswordLoginPage);
  }

}
