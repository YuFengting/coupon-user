webpackJsonp([24],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentInstructionPage; });
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
 * Generated class for the PaymentInstructionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymentInstructionPage = (function () {
    function PaymentInstructionPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
    }
    PaymentInstructionPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    return PaymentInstructionPage;
}());
PaymentInstructionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment-instruction',template:/*ion-inline-start:"F:\kupang\src\pages\account\setting\payment-instruction\payment-instruction.html"*/'<!--\n  Generated template for the PaymentInstructionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>付款说明</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="introductionContent">\n    <h2 class="titleBox">\n      <div class="leftRound"></div>\n      <div class="rightRound"></div>\n      1 方式一\n    </h2>\n    <p>您可以用任何一张店店“库胖”卡里店金额去该店消费，也可以进行跨店消费，前提是其他店愿意接受您手中店其他店店库胖卡。</p>\n    <h2 class="titleBox">\n      <div class="leftRound"></div>\n      <div class="rightRound"></div>\n      2 方式二\n    </h2>\n    <p>您可以通过手机短信或者库胖APP进行消费。</p>\n    <h2 class="titleBox">\n      <div class="leftRound"></div>\n      <div class="rightRound"></div>\n      3 方式三\n    </h2>\n    <p>您也可以“请客”他人、让他人有机会使用您库胖卡里的金额。</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\account\setting\payment-instruction\payment-instruction.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], PaymentInstructionPage);

//# sourceMappingURL=payment-instruction.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInstructionPageModule", function() { return PaymentInstructionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_instruction__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentInstructionPageModule = (function () {
    function PaymentInstructionPageModule() {
    }
    return PaymentInstructionPageModule;
}());
PaymentInstructionPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__payment_instruction__["a" /* PaymentInstructionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_instruction__["a" /* PaymentInstructionPage */]),
        ],
    })
], PaymentInstructionPageModule);

//# sourceMappingURL=payment-instruction.module.js.map

/***/ })

});
//# sourceMappingURL=24.js.map