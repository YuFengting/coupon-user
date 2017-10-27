webpackJsonp([23],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechargeInstructionPage; });
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
 * Generated class for the RechargeInstructionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RechargeInstructionPage = (function () {
    function RechargeInstructionPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
    }
    RechargeInstructionPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    return RechargeInstructionPage;
}());
RechargeInstructionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-recharge-instruction',template:/*ion-inline-start:"F:\kupang\src\pages\account\setting\recharge-instruction\recharge-instruction.html"*/'<!--\n  Generated template for the RechargeInstructionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>充值说明</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="rechargeIntrContent">\n  <div class="headerBox">\n    <img src="assets/img/account/kupang.png">KUPANG\n    <P>库胖库胖，打折棒棒</P>\n  </div>\n  <h2 class="titleBox">关于充值卡</h2>\n  <h3 class="subTitleBox oneTitleBg">什么是库胖充值卡?</h3>\n  <p>充值卡是一张存有余额的卡，您可以到库胖APP内充值，余额可直接使用。</p>\n  <img src="assets/img/account/kupangCard.png">\n  <h3 class="subTitleBox twoTitleBg">如何充值?</h3>\n  <p>在线支付：打开“库胖APP”—卡信息—充卡—选择充值金额值，用支付宝或者微信支付去购买或者充值自己的库胖卡。</p>\n  <p>店里充值：直接支付店老板，让老板直接帮你购卡／充值。你可以以任何一种店老板接受店方式在店里充值，除支付宝微信以外，一般老板也接受信用卡、银行卡、现金等充值方式。</p>\n  <p>在线充值和店里充值的效果是一样的。</p>\n  <h3 class="subTitleBox threeTitleBg">资金充值到了哪里?</h3>\n  <p>在“库胖”平台的充值行为，其本质是消费者购买和(或)充值某个商家的消费预热卡。您所充值的资金，是直接打给被充值的那家店的账号。库胖平台接受也不存储任何的充值资金。</p>\n  <h2 class="titleBox">更多说明</h2>\n  <p>库胖平台只是一个充值／销售的记账平台，任何设计充值资金的投诉、纠纷，请消费者和店家直接沟通解决。因为库胖平台不支持有任何的充值资金，所以库胖平台不承担任何的资金责任。</p>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\account\setting\recharge-instruction\recharge-instruction.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], RechargeInstructionPage);

//# sourceMappingURL=recharge-instruction.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechargeInstructionPageModule", function() { return RechargeInstructionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recharge_instruction__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RechargeInstructionPageModule = (function () {
    function RechargeInstructionPageModule() {
    }
    return RechargeInstructionPageModule;
}());
RechargeInstructionPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__recharge_instruction__["a" /* RechargeInstructionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recharge_instruction__["a" /* RechargeInstructionPage */]),
        ],
    })
], RechargeInstructionPageModule);

//# sourceMappingURL=recharge-instruction.module.js.map

/***/ })

});
//# sourceMappingURL=23.js.map