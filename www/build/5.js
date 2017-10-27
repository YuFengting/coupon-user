webpackJsonp([5],{

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePasswordPage; });
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
 * Generated class for the UpdatePasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UpdatePasswordPage = (function () {
    function UpdatePasswordPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.ioslockoutline = 'ios-lock-outline';
        this.passwordShow = 'password';
        this.haveTelVal = false;
        this.canGoSubmit = false;
        this.showtelclear = false;
        this.showcodeclear = false;
        this.showCodeOrTime = true;
        this.coutTime = 60;
        this.user = { code: '', password: '' };
    }
    UpdatePasswordPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    UpdatePasswordPage.prototype.ionViewWillEnter = function () {
        //进行定位
        // baidumap_location.getCurrentPosition(function (result) {
        //   alert(JSON.stringify(result, null, 4));
        // }, function (error) {
        //
        // });
    };
    UpdatePasswordPage.prototype.telChange = function () {
        if (this.user.code != '' && this.user.code != null) {
            this.haveTelVal = true;
            this.showtelclear = true;
        }
        else {
            this.haveTelVal = false;
            this.showtelclear = false;
        }
    };
    UpdatePasswordPage.prototype.codeChange = function () {
        if (this.user.password != '' && this.user.password != null) {
            this.canGoSubmit = true;
            this.showcodeclear = true;
        }
        else {
            this.canGoSubmit = false;
            this.showcodeclear = false;
        }
    };
    UpdatePasswordPage.prototype.showtelClear = function () {
        if (this.user.code != "") {
            this.showtelclear = true;
        }
        else {
            this.showtelclear = false;
        }
    };
    UpdatePasswordPage.prototype.hidetelClear = function () {
        // this.showtelclear = false;
    };
    UpdatePasswordPage.prototype.showcodeClear = function () {
        if (this.user.password != "") {
            this.showcodeclear = true;
        }
        else {
            this.showcodeclear = false;
        }
    };
    UpdatePasswordPage.prototype.hidecodeClear = function () {
        // this.showcodeclear = false;
    };
    //清除手机号
    UpdatePasswordPage.prototype.clearTel = function () {
        this.user.code = '';
        this.haveTelVal = false;
        this.showtelclear = false;
    };
    //清除验证码
    UpdatePasswordPage.prototype.clearCode = function () {
        this.user.password = '';
        this.canGoSubmit = false;
        this.showcodeclear = false;
    };
    //显示隐藏密码
    UpdatePasswordPage.prototype.changePasswordPlay = function () {
        if (this.ioslockoutline == 'ios-lock-outline') {
            this.ioslockoutline = 'ios-unlock-outline';
            this.passwordShow = 'number';
        }
        else {
            this.ioslockoutline = 'ios-lock-outline';
            this.passwordShow = 'password';
        }
    };
    UpdatePasswordPage.prototype.codeOrTimeDisplay = function () {
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
    return UpdatePasswordPage;
}());
UpdatePasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-update-password',template:/*ion-inline-start:"F:\kupang\src\pages\login\update-password\update-password.html"*/'<!--\n  Generated template for the UpdatePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>修改密码</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bgGrey">\n  <div class="loginWrapBox">\n    <div class="loginListBox"><input type="tel" class="loginInput" placeholder="验证码" [(ngModel)]="user.code" (change)="telChange()" (focus)="showtelClear()" (blur)="hidetelClear()" /><ion-icon name="ios-close-circle" (click)="clearTel()" *ngIf="showtelclear"></ion-icon><span class="getCodeBox" [ngClass]="{\'codeStyleBtn\':haveTelVal}" *ngIf="showCodeOrTime" (click)="codeOrTimeDisplay()" >获取验证码</span><span *ngIf="!showCodeOrTime" class="countTime">{{coutTime}}s</span></div>\n    <div class="loginListBox"><input [type]="passwordShow" class="loginInput" placeholder="新密码" [(ngModel)]="user.password" (change)="codeChange()"  (focus)="showcodeClear()" (blur)="hidecodeClear()"  /><ion-icon name="ios-close-circle" (click)="clearCode()" *ngIf="showcodeclear"></ion-icon><ion-icon [name]="ioslockoutline" (click)="changePasswordPlay()"></ion-icon></div>\n    <div class="submitbtnBox">\n      <button ion-button block [ngClass]="{\'loginSubmitBtn\':canGoSubmit}">登录</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\login\update-password\update-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], UpdatePasswordPage);

//# sourceMappingURL=update-password.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordPageModule", function() { return UpdatePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_password__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdatePasswordPageModule = (function () {
    function UpdatePasswordPageModule() {
    }
    return UpdatePasswordPageModule;
}());
UpdatePasswordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__update_password__["a" /* UpdatePasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_password__["a" /* UpdatePasswordPage */]),
        ]
    })
], UpdatePasswordPageModule);

//# sourceMappingURL=update-password.module.js.map

/***/ })

});
//# sourceMappingURL=5.js.map