webpackJsonp([25],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutCouponPage; });
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
 * Generated class for the AboutCouponPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutCouponPage = (function () {
    function AboutCouponPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
    }
    AboutCouponPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    return AboutCouponPage;
}());
AboutCouponPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about-coupon',template:/*ion-inline-start:"F:\kupang\src\pages\account\setting\about-coupon\about-coupon.html"*/'<!--\n  Generated template for the AboutCouponPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>关于库胖</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="aboutCouponConent">\n  <img src="assets/img/account/aboutCouponImg.png">\n  <p>“库胖”是一个革命性的具有区块链去中央化技术理念的专门为线下移动支付场景而设计的支付系统，所以可以更好地服务于线下移动支付场景，同时呢，“库胖”还能真正实现目前团购模式都无法实现的既“享受打折”（非平台补贴），又“促进消费”这个特点它是一个商家付卡／储值卡记账平台。</p>\n  <p>“库胖”和“库胖支付”是注册商标，任何其他个人及组织未经授权不得擅自使用这些商标。</p>\n  <p>消费者购买任何一个商家的预付卡／储值卡的资金是直接赚到商家手中的。“库胖”平台不接受也不存储任何充值资金。</p>\n  <p>“库胖”平台提供了一个虚拟“换卡”功能，从而实现有限的跨店消“库胖”平台提供了一个虚拟“换卡”功能，从而实现有限的跨店消</p>\n  <p>任何使用“库胖”平台的消费者和商家都必须诚实守信，同时“库胖”有权在任何时间的任何情况之下拒绝对任何个人和（或）商胖”有权在任何时间的任何情况之下拒绝对任何个人和（或）商家提供记账服务。</p>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\account\setting\about-coupon\about-coupon.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], AboutCouponPage);

//# sourceMappingURL=about-coupon.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutCouponPageModule", function() { return AboutCouponPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_coupon__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutCouponPageModule = (function () {
    function AboutCouponPageModule() {
    }
    return AboutCouponPageModule;
}());
AboutCouponPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about_coupon__["a" /* AboutCouponPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about_coupon__["a" /* AboutCouponPage */]),
        ],
    })
], AboutCouponPageModule);

//# sourceMappingURL=about-coupon.module.js.map

/***/ })

});
//# sourceMappingURL=25.js.map