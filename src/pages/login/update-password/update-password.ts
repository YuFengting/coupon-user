import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the UpdatePasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-update-password',
  templateUrl: 'update-password.html',
})
export class UpdatePasswordPage {

  ioslockoutline:string = 'ios-lock-outline';
  passwordShow:string = 'password';

  haveTelVal: boolean = false;
  canGoSubmit: boolean = false;
  showtelclear: boolean = false;
  showcodeclear: boolean = false;
  user:{code:'',password:''};
  showCodeOrTime:boolean = true;
  coutTime:number = 60;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public  viewCtrl:ViewController,
  ) {

    this.user = {code:'', password:''}

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
    if(this.user.code != '' && this.user.code != null){
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
    if(this.user.code != ""){
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
    this.user.code = '';
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

}
