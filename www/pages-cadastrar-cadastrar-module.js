(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastrar-cadastrar-module"],{

/***/ "./src/app/components/forms/form-cadastro/form-cadastro.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/form-cadastro/form-cadastro.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onClick()\" [formGroup]=\"formCad\">\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label position=\"floating\">Nome</ion-label>\n      <ion-input type=\"text\" required formControlName=\"nome\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">E-mail</ion-label>\n      <ion-input type=\"email\" required formControlName=\"email\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors\">\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\n        <div class=\"error-message\"\n          *ngIf=\"formCad.get('email').hasError(validation.type) &&\n          (formCad.get('email').dirty ||\n          formCad.get('email').touched)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label floating>Senha</ion-label>\n      <ion-input [type]=\"isSenha ? 'text' : 'password'\" required\n        formControlName=\"senha\"></ion-input>\n      <button (click)=\"togglePasswordFieldType()\" color=\"medium\" type=\"button\">\n        <ion-icon [name]=\"isSenha ? 'eye-off' : 'eye'\"></ion-icon>\n      </button>\n    </ion-item>\n\n    <br>\n    <ion-row>\n      <ion-button color=\"primary\" class=\"button button-full\" type=\"Submit\"\n        [disabled]=\"!formCad.valid\"\n        block>\n        cadastrar\n      </ion-button>\n    </ion-row>\n\n  </ion-list>\n\n</form>"

/***/ }),

/***/ "./src/app/components/forms/form-cadastro/form-cadastro.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/forms/form-cadastro/form-cadastro.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin: 50% 0% 50% 0%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3Jtcy9mb3JtLWNhZGFzdHJvL0M6XFxVc2Vyc1xcci5iLmRhLnNpbHZhLmp1bmlvclxcRGVza3RvcFxcSU9OSUNcXFNjaGVkdWxpbmcvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvcm1zXFxmb3JtLWNhZGFzdHJvXFxmb3JtLWNhZGFzdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvcm1zL2Zvcm0tY2FkYXN0cm8vZm9ybS1jYWRhc3Ryby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICAgIG1hcmdpbjogNTAlIDAlIDUwJSAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/forms/form-cadastro/form-cadastro.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/forms/form-cadastro/form-cadastro.component.ts ***!
  \***************************************************************************/
/*! exports provided: FormCadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCadastroComponent", function() { return FormCadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var FormCadastroComponent = /** @class */ (function () {
    function FormCadastroComponent(formBuilder, toastController, authService) {
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.authService = authService;
        this.errorMessage = '';
        this.successMessage = '';
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
        this.formCad = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])],
            senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
                ])]
        });
    }
    FormCadastroComponent.prototype.ngOnInit = function () { };
    FormCadastroComponent.prototype.presentToast = function (msg) {
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
    FormCadastroComponent.prototype.tratarErros = function (errorCode) {
        switch (errorCode) {
            case 'auth/weak-password':
                this.presentToast('A senha deve ter pelo menos 6 caracteres');
                break;
            case 'auth/invalid-email':
                this.presentToast('E-mail inválido.');
                break;
            case 'auth/email-already-in-use':
                this.presentToast('O endereço de e-mail já está sendo usado por outra conta.');
                break;
        }
    };
    FormCadastroComponent.prototype.tryRegister = function (value) {
        var _this = this;
        this.authService.registerUser(value)
            .then(function (res) {
            _this.authService.atualizarDadosUsuario(value.nome);
        }, function (err) {
            _this.tratarErros(err.code);
        });
    };
    FormCadastroComponent.prototype.onClick = function () {
        this.tryRegister(this.formCad.value);
    };
    FormCadastroComponent.prototype.togglePasswordFieldType = function () {
        this.isSenha = !this.isSenha;
    };
    FormCadastroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-cadastro',
            template: __webpack_require__(/*! ./form-cadastro.component.html */ "./src/app/components/forms/form-cadastro/form-cadastro.component.html"),
            styles: [__webpack_require__(/*! ./form-cadastro.component.scss */ "./src/app/components/forms/form-cadastro/form-cadastro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], FormCadastroComponent);
    return FormCadastroComponent;
}());



/***/ }),

/***/ "./src/app/pages/cadastrar/cadastrar.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/cadastrar/cadastrar.module.ts ***!
  \*****************************************************/
/*! exports provided: CadastrarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarPageModule", function() { return CadastrarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastrar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastrar.page */ "./src/app/pages/cadastrar/cadastrar.page.ts");
/* harmony import */ var src_app_components_forms_form_cadastro_form_cadastro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/forms/form-cadastro/form-cadastro.component */ "./src/app/components/forms/form-cadastro/form-cadastro.component.ts");








var routes = [
    {
        path: '',
        component: _cadastrar_page__WEBPACK_IMPORTED_MODULE_6__["CadastrarPage"]
    }
];
var CadastrarPageModule = /** @class */ (function () {
    function CadastrarPageModule() {
    }
    CadastrarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_cadastrar_page__WEBPACK_IMPORTED_MODULE_6__["CadastrarPage"], src_app_components_forms_form_cadastro_form_cadastro_component__WEBPACK_IMPORTED_MODULE_7__["FormCadastroComponent"]]
        })
    ], CadastrarPageModule);
    return CadastrarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cadastrar/cadastrar.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/cadastrar/cadastrar.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content has-header=\"true\" padding=\"true\">\n  <div layout=\"row\" layout-align=\"space-around center\">\n    <app-form-cadastro></app-form-cadastro>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/cadastrar/cadastrar.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/cadastrar/cadastrar.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-content {\n  display: table !important;\n  width: 100% !important;\n  height: 100% !important; }\n\n.scroll {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FkYXN0cmFyL0M6XFxVc2Vyc1xcci5iLmRhLnNpbHZhLmp1bmlvclxcRGVza3RvcFxcSU9OSUNcXFNjaGVkdWxpbmcvc3JjXFxhcHBcXHBhZ2VzXFxjYWRhc3RyYXJcXGNhZGFzdHJhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWRhc3RyYXIvY2FkYXN0cmFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtY29udGVudCB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC5zY3JvbGwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cadastrar/cadastrar.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cadastrar/cadastrar.page.ts ***!
  \***************************************************/
/*! exports provided: CadastrarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarPage", function() { return CadastrarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CadastrarPage = /** @class */ (function () {
    function CadastrarPage() {
    }
    CadastrarPage.prototype.ngOnInit = function () {
    };
    CadastrarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastrar',
            template: __webpack_require__(/*! ./cadastrar.page.html */ "./src/app/pages/cadastrar/cadastrar.page.html"),
            styles: [__webpack_require__(/*! ./cadastrar.page.scss */ "./src/app/pages/cadastrar/cadastrar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CadastrarPage);
    return CadastrarPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cadastrar-cadastrar-module.js.map