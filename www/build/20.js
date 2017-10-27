webpackJsonp([20],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingPage; });
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
 * Generated class for the UserSettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserSettingPage = (function () {
    function UserSettingPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.gender = '未选择';
        this.selectValue = '未选择';
        this.selectgender = '未选择';
        this.event = {
            timeStarts: ''
        };
        this.noselectFlag = true;
        this.noselectGender = true;
    }
    UserSettingPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    UserSettingPage.prototype.getDate = function () {
        if (this.event.timeStarts) {
            this.selectValue = this.event.timeStarts;
            this.noselectFlag = false;
        }
    };
    UserSettingPage.prototype.getgender = function () {
        if (this.gender) {
            this.selectgender = this.gender;
            this.noselectGender = false;
        }
    };
    return UserSettingPage;
}());
UserSettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-setting',template:/*ion-inline-start:"F:\kupang\src\pages\account\setting\user-setting\user-setting.html"*/'<!--\n  Generated template for the UserSettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>个人设置</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="userSettingContent">\n  <div class="userSettingLists">\n    <div class="settingList displayFlex-center">\n      <img class="userHeaderImg" src="assets/img/pang.png"><label>修改头像</label><span class="setTxt"></span><ion-icon name="ios-arrow-forward"></ion-icon>\n    </div>\n    <div class="settingList displayFlex-center">\n      <label>手机号</label><span class="setTxt">1565899562</span>\n    </div>\n    <div class="settingList displayFlex-center">\n      <label>昵称</label><input class="setTxt" placeholder="未填写" />\n    </div>\n    <div class="settingList displayFlex-center">\n      <label>真实姓名</label><input class="setTxt" placeholder="未填写" />\n    </div>\n    <div class="settingList displayFlex-center">\n      <label>性别</label>\n      <span class="setTxt">\n        <div class="selectValue" [ngClass]="{\'noSelectTips\':noselectGender}">{{selectgender}}</div>\n        <ion-select [(ngModel)]="gender" (ionChange)="getgender()" cancelText="取消" okText="确定">\n          <ion-option value="女">女</ion-option>\n          <ion-option value="男">男</ion-option>\n        </ion-select>\n      </span>\n    </div>\n    <div class="settingList displayFlex-center">\n      <label>出生日期</label><span class="setTxt"><div class="selectValue" [ngClass]="{\'noSelectTips\':noselectFlag}">{{selectValue}}</div><ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="event.timeStarts" doneText="确定" cancelText="取消" (ionChange)="getDate()"></ion-datetime></span><ion-icon name="ios-arrow-forward"></ion-icon>\n    </div>\n    <div class="settingList displayFlex-center">\n      <label>地址</label><input class="setTxt" placeholder="未填写" />\n    </div>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\account\setting\user-setting\user-setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], UserSettingPage);

//# sourceMappingURL=user-setting.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingPageModule", function() { return UserSettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_setting__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserSettingPageModule = (function () {
    function UserSettingPageModule() {
    }
    return UserSettingPageModule;
}());
UserSettingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_setting__["a" /* UserSettingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_setting__["a" /* UserSettingPage */]),
        ],
    })
], UserSettingPageModule);

//# sourceMappingURL=user-setting.module.js.map

/***/ })

});
//# sourceMappingURL=20.js.map