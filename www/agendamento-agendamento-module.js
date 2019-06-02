(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agendamento-agendamento-module"],{

/***/ "./src/app/components/forms/form-agendamento/form-agendamento.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/forms/form-agendamento/form-agendamento.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formAgendamento\" (ngSubmit)=\"onClick()\">\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label position=\"floating\">Barbeiro</ion-label>\n      <ion-select cancelText=\"Cancelar\" okText=\"Ok\" formControlName=\"barbeiro\">\n        <ion-select-option *ngFor=\"let barbeiro of barbeiros\" ([value])=\"barbeiro.id\">\n          {{barbeiro.nome}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Serviços</ion-label>\n      <ion-select multiple=\"true\" cancelText=\"Cancelar\" okText=\"Ok\" formControlName=\"servico\">\n        <ion-select-option *ngFor=\"let servico of servicos\" ([value])=\"servico.id\">\n          {{servico.nome}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Data</ion-label>\n      <ion-datetime displayFormat=\"DD/MM/YYYY\" name=\"dtNascimento\" required\n        [min]=\"anoMin\" formControlName=\"data\"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Hora</ion-label>\n      <ion-datetime displayFormat=\"HH:mm\" minuteValues=\"0,25,40,55\" formControlName=\"hora\"></ion-datetime>\n    </ion-item>\n\n    <br>\n\n    <ion-row>\n      <ion-button color=\"primary\" class=\"button button-full\" type=\"Submit\" [disabled]=\"!formAgendamento.valid\"\n        block>\n        Agendar\n      </ion-button>\n    </ion-row>\n\n  </ion-list>\n\n</form>"

/***/ }),

/***/ "./src/app/components/forms/form-agendamento/form-agendamento.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/forms/form-agendamento/form-agendamento.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvZm9ybS1hZ2VuZGFtZW50by9mb3JtLWFnZW5kYW1lbnRvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/forms/form-agendamento/form-agendamento.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/forms/form-agendamento/form-agendamento.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FormAgendamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAgendamentoComponent", function() { return FormAgendamentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_agendamento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/agendamento.service */ "./src/app/services/agendamento.service.ts");
/* harmony import */ var src_app_services_barbeiros_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/barbeiros.service */ "./src/app/services/barbeiros.service.ts");
/* harmony import */ var src_app_services_servicos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/servicos.service */ "./src/app/services/servicos.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var FormAgendamentoComponent = /** @class */ (function () {
    function FormAgendamentoComponent(serviceServicos, serviceBarbeiros, formBuilder, serviceAgendamento, alertController, navCtrl) {
        this.serviceServicos = serviceServicos;
        this.serviceBarbeiros = serviceBarbeiros;
        this.formBuilder = formBuilder;
        this.serviceAgendamento = serviceAgendamento;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.anoMin = new Date().getFullYear();
        this.barbeiros = [];
        this.servicos = [];
        this.formAgendamento = this.formBuilder.group({
            barbeiro: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            servico: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            data: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            hora: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    FormAgendamentoComponent.prototype.ngOnInit = function () {
        this.getBarbeiros();
        this.getServicos();
    };
    FormAgendamentoComponent.prototype.onClick = function () {
        var _this = this;
        this.serviceAgendamento.novoAgendamento(this.formAgendamento.value).then(function (item) {
            _this.alert();
            _this.formAgendamento.reset();
        });
    };
    FormAgendamentoComponent.prototype.alert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Salvo com sucesso!',
                            message: 'Seu agendamento foi realizado com sucesso.',
                            buttons: [{
                                    text: 'OK',
                                    handler: function () {
                                        // this.navCtrl.navigateRoot('/menu/home');
                                        _this.navCtrl.navigateForward('/menu/home');
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormAgendamentoComponent.prototype.getServicos = function () {
        var _this = this;
        this.serviceServicos.getServicos().subscribe(function (item) {
            _this.servicos = item.sort();
        });
    };
    FormAgendamentoComponent.prototype.getBarbeiros = function () {
        var _this = this;
        this.serviceBarbeiros.getBarbeiros().subscribe(function (item) {
            _this.barbeiros = item.sort();
        });
    };
    FormAgendamentoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-agendamento',
            template: __webpack_require__(/*! ./form-agendamento.component.html */ "./src/app/components/forms/form-agendamento/form-agendamento.component.html"),
            styles: [__webpack_require__(/*! ./form-agendamento.component.scss */ "./src/app/components/forms/form-agendamento/form-agendamento.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_servicos_service__WEBPACK_IMPORTED_MODULE_4__["ServicosService"], src_app_services_barbeiros_service__WEBPACK_IMPORTED_MODULE_3__["BarbeirosService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_services_agendamento_service__WEBPACK_IMPORTED_MODULE_2__["AgendamentoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
    ], FormAgendamentoComponent);
    return FormAgendamentoComponent;
}());



/***/ }),

/***/ "./src/app/pages/agendamento/agendamento.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/agendamento/agendamento.module.ts ***!
  \*********************************************************/
/*! exports provided: AgendamentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendamentoPageModule", function() { return AgendamentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _agendamento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agendamento.page */ "./src/app/pages/agendamento/agendamento.page.ts");
/* harmony import */ var src_app_components_forms_form_agendamento_form_agendamento_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/forms/form-agendamento/form-agendamento.component */ "./src/app/components/forms/form-agendamento/form-agendamento.component.ts");








var routes = [
    {
        path: '',
        component: _agendamento_page__WEBPACK_IMPORTED_MODULE_6__["AgendamentoPage"]
    }
];
var AgendamentoPageModule = /** @class */ (function () {
    function AgendamentoPageModule() {
    }
    AgendamentoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_agendamento_page__WEBPACK_IMPORTED_MODULE_6__["AgendamentoPage"], src_app_components_forms_form_agendamento_form_agendamento_component__WEBPACK_IMPORTED_MODULE_7__["FormAgendamentoComponent"]]
        })
    ], AgendamentoPageModule);
    return AgendamentoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/agendamento/agendamento.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/agendamento/agendamento.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Agendar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <app-form-agendamento></app-form-agendamento>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/agendamento/agendamento.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/agendamento/agendamento.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FnZW5kYW1lbnRvL2FnZW5kYW1lbnRvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/agendamento/agendamento.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/agendamento/agendamento.page.ts ***!
  \*******************************************************/
/*! exports provided: AgendamentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendamentoPage", function() { return AgendamentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AgendamentoPage = /** @class */ (function () {
    function AgendamentoPage() {
    }
    AgendamentoPage.prototype.ngOnInit = function () {
    };
    AgendamentoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agendamento',
            template: __webpack_require__(/*! ./agendamento.page.html */ "./src/app/pages/agendamento/agendamento.page.html"),
            styles: [__webpack_require__(/*! ./agendamento.page.scss */ "./src/app/pages/agendamento/agendamento.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AgendamentoPage);
    return AgendamentoPage;
}());



/***/ })

}]);
//# sourceMappingURL=agendamento-agendamento-module.js.map