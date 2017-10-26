import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App } from 'ionic-angular';

/**
 * Generated class for the MyBillPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-bill',
  templateUrl: 'my-bill.html',
})
export class MyBillPage {

  billLists:Array<any>;
  paymentLists:Array<any>;
  consumeLists:Array<any>;
  getIndex:number = 0;
  billTab:number = 0;
  public event = {
    timeStarts: (new Date()).toISOString()
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public app:App) {

    this.billLists = [
      {
        month:'7月',
        billInfor:[
          {
            day:'25日',
            time:'19:25',
            businessImg:'assets/img/home/businessImg.png',
            businessName:'HairArt',
            account:'1290',
            money:'122'
          },
          {
            day:'26日',
            time:'19:25',
            businessImg:'assets/img/home/businessImg.png',
            businessName:'HairArt',
            account:'3290',
            money:'122'
          }
        ]
      },
      {
        month:'8月',
        billInfor:[
          {
            day:'25日',
            time:'19:25',
            businessImg:'assets/img/home/businessImg.png',
            businessName:'HairArt',
            account:'1290',
            money:'122'
          }
        ]
      }
    ]

    this.paymentLists = [
        {
          day:'25日',
          time:'19:25',
          businessImg:'assets/img/home/businessImg.png',
          businessName:'HairArt',
          account:'1290',
          money:'122'
        },
        {
          day:'26日',
          time:'19:25',
          businessImg:'assets/img/home/businessImg.png',
          businessName:'HairArt',
          account:'3290',
          money:'122'
        }
    ]

    this.consumeLists = [
      {
        day:'25日',
        time:'19:25',
        businessImg:'assets/img/home/businessImg.png',
        businessName:'HairArt',
        account:'1290',
        money:'122'
      },
      {
        day:'26日',
        time:'19:25',
        businessImg:'assets/img/home/businessImg.png',
        businessName:'HairArt',
        account:'3290',
        money:'122'
      },
      {
        day:'25日',
        time:'19:25',
        businessImg:'assets/img/home/businessImg.png',
        businessName:'HairArt',
        account:'1290',
        money:'122'
      }
    ]

  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');
  }

  selectBillType(dex){
    this.getIndex = dex;
  }

  selectBillTime(num){
    this.billTab = num;
  }

  getDate(){
    console.log(this.event.timeStarts);
  }
}
