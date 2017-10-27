webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
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
 * Generated class for the StorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StorePage = (function () {
    function StorePage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.storeInfor = [
            {
                img: 'assets/img/pang_cur.png',
                name: 'Barbershop董小姐理发馆库',
                address: '上海市徐汇区乌鲁木齐中路170号',
            },
            {
                img: 'assets/img/pang_cur.png',
                name: 'Barbershop董小姐理发馆库Barbershop董小姐理发馆库Barbershop董小姐理发馆库',
                address: '上海市黄浦区浙江中路229号百米上海市黄浦区浙江中路229号百米上海市黄浦区浙江中路229号百米',
            },
            {
                img: 'assets/img/pang_cur.png',
                name: 'Barbershop董小姐理发馆库',
                address: '上海市徐汇区乌鲁木齐中路170号',
            },
            {
                img: 'assets/img/pang_cur.png',
                name: 'Barbershop董小姐理发馆库',
                address: '上海市徐汇区乌鲁木齐中路170号',
            }
        ];
    }
    StorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StorePage');
    };
    StorePage.prototype.goStoreDetail = function (index) {
        console.log(index);
        this.app.getRootNav().push('StoreDetailPage');
    };
    StorePage.prototype.goSelectCity = function () {
        this.app.getRootNav().push('SelectCityPage');
    };
    return StorePage;
}());
StorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-store',template:/*ion-inline-start:"F:\kupang\src\pages\store\store.html"*/'<!--\n  Generated template for the StorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>选店购卡</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="selectStoreBuyCard">\n  <div class="selectCityBox displayFlex-center">\n      <span class="cityNamne" tappable (click)="goSelectCity()">上海市<ion-icon name="ios-arrow-down-outline"></ion-icon></span>\n      <input type="text" placeholder="输入店铺名称或地址" class="searchInput" />\n      <span>搜索</span>\n  </div>\n  <div class="storeListsBox displayFlex-center" *ngFor="let item of storeInfor;let i = index" tappable (click)="goStoreDetail(i)">\n      <img [src]="item.img">\n      <div class="storeInforBox">\n        <div class="storeName ellipsis1">{{item.name}}</div>\n        <div class="storeAddress ellipsis2"><ion-icon name="md-pin"></ion-icon>{{item.address}}</div>\n      </div>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\store\store.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _c || Object])
], StorePage);

var _a, _b, _c;
//# sourceMappingURL=store.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePageModule", function() { return StorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StorePageModule = (function () {
    function StorePageModule() {
    }
    return StorePageModule;
}());
StorePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__store__["a" /* StorePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* StorePage */]),
        ],
    })
], StorePageModule);

//# sourceMappingURL=store.module.js.map

/***/ })

});
//# sourceMappingURL=0.js.map