webpackJsonp([22],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPasswordPage; });
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
 * Generated class for the SetPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SetPasswordPage = (function () {
    function SetPasswordPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.ioslockoutline = 'ios-lock-outline';
        this.passwordShow = 'password';
        this.showcodeclear = false;
        this.canGoSubmit = false;
        this.user = { password: '' };
    }
    SetPasswordPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    SetPasswordPage.prototype.goLoginPage = function () {
        this.app.getRootNav().push('LoginPage');
        // this.navCtrl.push(LoginPage)
    };
    SetPasswordPage.prototype.codeChange = function () {
        if (this.user.password != '' && this.user.password != null) {
            this.canGoSubmit = true;
            this.showcodeclear = true;
        }
        else {
            this.canGoSubmit = false;
            this.showcodeclear = false;
        }
    };
    SetPasswordPage.prototype.hidetelClear = function () {
        // this.showtelclear = false;
    };
    SetPasswordPage.prototype.showcodeClear = function () {
        if (this.user.password != "") {
            this.showcodeclear = true;
        }
        else {
            this.showcodeclear = false;
        }
    };
    SetPasswordPage.prototype.hidecodeClear = function () {
        // this.showcodeclear = false;
    };
    //清除验证码
    SetPasswordPage.prototype.clearCode = function () {
        this.user.password = '';
        this.canGoSubmit = false;
        this.showcodeclear = false;
    };
    //显示隐藏密码
    SetPasswordPage.prototype.changePasswordPlay = function () {
        if (this.ioslockoutline == 'ios-lock-outline') {
            this.ioslockoutline = 'ios-unlock-outline';
            this.passwordShow = 'number';
        }
        else {
            this.ioslockoutline = 'ios-lock-outline';
            this.passwordShow = 'password';
        }
    };
    return SetPasswordPage;
}());
SetPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-set-password',template:/*ion-inline-start:"F:\kupang\src\pages\account\setting\set-password\set-password.html"*/'<!--\n  Generated template for the SetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>设置登录密码</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="goLoginPage()" >跳过</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bgGrey">\n<div class="setPasswordContent">\n  <p>设置登录密码后，您可以使用手机号码+密码登录，请牢记</p>\n  <div class="loginListBox"><input [type]="passwordShow" class="loginInput" placeholder="密码" [(ngModel)]="user.password" (change)="codeChange()"  (focus)="showcodeClear()" (blur)="hidecodeClear()"  /><ion-icon name="ios-close-circle" (click)="clearCode()" *ngIf="showcodeclear"></ion-icon><ion-icon [name]="ioslockoutline" (click)="changePasswordPlay()"></ion-icon></div>\n  <p>密码长度6-20字符</p>\n  <div class="submitbtnBox">\n    <button ion-button block [ngClass]="{\'loginSubmitBtn\':canGoSubmit}">确定</button>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\account\setting\set-password\set-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], SetPasswordPage);

//# sourceMappingURL=set-password.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPasswordPageModule", function() { return SetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_password__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetPasswordPageModule = (function () {
    function SetPasswordPageModule() {
    }
    return SetPasswordPageModule;
}());
SetPasswordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__set_password__["a" /* SetPasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__set_password__["a" /* SetPasswordPage */]),
        ],
    })
], SetPasswordPageModule);

//# sourceMappingURL=set-password.module.js.map

/***/ })

});
//# sourceMappingURL=22.js.map