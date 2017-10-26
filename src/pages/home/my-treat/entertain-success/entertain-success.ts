import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the EntertainSuccessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entertain-success',
  templateUrl: 'entertain-success.html',
})
export class EntertainSuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');
  }

}
