webpackJsonp([17],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardInforPage; });
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
 * Generated class for the CardInforPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CardInforPage = (function () {
    function CardInforPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.setTreatFlag = '请  客';
    }
    CardInforPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    CardInforPage.prototype.setMyTreat = function () {
        this.app.getRootNav().push('StandTreatPage');
        // if(this.setTreatFlag == '请  客'){
        //   this.setTreatFlag = '取消请客';
        // }else{
        //   this.setTreatFlag = '请  客';
        // }
    };
    CardInforPage.prototype.goChargCard = function () {
        this.app.getRootNav().push('ChargeCardPage');
    };
    CardInforPage.prototype.goTransferCard = function () {
        this.app.getRootNav().push('TransferCardPage');
    };
    return CardInforPage;
}());
CardInforPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-card-infor',template:/*ion-inline-start:"F:\kupang\src\pages\home\card-infor\card-infor.html"*/'<!--\n  Generated template for the CardInforPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>卡信息</ion-title>\n    <ion-buttons end>\n      <ion-icon name="ios-card-bill"></ion-icon>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="cardInforContent">\n  <div class="cardInforHeaderBox displayFlex-center">\n    <img src="assets/img/home/businessImg.png">\n    <div class="cardName ellipsis2">董小姐理发馆库胖卡</div>\n  </div>\n  <div class="businessCodeBox">\n      <img class="codeImg" src="assets/img/home/businessCode.png">\n      <div class="codeTipsBox"><ion-icon name="ios-tips"></ion-icon>该条码用于商家扫码</div>\n  </div>\n  <div class="cardOtherFunBox">\n    <span class="orangeColor" tappable (click)="setMyTreat()">{{setTreatFlag}}</span>\n    <span class="greenColor" tappable (click)="goChargCard()">充  值</span>\n    <span class="buleColor">扫码支付</span>\n    <span class="buleColor" tappable (click)="goTransferCard()">转  卡</span>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\home\card-infor\card-infor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], CardInforPage);

//# sourceMappingURL=card-infor.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardInforPageModule", function() { return CardInforPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_infor__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardInforPageModule = (function () {
    function CardInforPageModule() {
    }
    return CardInforPageModule;
}());
CardInforPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__card_infor__["a" /* CardInforPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__card_infor__["a" /* CardInforPage */]),
        ],
    })
], CardInforPageModule);

//# sourceMappingURL=card-infor.module.js.map

/***/ })

});
//# sourceMappingURL=17.js.map