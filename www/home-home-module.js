(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/components/card-agendamento/card-agendamento.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/card-agendamento/card-agendamento.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngFor=\"let item of agendamentos\">\n  <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <ion-card-title>\n          {{item.servico}}\n        </ion-card-title>\n      </ion-item>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-chip>\n        <ion-icon name=\"calendar\" color=\"primary\"></ion-icon>\n        <ion-label>{{item.data | date: 'dd/MM/yyyy'}}</ion-label>\n      </ion-chip>\n      <ion-chip>\n        <ion-icon name=\"time\" color=\"primary\"></ion-icon>\n        <ion-label>{{item.hora | date: 'H:mm'}}</ion-label>\n      </ion-chip>\n      <br>\n      <ion-chip>\n        <ion-icon name=\"person\" color=\"primary\"></ion-icon>\n        <ion-label>{{item.barbeiro}}</ion-label>\n        <ion-icon name=\"cut\"></ion-icon>\n      </ion-chip>\n      <br>\n      <ion-button type=\"button\" (click)=\"presentActionSheet(item.id)\"\n        id=\"{{item.id}}\" color=\"primary\">\n        configuração\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</section>"

/***/ }),

/***/ "./src/app/components/card-agendamento/card-agendamento.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/card-agendamento/card-agendamento.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1hZ2VuZGFtZW50by9jYXJkLWFnZW5kYW1lbnRvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/card-agendamento/card-agendamento.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/card-agendamento/card-agendamento.component.ts ***!
  \***************************************************************************/
/*! exports provided: CardAgendamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardAgendamentoComponent", function() { return CardAgendamentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/modal/modal.page */ "./src/app/pages/modal/modal.page.ts");
/* harmony import */ var src_app_services_agendamento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/agendamento.service */ "./src/app/services/agendamento.service.ts");






var CardAgendamentoComponent = /** @class */ (function () {
    function CardAgendamentoComponent(alertController, actionSheetController, toastController, modalController, serviceAgendamento) {
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.modalController = modalController;
        this.serviceAgendamento = serviceAgendamento;
    }
    CardAgendamentoComponent.prototype.ngOnInit = function () { };
    CardAgendamentoComponent.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Agendameto cancelado com sucesso.',
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
    CardAgendamentoComponent.prototype.excluirAgendamento = function (id) {
        var _this = this;
        this.serviceAgendamento.deletarAgendamento(id).then(function () {
            _this.presentToast();
        });
    };
    CardAgendamentoComponent.prototype.presentAlert = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cancelar Agendamento',
                            message: 'Deseja cancelar o agendamento?',
                            buttons: [
                                {
                                    text: 'Sim',
                                    handler: function () {
                                        _this.excluirAgendamento(id);
                                    }
                                }, {
                                    text: 'Não',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }
                            ]
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
    CardAgendamentoComponent.prototype.presentActionSheet = function (idAgendamento) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Agendamento',
                            buttons: [{
                                    text: 'Cancelar Agendamento',
                                    role: 'destructive',
                                    icon: 'close-circle',
                                    handler: function () {
                                        _this.presentAlert(idAgendamento);
                                    }
                                }, {
                                    text: 'Editar Agendamento',
                                    icon: 'create',
                                    handler: function () {
                                        _this.openModal(idAgendamento);
                                    }
                                }, {
                                    text: 'Fechar',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () { }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CardAgendamentoComponent.prototype.openModal = function (idAgendamento) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: src_app_pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_3__["ModalPage"],
                            componentProps: { value: idAgendamento }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CardAgendamentoComponent.prototype, "agendamentos", void 0);
    CardAgendamentoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-agendamento',
            template: __webpack_require__(/*! ./card-agendamento.component.html */ "./src/app/components/card-agendamento/card-agendamento.component.html"),
            styles: [__webpack_require__(/*! ./card-agendamento.component.scss */ "./src/app/components/card-agendamento/card-agendamento.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            src_app_services_agendamento_service__WEBPACK_IMPORTED_MODULE_4__["AgendamentoService"]])
    ], CardAgendamentoComponent);
    return CardAgendamentoComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_components_card_agendamento_card_agendamento_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/card-agendamento/card-agendamento.component */ "./src/app/components/card-agendamento/card-agendamento.component.ts");








var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], src_app_components_card_agendamento_card_agendamento_component__WEBPACK_IMPORTED_MODULE_7__["CardAgendamentoComponent"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Home</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <ion-label>Agendamentos abertos</ion-label>\n        <ion-badge color=\"success\">{{totalAgentamento}}</ion-badge>\n    </ion-item>\n\n    <ion-content padding>\n        <app-card-agendamento [agendamentos]=\"agendamentos\"></app-card-agendamento>\n        <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadAgendamentos($event)\">\n            <ion-infinite-scroll-content\n                loadingSpinner=\"bubbles\"\n                loadingText=\"Carregando Agendamentos\">\n            </ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </ion-content>\n\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button (click)=\"onClickAgendamento()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_agendamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/agendamento.service */ "./src/app/services/agendamento.service.ts");




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, agendamentoService) {
        this.navCtrl = navCtrl;
        this.agendamentoService = agendamentoService;
        this.totalAgentamento = 0;
        agendamentoService.conexaoFirebase();
    }
    HomePage.prototype.scrollInfinito = function (event) {
        var _this = this;
        setTimeout(function () {
            event.target.complete();
            if (_this.agendamentos.length === 1000) {
                event.target.disabled = true;
            }
        }, 500);
    };
    HomePage.prototype.toggleInfiniteScroll = function () {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    };
    HomePage.prototype.onClickAgendamento = function () {
        this.navCtrl.navigateForward('/menu/agendamento');
        // this.navCtrl.navigateRoot('/menu/agendamento');
    };
    HomePage.prototype.ngOnInit = function () {
        this.loadAgendamentos("");
    };
    HomePage.prototype.loadAgendamentos = function (event) {
        var _this = this;
        this.agendamentoService.getAgendamentos().subscribe(function (item) {
            _this.totalAgentamento = 0;
            _this.agendamentos = item;
            _this.totalAgentamento += _this.agendamentos.length;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
    ], HomePage.prototype, "infiniteScroll", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_agendamento_service__WEBPACK_IMPORTED_MODULE_3__["AgendamentoService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map