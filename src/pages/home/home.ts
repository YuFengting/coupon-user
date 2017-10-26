import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {App} from 'ionic-angular';

import { LoginPage } from '../login/login';
import { CardPackagePage } from '../home/card-package/card-package';
import { MyTreatPage } from '../home/my-treat/my-treat';
import { ActivationCardNologinPage } from '../activation-card-nologin/activation-card-nologin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public navParams: NavParams,public app:App) {

  }

  goLoginPage(){
    this.app.getRootNav().push(LoginPage)
    // this.navCtrl.push(LoginPage)
  }

  goCardBox(){
    this.app.getRootNav().push(CardPackagePage);
  }

  goMyTreat(){
    this.app.getRootNav().push(MyTreatPage);
  }

  activationCcard(){
    // this.app.getRootNav().push(ActivationCardPage);
    this.app.getRootNav().push(ActivationCardNologinPage);
  }

}
