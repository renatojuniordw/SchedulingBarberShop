(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recuperar-senha-recuperar-senha-module"],{

/***/ "./src/app/pages/recuperar-senha/recuperar-senha.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recuperar-senha/recuperar-senha.module.ts ***!
  \*****************************************************************/
/*! exports provided: RecuperarSenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarSenhaPageModule", function() { return RecuperarSenhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recuperar_senha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recuperar-senha.page */ "./src/app/pages/recuperar-senha/recuperar-senha.page.ts");







var routes = [
    {
        path: '',
        component: _recuperar_senha_page__WEBPACK_IMPORTED_MODULE_6__["RecuperarSenhaPage"]
    }
];
var RecuperarSenhaPageModule = /** @class */ (function () {
    function RecuperarSenhaPageModule() {
    }
    RecuperarSenhaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_recuperar_senha_page__WEBPACK_IMPORTED_MODULE_6__["RecuperarSenhaPage"]]
        })
    ], RecuperarSenhaPageModule);
    return RecuperarSenhaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/recuperar-senha/recuperar-senha.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recuperar-senha/recuperar-senha.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Recuperar senha</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content has-header=\"true\" padding=\"true\">\n  <div layout=\"row\" layout-align=\"space-around center\">\n    <form (ngSubmit)=\"onClick()\" [formGroup]=\"formEmail\">\n      <ion-list>\n        <ion-item>\n          <ion-label position=\"floating\">E-mail</ion-label>\n          <ion-input type=\"email\" required formControlName=\"email\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let validation of validation_messages.email\">\n            <div class=\"error-message\"\n              *ngIf=\"formEmail.get('email').hasError(validation.type) &&\n              (formEmail.get('email').dirty ||\n              formEmail.get('email').touched)\">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <br>\n        <ion-row>\n          <ion-button color=\"primary\" class=\"button button-full\" type=\"Submit\"\n            [disabled]=\"!formEmail.valid\"\n            block>\n            Recuperar\n          </ion-button>\n          <label class=\"error-message\">{{errorMessage}}</label>\n          <label class=\"success-message\">{{successMessage}}</label>\n        </ion-row>\n\n      </ion-list>\n\n    </form>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/recuperar-senha/recuperar-senha.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recuperar-senha/recuperar-senha.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY3VwZXJhci1zZW5oYS9yZWN1cGVyYXItc2VuaGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/recuperar-senha/recuperar-senha.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/recuperar-senha/recuperar-senha.page.ts ***!
  \***************************************************************/
/*! exports provided: RecuperarSenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarSenhaPage", function() { return RecuperarSenhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var RecuperarSenhaPage = /** @class */ (function () {
    function RecuperarSenhaPage(formBuilder, navCtrl, toastController, authService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.authService = authService;
        this.errorMessage = '';
        this.successMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'E-mail é obrigatório.' },
                { type: 'pattern', message: 'Digite um email válido.' }
            ]
        };
        this.formEmail = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])]
        });
    }
    RecuperarSenhaPage.prototype.onClick = function () {
        var _this = this;
        this.authService.sendPasswordResetEmail(this.formEmail.value.email, function () {
            _this.navCtrl.navigateForward('/');
            _this.presentToast('E-mail enviado com sucesso.');
        });
    };
    RecuperarSenhaPage.prototype.ngOnInit = function () {
    };
    RecuperarSenhaPage.prototype.presentToast = function (msg) {
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
    RecuperarSenhaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recuperar-senha',
            template: __webpack_require__(/*! ./recuperar-senha.page.html */ "./src/app/pages/recuperar-senha/recuperar-senha.page.html"),
            styles: [__webpack_require__(/*! ./recuperar-senha.page.scss */ "./src/app/pages/recuperar-senha/recuperar-senha.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], RecuperarSenhaPage);
    return RecuperarSenhaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-recuperar-senha-recuperar-senha-module.js.map