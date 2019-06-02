(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/components/forms/form-login/form-login.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/forms/form-login/form-login.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onClick()\" [formGroup]=\"formLogin\">\n\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">E-mail</ion-label>\n        <ion-input type=\"email\" required formControlName=\"email\"></ion-input>\n      </ion-item>\n\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let validation of validation_messages.email\">\n          <div class=\"error-message\"\n            *ngIf=\"formLogin.get('email').hasError(validation.type) &&\n            (formLogin.get('email').dirty ||\n            formLogin.get('email').touched)\">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n  \n      <ion-item>\n        <ion-label floating>Senha</ion-label>\n        <ion-input [type]=\"isSenha ? 'text' : 'password'\" required\n          formControlName=\"senha\"></ion-input>\n        <button (click)=\"togglePasswordFieldType()\" color=\"medium\" type=\"button\">\n          <ion-icon [name]=\"isSenha ? 'eye-off' : 'eye'\"></ion-icon>\n        </button>\n      </ion-item>\n  \n      <br>\n      <ion-row>\n        <ion-button color=\"primary\" class=\"button button-full\" type=\"Submit\"\n          [disabled]=\"!formLogin.valid\"\n          block>\n          ENTRAR\n        </ion-button>\n      </ion-row>\n  \n    </ion-list>\n  \n  </form>"

/***/ }),

/***/ "./src/app/components/forms/form-login/form-login.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/forms/form-login/form-login.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1sb2dpbi9mb3JtLWxvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/forms/form-login/form-login.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/forms/form-login/form-login.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLoginComponent", function() { return FormLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var FormLoginComponent = /** @class */ (function () {
    function FormLoginComponent(navCtrl, authService, toastController, formBuilder) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastController = toastController;
        this.formBuilder = formBuilder;
        this.errorMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'E-mail é obrigatório.' },
                { type: 'pattern', message: 'Digite um email válido.' }
            ],
            'password': [
                { type: 'required', message: 'Senha é obrigatório' },
                { type: 'minlength', message: 'A senha deve ter pelo menos 6 caracteres.' }
            ]
        };
        this.formLogin = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)
                ])]
        });
    }
    FormLoginComponent.prototype.ngOnInit = function () { };
    FormLoginComponent.prototype.onClick = function () {
        this.loginUser(this.formLogin.value);
    };
    FormLoginComponent.prototype.loginUser = function (value) {
        var _this = this;
        this.authService.loginUser(value)
            .then(function (res) {
            _this.errorMessage = '';
            _this.navCtrl.navigateRoot('/menu/home');
        }, function (err) {
            _this.msgErroAlert(err.code);
        });
    };
    FormLoginComponent.prototype.msgErroAlert = function (errorCode) {
        switch (errorCode) {
            case 'auth/invalid-email':
                this.presentToast('E-mail não cadastrado.');
                break;
            case 'auth/user-not-found':
                this.presentToast('Não há registro de usuário correspondente a esse e-mail.');
                break;
            case 'auth/wrong-password':
                this.presentToast('Usuário ou senha inválida.');
                break;
        }
    };
    FormLoginComponent.prototype.togglePasswordFieldType = function () {
        this.isSenha = !this.isSenha;
    };
    FormLoginComponent.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-login',
            template: __webpack_require__(/*! ./form-login.component.html */ "./src/app/components/forms/form-login/form-login.component.html"),
            styles: [__webpack_require__(/*! ./form-login.component.scss */ "./src/app/components/forms/form-login/form-login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], FormLoginComponent);
    return FormLoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var src_app_components_forms_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/forms/form-login/form-login.component */ "./src/app/components/forms/form-login/form-login.component.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"], src_app_components_forms_form_login_form_login_component__WEBPACK_IMPORTED_MODULE_7__["FormLoginComponent"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding>\n\n  <ion-img id=\"img\"\n    src=\"https://i1.wp.com/wp-blog-dir.s3.amazonaws.com/uploads/sites/24/2017/10/barber-logo.png?resize=320%2C320&ssl=1\">\n  </ion-img>\n\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-button expand=\"full\" class=\"button\" color=\"danger\">\n        <ion-icon name=\"logo-google\" class=\"icon\"></ion-icon>\n        Google\n      </ion-button>\n    </ion-row>\n    <ion-row>\n      <ion-button expand=\"full\" class=\"button\" color=\"primary\">\n        <ion-icon name=\"logo-facebook\" class=\"icon\"></ion-icon>\n        Facebook\n      </ion-button>\n    </ion-row>\n  </ion-grid>\n\n  <ion-row class=\"labels\">\n    <hr> OU <hr>\n  </ion-row> -->\n\n  <app-form-login></app-form-login>\n<!-- \n  <ion-item (click)=\"onClickRecuperarSenha()\">\n    Esqueceu sua senha ?\n  </ion-item> -->\n\n  <p (click)=\"onClickRecuperarSenha()\">Esqueceu sua senha ?</p>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#img {\n  margin: auto;\n  width: 60%;\n  padding: 10px; }\n\n.labels {\n  margin: auto;\n  padding: 10px;\n  text-align: center !important; }\n\nhr {\n  width: 40%;\n  background-color: #000000; }\n\nion-button ion-icon {\n  position: absolute;\n  left: 20px; }\n\nion-content {\n  background-color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxyLmIuZGEuc2lsdmEuanVuaW9yXFxEZXNrdG9wXFxJT05JQ1xcU2NoZWR1bGluZy9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLFVBQVU7RUFDVix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdkO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1ne1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNjAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5sYWJlbHN7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbmhye1xuICAgIHdpZHRoOiA0MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbn1cblxuaW9uLWJ1dHRvbiBpb24taWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIwcHg7XG59XG5cbmlvbi1jb250ZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, auht) {
        this.navCtrl = navCtrl;
        this.auht = auht;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.pushPageCad = function () {
        // this.navCtrl.navigateRoot('/cadastrar');
        this.navCtrl.navigateForward('/cadastrar');
    };
    LoginPage.prototype.onClickRecuperarSenha = function () {
        this.navCtrl.navigateForward('/recuperar-senha');
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map