import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App } from 'ionic-angular';

/**
 * Generated class for the StandTreatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stand-treat',
  templateUrl: 'stand-treat.html',
})
export class StandTreatPage {

  peopleInfor:any = '请添加您的请客人';
  setNoPeople:boolean = true;
  setDateDisabled:boolean = true;
  myDate:string = '';
  public event = {
    timeStarts: (new Date()).toISOString(),
    timeEnds:  (new Date()).toISOString()
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public app:App) {
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');
  }

  goAddressList(){
    this.peopleInfor = '张三、李四';
    if(this.peopleInfor == '请添加您的请客人'){
        this.setNoPeople = true;
    }else{
      this.setNoPeople = false;
    }
  }

  setDateStyle(event){
      if(event.srcElement.id == 'settime' && event.srcElement.checked){
          this.setDateDisabled = false;
      }else{
          this.setDateDisabled = true;
      }
  }

  goEntertainSuccess(){
    this.app.getRootNav().push('EntertainSuccessPage');
  }


}
