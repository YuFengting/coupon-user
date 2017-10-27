webpackJsonp([26],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyIntegralPage; });
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
 * Generated class for the MyIntegralPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyIntegralPage = (function () {
    function MyIntegralPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.integralLists = [
            {
                name: '充卡',
                date: '2017-10-2',
                integral: '15'
            }, {
                name: '充卡',
                date: '2017-10-2',
                integral: '15'
            }, {
                name: '消费',
                date: '2017-10-2',
                integral: '15'
            }, {
                name: '充卡',
                date: '2017-10-2',
                integral: '15'
            }, {
                name: '消费',
                date: '2017-10-2',
                integral: '15'
            }
        ];
    }
    MyIntegralPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    MyIntegralPage.prototype.goIntegralRules = function () {
        this.app.getRootNav().push('IntegralRulesPage');
    };
    return MyIntegralPage;
}());
MyIntegralPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-integral',template:/*ion-inline-start:"F:\kupang\src\pages\account\my-integral\my-integral.html"*/'<!--\n  Generated template for the MyIntegralPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>我的积分</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="myIntegralContent">\n  <div class="integralRulesTxt"><span (click)="goIntegralRules()">积分规则说明？</span></div>\n  <div class="accountIntegralInfor">\n    <div class="integralInforBox">\n      <div>当前积分</div>\n      <div class="number">623</div>\n      <div>分</div>\n    </div>\n  </div>\n  <div class="accountIntegralRecords">\n    <p class="title">近期积分详情</p>\n    <ion-list class="integralListsBox">\n      <ion-item *ngFor="let item of integralLists">\n        <h2>{{item.name}}</h2>\n        <p>{{item.date}}</p>\n        <span item-end>+{{item.integral}}</span>\n      </ion-item>\n    </ion-list>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\account\my-integral\my-integral.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], MyIntegralPage);

//# sourceMappingURL=my-integral.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyIntegralPageModule", function() { return MyIntegralPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_integral__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyIntegralPageModule = (function () {
    function MyIntegralPageModule() {
    }
    return MyIntegralPageModule;
}());
MyIntegralPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_integral__["a" /* MyIntegralPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_integral__["a" /* MyIntegralPage */]),
        ],
    })
], MyIntegralPageModule);

//# sourceMappingURL=my-integral.module.js.map

/***/ })

});
//# sourceMappingURL=26.js.map