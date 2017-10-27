webpackJsonp([6],{

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordLoginPage; });
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
 * Generated class for the PasswordLoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PasswordLoginPage = (function () {
    function PasswordLoginPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.ioslockoutline = 'ios-lock-outline';
        this.passwordShow = 'password';
        this.haveTelVal = false;
        this.canGoSubmit = false;
        this.showtelclear = false;
        this.showcodeclear = false;
        this.user = { tel: '', password: '' };
    }
    PasswordLoginPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    PasswordLoginPage.prototype.ionViewWillEnter = function () {
        //进行定位
        // baidumap_location.getCurrentPosition(function (result) {
        //   alert(JSON.stringify(result, null, 4));
        // }, function (error) {
        //
        // });
    };
    PasswordLoginPage.prototype.telChange = function () {
        if (this.user.tel != '' && this.user.tel != null) {
            this.haveTelVal = true;
            this.showtelclear = true;
        }
        else {
            this.haveTelVal = false;
            this.showtelclear = false;
        }
    };
    PasswordLoginPage.prototype.codeChange = function () {
        if (this.user.password != '' && this.user.password != null) {
            this.canGoSubmit = true;
            this.showcodeclear = true;
        }
        else {
            this.canGoSubmit = false;
            this.showcodeclear = false;
        }
    };
    PasswordLoginPage.prototype.showtelClear = function () {
        if (this.user.tel != "") {
            this.showtelclear = true;
        }
        else {
            this.showtelclear = false;
        }
    };
    PasswordLoginPage.prototype.hidetelClear = function () {
        // this.showtelclear = false;
    };
    PasswordLoginPage.prototype.showcodeClear = function () {
        if (this.user.password != "") {
            this.showcodeclear = true;
        }
        else {
            this.showcodeclear = false;
        }
    };
    PasswordLoginPage.prototype.hidecodeClear = function () {
        // this.showcodeclear = false;
    };
    //清除手机号
    PasswordLoginPage.prototype.clearTel = function () {
        this.user.tel = '';
        this.haveTelVal = false;
        this.showtelclear = false;
    };
    //清除验证码
    PasswordLoginPage.prototype.clearCode = function () {
        this.user.password = '';
        this.canGoSubmit = false;
        this.showcodeclear = false;
    };
    //显示隐藏密码
    PasswordLoginPage.prototype.changePasswordPlay = function () {
        if (this.ioslockoutline == 'ios-lock-outline') {
            this.ioslockoutline = 'ios-unlock-outline';
            this.passwordShow = 'number';
        }
        else {
            this.ioslockoutline = 'ios-lock-outline';
            this.passwordShow = 'password';
        }
    };
    PasswordLoginPage.prototype.updatePassword = function () {
        this.app.getRootNav().push('UpdatePasswordPage');
    };
    return PasswordLoginPage;
}());
PasswordLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-password-login',template:/*ion-inline-start:"F:\kupang\src\pages\login\password-login\password-login.html"*/'<!--\n  Generated template for the PasswordLoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>密码登录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bgGrey">\n  <div class="loginWrapBox">\n    <div class="loginListBox"><input type="tel" class="loginInput" placeholder="手机/邮箱/用户名" [(ngModel)]="user.tel" (change)="telChange()" (focus)="showtelClear()" (blur)="hidetelClear()" /><ion-icon name="ios-close-circle" (click)="clearTel()" *ngIf="showtelclear"></ion-icon></div>\n    <div class="loginListBox"><input [type]="passwordShow" class="loginInput" placeholder="密码" [(ngModel)]="user.password" (change)="codeChange()"  (focus)="showcodeClear()" (blur)="hidecodeClear()"  /><ion-icon name="ios-close-circle" (click)="clearCode()" *ngIf="showcodeclear"></ion-icon><ion-icon [name]="ioslockoutline" (click)="changePasswordPlay()"></ion-icon></div>\n    <div class="submitbtnBox">\n      <button ion-button block [ngClass]="{\'loginSubmitBtn\':canGoSubmit}">登录</button>\n    </div>\n    <div class="updateForgetPassword"><span tappable (click)="updatePassword()">修改/忘记密码？</span></div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\login\password-login\password-login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], PasswordLoginPage);

//# sourceMappingURL=password-login.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordLoginPageModule", function() { return PasswordLoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_login__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PasswordLoginPageModule = (function () {
    function PasswordLoginPageModule() {
    }
    return PasswordLoginPageModule;
}());
PasswordLoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__password_login__["a" /* PasswordLoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__password_login__["a" /* PasswordLoginPage */]),
        ]
    })
], PasswordLoginPageModule);

//# sourceMappingURL=password-login.module.js.map

/***/ })

});
//# sourceMappingURL=6.js.map