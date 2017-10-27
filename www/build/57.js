webpackJsonp([57],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegralRulesPage; });
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
 * Generated class for the IntegralRulesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var IntegralRulesPage = (function () {
    function IntegralRulesPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
    }
    IntegralRulesPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    return IntegralRulesPage;
}());
IntegralRulesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-integral-rules',template:/*ion-inline-start:"F:\kupang\src\pages\account\my-integral\integral-rules\integral-rules.html"*/'<!--\n  Generated template for the IntegralRulesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>积分规则说明</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="introductionContent">\n  <h2 class="titleBox">\n    <div class="leftRound"></div>\n    <div class="rightRound"></div>\n    “库胖”的区块链积分介绍\n  </h2>\n  <p>“库胖”的积分采用了去中央化技术理念的区块链技术。区块链积分和一般的积分区别在于，平台本身无法随意增加或较少系统中积分的存在，这样就极大限度地保障了积分的价值。</p>\n  <h2 class="titleBox">\n    <div class="leftRound"></div>\n    <div class="rightRound"></div>\n    充值积分规则\n  </h2>\n  <p class="centerTxt">每充值1元，获得1分。</p>\n  <h2 class="titleBox">\n    <div class="leftRound"></div>\n    <div class="rightRound"></div>\n    消费积分规则\n  </h2>\n  <p>每消费1元，获得1分。使用被请客卡消费者时，消费者（被请客人）获得积分，而卡主（请客人）不获积分。</p>\n  <p>“库胖”积分可以在参加活动的库胖商家进行消费。具体规则请在“库胖”APP中查看具体商家的信息。</p>\n  <h2 class="titleBox">\n    <div class="leftRound"></div>\n    <div class="rightRound"></div>\n    其他积分规则\n  </h2>\n  <p class="centerTxt">不满1元部分按四舍五入获得积分。</p>\n  <h2 class="titleBox">\n    <div class="leftRound"></div>\n    <div class="rightRound"></div>\n    更多积分说明\n  </h2>\n  <p>“库胖”平台或者商家会在不同时间段推出积分奖励及优惠活动，欢迎时时关注我们的APP.</p>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\account\my-integral\integral-rules\integral-rules.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], IntegralRulesPage);

//# sourceMappingURL=integral-rules.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegralRulesPageModule", function() { return IntegralRulesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__integral_rules__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntegralRulesPageModule = (function () {
    function IntegralRulesPageModule() {
    }
    return IntegralRulesPageModule;
}());
IntegralRulesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__integral_rules__["a" /* IntegralRulesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__integral_rules__["a" /* IntegralRulesPage */]),
        ],
    })
], IntegralRulesPageModule);

//# sourceMappingURL=integral-rules.module.js.map

/***/ })

});
//# sourceMappingURL=57.js.map