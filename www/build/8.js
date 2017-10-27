webpackJsonp([8],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferCardPage; });
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
 * Generated class for the TransferCardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TransferCardPage = (function () {
    function TransferCardPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.haveTelVal = false;
        this.canGoSubmit = false;
        this.showtelclear = false;
        this.showcodeclear = false;
        this.showCodeOrTime = true;
        this.coutTime = 60;
        this.user = { tel: '', code: '' };
    }
    TransferCardPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    TransferCardPage.prototype.telChange = function () {
        if (this.user.tel != '' && this.user.tel != null) {
            this.haveTelVal = true;
            this.showtelclear = true;
        }
        else {
            this.haveTelVal = false;
            this.showtelclear = false;
        }
    };
    TransferCardPage.prototype.codeChange = function () {
        if (this.user.code != '' && this.user.code != null) {
            this.canGoSubmit = true;
            this.showcodeclear = true;
        }
        else {
            this.canGoSubmit = false;
            this.showcodeclear = false;
        }
    };
    TransferCardPage.prototype.showtelClear = function () {
        if (this.user.tel != "") {
            this.showtelclear = true;
        }
        else {
            this.showtelclear = false;
        }
    };
    TransferCardPage.prototype.hidetelClear = function () {
        // this.showtelclear = false;
    };
    TransferCardPage.prototype.showcodeClear = function () {
        if (this.user.code != "") {
            this.showcodeclear = true;
        }
        else {
            this.showcodeclear = false;
        }
    };
    TransferCardPage.prototype.hidecodeClear = function () {
        // this.showcodeclear = false;
    };
    //清除手机号
    TransferCardPage.prototype.clearTel = function () {
        this.user.tel = '';
        this.haveTelVal = false;
        this.showtelclear = false;
    };
    //清除验证码
    TransferCardPage.prototype.clearCode = function () {
        this.user.code = '';
        this.canGoSubmit = false;
        this.showcodeclear = false;
    };
    TransferCardPage.prototype.codeOrTimeDisplay = function () {
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
    return TransferCardPage;
}());
TransferCardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-transfer-card',template:/*ion-inline-start:"F:\kupang\src\pages\home\transfer-card\transfer-card.html"*/'<!--\n  Generated template for the TransferCardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>转卡</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="transferCardContent">\n    <div class="cardInforHeaderBox displayFlex-center">\n      <img src="assets/img/home/businessImg.png">\n      <div class="cardName ellipsis2">董小姐理发馆库胖卡</div>\n    </div>\n    <div class="setTransferCardInfor">\n      <div class="transferListBox"><input type="tel" class="transferInput" placeholder="请输入转卡人的手机号" [(ngModel)]="user.tel" (change)="telChange()" (focus)="showtelClear()" (blur)="hidetelClear()" /><ion-icon name="ios-close-circle" (click)="clearTel()" *ngIf="showtelclear"></ion-icon></div>\n      <div class="transferListBox"><input type="number" class="transferInput" placeholder="请输入验证码" [(ngModel)]="user.code" (change)="codeChange()"  (focus)="showcodeClear()" (blur)="hidecodeClear()"  /><ion-icon name="ios-close-circle" (click)="clearCode()" *ngIf="showcodeclear"></ion-icon><span class="getCodeBox" [ngClass]="{\'codeStyleBtn\':haveTelVal}" *ngIf="showCodeOrTime" (click)="codeOrTimeDisplay()" >获取验证码</span><span *ngIf="!showCodeOrTime" class="countTime">{{coutTime}}s</span></div>\n      <button class="commonSureBtn sureTransferBtn" ion-button full round  [ngClass]="{\'transferSubmitBtn\':canGoSubmit}">确认转卡</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\home\transfer-card\transfer-card.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
], TransferCardPage);

//# sourceMappingURL=transfer-card.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferCardPageModule", function() { return TransferCardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfer_card__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransferCardPageModule = (function () {
    function TransferCardPageModule() {
    }
    return TransferCardPageModule;
}());
TransferCardPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__transfer_card__["a" /* TransferCardPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transfer_card__["a" /* TransferCardPage */]),
        ],
    })
], TransferCardPageModule);

//# sourceMappingURL=transfer-card.module.js.map

/***/ })

});
//# sourceMappingURL=8.js.map