import { Component } from '@angular/core';
import { IonicPage,NavController,NavParams } from 'ionic-angular';
import {App} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public navParams: NavParams,public app:App) {

  }

  goLoginPage(){
    this.app.getRootNav().push('LoginPage')
    // this.navCtrl.push('LoginPage')
  }

  goCardBox(){
    this.app.getRootNav().push('CardPackagePage');
  }

  goMyTreat(){
    this.app.getRootNav().push('MyTreatPage');
  }

  activationCcard(){
    // this.app.getRootNav().push('ActivationCardPage');
    this.app.getRootNav().push('ActivationCardNologinPage');
  }

}
