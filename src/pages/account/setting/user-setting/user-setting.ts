import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App } from 'ionic-angular';

/**
 * Generated class for the UserSettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-setting',
  templateUrl: 'user-setting.html',
})
export class UserSettingPage {

  gender:string = '未选择';
  selectValue:any='未选择';
  selectgender:any = '未选择';
  public event = {
    timeStarts: ''
  };
  noselectFlag:boolean = true;
  noselectGender:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public app:App) {
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');
  }

  getDate(){
    if(this.event.timeStarts){
        this.selectValue = this.event.timeStarts;
        this.noselectFlag = false;
    }
  }

  getgender(){
    if(this.gender){
      this.selectgender = this.gender;
      this.noselectGender = false;
    }
  }

}
