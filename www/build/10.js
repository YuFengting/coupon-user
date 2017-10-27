webpackJsonp([10],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayFailPage; });
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
 * Generated class for the PayFailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PayFailPage = (function () {
    function PayFailPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
    }
    PayFailPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    return PayFailPage;
}());
PayFailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pay-fail',template:/*ion-inline-start:"F:\kupang\src\pages\home\pay-fail\pay-fail.html"*/'<!--\n  Generated template for the PayFailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>交易结果</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="payFailContent">\n    <div class="cardInforHeaderBox">\n      <img src="assets/img/home/businessImg.png">\n      <span class="payCardName">董小姐理发馆库胖卡</span>\n    </div>\n    <div class="payResultImg">\n      <img src="assets/img/home/payfail.png">\n    </div>\n    <div class="tradingResultInfor">\n      <div class="resultInforList displayFlex-center">\n        <label class="titleName">充值商户</label>\n        <span class="content">董小姐理发馆</span>\n      </div>\n      <div class="resultInforList displayFlex-center">\n        <label class="titleName">卡      号</label>\n        <span class="content">6623919489452138101</span>\n      </div>\n      <div class="resultInforList displayFlex-center">\n        <label class="titleName">卡内余额</label>\n        <span class="content">888888元</span>\n      </div>\n      <div class="resultInforList displayFlex-center">\n        <label class="titleName">充值时间</label>\n        <span class="content">2017-9-15  12:40:12</span>\n      </div>\n      <div class="resultInforList displayFlex-center">\n        <label class="titleName">充值结果</label>\n        <span class="content paymentResult">支付失败</span>\n      </div>\n    </div>\n    <div class="paymentButton">\n      <button class="commonSureBtn" ion-button full round >重新支付</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\home\pay-fail\pay-fail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], PayFailPage);

//# sourceMappingURL=pay-fail.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayFailPageModule", function() { return PayFailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pay_fail__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PayFailPageModule = (function () {
    function PayFailPageModule() {
    }
    return PayFailPageModule;
}());
PayFailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pay_fail__["a" /* PayFailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pay_fail__["a" /* PayFailPage */]),
        ],
    })
], PayFailPageModule);

//# sourceMappingURL=pay-fail.module.js.map

/***/ })

});
//# sourceMappingURL=10.js.map