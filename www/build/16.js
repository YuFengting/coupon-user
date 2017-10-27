webpackJsonp([16],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPackagePage; });
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
 * Generated class for the CardPackagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CardPackagePage = (function () {
    function CardPackagePage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.cardInfor = [
            {
                img: 'assets/img/home/businessImg.png',
                name: 'Barbershop董小姐理发馆库',
                price: '896',
                address: '上海市徐汇区乌鲁木齐中路170号',
            },
            {
                img: 'assets/img/pang_cur.png',
                name: 'Barbershop董小姐理发馆库Barbershop董小姐理发馆库Barbershop董小姐理发馆库',
                price: '296',
                address: '上海市黄浦区浙江中路229号百米上海市黄浦区浙江中路229号百米上海市黄浦区浙江中路229号百米',
            },
            {
                img: 'assets/img/pang_cur.png',
                name: 'Barbershop董小姐理发馆库',
                price: '596',
                address: '上海市徐汇区乌鲁木齐中路170号',
            },
            {
                img: 'assets/img/pang_cur.png',
                name: 'Barbershop董小姐理发馆库',
                price: '896',
                address: '上海市徐汇区乌鲁木齐中路170号',
            }
        ];
    }
    CardPackagePage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    CardPackagePage.prototype.goCardInfor = function () {
        this.app.getRootNav().push('CardInforPage');
    };
    return CardPackagePage;
}());
CardPackagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-card-package',template:/*ion-inline-start:"F:\kupang\src\pages\home\card-package\card-package.html"*/'<!--\n  Generated template for the CardPackagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>卡包</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bgGrey">\n  <div class="cardPackageContent">\n     <div class="cardInforLists"  *ngFor="let card of cardInfor;let i = index;" tappable (click)="goCardInfor()">\n        <img class="businessImg" [src]="card.img">\n        <div class="businessDetailInfor">\n            <div class="businessName ellipsis1">{{card.name}}</div>\n            <div class="businessPrice">￥{{card.price}}</div>\n          <div class="businessAddress ellipsis2"><ion-icon name="md-pin"></ion-icon>{{card.address}}</div>\n        </div>\n     </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\home\card-package\card-package.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], CardPackagePage);

//# sourceMappingURL=card-package.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPackagePageModule", function() { return CardPackagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_package__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CardPackagePageModule = (function () {
    function CardPackagePageModule() {
    }
    return CardPackagePageModule;
}());
CardPackagePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__card_package__["a" /* CardPackagePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__card_package__["a" /* CardPackagePage */]),
        ],
    })
], CardPackagePageModule);

//# sourceMappingURL=card-package.module.js.map

/***/ })

});
//# sourceMappingURL=16.js.map