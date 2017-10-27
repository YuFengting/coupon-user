webpackJsonp([14],{

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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



var HomePage = (function () {
    function HomePage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    HomePage.prototype.goLoginPage = function () {
        this.app.getRootNav().push('LoginPage');
        // this.navCtrl.push('LoginPage')
    };
    HomePage.prototype.goCardBox = function () {
        this.app.getRootNav().push('CardPackagePage');
    };
    HomePage.prototype.goMyTreat = function () {
        this.app.getRootNav().push('MyTreatPage');
    };
    HomePage.prototype.activationCcard = function () {
        // this.app.getRootNav().push('ActivationCardPage');
        this.app.getRootNav().push('ActivationCardNologinPage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"F:\kupang\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>首页</ion-title>\n    <ion-buttons end>\n      <button ion-button tappable (click)="goLoginPage()" >登录</button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="homePageContent">\n      <div class="cardPackpageBox"><img src="assets/img/home/cardBox.png" tappable (click)="goCardBox()" ></div>\n      <div class="paymentScanBox">\n          <div class="imgBox">\n            <img src="assets/img/home/paymentIcon.png">\n            <p>付款码</p>\n          </div>\n          <div class="imgBox" tappable (click)="activationCcard()">\n            <img src="assets/img/home/scanIcon.png">\n            <p>扫一扫</p>\n          </div>\n      </div>\n      <div class="meFeastBox"><img src="assets/img/home/feastImg.png" tappable (click)="goMyTreat()"></div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 //首页
var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */])],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]],
        providers: [],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ })

});
//# sourceMappingURL=14.js.map