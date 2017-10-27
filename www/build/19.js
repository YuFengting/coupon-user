webpackJsonp([19],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivationCardNologinPage; });
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
 * Generated class for the ActivationCardNologinPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ActivationCardNologinPage = (function () {
    function ActivationCardNologinPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.haveTelVal = false;
        this.canGoSubmit = false;
        this.showtelclear = false;
        this.showcodeclear = false;
        this.showCodeOrTime = true;
        this.coutTime = 60;
        this.user = { tel: '', code: '' };
    }
    ActivationCardNologinPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    ActivationCardNologinPage.prototype.telChange = function () {
        if (this.user.tel != '' && this.user.tel != null) {
            this.haveTelVal = true;
            this.showtelclear = true;
        }
        else {
            this.haveTelVal = false;
            this.showtelclear = false;
        }
    };
    ActivationCardNologinPage.prototype.codeChange = function () {
        if (this.user.code != '' && this.user.code != null) {
            this.canGoSubmit = true;
            this.showcodeclear = true;
        }
        else {
            this.canGoSubmit = false;
            this.showcodeclear = false;
        }
    };
    ActivationCardNologinPage.prototype.showtelClear = function () {
        if (this.user.tel != "") {
            this.showtelclear = true;
        }
        else {
            this.showtelclear = false;
        }
    };
    ActivationCardNologinPage.prototype.hidetelClear = function () {
        // this.showtelclear = false;
    };
    ActivationCardNologinPage.prototype.showcodeClear = function () {
        if (this.user.code != "") {
            this.showcodeclear = true;
        }
        else {
            this.showcodeclear = false;
        }
    };
    ActivationCardNologinPage.prototype.hidecodeClear = function () {
        // this.showcodeclear = false;
    };
    //清除手机号
    ActivationCardNologinPage.prototype.clearTel = function () {
        this.user.tel = '';
        this.haveTelVal = false;
        this.showtelclear = false;
    };
    //清除验证码
    ActivationCardNologinPage.prototype.clearCode = function () {
        this.user.code = '';
        this.canGoSubmit = false;
        this.showcodeclear = false;
    };
    ActivationCardNologinPage.prototype.codeOrTimeDisplay = function () {
        var _this = this;
        if (this.haveTelVal) {
            this.showCodeOrTime = false;
            var setInter_1 = setInterval(function () {
                _this.coutTime -= 1;
                if (_this.coutTime == 0) {
                    clearInterval(setInter_1);
                    _this.showCodeOrTime = true;
                    _this.coutTime = 60;
                }
            }, 1000);
        }
    };
    return ActivationCardNologinPage;
}());
ActivationCardNologinPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-activation-card-nologin',template:/*ion-inline-start:"F:\kupang\src\pages\activation-card-nologin\activation-card-nologin.html"*/'<!--\n  Generated template for the ActivationCardNologinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>激活</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="cardInforHeaderBox displayFlex-center">\n    <img src="assets/img/home/businessImg.png">\n    <div class="cardName ellipsis2">董小姐理发馆库胖卡</div>\n  </div>\n  <div class="activationCardInfor">\n    <p class="amountMoney">¥ 500</p>\n    <p>恭喜您获得董小姐理发店库胖卡<br/>请激活使用</p>\n  </div>\n  <div style="width:100%;height:15px;background: #f5f5f5;"></div>\n  <div class="loginListBox"><input type="tel" class="loginInput" placeholder="请输入手机号" [(ngModel)]="user.tel" (change)="telChange()" (focus)="showtelClear()" (blur)="hidetelClear()" /><ion-icon name="ios-close-circle" (click)="clearTel()" *ngIf="showtelclear"></ion-icon><span class="getCodeBox" [ngClass]="{\'codeStyleBtn\':haveTelVal}" *ngIf="showCodeOrTime" (click)="codeOrTimeDisplay()" >获取验证码</span><span *ngIf="!showCodeOrTime" class="countTime">{{coutTime}}s</span></div>\n  <div class="loginListBox"><input type="number" class="loginInput" placeholder="请输入验证码" [(ngModel)]="user.code" (change)="codeChange()"  (focus)="showcodeClear()" (blur)="hidecodeClear()"  /><ion-icon name="ios-close-circle" (click)="clearCode()" *ngIf="showcodeclear"></ion-icon></div>\n  <div class="activationCardBtn">\n    <button class="commonSureBtn" ion-button full round [ngClass]="{\'disable\':!canGoSubmit}">确认激活</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\activation-card-nologin\activation-card-nologin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], ActivationCardNologinPage);

//# sourceMappingURL=activation-card-nologin.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationCardNologinPageModule", function() { return ActivationCardNologinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activation_card_nologin__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivationCardNologinPageModule = (function () {
    function ActivationCardNologinPageModule() {
    }
    return ActivationCardNologinPageModule;
}());
ActivationCardNologinPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__activation_card_nologin__["a" /* ActivationCardNologinPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activation_card_nologin__["a" /* ActivationCardNologinPage */]),
        ],
    })
], ActivationCardNologinPageModule);

//# sourceMappingURL=activation-card-nologin.module.js.map

/***/ })

});
//# sourceMappingURL=19.js.map