webpackJsonp([61],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyBillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MyBillPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyBillPage = (function () {
    function MyBillPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.getIndex = 0;
        this.billTab = 0;
        this.event = {
            timeStarts: (new Date()).toISOString()
        };
        this.billLists = [
            {
                month: '7月',
                billInfor: [
                    {
                        day: '25日',
                        time: '19:25',
                        businessImg: 'assets/img/home/businessImg.png',
                        businessName: 'HairArt',
                        account: '1290',
                        money: '122'
                    },
                    {
                        day: '26日',
                        time: '19:25',
                        businessImg: 'assets/img/home/businessImg.png',
                        businessName: 'HairArt',
                        account: '3290',
                        money: '122'
                    }
                ]
            },
            {
                month: '8月',
                billInfor: [
                    {
                        day: '25日',
                        time: '19:25',
                        businessImg: 'assets/img/home/businessImg.png',
                        businessName: 'HairArt',
                        account: '1290',
                        money: '122'
                    }
                ]
            }
        ];
        this.paymentLists = [
            {
                day: '25日',
                time: '19:25',
                businessImg: 'assets/img/home/businessImg.png',
                businessName: 'HairArt',
                account: '1290',
                money: '122'
            },
            {
                day: '26日',
                time: '19:25',
                businessImg: 'assets/img/home/businessImg.png',
                businessName: 'HairArt',
                account: '3290',
                money: '122'
            }
        ];
        this.consumeLists = [
            {
                day: '25日',
                time: '19:25',
                businessImg: 'assets/img/home/businessImg.png',
                businessName: 'HairArt',
                account: '1290',
                money: '122'
            },
            {
                day: '26日',
                time: '19:25',
                businessImg: 'assets/img/home/businessImg.png',
                businessName: 'HairArt',
                account: '3290',
                money: '122'
            },
            {
                day: '25日',
                time: '19:25',
                businessImg: 'assets/img/home/businessImg.png',
                businessName: 'HairArt',
                account: '1290',
                money: '122'
            }
        ];
    }
    MyBillPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    MyBillPage.prototype.selectBillType = function (dex) {
        this.getIndex = dex;
    };
    MyBillPage.prototype.selectBillTime = function (num) {
        this.billTab = num;
    };
    MyBillPage.prototype.getDate = function () {
        console.log(this.event.timeStarts);
    };
    return MyBillPage;
}());
MyBillPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-bill',template:/*ion-inline-start:"F:\kupang\src\pages\account\my-bill\my-bill.html"*/'<!--\n  Generated template for the MyBillPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>我的账单</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="myBillContent">\n  <div class="allPaymentMoney">\n    <div>总充值</div>\n    <div class="number">62236</div>\n    <div class="selectCalendar">\n      <ion-icon name="ios-calendar"></ion-icon>\n      <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="event.timeStarts" doneText="确定" cancelText="取消" (ionChange)="getDate()"></ion-datetime>\n    </div>\n\n  </div>\n  <div class="billTimeTabs">\n    <span [class.current]="billTab == 0" (click)="selectBillTime(0)">全部</span><span [class.current]="billTab == 1" (click)="selectBillTime(1)">今日</span><span [class.current]="billTab == 2" (click)="selectBillTime(2)">本周</span><span [class.current]="billTab == 3" (click)="selectBillTime(3)">本月</span>\n  </div>\n  <div style="width:100%;height:15px;background: #f5f5f5;"></div>\n  <div class="billTypeTabs displayFlex-center">\n    <div class="tabBox" [class.current]="getIndex == 0" (click)="selectBillType(0)">\n      <ion-icon name="ios-allBill"></ion-icon>\n      <p>全部</p>\n    </div>\n    <div class="tabBox" [class.current]="getIndex == 1" (click)="selectBillType(1)">\n      <ion-icon name="ios-allPayment"></ion-icon>\n      <p>总充值</p>\n    </div>\n    <div class="tabBox" [class.current]="getIndex == 2" (click)="selectBillType(2)">\n      <ion-icon name="ios-allConsume"></ion-icon>\n      <p>总消费</p>\n    </div>\n  </div>\n  <div class="myBillDetailInfor">\n    <div class="allBillLists" *ngIf="getIndex == 0">\n      <div class="billListBox" *ngFor="let item of billLists">\n        <div class="billMonthBox">{{item.month}}</div>\n        <div class="billListInfor displayFlex-center" *ngFor="let subitem of item.billInfor">\n          <div class="billDatebox">\n            <h2>{{subitem.day}}</h2>\n            <p>{{subitem.time}}</p>\n          </div>\n          <img class="billBusinessImg" [src]="subitem.businessImg">\n          <div class="billBusinessInfor">\n            <p class="businessName ellipsis1">{{subitem.businessName}}</p>\n            <p class="accountNum">共计：<span class="number">{{subitem.account}}</span>元</p>\n          </div>\n          <div>+{{subitem.money}}元</div>\n        </div>\n      </div>\n    </div>\n    <div class="allPaymentLists" *ngIf="getIndex == 1">\n      <div class="billListInfor displayFlex-center" *ngFor="let item of paymentLists">\n        <div class="billDatebox">\n          <h2>{{item.day}}</h2>\n          <p>{{item.time}}</p>\n        </div>\n        <img class="billBusinessImg" [src]="item.businessImg">\n        <div class="billBusinessInfor">\n          <p class="businessName ellipsis1">{{item.businessName}}</p>\n          <p class="accountNum">共计：<span class="number">{{item.account}}</span>元</p>\n        </div>\n        <div>+{{item.money}}元</div>\n      </div>\n    </div>\n    <div class="allPaymentLists" *ngIf="getIndex == 2">\n      <div class="billListInfor displayFlex-center" *ngFor="let item of consumeLists">\n        <div class="billDatebox">\n          <h2>{{item.day}}</h2>\n          <p>{{item.time}}</p>\n        </div>\n        <img class="billBusinessImg" [src]="item.businessImg">\n        <div class="billBusinessInfor">\n          <p class="businessName ellipsis1">{{item.businessName}}</p>\n          <p class="accountNum">共计：<span class="number">{{item.account}}</span>元</p>\n        </div>\n        <div>+{{item.money}}元</div>\n      </div>\n    </div>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\account\my-bill\my-bill.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], MyBillPage);

//# sourceMappingURL=my-bill.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBillPageModule", function() { return MyBillPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_bill__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyBillPageModule = (function () {
    function MyBillPageModule() {
    }
    return MyBillPageModule;
}());
MyBillPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_bill__["a" /* MyBillPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_bill__["a" /* MyBillPage */]),
        ],
    })
], MyBillPageModule);

//# sourceMappingURL=my-bill.module.js.map

/***/ })

});
//# sourceMappingURL=61.js.map