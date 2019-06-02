(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuracao-configuracao-module"],{

/***/ "./src/app/pages/configuracao/configuracao.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/configuracao/configuracao.module.ts ***!
  \***********************************************************/
/*! exports provided: ConfiguracaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracaoPageModule", function() { return ConfiguracaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuracao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracao.page */ "./src/app/pages/configuracao/configuracao.page.ts");







var routes = [
    {
        path: '',
        component: _configuracao_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracaoPage"]
    }
];
var ConfiguracaoPageModule = /** @class */ (function () {
    function ConfiguracaoPageModule() {
    }
    ConfiguracaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_configuracao_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracaoPage"]]
        })
    ], ConfiguracaoPageModule);
    return ConfiguracaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/configuracao/configuracao.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/configuracao/configuracao.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Configuração</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngFor=\"let p of pages\">\n    <!-- <ion-menu-toggle *ngIf=\"p.url\"> -->\n    <ion-item [routerLink]=\"p.url\" navigateForward=\"root\"\n      routerLinkActive=\"active\">\n      <ion-icon [name]=\"p.icon\" id=\"icon\"></ion-icon>\n      <ion-label>\n        {{ p.title }}\n      </ion-label>\n    </ion-item>\n    <!-- </ion-menu-toggle> -->\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/configuracao/configuracao.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/configuracao/configuracao.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#icon {\n  padding-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlndXJhY2FvL0M6XFxVc2Vyc1xcci5iLmRhLnNpbHZhLmp1bmlvclxcRGVza3RvcFxcSU9OSUNcXFNjaGVkdWxpbmcvc3JjXFxhcHBcXHBhZ2VzXFxjb25maWd1cmFjYW9cXGNvbmZpZ3VyYWNhby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNhby9jb25maWd1cmFjYW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ljb257XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/configuracao/configuracao.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/configuracao/configuracao.page.ts ***!
  \*********************************************************/
/*! exports provided: ConfiguracaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracaoPage", function() { return ConfiguracaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfiguracaoPage = /** @class */ (function () {
    function ConfiguracaoPage() {
        this.pages = [
            {
                title: 'Usuário',
                url: '/usuario',
                icon: 'contact'
            },
            {
                title: 'Conta',
                url: '/menu/agendamento',
                icon: 'finger-print'
            },
            {
                title: 'Sobre',
                url: '/menu/configuracao',
                icon: 'cog'
            }
        ];
    }
    ConfiguracaoPage.prototype.ngOnInit = function () {
    };
    ConfiguracaoPage.prototype.onClickConfig = function (itemMenu) {
        console.log("teste", itemMenu);
    };
    ConfiguracaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuracao',
            template: __webpack_require__(/*! ./configuracao.page.html */ "./src/app/pages/configuracao/configuracao.page.html"),
            styles: [__webpack_require__(/*! ./configuracao.page.scss */ "./src/app/pages/configuracao/configuracao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfiguracaoPage);
    return ConfiguracaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=configuracao-configuracao-module.js.map