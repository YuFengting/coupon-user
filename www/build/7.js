webpackJsonp([7],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 /*登录页*/
var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */])],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]],
        providers: []
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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


// declare var baidumap_location;
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.showAgreement = '';
        this.haveTelVal = false;
        this.canGoSubmit = false;
        this.showtelclear = false;
        this.showcodeclear = false;
        this.showCodeOrTime = true;
        this.coutTime = 60;
        this.user = { tel: '', code: '' };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('返回');
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        //进行定位
        // baidumap_location.getCurrentPosition(function (result) {
        //   alert(JSON.stringify(result, null, 4));
        // }, function (error) {
        //
        // });
    };
    LoginPage.prototype.telChange = function () {
        if (this.user.tel != '' && this.user.tel != null) {
            this.haveTelVal = true;
            this.showtelclear = true;
        }
        else {
            this.haveTelVal = false;
            this.showtelclear = false;
        }
    };
    LoginPage.prototype.codeChange = function () {
        if (this.user.code != '' && this.user.code != null) {
            this.canGoSubmit = true;
            this.showcodeclear = true;
        }
        else {
            this.canGoSubmit = false;
            this.showcodeclear = false;
        }
    };
    LoginPage.prototype.showtelClear = function () {
        if (this.user.tel != "") {
            this.showtelclear = true;
        }
        else {
            this.showtelclear = false;
        }
    };
    LoginPage.prototype.hidetelClear = function () {
        // this.showtelclear = false;
    };
    LoginPage.prototype.showcodeClear = function () {
        if (this.user.code != "") {
            this.showcodeclear = true;
        }
        else {
            this.showcodeclear = false;
        }
    };
    LoginPage.prototype.hidecodeClear = function () {
        // this.showcodeclear = false;
    };
    //清除手机号
    LoginPage.prototype.clearTel = function () {
        this.user.tel = '';
        this.haveTelVal = false;
        this.showtelclear = false;
    };
    //清除验证码
    LoginPage.prototype.clearCode = function () {
        this.user.code = '';
        this.canGoSubmit = false;
        this.showcodeclear = false;
    };
    LoginPage.prototype.codeOrTimeDisplay = function () {
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
    LoginPage.prototype.showAgreementbtn = function () {
        this.showAgreement = 'translateY(0)';
    };
    LoginPage.prototype.closeAgreementBtn = function () {
        this.showAgreement = 'translateY(100%)';
    };
    /*跳转密码登录页面*/
    LoginPage.prototype.goPasswordLoginPage = function () {
        this.app.getRootNav().push('PasswordLoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"F:\kupang\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>登录</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="goPasswordLoginPage()" >密码登录</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="loginWrapBox">\n      <div class="loginListBox"><input type="tel" class="loginInput" placeholder="请输入手机号" [(ngModel)]="user.tel" (change)="telChange()" (focus)="showtelClear()" (blur)="hidetelClear()" /><ion-icon name="ios-close-circle" (click)="clearTel()" *ngIf="showtelclear"></ion-icon><span class="getCodeBox" [ngClass]="{\'codeStyleBtn\':haveTelVal}" *ngIf="showCodeOrTime" (click)="codeOrTimeDisplay()" >获取验证码</span><span *ngIf="!showCodeOrTime" class="countTime">{{coutTime}}s</span></div>\n      <div class="loginListBox"><input type="number" class="loginInput" placeholder="请输入验证码" [(ngModel)]="user.code" (change)="codeChange()"  (focus)="showcodeClear()" (blur)="hidecodeClear()"  /><ion-icon name="ios-close-circle" (click)="clearCode()" *ngIf="showcodeclear"></ion-icon></div>\n      <div class="submitbtnBox">\n        <button ion-button block [ngClass]="{\'loginSubmitBtn\':canGoSubmit}">登录</button>\n      </div>\n      <div class="loginTipsBox">温馨提示：未注册库胖账户的手机，登录时将自动注册，且代表您已同意<a class="agreementBox" (click)="showAgreementbtn()">《用户服务协议》</a></div>\n  </div>\n</ion-content>\n<div class="couponAgreementBox" [style.-webkit-transform]="showAgreement">\n  <ion-icon (click)="closeAgreementBtn()" ios="ios-close" md="md-close"></ion-icon>\n  <p>本协议系由宁波区快微贝网络科技有限公司及其关联公司与所有使用库胖服务的主体（包括但不限于个人、团队等）（以下简称用户）对库胖服务的使用及相关服务所订立的有效合约。使用库胖服务的任何服务即表示接受本协议的全部条款。本协议适用于任何库胖服务，包括本协议期限内的用户所使用的各项服务和软件的升级和更新。</p>\n  <h3>1、协议内容 </h3>\n  <p>1.1 库胖的经营者是宁波区快微贝网络科技有限公司，库胖网站是指域名为www.kupangquan.com"。有关库胖平台经营者的信息请查看库胖平台网页底部公布的关于我们和公司资质。</p>\n  <p>1.2 本协议内容包括协议正文及所有库胖已经发布的或将来可能发布的各类规则、公告或通知。所有规则为本协议不可分割的组成部分，与协议正文具有同等法律效力。除另行明确声明外，任何库胖提供的服务均受本协议约束。</p>\n  <p>1.3 您应当在使用库胖之前认真阅读全部协议内容，对于协议中以粗体标注的内容，您应重点阅读。如您对协议有任何疑问，应向库胖咨询。但无论您事实上是否在使用库胖之前认真阅读了本协议内容，只要您同意本协议并申请成为库胖用户，则本协议即对您产生约束，届时您不应以未阅读本协议的内容或者未获得库胖对您问询的解答等理由，主张本协议无效，或要求撤销本协议。</p>\n  <p>1.4 您承诺接受并遵守本协议的约定。如果您不同意本协议的约定，您应立即停止申请程序或停止使用库胖的相关功能和服务。库胖有权根据需要不时地制订、修改本协议及/或各类规则，并以网站公示的方式进行公告，不再单独通知您。变更后的协议和规则一经在网站公布后，立即自动生效。如您不同意相关变更，应当立即停止使用库胖。如您继续使用库胖，即视为您完全知悉并接受经修订的协议和规则。</p>\n  <p>1.5 本协议不涉及您与库胖以外的其它平台消费者之间因网上交易而产生的法律关系及法律纠纷。</p>\n  <h3>2、用户申请 </h3>\n  <p>2.1 您确认，在您完成申请程序或以其它库胖允许的方式（在线实名认证）实际使用库胖时，您应当是在工商行政监督管理局注册成功的法人、个体工用户或其他经营组织、或具备完全民事权利能力和完全民事行为能力的自然人，并应向库胖提交证明您具备前述主体资格的法律文件资料（包括但不限于工商营业执照、组织机构代码证、手持身份证等），您保证向库胖提交的文件资料均为真实、有效的。若您不具备前述主体资格，或在申请过程中提交虚假、伪造的文件资料，库胖有权注销（永久冻结）您的用户账号，并向您索偿。</p>\n  <p>2.1.1 在您签署本协议，完成会员申请程序或以其它库胖允许的方式实际使用库胖时，库胖会向您提供唯一编号的库胖注册用户账户（以下简称账户）。</p>\n  <p>2.1.2 您可以对账户设置注册邮箱和密码，通过该注册邮箱密码登陆并管理库胖用户账号。您设置的注册邮箱不得侵犯或涉嫌侵犯他人合法权益。</p>\n  <p>2.1.3 您应对您的账户（注册邮箱）和密码的安全，以及对通过您的账户（注册邮箱）和密码实施的行为负责。除非有法律规定或司法裁定，且征得库胖的同意，否则，账户（注册邮箱）和密码不得以任何方式转让、赠与或继承（与账户相关的财产权益除外）。</p>\n  <p>2.1.4 如果发现任何人不当使用您的账户或有任何其它可能危及您的账户安全的情形时，您应当立即以有效方式通知库胖，以便库胖暂停相关服务。您理解库胖对您的请求采取行动需要合理时间，库胖对在采取行动前已经产生的后果（包括但不限于您的任何损失）不承担任何责任。</p>\n  <p>2.1.5 为方便您使用库胖及库胖关联公司或其它组织的服务（以下称其它服务），您同意并授权库胖将您在申请、使用库胖服务过程中提供、形成的信息传递给向您提供其它服务的其它组织。</p>\n  <p>2.2 在您按照申请程序提示填写注册信息、用户信息并完成全部申请程序后或以其它库胖允许的方式实际使用库胖时，您即成为库胖用户会员（以下简称用户）。在注册时，您应当按照法律法规要求，或注册程序的提示准确提供并及时申请变更您的资料，以使之真实、及时，完整和准确。</p>\n  <p>2.2.1 经库胖审核认证，如您提供的资料错误、不实、需更新或不完整的，库胖有权向您发出询问及/或要求变更的通知，并有权直接做出删除相应资料的处理，直至中止、终止对您提供部分或全部库胖服务。库胖对此不承担任何责任，您将承担因此产生的任何直接或间接的损失。</p>\n  <p>2.2.2 您应当准确填写您提供的电子邮箱、用户名称、实名、用户联系人、用户联系电话、企业法人营业执照注册号或身份证号、营业地址等联系方式信息，以便库胖及或库胖个人用户或个人会员或直接消费的消费者与您进行有效联系，如上述信息发生变化，您需及时向库胖申请变更。因您提供的联系方式错误或无效，无法与您取得联系，导致您在使用库胖过程中产生任何损失或增加费用的，应由您完全独自承担。</p>\n  <p>2.2.3 您在使用库胖过程中，所产生的应纳税赋，以及一切硬件、软件、服务及其它方面的费用，均由您独自承担。</p>\n  <p>2.2.4 如果您提供给库胖的资料不准确，不真实，不合法有效，库胖保留结束您使用库胖各项服务的权利。您同意，您所提供的真实、准确的库胖注册信息、用户信息作为认定您与您的库胖账户的关联性以及您用户会员身份的唯一证据。您同意，与您用户账户相关的一切资料、数据和记录（包括但不限于登录记录、登录后行为等）以库胖的系统数据为准。</p>\n  <h3>3、库胖服务</h3>\n  <p>3.1 通过库胖及其关联公司提供的库胖服务和其它服务，您可在你的网站中使用库胖的服务下单、收款、达成交易意向并进行交易，参加库胖组织的活动以及使用其它信息服务及技术服务。</p>\n  <p>3.2 您在库胖交易过程中与库胖个人用户会员、直接消费的消费者发生交易纠纷时，一旦您或个人用户会员或直接消费的消费者任一方或双方共同提交库胖要求调处，则库胖有权根据独立判断做出调处决定，您了解并同意接受库胖的判断和调处决定。该决定将对您具有约束力。您亦可以直接请求消费者协会、工商局、公安局等相关权责部门予以调处。</p>\n  <p>3.3 您了解并同意，库胖有权应政府部门（包括司法及行政部门）的要求或与你发生交易行为的消费者，向其提供您在库胖填写的注册信息、用户信息和交易纪录等必要信息。如您涉嫌侵犯他人知识产权，盗刷银行卡等行为，库胖亦有权在初步判断涉嫌侵权行为存在的情况下，向权利人提供您必要的身份信息。</p>\n  <p>3.4 在库胖申请账户并审核通过后，您可以委托库胖为您的网站代收款或你的产品代收款。您通过库胖平台创建的交易并代收款的，视为您同意并授权库胖向消费用户代收购买您的产品所对应的交易订单的交易款项及相关服务费用。</p>\n  <p>3.5 您可以选库胖为你代收货款，您具有销售权限的合法商品的交易款项，必须销售法律许可的商品和你拥有知识产权的商品。如有违法库胖会立即给于评估处理，严重者移交公安机关立安处理。</p>\n  <p>3.6 对您通过库胖交易成功的订单，您同意按照库胖平台相关规定向库胖支付相应比例的佣金。</p>\n  <p>3.7 您同意库胖根据《库胖平台公告相关规定》与您进行结算。</p>\n  <h3>4、使用规范 </h3>\n  <p>在使用库胖过程中，您承诺遵守以下约定：</p>\n  <p>4.1 在使用库胖过程中实施的所有行为均遵守国家法律、法规等规范性文件及库胖各项规则的规定和要求，不违背社会公共利益或公共道德，不损害他人的合法权益，不违反本协议及相关规则。您如果违反前述承诺，产生任何法律后果的，您应以自己的名义独立承担所有的法律责任，并确保库胖免于因此产生任何损失。</p>\n  <p>4.2 在库胖交易过程中，遵守诚实信用原则，不在交易过程中采取不正当竞争行为，不扰乱网上交易的正常秩序，不从事与网上交易无关的行为。</p>\n  <p>4.3 不以虚构或歪曲事实的方式介绍和宣传您的产品，以免容易产生纠纷。</p>\n  <p>4.4 不使用任何装置、软件或例行程序等技术手段干预或试图干预库胖的正常运作或正在库胖上进行的任何交易、活动。您不得采取任何将导致不合理的庞大数据负载加诸库胖网络设备的行动。</p>\n  <p>4.5 不得盗用其他用户信息进行库胖注册或认证。</p>\n  <p>4.6 不得发布下列违法信息：</p>\n  <p>4.6.1 反对宪法所确定的基本原则的;</p>\n  <p>4.6.2 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的;</p>\n  <p>4.6.3 损害国家荣誉和利益的;</p>\n  <p>4.6.4 煽动民族仇恨、民族歧视，破坏民族团结的;</p>\n  <p>4.6.5 破坏国家宗教政策，宣扬邪教和封建迷信的;</p>\n  <p>4.6.6 散布谣言，扰乱社会秩序，破坏社会稳定的;</p>\n  <p>4.6.7 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的;</p>\n  <p>4.6.8 侮辱或者诽谤他人，侵害他人合法权益的;</p>\n  <p>4.6.9 含有法律、行政法规禁止的其它内容的。</p>\n  <p>4.7 不得买卖国家禁止销售的或限制销售的物品、不得买卖侵犯他人知识产权或其他合法权益的物品，也不得买卖违背社会公共利益或公共道德的、或是库胖认为不适合在库胖销售的物品；不得提供违反法律、行政法规禁止的服务。</p>\n  <p>4.8 库胖有权对您是否违反上述承诺做出单方认定，并根据单方认定结果适用规则予以处理或终止向您提供服务，且无须征得您的同意或提前通知您。</p>\n  <p>4.9 经国家行政或司法机关的生效法律文书确认您存在违法或侵权行为，或者库胖根据自身的判断，认为您的行为涉嫌违反本协议及/或规则的条款或涉嫌违反法律法规的规定的，则库胖有权公示您的该等涉嫌违法或违约行为及库胖已对您采取的措施。</p>\n  <p>4.10 对于您在库胖上发布的涉嫌违法或涉嫌侵犯他人合法权利或违反本协议及/或规则的信息，库胖有权不经通知您即予以删除，且按照规则的规定进行处罚。</p>\n  <p>4.11 对于您在库胖上实施的行为，包括您未在库胖上实施但已经对库胖及其用户产生影响的行为，库胖有权单方认定您行为的性质是否构成对本协议及/或规则的违反，并据此做出相应处罚。您应自行保存与您行为有关的全部证据，并应对无法提供证据而承担不利后果。</p>\n  <p>4.12 对于您涉嫌违反承诺的行为对任何第三方造成损害的，您均应当以自己的名义独立承担所有的法律责任，并应确保库胖免于因此产生损失或增加费用。</p>\n  <p>4.13 如您涉嫌违反有关法律或者本协议之规定，使库胖遭受任何损失，或受到任何第三方的索赔，或受到任何行政管理部门的处罚，您应当赔偿库胖因此造成的损失及/或发生的费用，包括合理的律师费用。</p>\n  <p>您已经了解并且同意：</p>\n  <p>4.14 库胖有权对您是否违反上述承诺做出单方认定，并根据单方认定结果适用规则予以处理或终止向您提供服务，且无须征得您的同意或提前通知您。</p>\n  <p>4.15 经国家行政或司法机关的生效法律文书确认您存在违法或侵权行为，或者库胖根据自身的判断，认为您的行为涉嫌违反本协议及/或规则的条款或涉嫌违反法律法规的规定的，则库胖有权公示您的该等涉嫌违法或违约行为及库胖已对您采取的措施。</p>\n  <p>4.16 对于您在库胖上发布的涉嫌违法或涉嫌侵犯他人合法权利或违反本协议及/或规则的信息，库胖有权不经通知您即予以删除，且按照规则的规定进行处罚。</p>\n  <p>4.17 对于您在库胖上实施的行为，包括您未在库胖上实施但已经对库胖及其用户产生影响的行为，库胖有权单方认定您行为的性质是否构成对本协议及/或规则的违反，并据此做出相应处罚。您应自行保存与您行为有关的全部证据，并应对无法提供证据而承担不利后果。</p>\n  <p>4.18 对于您涉嫌违反承诺的行为对任何第三方造成损害的，您均应当以自己的名义独立承担所有的法律责任，并应确保库胖免于因此产生损失或增加费用。</p>\n  <p>4.19 如您涉嫌违反有关法律或者本协议之规定，使库胖遭受任何损失，或受到任何第三方的索赔，或受到任何行政管理部门的处罚，您应当赔偿库胖因此造成的损失及/或发生的费用，包括合理的律师费用。</p>\n  <h3>5、特别授权 </h3>\n  <p>您完全理解并不可撤销地授予库胖及其关联公司下列权利 ：</p>\n  <p>5.1 一旦您向库胖做出任何形式的承诺，且已确认您违反了该承诺，则库胖有权立即按您的承诺或协议约定的方式对您的账户采取限制措施，包括中止或终止向您提供服务，并公示相关公司确认的您的违约情况。您了解并同意，库胖无须就相关确认与您核对事实，或另行征得您的同意，且库胖无须就此限制措施或公示行为向您承担任何的责任。</p>\n  <p>5.2 对于您提供的资料及数据信息，您授予库胖独家的、全球通用的、永久的、免费的许可使用权利(并有权在多个层面对该权利进行再授权)。此外，库胖有权(全部或部分的)使用、复制、修订、改写、发布、翻译、分发、执行和展示您的全部资料数据（包括但不限于注册资料、用户信息、交易行为数据及全部展示于库胖平台的各类信息），并以现在已知或日后开发的任何形式、媒体或技术，将上述信息应用于法律许可的范围内。</p>\n  <h3>6、责任范围和责任限制 </h3>\n  <p>6.1 库胖负责"现有的"和"未来的"的状态向您提供库胖服务。但库胖对库胖服务不作任何明示或暗示的保证，包括但不限于库胖服务的适用性、没有错误或疏漏、持续性、准确性、可靠性、适用于某一特定用途。同时，库胖也不对库胖服务所涉及的技术及信息的有效性、准确性、正确性、可靠性、质量、稳定、完整和及时性做出任何承诺和保证。</p>\n  <p>6.2 您了解库胖上的部分信息系您自行发布，且可能存在风险和瑕疵。库胖仅作为您发布服务信息、物色交易对象、就物品及/或服务的交易、代收款进行协商及开展交易的平台，库胖无法控制交易所涉及的物品及/或服务的质量、安全或合法性，产品信息的真实性或准确性，以及交易各方履行其在交易协议中各项义务的能力。您应自行谨慎判断确定相关物品及/或信息的真实性、合法性和有效性，并自行承担因此产生的责任与损失。</p>\n  <p>6.3 除非法律法规明确要求，或出现以下情况，否则库胖没有义务对您的注册数据、用户信息、交易行为以及与交易有关的其它事项进行事先审查：</p>\n  <p class="textIndent2em">6.3.1 库胖有合理的理由认为您及具体交易事项可能存在重大违法或违约情形。</p>\n  <p class="textIndent2em">6.3.2 库胖有合理的理由认为您在库胖的行为涉嫌违法或不当。</p>\n  <p>6.4 库胖有权受理您与个人用户会员因交易产生的争议，并有权单方判断与该争议相关的事实及应适用的规则，进而做出处理决定。该处理决定对您有约束力。</p>\n  <p>您了解并同意，库胖并非司法机构，仅能以普通人的身份对证据进行鉴别，库胖对争议的调处完全是基于您的委托，库胖无法保证争议处理结果符合您的期望，也不对争议调处结论承担任何责任。如您因此遭受损失，您同意自行向受益人索偿。</p>\n  <p>6.5 您了解并同意，库胖不对因下述任一情况而导致您的任何损害赔偿承担责任，包括但不限于您在库胖交易中产生的费用、服务使用、数据等方面的损失或其它无形损失的损害赔偿(无论库胖是否已被告知该等损害赔偿的可能性)：</p>\n  <p class="textIndent2em">6.5.1 使用或未能使用库胖服务。</p>\n  <p class="textIndent2em">6.5.2 第三方未经批准的使用您的账户或更改您的数据。</p>\n  <p class="textIndent2em">6.5.3 通过库胖购买或获取任何商品、服务、数据、信息或进行交易等行为或替代行为产生的费用及损失。</p>\n  <p class="textIndent2em">6.5.4 您对库胖服务的误解。</p>\n  <p class="textIndent2em">6.5.5 任何非因库胖的原因而引起的与库胖服务有关的其它损失。</p>\n  <p>6.6 不论在何种情况下，库胖均不对由于信息网络正常的设备维护，信息网络连接故障，电脑、通讯或其它系统的故障，电力故障，罢工，劳动争议，暴乱，起义，骚乱，生产力或生产资料不足，火灾，洪水，风暴，爆炸，战争，政府行为，司法行政机关的命令或第三方的不作为而造成的不能服务或延迟服务承担责任。</p>\n  <h3>7、 终止协议 </h3>\n  <p>7.1 您同意，出现以下情况时，库胖有权直接以注销账户的方式终止本协议:</p>\n  <p class="textIndent2em">7.1.1 库胖终止向您提供服务后，您涉嫌再一次直接或间接或以他人名义注册为库胖用户会员的。</p>\n  <p class="textIndent2em">7.1.2 您提供的电子邮箱不存在或无法接收电子邮件，且没有其它方式可以与您进行联系，或库胖以其它联系方式通知您更改电子邮箱信息，而您在库胖通知后七个工作日内仍未更改为有效的电子邮箱的。</p>\n  <p class="textIndent2em">7.1.3 您注册信息中的主要内容及/或用户信息内容不真实或不准确或不及时或不完整，例如您提交开通的网站是A类型，把库胖支付接口使用在B类型的网站上。</p>\n  <p class="textIndent2em">7.1.4 您提供的主体资格文件资料被确认为虚假、伪造的。</p>\n  <p class="textIndent2em">7.1.5 本协议（含规则）变更时，您明示并通知库胖不愿接受新的协议的。</p>\n  <p class="textIndent2em">7.1.6 其它库胖认为应当终止服务的情况。</p>\n  <p>7.2 您有权向库胖要求注销您的账户，经库胖审核同意的，库胖注销（永久冻结）您的账户，届时，您与库胖基于本协议的合同关系即终止。您的账户被注销（永久冻结）后，库胖没有义务为您保留或向您披露您账户中的任何信息，也没有义务向您或第三方转发任何您未曾阅读或发送过的信息。</p>\n  <p>7.3 您同意，您与库胖的合同关系终止后，库胖仍享有下列权利：</p>\n  <p class="textIndent2em">7.3.1继续保存您的注册信息、用户信息及您使用库胖服务期间的所有交易信息。</p>\n  <p class="textIndent2em">7.3.2您在使用库胖期间存在违法行为或违反本协议及/或规则的行为的，库胖仍可依据本协议向您主张权利。</p>\n  <p>7.4 库胖中止或终止向您提供库胖服务后，对于您在服务中止或终止之前的交易行为依下列原则处理，您应独力处理并完全承担进行以下处理所产生的任何争议、损失或增加的任何费用，并应确保库胖免于因此产生任何损失或承担任何费用： 您在服务中止或终止之前已经与个人用户会员达成交易合同，但合同尚未实际履行或已部分履行的，库胖有权在中止或终止服务的同时根据《库胖消费者保障协议》相关条款内容处理您就该订单与库胖的结算金额，并将相关情形通知您的交易对方，同时库胖有权取消该订单。</p>\n  <h3>8、 隐私条款 </h3>\n  <p>8.1 库胖将在库胖网站上公布并不时修订隐私条款，隐私条款构成本协议的有效组成部分。</p>\n  <h3>9、 法律适用及争议解决</h3>\n  <p>9.1 本协议的订立、效力、解释、履行及争议均适用中华人民共和国法律，并排除一切冲突法规的运用。</p>\n  <p>9.2 因本协议产生之争议，双方一致同意提交福建仲裁委员会仲裁解决。</p>\n  <p>9.3 库胖因主张权利所支付的律师费、仲裁费等一切相关费用由过错方承担。</p>\n  <h3>10、其它</h3>\n  <p>10.1 库胖不行使、未能及时行使或者未充分行使本条款或者按照法律规定所享有的权利，不应被视为放弃该权利，也不影响库胖在将来行使该权利。</p>\n  <p>10.2 在法律允许的最大范围内，库胖保留对本协议条款的最终解释权。</p>\n  <h3>11、法律适用与管辖 </h3>\n  <p class="textIndent2em">本协议之效力、解释、变更、执行与争议解决均适用中华人民共和国法律。因本协议产生之争议，均应依照中华人民共和国法律予以处理，并提交本协议签订地有管辖权的人民法院管辖。</p>\n</div>\n'/*ion-inline-end:"F:\kupang\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _d || Object])
], LoginPage);

var _a, _b, _c, _d;
//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=7.js.map