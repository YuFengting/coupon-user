import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App } from 'ionic-angular';

import { PayFailPage } from '../pay-fail/pay-fail';

/**
 * Generated class for the ChargeCardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charge-card',
  templateUrl: 'charge-card.html',
})
export class ChargeCardPage {

  money = [{
    num:'100元',
    setCurrent:false
  },{
    num:'200元',
    setCurrent:false
  },{
    num:'300元',
    setCurrent:false
  },{
    num:'500元',
    setCurrent:false
  },{
    num:'800元',
    setCurrent:false
  },{
    num:'1000元',
    setCurrent:false
  },{
    num:'1500元',
    setCurrent:false
  },{
    num:'2000元',
    setCurrent:false
  },{
    num:'3000元',
    setCurrent:false
  },{
    num:'5000元',
    setCurrent:false
  },{
    num:'10000元',
    setCurrent:false
  },{
    num:'20000元',
    setCurrent:true
  }

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public app:App) {
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');
  }

  setCurrentNum(cur){
    for(let i in this.money){
      this.money[i].setCurrent = false;
      cur.setCurrent = true;
    }
  }

  goPaymentResult(){
    // this.app.getRootNav().push(PaySuccessPage);
    this.app.getRootNav().push(PayFailPage);
  }

}
