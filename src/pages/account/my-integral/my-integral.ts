import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App } from 'ionic-angular';

import { IntegralRulesPage } from '../my-integral/integral-rules/integral-rules';

/**
 * Generated class for the MyIntegralPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-integral',
  templateUrl: 'my-integral.html',
})
export class MyIntegralPage {

  integralLists:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public app:App) {
    this.integralLists = [
      {
        name:'充卡',
        date:'2017-10-2',
        integral:'15'
      },{
        name:'充卡',
        date:'2017-10-2',
        integral:'15'
      },{
        name:'消费',
        date:'2017-10-2',
        integral:'15'
      },{
        name:'充卡',
        date:'2017-10-2',
        integral:'15'
      },{
        name:'消费',
        date:'2017-10-2',
        integral:'15'
      }
    ]
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');
  }

  goIntegralRules(){
    this.app.getRootNav().push(IntegralRulesPage);
  }

}
