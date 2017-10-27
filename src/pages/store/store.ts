import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';

/**
 * Generated class for the StorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {

  storeInfor:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {

    this.storeInfor = [
      {
        img:'assets/img/pang_cur.png',
        name:'Barbershop董小姐理发馆库',
        address:'上海市徐汇区乌鲁木齐中路170号',
      },
      {
        img:'assets/img/pang_cur.png',
        name:'Barbershop董小姐理发馆库Barbershop董小姐理发馆库Barbershop董小姐理发馆库',
        address:'上海市黄浦区浙江中路229号百米上海市黄浦区浙江中路229号百米上海市黄浦区浙江中路229号百米',
      },
      {
        img:'assets/img/pang_cur.png',
        name:'Barbershop董小姐理发馆库',
        address:'上海市徐汇区乌鲁木齐中路170号',
      },
      {
        img:'assets/img/pang_cur.png',
        name:'Barbershop董小姐理发馆库',
        address:'上海市徐汇区乌鲁木齐中路170号',
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }

  goStoreDetail(index){
    console.log(index);
    this.app.getRootNav().push('StoreDetailPage');
  }

  goSelectCity(){
    this.app.getRootNav().push('SelectCityPage');
  }

}
