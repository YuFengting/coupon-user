import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App } from 'ionic-angular';

/**
 * Generated class for the CardInforPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card-infor',
  templateUrl: 'card-infor.html',
})
export class CardInforPage {

  setTreatFlag:string = '请  客';

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public app:App) {
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');
  }

  setMyTreat(){
    this.app.getRootNav().push('StandTreatPage');
    // if(this.setTreatFlag == '请  客'){
    //   this.setTreatFlag = '取消请客';
    // }else{
    //   this.setTreatFlag = '请  客';
    // }
  }

  goChargCard(){
    this.app.getRootNav().push('ChargeCardPage');
  }

  goTransferCard(){
    this.app.getRootNav().push('TransferCardPage');
  }
}
