(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");







var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [
            { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
            { path: 'agendamento', loadChildren: '../agendamento/agendamento.module#AgendamentoPageModule' },
            { path: 'login', loadChildren: '../login/login.module#LoginPageModule' },
            { path: 'configuracao', loadChildren: '../configuracao/configuracao.module#ConfiguracaoPageModule' }
        ]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu contentId=\"content\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"divUser\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-img id=\"img\" src=\"../assets/img/auser.png\">\n          </ion-img>\n        </ion-col>\n        <ion-col id=\"spanGrid\">\n          <span>{{nomeUsuario | uppercase }}</span> <br>\n          <span>{{emailUsuario}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <ion-content>\n    <div *ngFor=\"let p of pages\">\n      <ion-menu-toggle *ngIf=\"p.url\">\n        <ion-item [routerLink]=\"p.url\" routerDirection=\"root\"\n          routerLinkActive=\"active\">\n          <ion-icon [name]=\"p.icon\"></ion-icon>\n          <ion-label>\n            {{ p.title }}\n          </ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n    </div>\n\n    <ion-item (click)=\"onClickExit()\">\n      <ion-icon name=\"power\"></ion-icon>\n      <ion-label>\n        Sair\n      </ion-label>\n    </ion-item>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-router-outlet id=\"content\"></ion-router-outlet>"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item ion-label {\n  padding-left: 5%; }\n\n#img {\n  height: 75px;\n  width: 75px;\n  border-radius: 50%;\n  display: inline-block; }\n\n.divUser {\n  background-color: #6495ED;\n  height: 100px; }\n\nion-grid #spanGrid {\n  margin: auto;\n  color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9DOlxcVXNlcnNcXHIuYi5kYS5zaWx2YS5qdW5pb3JcXERlc2t0b3BcXElPTklDXFxTY2hlZHVsaW5nL3NyY1xcYXBwXFxwYWdlc1xcbWVudVxcbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxnQkFBZ0IsRUFBQTs7QUFHbkI7RUFDRyxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFHeEI7RUFDRyx5QkFBeUI7RUFDekIsYUFBYSxFQUFBOztBQUdoQjtFQUNHLFlBQVk7RUFDWixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0gaW9uLWxhYmVse1xuICAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuI2ltZ3tcbiAgIGhlaWdodDogNzVweDtcbiAgIHdpZHRoOiA3NXB4O1xuICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZGl2VXNlciB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ5NUVEO1xuICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuaW9uLWdyaWQgI3NwYW5HcmlkIHtcbiAgIG1hcmdpbjogYXV0bztcbiAgIGNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var MenuPage = /** @class */ (function () {
    function MenuPage(authService) {
        this.authService = authService;
        this.nomeUsuario = '';
        this.emailUsuario = '';
        this.pages = [
            {
                title: 'Home',
                url: '/menu/home',
                icon: 'home'
            },
            {
                title: 'Agendar',
                url: '/menu/agendamento',
                icon: 'calendar'
            }
            // ,
            // {
            //   title: 'Configuração',
            //   url: '/menu/configuracao',
            //   icon: 'cog'
            // }
        ];
    }
    MenuPage.prototype.ngOnInit = function () {
        if (this.authService.userDetails().displayName !== null) {
            this.nomeUsuario = this.authService.userDetails().displayName;
        }
        else {
            this.nomeUsuario = "";
        }
        if (this.authService.userDetails().email !== null) {
            this.emailUsuario = this.authService.userDetails().email;
        }
        else {
            this.emailUsuario = "";
        }
    };
    MenuPage.prototype.onClickExit = function () {
        this.authService.logoutUser();
    };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.page.html */ "./src/app/pages/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module.js.map