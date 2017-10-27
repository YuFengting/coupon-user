webpackJsonp([15],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeCardPageModule", function() { return ChargeCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charge_card__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChargeCardPageModule = (function () {
    function ChargeCardPageModule() {
    }
    return ChargeCardPageModule;
}());
ChargeCardPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__charge_card__["a" /* ChargeCardPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__charge_card__["a" /* ChargeCardPage */]),
        ],
    })
], ChargeCardPageModule);

//# sourceMappingURL=charge-card.module.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChargeCardPage; });
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
 * Generated class for the ChargeCardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChargeCardPage = (function () {
    function ChargeCardPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.money = [{
                num: '100元',
                setCurrent: false
            }, {
                num: '200元',
                setCurrent: false
            }, {
                num: '300元',
                setCurrent: false
            }, {
                num: '500元',
                setCurrent: false
            }, {
                num: '800元',
                setCurrent: false
            }, {
                num: '1000元',
                setCurrent: false
            }, {
                num: '1500元',
                setCurrent: false
            }, {
                num: '2000元',
                setCurrent: false
            }, {
                num: '3000元',
                setCurrent: false
            }, {
                num: '5000元',
                setCurrent: false
            }, {
                num: '10000元',
                setCurrent: false
            }, {
                num: '20000元',
                setCurrent: true
            }
        ];
    }
    ChargeCardPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    ChargeCardPage.prototype.setCurrentNum = function (cur) {
        for (var i in this.money) {
            this.money[i].setCurrent = false;
            cur.setCurrent = true;
        }
    };
    ChargeCardPage.prototype.goPaymentResult = function () {
        // this.app.getRootNav().push('PaySuccessPage');
        this.app.getRootNav().push('PayFailPage');
    };
    return ChargeCardPage;
}());
ChargeCardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-charge-card',template:/*ion-inline-start:"F:\kupang\src\pages\home\charge-card\charge-card.html"*/'<!--\n  Generated template for the ChargeCardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>充卡</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="chargeCardContent">\n    <div class="cardInforHeaderBox displayFlex-center">\n      <img src="assets/img/home/businessImg.png">\n      <div class="cardName ellipsis2">董小姐理发馆库胖卡</div>\n    </div>\n    <div class="accountBalance">￥ 20000</div>\n    <div class="chargeMoneyBox">\n      <div class="title">充值金额</div>\n      <div class="moneyNumBox">\n        <span  *ngFor="let item of money" [class.current]="item.setCurrent" tappable (click)="setCurrentNum(item)">{{item.num}}</span>\n      </div>\n    </div>\n    <div class="chargeSelectWays">\n      <div class="paymentWay displayFlex-center">\n        <img src="assets/img/home/alipay.png">\n        <span>支付宝支付</span>\n        <input id="alipay" type="radio" name="selectPay" checked hidden >\n        <label for="alipay"></label>\n      </div>\n      <div class="paymentWay displayFlex-center">\n        <img src="assets/img/home/weixin.png">\n        <span>微信支付</span>\n        <input id="wxpay" type="radio" name="selectPay"  hidden >\n        <label for="wxpay"></label>\n      </div>\n      <div class="sureChargeCardBtn">\n        <button class="commonSureBtn" ion-button full round tappable (click)="goPaymentResult()" >确定充值</button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\home\charge-card\charge-card.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], ChargeCardPage);

//# sourceMappingURL=charge-card.js.map

/***/ })

});
//# sourceMappingURL=15.js.map