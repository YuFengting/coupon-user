webpackJsonp([2],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCityPage; });
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
 * Generated class for the SelectCityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SelectCityPage = (function () {
    function SelectCityPage(navCtrl, navParams, viewCtrl, app, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.zone = zone;
        this.contentScrollTop = 0;
        this.setLetterDisplay = false;
        this.countyName = [
            {
                name: '全城',
                current: true
            }, {
                name: '徐汇区',
                current: false
            }, {
                name: '卢湾区',
                current: false
            }
        ];
        this.cityLists = [
            {
                letter: 'A',
                city: ['阿坝', '阿坝', '阿坝', '阿坝', '阿坝', '阿坝', '阿坝', '阿坝', '阿坝', '阿坝', '阿坝']
            }, {
                letter: 'B',
                city: ['阿坝', '阿坝', '阿坝', '阿坝', '阿坝', '阿坝', '阿坝', '阿坝', '阿坝', '阿坝', '阿坝']
            }
        ];
        this.number = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'P', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }
    SelectCityPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.viewCtrl.setBackButtonText('返回');
        this.content.ionScroll.subscribe(function ($event) {
            _this.zone.run(function () {
                _this.contentScrollTop = $event.scrollTop; //当前滚动的距离
                var gettop = document.getElementById("allCityShowBox").offsetTop;
                if (_this.contentScrollTop >= gettop) {
                    _this.setLetterDisplay = true;
                }
                else {
                    _this.setLetterDisplay = false;
                }
            });
        });
    };
    SelectCityPage.prototype.selectCounty = function (event, index) {
        console.log(event.target.innerText);
        for (var i in this.countyName) {
            var list = this.countyName[i];
            list.current = false;
        }
        this.countyName[index].current = true;
    };
    SelectCityPage.prototype.selectCity = function (event) {
        console.log(event.target.innerText);
    };
    SelectCityPage.prototype.toNumber = function (e) {
        // var num = Math.floor( (e.pageY - 125) / 24);
        var num = Math.round((e.pageY - 125) / 24);
        var letter = this.number[num];
        if (letter) {
            var id = document.getElementById("cityFirstLetter_" + letter);
            if (id) {
                var gettop = document.getElementById("cityFirstLetter_" + letter).offsetTop;
                var getTopH = document.getElementById("allCityShowBox").offsetTop;
                this.content.scrollTo(0, getTopH + gettop);
            }
        }
    };
    return SelectCityPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
], SelectCityPage.prototype, "content", void 0);
SelectCityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-select-city',template:/*ion-inline-start:"F:\kupang\src\pages\store\select-city\select-city.html"*/'<!--\n  Generated template for the SelectCityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>库胖店</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding (drag)="contentScroll()">\n<div class="selectCityContent" (scroll)="contentScroll()" (drag)="contentScroll()">\n  <div class="searchCityBox">\n    <input type="text" placeholder="输入城市名、拼音或首字母查询" />\n  </div>\n  <div class="selectCurrentCity">\n    <div>当前</div>\n    <span>上海</span>\n  </div>\n  <div class="cityAllCountyBox">\n    <span  *ngFor="let item of countyName,let i = index" tappable (click)="selectCounty($event,i)" [class.current]="item.current">{{item.name}}</span>\n  </div>\n  <div class="selectCurrentCity">\n    <div>定位</div>\n    <span>上海</span>\n  </div>\n  <div class="allCityShowBox" id="allCityShowBox">\n      <div class="cityLists" *ngFor="let item of cityLists">\n        <div class="letterTitle" id="cityFirstLetter_{{item.letter}}">{{item.letter}}</div>\n        <div class="currentLetterCity">\n          <span *ngFor="let city of item.city" (click)="selectCity($event)">{{city}}</span>\n        </div>\n      </div>\n  </div>\n  <div class="allLetterBox" *ngIf="setLetterDisplay">\n    <span *ngFor="let item of number" (click)="toNumber($event)" (drag)="toNumber($event)">{{item}}</span>\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"F:\kupang\src\pages\store\select-city\select-city.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], SelectCityPage);

//# sourceMappingURL=select-city.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCityPageModule", function() { return SelectCityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_city__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectCityPageModule = (function () {
    function SelectCityPageModule() {
    }
    return SelectCityPageModule;
}());
SelectCityPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__select_city__["a" /* SelectCityPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_city__["a" /* SelectCityPage */]),
        ],
    })
], SelectCityPageModule);

//# sourceMappingURL=select-city.module.js.map

/***/ })

});
//# sourceMappingURL=2.js.map