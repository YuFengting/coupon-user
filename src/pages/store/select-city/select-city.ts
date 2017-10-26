import { Component,ViewChild,NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App,Content } from 'ionic-angular';

/**
 * Generated class for the SelectCityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-city',
  templateUrl: 'select-city.html',
})
export class SelectCityPage {
  @ViewChild(Content) content: Content;
  countyName:Array<any>;
  cityLists:Array<any>;
  number:Array<any>;
  contentScrollTop:number = 0;
  setLetterDisplay:boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public app:App,private zone:NgZone) {

    this.countyName = [
      {
        name:'全城',
        current:true
      },{
        name:'徐汇区',
        current:false
      },{
        name:'卢湾区',
        current:false
      }
    ]
    this.cityLists = [
      {
        letter:'A',
        city:['阿坝','阿坝','阿坝','阿坝','阿坝','阿坝','阿坝','阿坝','阿坝','阿坝','阿坝']
      },{
        letter:'B',
        city:['阿坝','阿坝','阿坝','阿坝','阿坝','阿坝','阿坝','阿坝','阿坝','阿坝','阿坝']
      }
    ]
    this.number = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','P','S','T','U','V','W','X','Y','Z']

  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');

    this.content.ionScroll.subscribe(($event: any) => {
      this.zone.run(() => {                               //如果在页面滑动过程中对数据进行修改，页面是不会重构的。所以在对应的操作中需要使用该方法，使页面能够重构。
        this.contentScrollTop = $event.scrollTop;      //当前滚动的距离
        let gettop= document.getElementById("allCityShowBox").offsetTop;

        if(this.contentScrollTop >= gettop){
          this.setLetterDisplay = true;
        }else{
          this.setLetterDisplay = false;
        }
      })

    });
  }

  selectCounty(event,index){
    console.log(event.target.innerText);
    for(var i in this.countyName){
      var list = this.countyName[i];
      list.current = false;
    }
    this.countyName[index].current = true;
  }
  selectCity(event){
    console.log(event.target.innerText);
  }

  toNumber(e){
    // var num = Math.floor( (e.pageY - 125) / 24);
    var num =Math.round( (e.pageY - 125) / 24);
    var letter = this.number[num];
    if(letter){
      let id = document.getElementById("cityFirstLetter_"+letter);
      if(id){
        let gettop= document.getElementById("cityFirstLetter_"+letter).offsetTop;
        let getTopH= document.getElementById("allCityShowBox").offsetTop;
        this.content.scrollTo(0,getTopH+gettop);
      }
    }
  }

}
