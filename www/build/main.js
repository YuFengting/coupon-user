webpackJsonp([27],{

/***/ 133:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		310,
		62
	],
	"../pages/account/my-bill/my-bill.module": [
		300,
		61
	],
	"../pages/account/my-customer/my-customer.module": [
		303,
		58
	],
	"../pages/account/my-integral/integral-rules/integral-rules.module": [
		301,
		57
	],
	"../pages/account/my-integral/my-integral.module": [
		302,
		26
	],
	"../pages/account/setting/about-coupon/about-coupon.module": [
		305,
		25
	],
	"../pages/account/setting/payment-instruction/payment-instruction.module": [
		307,
		24
	],
	"../pages/account/setting/recharge-instruction/recharge-instruction.module": [
		306,
		23
	],
	"../pages/account/setting/set-password/set-password.module": [
		308,
		22
	],
	"../pages/account/setting/setting.module": [
		309,
		21
	],
	"../pages/account/setting/user-setting/user-setting.module": [
		304,
		20
	],
	"../pages/activation-card-nologin/activation-card-nologin.module": [
		317,
		19
	],
	"../pages/activation-card/activation-card.module": [
		318,
		18
	],
	"../pages/home/card-infor/card-infor.module": [
		314,
		17
	],
	"../pages/home/card-package/card-package.module": [
		315,
		16
	],
	"../pages/home/charge-card/charge-card.module": [
		293,
		15
	],
	"../pages/home/home.module": [
		319,
		14
	],
	"../pages/home/my-treat/entertain-success/entertain-success.module": [
		312,
		13
	],
	"../pages/home/my-treat/my-treat.module": [
		316,
		12
	],
	"../pages/home/my-treat/stand-treat/stand-treat.module": [
		313,
		11
	],
	"../pages/home/pay-fail/pay-fail.module": [
		292,
		10
	],
	"../pages/home/pay-success/pay-success.module": [
		294,
		9
	],
	"../pages/home/transfer-card/transfer-card.module": [
		311,
		8
	],
	"../pages/login/login.module": [
		322,
		7
	],
	"../pages/login/password-login/password-login.module": [
		320,
		6
	],
	"../pages/login/update-password/update-password.module": [
		321,
		5
	],
	"../pages/nearby/nearby.module": [
		299,
		4
	],
	"../pages/store/consume/consume.module": [
		295,
		3
	],
	"../pages/store/select-city/select-city.module": [
		297,
		2
	],
	"../pages/store/store-detail/store-detail.module": [
		296,
		1
	],
	"../pages/store/store.module": [
		298,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = 'HomePage';
        this.tab2Root = 'StorePage';
        this.tab3Root = 'NearbyPage';
        this.tab4Root = 'AccountPage';
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\kupang\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="ios-homeIcon"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="库胖店" tabIcon="ios-couponIcon"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="附近" tabIcon="ios-nearbyIcon"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="我的" tabIcon="ios-myIcon"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"F:\kupang\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/home/pay-fail/pay-fail.module#PayFailPageModule', name: 'PayFailPage', segment: 'pay-fail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/charge-card/charge-card.module#ChargeCardPageModule', name: 'ChargeCardPage', segment: 'charge-card', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/pay-success/pay-success.module#PaySuccessPageModule', name: 'PaySuccessPage', segment: 'pay-success', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/store/consume/consume.module#ConsumePageModule', name: 'ConsumePage', segment: 'consume', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/store/store-detail/store-detail.module#StoreDetailPageModule', name: 'StoreDetailPage', segment: 'store-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/store/select-city/select-city.module#SelectCityPageModule', name: 'SelectCityPage', segment: 'select-city', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/store/store.module#StorePageModule', name: 'StorePage', segment: 'store', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/nearby/nearby.module#NearbyPageModule', name: 'NearbyPage', segment: 'nearby', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/my-bill/my-bill.module#MyBillPageModule', name: 'MyBillPage', segment: 'my-bill', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/my-integral/integral-rules/integral-rules.module#IntegralRulesPageModule', name: 'IntegralRulesPage', segment: 'integral-rules', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/my-integral/my-integral.module#MyIntegralPageModule', name: 'MyIntegralPage', segment: 'my-integral', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/my-customer/my-customer.module#MyCustomerPageModule', name: 'MyCustomerPage', segment: 'my-customer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/setting/user-setting/user-setting.module#UserSettingPageModule', name: 'UserSettingPage', segment: 'user-setting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/setting/about-coupon/about-coupon.module#AboutCouponPageModule', name: 'AboutCouponPage', segment: 'about-coupon', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/setting/recharge-instruction/recharge-instruction.module#RechargeInstructionPageModule', name: 'RechargeInstructionPage', segment: 'recharge-instruction', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/setting/payment-instruction/payment-instruction.module#PaymentInstructionPageModule', name: 'PaymentInstructionPage', segment: 'payment-instruction', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/update-password/update-password.module#UpdatePasswordPageModule', name: 'UpdatePasswordPage', segment: 'update-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/password-login/password-login.module#PasswordLoginPageModule', name: 'PasswordLoginPage', segment: 'password-login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/setting/set-password/set-password.module#SetPasswordPageModule', name: 'SetPasswordPage', segment: 'set-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/transfer-card/transfer-card.module#TransferCardPageModule', name: 'TransferCardPage', segment: 'transfer-card', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/my-treat/entertain-success/entertain-success.module#EntertainSuccessPageModule', name: 'EntertainSuccessPage', segment: 'entertain-success', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/my-treat/stand-treat/stand-treat.module#StandTreatPageModule', name: 'StandTreatPage', segment: 'stand-treat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/card-infor/card-infor.module#CardInforPageModule', name: 'CardInforPage', segment: 'card-infor', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/card-package/card-package.module#CardPackagePageModule', name: 'CardPackagePage', segment: 'card-package', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/my-treat/my-treat.module#MyTreatPageModule', name: 'MyTreatPage', segment: 'my-treat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/activation-card-nologin/activation-card-nologin.module#ActivationCardNologinPageModule', name: 'ActivationCardNologinPage', segment: 'activation-card-nologin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/activation-card/activation-card.module#ActivationCardPageModule', name: 'ActivationCardPage', segment: 'activation-card', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\kupang\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"F:\kupang\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.js.map