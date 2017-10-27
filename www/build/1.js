webpackJsonp([1],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreDetailPage; });
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
 * Generated class for the StoreDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StoreDetailPage = (function () {
    function StoreDetailPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
    }
    StoreDetailPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    StoreDetailPage.prototype.goChargeCard = function () {
        this.app.getRootNav().push('ChargeCardPage');
    };
    StoreDetailPage.prototype.goConsume = function () {
        this.app.getRootNav().push('ConsumePage');
    };
    return StoreDetailPage;
}());
StoreDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-store-detail',template:/*ion-inline-start:"F:\kupang\src\pages\store\store-detail\store-detail.html"*/'<!--\n  Generated template for the StoreDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>库胖店详情</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="couponStoreDetaill">\n  <div class="couponStoreHeaderBox displayFlex-center">\n    <img src="assets/img/home/businessImg.png">\n    <div class="cardInforBox">\n      <div class="storeName ellipsis1">Hair Art造型沙龙（新天地店）</div>\n      <div class="storeAddress ellipsis1">上海市黄浦区马当路261号附近</div>\n    </div>\n  </div>\n  <div class="couponCardOption displayFlex-center">\n      <div class="cardOptionBox" (click)="goChargeCard()">\n        <img src="assets/img/openPayCard.png">\n        <p>开卡/充值</p>\n      </div>\n      <div class="cardOptionBox" (click)="goConsume()">\n        <img src="assets/img/consumeIcon.png">\n        <p>消费</p>\n      </div>\n  </div>\n  <div style="height:15px;width:100%;background: #f5f5f5;"></div>\n  <div class="couponStoreOtherInfor">\n      <div class="storeImgShow displayFlex-center">\n        <span><img src="assets/img/home/businessImg.png"></span>\n        <span><img src="assets/img/home/businessImg.png"></span>\n        <span><img src="assets/img/home/businessImg.png"></span>\n      </div>\n      <div class="couponStoreIntroduce">\n          <div class="title">店家详情：</div>\n          <div class="content">这是一家很好的店铺，享受一下终身值得拥有。</div>\n      </div>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\store\store-detail\store-detail.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _d || Object])
], StoreDetailPage);

var _a, _b, _c, _d;
//# sourceMappingURL=store-detail.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreDetailPageModule", function() { return StoreDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_detail__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StoreDetailPageModule = (function () {
    function StoreDetailPageModule() {
    }
    return StoreDetailPageModule;
}());
StoreDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__store_detail__["a" /* StoreDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__store_detail__["a" /* StoreDetailPage */]),
        ],
    })
], StoreDetailPageModule);

//# sourceMappingURL=store-detail.module.js.map

/***/ })

});
//# sourceMappingURL=1.js.map