(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm2015/Observable.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _application_sous_menu_application_sous_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./application-sous-menu/application-sous-menu.component */ "./src/app/application-sous-menu/application-sous-menu.component.ts");







class AppComponent {
    constructor() { }
    ngOnInit() {
        const counter = rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].interval(1000);
        this.counterSubscription = counter.subscribe((value) => {
            this.secondes = value;
        });
    }
    ngOnDestroy() {
        this.counterSubscription.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 43, vars: 0, consts: [[1, "navbar", "navbar-default"], [1, "container-fluide"], [1, "nav", "navbar-nav"], ["routerLinkActive", "active"], ["routerLink", "homepageCard"], ["src", "../assets/images/logo.png", "width", "165px", "height", "40px"], ["routerLink", "applications"], ["matTooltip", "Liste des apps et leurs plans d'action", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "src", "../assets/images/actionPlan.svg", "alt", "action plan", "width", "40px", "height", "40px"], ["routerLink", "sizingComplexite"], ["matTooltip", "tableau listant les applications par complexit\u00E9", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "src", "../assets/images/sizing.svg", "alt", "sizing complexite apps", "width", "40px", "height", "40px"], ["routerLink", "ruleReferentiel"], ["matTooltip", "R\u00E9f\u00E9rentiel des r\u00E8gles qualit\u00E9", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "src", "../assets/images/rules.svg", "alt", "rules referentiel", "width", "40px", "height", "40px"], ["routerLink", "manualEntry"], ["matTooltip", "Saisie manuelle", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "src", "../assets/images/manual.svg", "width", "40px", "height", "40px"], ["routerLink", "extensions"], ["matTooltip", "Liste des apps et leurs extensions", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "src", "../assets/images/extend.svg", "width", "40px", "height", "40px"], ["routerLink", "statistic-chart"], ["matTooltip", "Les graphes de stats sur l'activit\u00E9", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "src", "../assets/images/stat.svg", "width", "40px", "height", "40px"], ["routerLink", "nomenclature"], ["matTooltip", "Nommenclature", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "src", "../assets/images/naming.svg", "width", "40px", "height", "40px"], ["routerLink", "scriptSQL"], ["matTooltip", "Les requ\u00E8tes SQL", "matTooltipPosition", "right", "matTooltipHideDelay", "500", "src", "../assets/images/sql.svg", "width", "40px", "height", "40px"], ["routerLink", "chartTest"], ["routerLink", "appareils"], ["routerLink", "edit"], [1, "container"], [1, "row"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-application-sous-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _application_sous_menu_application_sous_menu_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationSousMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_Forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/Forms */ "./node_modules/@angular/Forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mon_premier_mon_premier_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mon-premier/mon-premier.component */ "./src/app/mon-premier/mon-premier.component.ts");
/* harmony import */ var _appareil_appareil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appareil/appareil.component */ "./src/app/appareil/appareil.component.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/__ivy_ngcc__/fesm2015/igniteui-angular.js");
/* harmony import */ var _services_extension_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/extension.service */ "./src/app/services/extension.service.ts");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/application.service */ "./src/app/services/application.service.ts");
/* harmony import */ var _services_application_man_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/application-man.service */ "./src/app/services/application-man.service.ts");
/* harmony import */ var _services_snapshot_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/snapshot.service */ "./src/app/services/snapshot.service.ts");
/* harmony import */ var _services_server_css_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/server-css.service */ "./src/app/services/server-css.service.ts");
/* harmony import */ var _services_ref_rules_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/ref-rules.service */ "./src/app/services/ref-rules.service.ts");
/* harmony import */ var _services_ref_ponderation_cc_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/ref-ponderation-cc.service */ "./src/app/services/ref-ponderation-cc.service.ts");
/* harmony import */ var _services_action_plan_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/action-plan.service */ "./src/app/services/action-plan.service.ts");
/* harmony import */ var _services_variables_globales__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/variables.globales */ "./src/app/services/variables.globales.ts");
/* harmony import */ var _services_appareil_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/appareil.service */ "./src/app/services/appareil.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_gard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth-gard.service */ "./src/app/services/auth-gard.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _appareil_view_appareil_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./appareil-view/appareil-view.component */ "./src/app/appareil-view/appareil-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _single_appareil_single_appareil_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./single-appareil/single-appareil.component */ "./src/app/single-appareil/single-appareil.component.ts");
/* harmony import */ var _four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./four-oh-four/four-oh-four.component */ "./src/app/four-oh-four/four-oh-four.component.ts");
/* harmony import */ var _edit_appareil_edit_appareil_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./edit-appareil/edit-appareil.component */ "./src/app/edit-appareil/edit-appareil.component.ts");
/* harmony import */ var _application_application_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./application/application.component */ "./src/app/application/application.component.ts");
/* harmony import */ var _application_list_application_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./application-list/application-list.component */ "./src/app/application-list/application-list.component.ts");
/* harmony import */ var _script_sql_script_sql_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./script-sql/script-sql.component */ "./src/app/script-sql/script-sql.component.ts");
/* harmony import */ var _nomenclature_nomenclature_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./nomenclature/nomenclature.component */ "./src/app/nomenclature/nomenclature.component.ts");
/* harmony import */ var _single_application_action_plan_single_application_action_plan_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./single-application-action-plan/single-application-action-plan.component */ "./src/app/single-application-action-plan/single-application-action-plan.component.ts");
/* harmony import */ var _single_application_identity_single_application_identity_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./single-application-identity/single-application-identity.component */ "./src/app/single-application-identity/single-application-identity.component.ts");
/* harmony import */ var _single_application_action_plan_snapshot_single_application_action_plan_snapshot_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./single-application-action-plan-snapshot/single-application-action-plan-snapshot.component */ "./src/app/single-application-action-plan-snapshot/single-application-action-plan-snapshot.component.ts");
/* harmony import */ var _application_sous_menu_application_sous_menu_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./application-sous-menu/application-sous-menu.component */ "./src/app/application-sous-menu/application-sous-menu.component.ts");
/* harmony import */ var _chart_test_chart_test_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./chart-test/chart-test.component */ "./src/app/chart-test/chart-test.component.ts");
/* harmony import */ var _statistic_charts_statistic_charts_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./statistic-charts/statistic-charts.component */ "./src/app/statistic-charts/statistic-charts.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _single_rules_list_single_rules_list_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./single-rules-list/single-rules-list.component */ "./src/app/single-rules-list/single-rules-list.component.ts");
/* harmony import */ var _extension_list_extension_list_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./extension-list/extension-list.component */ "./src/app/extension-list/extension-list.component.ts");
/* harmony import */ var _sizing_complexite_sizing_complexite_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./sizing-complexite/sizing-complexite.component */ "./src/app/sizing-complexite/sizing-complexite.component.ts");
/* harmony import */ var _rules_referentiel_rules_referentiel_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./rules-referentiel/rules-referentiel.component */ "./src/app/rules-referentiel/rules-referentiel.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _rules_referentiel_rules_referentiel_partie_droite_rules_referentiel_partie_droite_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./rules-referentiel/rules-referentiel-partie-droite/rules-referentiel-partie-droite.component */ "./src/app/rules-referentiel/rules-referentiel-partie-droite/rules-referentiel-partie-droite.component.ts");
/* harmony import */ var _manual_entry_manual_entry_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./manual-entry/manual-entry.component */ "./src/app/manual-entry/manual-entry.component.ts");


























































































const appRoutes = [
    { path: 'appareils', canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGard"]], component: _appareil_view_appareil_view_component__WEBPACK_IMPORTED_MODULE_22__["AppareilViewComponent"] },
    { path: 'appareils/:id', canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGard"]], component: _single_appareil_single_appareil_component__WEBPACK_IMPORTED_MODULE_24__["SingleAppareilComponent"] },
    { path: 'applications', component: _application_list_application_list_component__WEBPACK_IMPORTED_MODULE_28__["ApplicationListComponent"] },
    { path: 'extensions', component: _extension_list_extension_list_component__WEBPACK_IMPORTED_MODULE_81__["ExtensionListComponent"] },
    { path: 'applicationIdentity/:id', component: _single_application_identity_single_application_identity_component__WEBPACK_IMPORTED_MODULE_32__["SingleApplicationIdentityComponent"] },
    { path: 'applicationActionPlan/:id/:idOutil', component: _single_application_action_plan_single_application_action_plan_component__WEBPACK_IMPORTED_MODULE_31__["SingleApplicationActionPlanComponent"] },
    { path: 'edit', canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGard"]], component: _edit_appareil_edit_appareil_component__WEBPACK_IMPORTED_MODULE_26__["EditAppareilComponent"] },
    { path: 'rulesList', component: _single_rules_list_single_rules_list_component__WEBPACK_IMPORTED_MODULE_80__["SingleRulesListComponent"] },
    { path: 'manualEntry', component: _manual_entry_manual_entry_component__WEBPACK_IMPORTED_MODULE_86__["ManualEntryComponent"] },
    { path: 'chartTest', component: _chart_test_chart_test_component__WEBPACK_IMPORTED_MODULE_35__["ChartTestComponent"] },
    { path: 'statistic-chart', component: _statistic_charts_statistic_charts_component__WEBPACK_IMPORTED_MODULE_36__["StatisticChartsComponent"] },
    { path: 'scriptSQL', component: _script_sql_script_sql_component__WEBPACK_IMPORTED_MODULE_29__["ScriptSQLComponent"] },
    { path: 'nomenclature', component: _nomenclature_nomenclature_component__WEBPACK_IMPORTED_MODULE_30__["NomenclatureComponent"] },
    { path: 'sizingComplexite', component: _sizing_complexite_sizing_complexite_component__WEBPACK_IMPORTED_MODULE_82__["SizingComplexiteComponent"] },
    { path: 'ruleReferentiel', component: _rules_referentiel_rules_referentiel_component__WEBPACK_IMPORTED_MODULE_83__["RulesReferentielComponent"] },
    { path: 'homepageCard', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_84__["HomepageComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_21__["AuthComponent"] },
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_84__["HomepageComponent"] },
    { path: 'not-found', component: _four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_25__["FourOhFourComponent"] },
    { path: '**', redirectTo: 'not-found' }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_appareil_service__WEBPACK_IMPORTED_MODULE_17__["AppareilService"],
        _services_extension_service__WEBPACK_IMPORTED_MODULE_8__["ExtensionService"],
        _services_application_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"],
        _services_application_man_service__WEBPACK_IMPORTED_MODULE_10__["ApplicationManService"],
        _services_snapshot_service__WEBPACK_IMPORTED_MODULE_11__["SnapshotService"],
        _services_server_css_service__WEBPACK_IMPORTED_MODULE_12__["ServerCssService"],
        _services_ref_ponderation_cc_service__WEBPACK_IMPORTED_MODULE_14__["RefPonderationCCService"],
        _services_action_plan_service__WEBPACK_IMPORTED_MODULE_15__["ActionPlanService"],
        _services_ref_rules_service__WEBPACK_IMPORTED_MODULE_13__["RefRulesService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"],
        _services_auth_gard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGard"],
        _services_variables_globales__WEBPACK_IMPORTED_MODULE_16__["VariablesGlobales"],
        igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxExcelExporterService"],
        _services_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_Forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_Forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forRoot(appRoutes),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_71__["MatSliderModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_75__["MatTableModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["A11yModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_39__["ClipboardModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_43__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_44__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_45__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_46__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_47__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_48__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_49__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_50__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_51__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_52__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_54__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_55__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_56__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_57__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_58__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_59__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_60__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_61__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_62__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_63__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_64__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_65__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_66__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_67__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_68__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_64__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_69__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_70__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_71__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_72__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_73__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_74__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_75__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_76__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_77__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_78__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_79__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__["ScrollingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _mon_premier_mon_premier_component__WEBPACK_IMPORTED_MODULE_5__["MonPremierComponent"],
        _appareil_appareil_component__WEBPACK_IMPORTED_MODULE_6__["AppareilComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_21__["AuthComponent"],
        _appareil_view_appareil_view_component__WEBPACK_IMPORTED_MODULE_22__["AppareilViewComponent"],
        _single_appareil_single_appareil_component__WEBPACK_IMPORTED_MODULE_24__["SingleAppareilComponent"],
        _four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_25__["FourOhFourComponent"],
        _edit_appareil_edit_appareil_component__WEBPACK_IMPORTED_MODULE_26__["EditAppareilComponent"],
        _application_application_component__WEBPACK_IMPORTED_MODULE_27__["ApplicationComponent"],
        _application_list_application_list_component__WEBPACK_IMPORTED_MODULE_28__["ApplicationListComponent"],
        _script_sql_script_sql_component__WEBPACK_IMPORTED_MODULE_29__["ScriptSQLComponent"],
        _nomenclature_nomenclature_component__WEBPACK_IMPORTED_MODULE_30__["NomenclatureComponent"],
        _single_application_action_plan_single_application_action_plan_component__WEBPACK_IMPORTED_MODULE_31__["SingleApplicationActionPlanComponent"],
        _single_application_identity_single_application_identity_component__WEBPACK_IMPORTED_MODULE_32__["SingleApplicationIdentityComponent"],
        _single_application_action_plan_snapshot_single_application_action_plan_snapshot_component__WEBPACK_IMPORTED_MODULE_33__["SingleApplicationActionPlanSnapshotComponent"],
        _application_sous_menu_application_sous_menu_component__WEBPACK_IMPORTED_MODULE_34__["ApplicationSousMenuComponent"],
        _chart_test_chart_test_component__WEBPACK_IMPORTED_MODULE_35__["ChartTestComponent"],
        _statistic_charts_statistic_charts_component__WEBPACK_IMPORTED_MODULE_36__["StatisticChartsComponent"],
        _single_rules_list_single_rules_list_component__WEBPACK_IMPORTED_MODULE_80__["SingleRulesListComponent"],
        _extension_list_extension_list_component__WEBPACK_IMPORTED_MODULE_81__["ExtensionListComponent"],
        _sizing_complexite_sizing_complexite_component__WEBPACK_IMPORTED_MODULE_82__["SizingComplexiteComponent"],
        _rules_referentiel_rules_referentiel_component__WEBPACK_IMPORTED_MODULE_83__["RulesReferentielComponent"],
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_84__["HomepageComponent"],
        _extension_list_extension_list_component__WEBPACK_IMPORTED_MODULE_81__["PopupExtensionListForApp"],
        _rules_referentiel_rules_referentiel_partie_droite_rules_referentiel_partie_droite_component__WEBPACK_IMPORTED_MODULE_85__["RulesReferentielPartieDroiteComponent"],
        _manual_entry_manual_entry_component__WEBPACK_IMPORTED_MODULE_86__["ManualEntryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_Forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_Forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__["BrowserAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_71__["MatSliderModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_75__["MatTableModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_39__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_43__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_44__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_45__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_46__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_47__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_48__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_49__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_50__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_51__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_52__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_54__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_55__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_56__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_57__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_58__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_59__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_60__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_61__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_62__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_63__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_64__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_65__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_66__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_67__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_68__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_64__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_69__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_70__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_71__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_72__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_73__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_74__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_75__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_76__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_77__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_78__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_79__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _mon_premier_mon_premier_component__WEBPACK_IMPORTED_MODULE_5__["MonPremierComponent"],
                    _appareil_appareil_component__WEBPACK_IMPORTED_MODULE_6__["AppareilComponent"],
                    _auth_auth_component__WEBPACK_IMPORTED_MODULE_21__["AuthComponent"],
                    _appareil_view_appareil_view_component__WEBPACK_IMPORTED_MODULE_22__["AppareilViewComponent"],
                    _single_appareil_single_appareil_component__WEBPACK_IMPORTED_MODULE_24__["SingleAppareilComponent"],
                    _four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_25__["FourOhFourComponent"],
                    _edit_appareil_edit_appareil_component__WEBPACK_IMPORTED_MODULE_26__["EditAppareilComponent"],
                    _application_application_component__WEBPACK_IMPORTED_MODULE_27__["ApplicationComponent"],
                    _application_list_application_list_component__WEBPACK_IMPORTED_MODULE_28__["ApplicationListComponent"],
                    _script_sql_script_sql_component__WEBPACK_IMPORTED_MODULE_29__["ScriptSQLComponent"],
                    _nomenclature_nomenclature_component__WEBPACK_IMPORTED_MODULE_30__["NomenclatureComponent"],
                    _single_application_action_plan_single_application_action_plan_component__WEBPACK_IMPORTED_MODULE_31__["SingleApplicationActionPlanComponent"],
                    _single_application_identity_single_application_identity_component__WEBPACK_IMPORTED_MODULE_32__["SingleApplicationIdentityComponent"],
                    _single_application_action_plan_snapshot_single_application_action_plan_snapshot_component__WEBPACK_IMPORTED_MODULE_33__["SingleApplicationActionPlanSnapshotComponent"],
                    _application_sous_menu_application_sous_menu_component__WEBPACK_IMPORTED_MODULE_34__["ApplicationSousMenuComponent"],
                    _chart_test_chart_test_component__WEBPACK_IMPORTED_MODULE_35__["ChartTestComponent"],
                    _statistic_charts_statistic_charts_component__WEBPACK_IMPORTED_MODULE_36__["StatisticChartsComponent"],
                    _single_rules_list_single_rules_list_component__WEBPACK_IMPORTED_MODULE_80__["SingleRulesListComponent"],
                    _extension_list_extension_list_component__WEBPACK_IMPORTED_MODULE_81__["ExtensionListComponent"],
                    _sizing_complexite_sizing_complexite_component__WEBPACK_IMPORTED_MODULE_82__["SizingComplexiteComponent"],
                    _rules_referentiel_rules_referentiel_component__WEBPACK_IMPORTED_MODULE_83__["RulesReferentielComponent"],
                    _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_84__["HomepageComponent"],
                    _extension_list_extension_list_component__WEBPACK_IMPORTED_MODULE_81__["PopupExtensionListForApp"],
                    _rules_referentiel_rules_referentiel_partie_droite_rules_referentiel_partie_droite_component__WEBPACK_IMPORTED_MODULE_85__["RulesReferentielPartieDroiteComponent"],
                    _manual_entry_manual_entry_component__WEBPACK_IMPORTED_MODULE_86__["ManualEntryComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_Forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_Forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forRoot(appRoutes),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__["BrowserAnimationsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_71__["MatSliderModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_75__["MatTableModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_39__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_43__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_44__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_45__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_46__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_47__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_48__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_49__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_50__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_51__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_52__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_54__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_55__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_56__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_57__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_58__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_59__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_60__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_61__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_62__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_63__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_64__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_65__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_66__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_67__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_68__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_64__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_69__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_70__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_71__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_72__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_73__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_74__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_75__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_76__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_77__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_78__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_79__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__["ScrollingModule"]
                ],
                providers: [
                    _services_appareil_service__WEBPACK_IMPORTED_MODULE_17__["AppareilService"],
                    _services_extension_service__WEBPACK_IMPORTED_MODULE_8__["ExtensionService"],
                    _services_application_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"],
                    _services_application_man_service__WEBPACK_IMPORTED_MODULE_10__["ApplicationManService"],
                    _services_snapshot_service__WEBPACK_IMPORTED_MODULE_11__["SnapshotService"],
                    _services_server_css_service__WEBPACK_IMPORTED_MODULE_12__["ServerCssService"],
                    _services_ref_ponderation_cc_service__WEBPACK_IMPORTED_MODULE_14__["RefPonderationCCService"],
                    _services_action_plan_service__WEBPACK_IMPORTED_MODULE_15__["ActionPlanService"],
                    _services_ref_rules_service__WEBPACK_IMPORTED_MODULE_13__["RefRulesService"],
                    _services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"],
                    _services_auth_gard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGard"],
                    _services_variables_globales__WEBPACK_IMPORTED_MODULE_16__["VariablesGlobales"],
                    igniteui_angular__WEBPACK_IMPORTED_MODULE_7__["IgxExcelExporterService"],
                    _services_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/appareil-view/appareil-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/appareil-view/appareil-view.component.ts ***!
  \**********************************************************/
/*! exports provided: AppareilViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppareilViewComponent", function() { return AppareilViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_appareil_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/appareil.service */ "./src/app/services/appareil.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _appareil_appareil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../appareil/appareil.component */ "./src/app/appareil/appareil.component.ts");





function AppareilViewComponent_app_appareil_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-appareil", 6);
} if (rf & 2) {
    const appareil_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appareilName", appareil_r1.name)("indexOfAppareil", i_r2)("appareilStatus", appareil_r1.status)("id", appareil_r1.id);
} }
class AppareilViewComponent {
    constructor(appareilService) {
        this.appareilService = appareilService;
        this.title = 'angularPremier mon premier programme angular what';
        this.isAuth = false;
        this.lastUpdate = new Promise((resolve, reject) => {
            const date = new Date();
            setTimeout(() => {
                resolve(date);
            }, 2000);
        });
        setTimeout(() => {
            this.isAuth = true;
        }, 4000);
    }
    ngOnInit() {
        this.appareilSubscription = this.appareilService.appareilSubject.subscribe((appareils) => {
            this.appareils = appareils;
        });
        this.appareilService.emitAppareilSubject();
    }
    onAllumer() {
        this.appareilService.switchOnAll();
    }
    onEteindre() {
        if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
            this.appareilService.switchOffAll();
        }
        else {
            return null;
        }
    }
    onSave() {
        this.appareilService.saveAppareilsToServer();
    }
    onFetch() {
        //    this.appareilService.getAppareilsFromServer();
        this.appareilService.autreExemple();
    }
}
AppareilViewComponent.ɵfac = function AppareilViewComponent_Factory(t) { return new (t || AppareilViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_appareil_service__WEBPACK_IMPORTED_MODULE_1__["AppareilService"])); };
AppareilViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppareilViewComponent, selectors: [["app-appareil-view"]], decls: 18, vars: 10, consts: [[1, "col-xs-12"], [1, "list-group"], [3, "appareilName", "indexOfAppareil", "appareilStatus", "id", 4, "ngFor", "ngForOf"], [1, "btn", "btn-success", 3, "disabled", "click"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [3, "appareilName", "indexOfAppareil", "appareilStatus", "id"]], template: function AppareilViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "H2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mes appareils");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppareilViewComponent_app_appareil_9_Template, 1, 4, "app-appareil", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppareilViewComponent_Template_button_click_10_listener() { return ctx.onAllumer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tout allumer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppareilViewComponent_Template_button_click_12_listener() { return ctx.onEteindre(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tout \u00E9teindre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppareilViewComponent_Template_button_click_14_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enregistrer les appareils");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppareilViewComponent_Template_button_click_16_listener() { return ctx.onFetch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "R\u00E9cup\u00E9rer les appareils");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("last update: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, ctx.lastUpdate), "y - MMMM - dd")), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appareils);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isAuth);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _appareil_appareil_component__WEBPACK_IMPORTED_MODULE_3__["AppareilComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGFyZWlsLXZpZXcvYXBwYXJlaWwtdmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppareilViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-appareil-view',
                templateUrl: './appareil-view.component.html',
                styleUrls: ['./appareil-view.component.scss']
            }]
    }], function () { return [{ type: _services_appareil_service__WEBPACK_IMPORTED_MODULE_1__["AppareilService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/appareil/appareil.component.ts":
/*!************************************************!*\
  !*** ./src/app/appareil/appareil.component.ts ***!
  \************************************************/
/*! exports provided: AppareilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppareilComponent", function() { return AppareilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_appareil_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/appareil.service */ "./src/app/services/appareil.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1, a2) { return { "list-group-item": true, "list-group-item-success": a1, "list-group-item-danger": a2 }; };
const _c1 = function (a0) { return { color: a0 }; };
class AppareilComponent {
    constructor(appareilService) {
        this.appareilService = appareilService;
    }
    ngOnInit() {
    }
    getStatus() {
        return this.appareilStatus;
    }
    getColor() {
        if (this.appareilStatus === 'allumé') {
            return 'green';
        }
        else if (this.appareilStatus === 'éteint') {
            return 'red';
        }
    }
    onSwitchOn() {
        this.appareilService.switchOnOne(this.indexOfAppareil);
    }
    onSwitchOff() {
        this.appareilService.switchOffOne(this.indexOfAppareil);
    }
}
AppareilComponent.ɵfac = function AppareilComponent_Factory(t) { return new (t || AppareilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_appareil_service__WEBPACK_IMPORTED_MODULE_1__["AppareilService"])); };
AppareilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppareilComponent, selectors: [["app-appareil"]], inputs: { appareilName: "appareilName", appareilStatus: "appareilStatus", indexOfAppareil: "indexOfAppareil", id: "id" }, decls: 9, vars: 12, consts: [[3, "ngClass"], [3, "ngStyle"], [3, "routerLink"], [1, "btn", "btn-success", 3, "disabled", "click"], [1, "btn", "btn-danger", 3, "disabled", "click"]], template: function AppareilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "H4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "D\u00E9tail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppareilComponent_Template_button_click_5_listener() { return ctx.onSwitchOn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "allumer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppareilComponent_Template_button_click_7_listener() { return ctx.onSwitchOff(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00E9teindre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx.appareilStatus === "allum\u00E9", ctx.appareilStatus === "\u00E9teint"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.getColor()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Apapreil: ", ctx.appareilName, " -- Status: ", ctx.getStatus(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.appareilStatus === "allum\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.appareilStatus === "\u00E9teint");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGFyZWlsL2FwcGFyZWlsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppareilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-appareil',
                templateUrl: './appareil.component.html',
                styleUrls: ['./appareil.component.scss']
            }]
    }], function () { return [{ type: _services_appareil_service__WEBPACK_IMPORTED_MODULE_1__["AppareilService"] }]; }, { appareilName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appareilStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], indexOfAppareil: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/application-list/application-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/application-list/application-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ApplicationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationListComponent", function() { return ApplicationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/application.service */ "./src/app/services/application.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");












function ApplicationListComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/applicationIdentity", a1]; };
const _c1 = function (a1) { return ["/applicationActionPlan", a1, 1]; };
function ApplicationListComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, element_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, element_r14.id));
} }
function ApplicationListComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CSS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApplicationListComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.server_name, " ");
} }
function ApplicationListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " central_base ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApplicationListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.central_base, " ");
} }
function ApplicationListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApplicationListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.last_version_analyzed, " ");
} }
function ApplicationListComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date Snapshot ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApplicationListComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.last_update, " ");
} }
function ApplicationListComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " AIP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApplicationListComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.cast_version, " ");
} }
function ApplicationListComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function ApplicationListComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
const _c2 = function () { return [10, 20, 50, 100]; };
const ELEMENT_DATA = [
    { id: 1, name: 'FAKE app_1', techno: 'Java', server_name: 'css1', central_base: 'central_1', last_version_analyzed: 'v1.2', cast_version: '7.3.21', last_update: '01/01/20' },
    { id: 2, name: 'FAKE app_2', techno: 'Angular', server_name: 'css1', central_base: 'central_2', last_version_analyzed: 'v1.5', cast_version: '8.2.1', last_update: '01/01/20' },
    { id: 3, name: 'FAKE app_3', techno: 'JEE', server_name: 'css1', central_base: 'central_3', last_version_analyzed: 'v2.2', cast_version: '8.3', last_update: '01/01/20' }
];
class ApplicationListComponent {
    constructor(applicationService) {
        this.applicationService = applicationService;
        this.displayedColumns = ['name', 'server_name', 'central_base', 'last_version_analyzed', 'last_update', 'cast_version'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.applications = [
            {
                id: 1,
                name: 'TEMPLATE App 1',
                central_base: 'central base 1'
            },
            {
                id: 2,
                name: 'TEMPLATE App 2',
                central_base: 'central base 2'
            },
            {
                id: 3,
                name: 'TEMPLATE App 3',
                central_base: 'central base 3'
            }
        ];
    }
    ngOnInit() {
        console.log("ApplicationListComponent.ngOnInit");
        this.applicationSubscription = this.applicationService.applicationSubject.subscribe((applications) => {
            this.applications = applications;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](applications);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        });
        this.applicationService.getApplicationsSnapshotREST();
        this.applicationService.setApplicationMenu(null);
    }
    onFetch() {
        console.log("ApplicationListComponent.onFetch");
        this.applicationService.getApplicationsSnapshotREST();
        this.applications = this.applicationService.getApplications();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
ApplicationListComponent.ɵfac = function ApplicationListComponent_Factory(t) { return new (t || ApplicationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"])); };
ApplicationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationListComponent, selectors: [["app-application-list"]], viewQuery: function ApplicationListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 26, vars: 5, consts: [["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "server_name"], ["matColumnDef", "central_base"], ["matColumnDef", "last_version_analyzed"], ["matColumnDef", "last_update"], ["matColumnDef", "cast_version"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [3, "routerLink"], ["src", "../assets/images/appId.svg", "width", "25px", "height", "20px"], ["src", "../assets/images/actionPlanCast.svg", "width", "25px", "height", "20px"], ["mat-header-row", ""], ["mat-row", ""]], template: function ApplicationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filtre de recherche");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ApplicationListComponent_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ApplicationListComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ApplicationListComponent_td_7_Template, 6, 7, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ApplicationListComponent_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ApplicationListComponent_td_10_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ApplicationListComponent_th_12_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ApplicationListComponent_td_13_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ApplicationListComponent_th_15_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ApplicationListComponent_td_16_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ApplicationListComponent_th_18_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ApplicationListComponent_td_19_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ApplicationListComponent_th_21_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ApplicationListComponent_td_22_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ApplicationListComponent_tr_23_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ApplicationListComponent_tr_24_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-paginator", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW5sYW0vRG9jdW1lbnRzL25vZGVKUy9Qcm9qZXQ2QW5nL2FuZ3VsYXJQcmVtaWVyL3NyYy9hcHAvYXBwbGljYXRpb24tbGlzdC9hcHBsaWNhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHBsaWNhdGlvbi1saXN0L2FwcGxpY2F0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwbGljYXRpb24tbGlzdC9hcHBsaWNhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application-list',
                templateUrl: './application-list.component.html',
                styleUrls: ['./application-list.component.scss']
            }]
    }], function () { return [{ type: _services_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/application-sous-menu/application-sous-menu.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/application-sous-menu/application-sous-menu.component.ts ***!
  \**************************************************************************/
/*! exports provided: ApplicationSousMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSousMenuComponent", function() { return ApplicationSousMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/application.service */ "./src/app/services/application.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function (a1) { return ["/applicationIdentity", a1]; };
const _c1 = function (a1) { return ["/applicationActionPlan", a1, 1]; };
function ApplicationSousMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-button-toggle-group", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-button-toggle", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-button-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-button-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-button-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-button-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r0.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r0.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx_r0.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, ctx_r0.id));
} }
function ApplicationSousMenuComponent_ng_template_1_Template(rf, ctx) { }
class ApplicationSousMenuComponent {
    constructor(applicationService) {
        this.applicationService = applicationService;
    }
    ngOnInit() {
        console.log("ApplicationSousMenuComponent.ngOnInit.debut");
        this.applicationMenuSujet = this.applicationService.applicationMenuSubject.subscribe((applicationMenu) => {
            if (applicationMenu != null) {
                this.name = applicationMenu.name;
                this.id = applicationMenu.id;
                console.log("ApplicationSousMenuComponent.ngOnInit.applicationMenu.name=" + applicationMenu.name);
            }
        });
    }
    isDisplay() {
        if (this.applicationService.getApplicationMenu() == null) {
            return false;
        }
        else {
            return true;
        }
    }
}
ApplicationSousMenuComponent.ɵfac = function ApplicationSousMenuComponent_Factory(t) { return new (t || ApplicationSousMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"])); };
ApplicationSousMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationSousMenuComponent, selectors: [["app-application-sous-menu"]], inputs: { name: "name", isAvailable: "isAvailable", id: "id" }, decls: 4, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["contenu_pas_bon", ""], ["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], [1, "col-sm-1", 3, "routerLink"], ["src", "../assets/images/appId.svg", "width", "25px", "height", "20px"], ["value", "italic"], ["src", "../assets/images/castLogo.png", "width", "100px", "height", "23px"], ["value", "underline"], ["src", "../assets/images/checkmarxLogo.png", "width", "100px", "height", "23px"], ["src", "../assets/images/sonarqubeLogo.png", "width", "100px", "height", "23px"], ["src", "../assets/images/actionPlanCast.svg", "width", "25px", "height", "20px"]], template: function ApplicationSousMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ApplicationSousMenuComponent_div_0_Template, 18, 16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationSousMenuComponent_ng_template_1_Template, 0, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDisplay())("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["mat-button-toggle-group[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW5sYW0vRG9jdW1lbnRzL25vZGVKUy9Qcm9qZXQ2QW5nL2FuZ3VsYXJQcmVtaWVyL3NyYy9hcHAvYXBwbGljYXRpb24tc291cy1tZW51L2FwcGxpY2F0aW9uLXNvdXMtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwbGljYXRpb24tc291cy1tZW51L2FwcGxpY2F0aW9uLXNvdXMtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi1zb3VzLW1lbnUvYXBwbGljYXRpb24tc291cy1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICB9IiwibWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationSousMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application-sous-menu',
                templateUrl: './application-sous-menu.component.html',
                styleUrls: ['./application-sous-menu.component.scss']
            }]
    }], function () { return [{ type: _services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isAvailable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/application/application.component.ts":
/*!******************************************************!*\
  !*** ./src/app/application/application.component.ts ***!
  \******************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function (a1) { return ["/applicationIdentity", a1]; };
const _c1 = function (a1) { return ["/applicationActionPlan", a1, 1]; };
/* OBSOLETE TO DELETE */
class ApplicationComponent {
    constructor() {
    }
    ngOnInit() {
    }
    getColor() {
        return 'green';
    }
    isJEE() {
        const position = this.techno.indexOf('JEE');
        if (position > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
ApplicationComponent.ɵfac = function ApplicationComponent_Factory(t) { return new (t || ApplicationComponent)(); };
ApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationComponent, selectors: [["app-application"]], inputs: { central_base: "central_base", name: "name", last_version_analyzed: "last_version_analyzed", last_update: "last_update", date_snapshot: "date_snapshot", cast_version: "cast_version", server_name: "server_name", techno: "techno", id: "id", indexOfApplication: "indexOfApplication" }, decls: 27, vars: 13, consts: [[1, "list-group-item"], [3, "routerLink"], ["src", "../assets/images/appId.svg", "width", "25px", "height", "20px"], ["src", "../assets/images/actionPlanCast.svg", "width", "25px", "height", "20px"], [1, "col-sm-1"], [1, "col-sm-3"], [1, "col-sm-7"], [1, "col-sm-2"], [1, "col-sm-5"], [1, "col-sm-6"]], template: function ApplicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.last_update);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.central_base);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.server_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cast_version);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.last_version_analyzed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.date_snapshot);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application',
                templateUrl: './application.component.html',
                styleUrls: ['./application.component.scss']
            }]
    }], function () { return []; }, { central_base: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], last_version_analyzed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], last_update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], date_snapshot: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cast_version: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], server_name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], techno: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], indexOfApplication: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");






function AuthComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSignIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "se connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onSignOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "se deconnecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AuthComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authStatus = this.authService.isAuth;
    }
    onSignIn() {
        this.authService.signIn().then(() => {
            this.authStatus = this.authService.isAuth;
            this.router.navigate(['appareils']);
        });
    }
    onSignOut() {
        this.authService.signOut();
        this.authStatus = this.authService.isAuth;
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 5, vars: 2, consts: [["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], ["min", "1", "max", "100", "step", "1", "value", "1"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Authentification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AuthComponent_button_2_Template, 2, 0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AuthComponent_button_3_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-slider", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authStatus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSlider"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/chart-test/chart-test.component.ts":
/*!****************************************************!*\
  !*** ./src/app/chart-test/chart-test.component.ts ***!
  \****************************************************/
/*! exports provided: ChartTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartTestComponent", function() { return ChartTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);



class ChartTestComponent {
    constructor() {
        this.HeatmapObject = null;
        this.title = 'Angular 9 HighCharts';
    }
    ngOnInit() {
        this.columnChartPopulation();
        this.barChartPopulation();
        this.pieChartBrowser();
        let options = this.HeatmapOptions();
        highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"](options);
    }
    HeatmapOptions() {
        let options = {
            chart: {
                renderTo: 'heatmap-object',
                type: 'column'
            },
            title: {
                text: ''
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            xAxis: {
                labels: {
                    style: { fontSize: '9px' }
                },
                categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
            },
            yAxis: {
                min: -500,
                max: 5000,
                title: {
                    text: 'PA'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                }
            },
            tooltip: {
                headerFormat: ' ',
                pointFormat: '{series.name}: {point.y}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: 'white'
                    }
                },
                series: {
                    cursor: 'pointer',
                    events: {
                        click: function (event) {
                        }
                    }
                }
            },
            series: [
                {
                    type: 'column',
                    name: 'Corrected',
                    color: '#01DF01',
                    data: [107, 31, 635, 203, 2]
                },
                {
                    type: 'column',
                    name: 'Deleted',
                    color: '#006600',
                    data: [133, 156, 947, 408, 6]
                }, {
                    type: 'column',
                    name: 'New',
                    color: '#A4A4A4',
                    data: [814, 841, 3714, 727, 31]
                }, {
                    type: 'column',
                    name: 'Still Violation',
                    color: '#DF0101',
                    data: [1216, 1001, 4436, 738, 40]
                }
            ]
        };
        return options;
    }
    columnChartPopulation() {
        highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]({
            chart: {
                renderTo: 'columnChartTest2',
                type: 'column'
            },
            title: {
                text: ''
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            xAxis: {
                labels: {
                    style: { fontSize: '9px' }
                },
                categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
            },
            yAxis: {
                min: -500,
                max: 5000,
                title: {
                    text: 'PA'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                }
            },
            tooltip: {
                headerFormat: ' ',
                pointFormat: '{series.name}: {point.y}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: 'white'
                    }
                },
                series: {
                    cursor: 'pointer',
                    events: {
                        click: function (event) {
                        }
                    }
                }
            },
            series: [
                {
                    name: 'Corrected',
                    color: '#01DF01',
                    type: undefined,
                    data: [107, 31, 635, 203, 2]
                },
                {
                    name: 'Deleted',
                    color: '#006600',
                    type: undefined,
                    data: [[133], [156], [947], [408], [6]]
                }, {
                    name: 'New',
                    color: '#A4A4A4',
                    type: undefined,
                    data: [814, 841, 3714, 727, 31]
                }, {
                    name: 'Still Violation',
                    color: '#DF0101',
                    type: undefined,
                    data: [1216, 1001, 4436, 738, 40]
                }
            ]
        });
    }
    barChartPopulation() {
        highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('barChart', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Historic World Population by Region'
            },
            xAxis: {
                categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Population (millions)',
                    align: 'high'
                },
            },
            tooltip: {
                valueSuffix: ' millions'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: [{
                    type: undefined,
                    name: 'Year 1800',
                    data: [107, 31, 635, 203, 2]
                }, {
                    type: undefined,
                    name: 'Year 1900',
                    data: [133, 156, 947, 408, 6]
                }, {
                    type: undefined,
                    name: 'Year 2000',
                    data: [814, 841, 3714, 727, 31]
                }, {
                    type: undefined,
                    name: 'Year 2016',
                    data: [1216, 1001, 4436, 738, 40]
                }]
        });
    }
    pieChartBrowser() {
        highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]('pieChart', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Browser market shares in October, 2019'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                    name: 'Brands',
                    colorByPoint: true,
                    type: undefined,
                    data: [{
                            name: 'Chrome',
                            y: 61.41,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Internet Explorer',
                            y: 11.84
                        }, {
                            name: 'Firefox',
                            y: 10.85
                        }, {
                            name: 'Edge',
                            y: 4.67
                        }, {
                            name: 'Safari',
                            y: 4.18
                        }, {
                            name: 'Sogou Explorer',
                            y: 1.64
                        }, {
                            name: 'Opera',
                            y: 1.6
                        }, {
                            name: 'QQ',
                            y: 1.2
                        }, {
                            name: 'Other',
                            y: 2.61
                        }]
                }]
        });
    }
}
ChartTestComponent.ɵfac = function ChartTestComponent_Factory(t) { return new (t || ChartTestComponent)(); };
ChartTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartTestComponent, selectors: [["app-chart-test"]], decls: 20, vars: 1, consts: [[1, "container"], [1, "mt-2"], [1, "row"], [1, "col-sm"], ["id", "columnChartTest2", 2, "min-width", "310px", "max-width", "800px", "height", "400px", "margin", "0 auto"], [1, "card-title", "text-center"], ["id", "barChart", 2, "min-width", "310px", "max-width", "800px", "height", "400px", "margin", "0 auto"], ["id", "pieChart", 2, "width", "100%", "height", "400px"], ["id", "heatmap-object", 2, "height", "400px", "min-width", "380px"]], template: function ChartTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "chart-test works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "column Chart for action plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bar Chart - Population");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pie Chart - Browser market");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0LXRlc3QvY2hhcnQtdGVzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart-test',
                templateUrl: './chart-test.component.html',
                styleUrls: ['./chart-test.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/edit-appareil/edit-appareil.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/edit-appareil/edit-appareil.component.ts ***!
  \**********************************************************/
/*! exports provided: EditAppareilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAppareilComponent", function() { return EditAppareilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_appareil_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/appareil.service */ "./src/app/services/appareil.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_Forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/Forms */ "./node_modules/@angular/Forms/__ivy_ngcc__/fesm2015/forms.js");





class EditAppareilComponent {
    constructor(appareilService, router) {
        this.appareilService = appareilService;
        this.router = router;
        this.defaultOnOff = 'éteint';
    }
    ngOnInit() {
    }
    onSubmit(form) {
        const name = form.value['name'];
        const status = form.value['status'];
        this.appareilService.addAppareil(name, status);
        this.router.navigate(['/appareils']);
    }
}
EditAppareilComponent.ɵfac = function EditAppareilComponent_Factory(t) { return new (t || EditAppareilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_appareil_service__WEBPACK_IMPORTED_MODULE_1__["AppareilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditAppareilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditAppareilComponent, selectors: [["app-edit-appareil"]], decls: 18, vars: 2, consts: [[1, "row"], [1, "col-sm-8", "col-sm-offset-2"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "ngModel", "", "required", "", 1, "form-control"], ["for", "status"], ["id", "status", "name", "status", 1, "form-control", 3, "ngModel"], ["value", "allum\u00E9"], ["value", "\u00E9teint"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function EditAppareilComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditAppareilComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Nom de l'appareil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Etat de l'appareil ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Allum\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Eteint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Enregistrer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.defaultOnOff);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_Forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_Forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_Forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_Forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_Forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_Forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_Forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_Forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_Forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_Forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYXBwYXJlaWwvZWRpdC1hcHBhcmVpbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditAppareilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-appareil',
                templateUrl: './edit-appareil.component.html',
                styleUrls: ['./edit-appareil.component.scss']
            }]
    }], function () { return [{ type: _services_appareil_service__WEBPACK_IMPORTED_MODULE_1__["AppareilService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/extension-list/extension-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/extension-list/extension-list.component.ts ***!
  \************************************************************/
/*! exports provided: ExtensionListComponent, PopupExtensionListForApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionListComponent", function() { return ExtensionListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupExtensionListForApp", function() { return PopupExtensionListForApp; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_extension_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/extension.service */ "./src/app/services/extension.service.ts");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/application.service */ "./src/app/services/application.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
















function ExtensionListComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Application ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExtensionListComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.name, " ");
} }
function ExtensionListComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Extensions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExtensionListComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExtensionListComponent_td_10_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const element_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.openDialog(element_r19.idApp); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r19.extensions);
} }
function ExtensionListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " greenOK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExtensionListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r22.greenOK, " ");
} }
function ExtensionListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " greenKO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExtensionListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r23.greenKO, " ");
} }
function ExtensionListComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " php ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExtensionListComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.php, " ");
} }
function ExtensionListComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " JEE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExtensionListComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.jee, " ");
} }
function ExtensionListComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " HTML ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExtensionListComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r26.html5, "");
} }
function ExtensionListComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SQL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExtensionListComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r27.sql, " ");
} }
function ExtensionListComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function ExtensionListComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
const _c0 = function () { return [10, 20, 50, 100]; };
function PopupExtensionListForApp_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " libell\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopupExtensionListForApp_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r6.label, " ");
} }
function PopupExtensionListForApp_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopupExtensionListForApp_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r7.version, " ");
} }
function PopupExtensionListForApp_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
} }
function PopupExtensionListForApp_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
const ELEMENT_DATA = [
    { name: 'premier', extensions: 123, greenOK: 'ok', greenKO: 'ok', php: 'OK', jee: 'OK', html5: 'OK', sql: 'ok' },
    { name: 'deuxieme', extensions: 123, greenOK: 'ok', greenKO: 'ok', php: 'KO', jee: 'OK', html5: 'OK', sql: 'ok' }
];
class ExtensionListComponent {
    constructor(dialog, extensionService, applicationService, route) {
        this.dialog = dialog;
        this.extensionService = extensionService;
        this.applicationService = applicationService;
        this.route = route;
        this.displayedColumns = ['name', 'extensions', 'greenOK', 'greenKO', 'php', 'jee', 'html5', 'sql'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
    }
    ngOnInit() {
        this.extensionSubscription = this.extensionService.extensionSubject.subscribe((extensionList) => {
            this.extensionsList = extensionList;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.extensionsList);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            console.log(this.extensionsList);
        });
        this.extensionService.getExtensions();
        this.applicationService.setApplicationMenu(null);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    openDialog(idApp) {
        console.log("open popup avec l'ID APP=" + idApp);
        const dialogRef = this.dialog.open(PopupExtensionListForApp, {
            width: '650px',
            data: {
                id_app: idApp
                //  last_version_analyzed: this.last_version_analyzed,
                //  date_snapshot: this.date_snapshot  
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            //this.animal = result;
        });
    }
}
ExtensionListComponent.ɵfac = function ExtensionListComponent_Factory(t) { return new (t || ExtensionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_extension_service__WEBPACK_IMPORTED_MODULE_5__["ExtensionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
ExtensionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExtensionListComponent, selectors: [["app-extension-list"]], viewQuery: function ExtensionListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 32, vars: 5, consts: [["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "extensions"], ["matColumnDef", "greenOK"], ["matColumnDef", "greenKO"], ["matColumnDef", "php"], ["matColumnDef", "jee"], ["matColumnDef", "html5"], ["matColumnDef", "sql"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [3, "click"], ["aria-hidden", "false", "aria-label", "Example home icon"], ["mat-header-row", ""], ["mat-row", ""]], template: function ExtensionListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ExtensionListComponent_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExtensionListComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExtensionListComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExtensionListComponent_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExtensionListComponent_td_10_Template, 5, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExtensionListComponent_th_12_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExtensionListComponent_td_13_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExtensionListComponent_th_15_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExtensionListComponent_td_16_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ExtensionListComponent_th_18_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ExtensionListComponent_td_19_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ExtensionListComponent_th_21_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ExtensionListComponent_td_22_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ExtensionListComponent_th_24_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ExtensionListComponent_td_25_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ExtensionListComponent_th_27_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ExtensionListComponent_td_28_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ExtensionListComponent_tr_29_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ExtensionListComponent_tr_30_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-paginator", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW5sYW0vRG9jdW1lbnRzL25vZGVKUy9Qcm9qZXQ2QW5nL2FuZ3VsYXJQcmVtaWVyL3NyYy9hcHAvZXh0ZW5zaW9uLWxpc3QvZXh0ZW5zaW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4dGVuc2lvbi1saXN0L2V4dGVuc2lvbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2V4dGVuc2lvbi1saXN0L2V4dGVuc2lvbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtensionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-extension-list',
                templateUrl: './extension-list.component.html',
                styleUrls: ['./extension-list.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _services_extension_service__WEBPACK_IMPORTED_MODULE_5__["ExtensionService"] }, { type: _services_application_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }]
        }] }); })();
const ELEMENT_DATA_POPUP = [
    { label: 'premier', version: 'V1.2.3' },
    { label: 'deuxieme', version: 'V3.2.3' }
];
class PopupExtensionListForApp {
    constructor(dialogRef, data, extensionService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.extensionService = extensionService;
        this.dialog = dialog;
        this.displayedColumns = ['label', 'version'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA_POPUP);
        this.id_app = 0;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    ngOnInit() {
        this.id_app = this.data.id_app;
        this.listeExtensionSubscription = this.extensionService.extensionsListSubject.subscribe((extensionList) => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](extensionList);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            console.log('extension-list.components.ngOnInit' + extensionList);
        });
        this.extensionService.getExtensionsByIdApp(this.data.id_app);
    }
}
PopupExtensionListForApp.ɵfac = function PopupExtensionListForApp_Factory(t) { return new (t || PopupExtensionListForApp)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_extension_service__WEBPACK_IMPORTED_MODULE_5__["ExtensionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
PopupExtensionListForApp.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupExtensionListForApp, selectors: [["popup-extension-details"]], viewQuery: function PopupExtensionListForApp_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 14, vars: 5, consts: [["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "label"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "version"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function PopupExtensionListForApp_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function PopupExtensionListForApp_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PopupExtensionListForApp_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PopupExtensionListForApp_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PopupExtensionListForApp_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PopupExtensionListForApp_td_10_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PopupExtensionListForApp_tr_11_Template, 1, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PopupExtensionListForApp_tr_12_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-paginator", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupExtensionListForApp, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'popup-extension-details',
                templateUrl: 'popup-extension-details.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
            }] }, { type: _services_extension_service__WEBPACK_IMPORTED_MODULE_5__["ExtensionService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/four-oh-four/four-oh-four.component.ts":
/*!********************************************************!*\
  !*** ./src/app/four-oh-four/four-oh-four.component.ts ***!
  \********************************************************/
/*! exports provided: FourOhFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourOhFourComponent", function() { return FourOhFourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FourOhFourComponent {
    constructor() { }
    ngOnInit() {
    }
}
FourOhFourComponent.ɵfac = function FourOhFourComponent_Factory(t) { return new (t || FourOhFourComponent)(); };
FourOhFourComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FourOhFourComponent, selectors: [["app-four-oh-four"]], decls: 4, vars: 0, template: function FourOhFourComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "H2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Erreur 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "La page que vous cherchez n'existe pas !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvdXItb2gtZm91ci9mb3VyLW9oLWZvdXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FourOhFourComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-four-oh-four',
                templateUrl: './four-oh-four.component.html',
                styleUrls: ['./four-oh-four.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_ref_rules_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ref-rules.service */ "./src/app/services/ref-rules.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function () { return ["/extensions"]; };
class HomepageComponent {
    constructor(refRulesService) {
        this.refRulesService = refRulesService;
        this.libelleAbscisseNbAppByVersionAIP = [];
        this.nbAppByVersionAIPOrdonnee = [];
    }
    ngOnInit() {
        this.rulesDetailSubscription = this.refRulesService.rulePerToolSubject.subscribe((rulesDetail) => {
            this.rulesDetail = rulesDetail;
            this.computeYAxisNbAppByVersionAIP();
            this.graphColumnNbAppByVersionAIP();
        });
        this.refRulesService.getRulesPerToolAgg();
    }
    computeYAxisNbAppByVersionAIP() {
        let i = 0;
        for (var rule of this.rulesDetail) {
            const pointcss = {
                name: rule.id_outil,
                y: rule.nbrule
            };
            this.nbAppByVersionAIPOrdonnee.push(pointcss);
            this.libelleAbscisseNbAppByVersionAIP.push(rule.id_outil);
        }
        console.log(this.nbAppByVersionAIPOrdonnee);
    }
    graphColumnNbAppByVersionAIP() {
        highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]({
            chart: {
                renderTo: 'columnNbRulePerTool',
                type: 'bar'
            },
            exporting: { enabled: false },
            title: { text: '' },
            subtitle: { text: '' },
            xAxis: { categories: ['Cast', 'CheckmarX', 'SonarQube'],
                title: { text: null } },
            yAxis: {
                min: 0,
                title: { text: 'nb règles',
                    align: 'high' },
                labels: { overflow: 'justify' }
            },
            tooltip: { valueSuffix: ' ' },
            plotOptions: { bar: { dataLabels: { enabled: true } } },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{
                    name: 'utilise',
                    type: undefined,
                    data: this.nbAppByVersionAIPOrdonnee
                }]
        });
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ref_rules_service__WEBPACK_IMPORTED_MODULE_2__["RefRulesService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 75, vars: 2, consts: [[1, "col-sm-12"], [1, "col-sm-4", "example-card"], ["mat-card-image", "", "width", "100px", "height", "100px", "src", "../../assets/images/actionPlan.svg", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "width", "100px", "height", "100px", "src", "../../assets/images/sizing.svg", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "width", "100px", "height", "100px", "src", "../../assets/images/rules.svg", "alt", "Photo of a Shiba Inu"], [1, "list-group", "col-sm-12"], [1, "list-group-item"], ["id", "columnNbRulePerTool", 2, "min-width", "290px", "max-width", "100%", "height", "120px", "margin", "0 auto"], [3, "routerLink"], ["mat-card-image", "", "width", "100px", "height", "100px", "src", "../../assets/images/extend.svg", "alt", "les extensions CAST"], ["mat-card-image", "", "width", "100px", "height", "100px", "src", "../../assets/images/stat.svg", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "width", "100px", "height", "100px", "src", "../../assets/images/naming.svg", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "width", "100px", "height", "100px", "src", "../../assets/images/sql.svg", "alt", "Photo of a Shiba Inu"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Les plans d'action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Applications et plan d'action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Liste les applications et leur plan d'action pour les diff\u00E9rents outils CAST, SonarQube et CheckmarX. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Complexit\u00E9 des applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PF * CC * LoC * TQI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " La valeur de complexit\u00E9 d\u2019application est calcul\u00E9e \u00E0 partir des audits effectu\u00E9s avec l\u2019outil Cast AIP . A partir de ces calculs, le minist\u00E8re a choisi deux seuils permettant de cat\u00E9goriser les applications en complexit\u00E9 simple, moyenne ou \u00E9lev\u00E9e. Ces seuils donnent des points de rep\u00E8re dans la liste de ces valeurs pour le portefeuille du minist\u00E8re, et permettront d\u2019\u00E9valuer la position des applications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Les r\u00E8gles Qualit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cast / Sonar / CheckmarX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Les extensions CAST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Les extensions utilis\u00E9es sont pr\u00E9sent\u00E9s par application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Overview Activit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Graphes et Historique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Un ensemble de graphe donne une visibilit\u00E9 de l'activit\u00E9 de la cellule Jacinte. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Nomenclature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Nommage et bonnes pratiques");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " les r\u00E8gles de nommages et bonnes pratiques \u00E0 mettre en oeuvre dans le cadre de l'utilisation de la plateforma CAST AIP sont r\u00E9pertori\u00E9s ici. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Requ\u00EAtes SQL utiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Les requ\u00EAtes SQL sont utilis\u00E9es par l'administrateur de CAST AIP. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 350px;\n  width: 330px;\n  margin: 5px;\n  padding: 3px;\n  height: 350px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\n.mat-card-actions[_ngcontent-%COMP%] {\n  margin-left: 230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW5sYW0vRG9jdW1lbnRzL25vZGVKUy9Qcm9qZXQ2QW5nL2FuZ3VsYXJQcmVtaWVyL3NyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgIHdpZHRoOiAzMzBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgLm1hdC1jYXJkLWFjdGlvbnN7XG4gICAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xuICB9IiwiLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIHdpZHRoOiAzMzBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1hdC1jYXJkLWFjdGlvbnMge1xuICBtYXJnaW4tbGVmdDogMjMwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss']
            }]
    }], function () { return [{ type: _services_ref_rules_service__WEBPACK_IMPORTED_MODULE_2__["RefRulesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/manual-entry/manual-entry.component.ts":
/*!********************************************************!*\
  !*** ./src/app/manual-entry/manual-entry.component.ts ***!
  \********************************************************/
/*! exports provided: ManualEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualEntryComponent", function() { return ManualEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ManualEntryComponent {
    constructor() { }
    ngOnInit() {
    }
}
ManualEntryComponent.ɵfac = function ManualEntryComponent_Factory(t) { return new (t || ManualEntryComponent)(); };
ManualEntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManualEntryComponent, selectors: [["app-manual-entry"]], decls: 2, vars: 0, template: function ManualEntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "manual-entry works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbnVhbC1lbnRyeS9tYW51YWwtZW50cnkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManualEntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manual-entry',
                templateUrl: './manual-entry.component.html',
                styleUrls: ['./manual-entry.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/mon-premier/mon-premier.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mon-premier/mon-premier.component.ts ***!
  \******************************************************/
/*! exports provided: MonPremierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonPremierComponent", function() { return MonPremierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MonPremierComponent {
    constructor() { }
    ngOnInit() {
    }
}
MonPremierComponent.ɵfac = function MonPremierComponent_Factory(t) { return new (t || MonPremierComponent)(); };
MonPremierComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonPremierComponent, selectors: [["app-mon-premier"]], decls: 2, vars: 0, template: function MonPremierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mon-premier works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vbi1wcmVtaWVyL21vbi1wcmVtaWVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonPremierComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mon-premier',
                templateUrl: './mon-premier.component.html',
                styleUrls: ['./mon-premier.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/nomenclature/nomenclature.component.ts":
/*!********************************************************!*\
  !*** ./src/app/nomenclature/nomenclature.component.ts ***!
  \********************************************************/
/*! exports provided: NomenclatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NomenclatureComponent", function() { return NomenclatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/application.service */ "./src/app/services/application.service.ts");



class NomenclatureComponent {
    constructor(applicationService) {
        this.applicationService = applicationService;
    }
    ngOnInit() {
        this.applicationService.setApplicationMenu(null);
    }
}
NomenclatureComponent.ɵfac = function NomenclatureComponent_Factory(t) { return new (t || NomenclatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"])); };
NomenclatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NomenclatureComponent, selectors: [["app-nomenclature"]], decls: 193, vars: 0, consts: [[1, "col-xs-6"], [1, "list", "list-inbox", "content"], [1, "no-overflow", "cursor", "js-conversation"], [1, "col-xs-2"], [1, "col-xs-4"], [1, "col-xs-12"]], template: function NomenclatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Les versions doivent s'appeler:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Les proc\u00E9dures SQL modifi\u00E9es sont pr\u00E9fix\u00E9 avec: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "mdlj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "H2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n- back up des sources pr\u00E9c\u00E9dentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n- back up des bases avant PA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n- back up des bases apr\u00E9s PA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "H2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "DMT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\nPour les packages JAVA:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\nFolders or files to ignore:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n\\\\test$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n\\.txt$|\\.gif$|\\.ico$|\\.png$|\\.tmp$|\\.svntmp$|\\.odt$|\\.lost$|\\.thmx$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n\\.git$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n\\.zip$|\\.class$|\\.exe$|\\.dll$|\\.gitignore$|\\.cnv$|\\.coffee$|\\.csv$|\\.dat$|\\.less$|\\.nn$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n\\.pdf$|\\.pdn$|\\.ppi$|\\.profile$|\\.raw$|\\.ser$|\\.size$|\\.traineddata$|\\.TXT$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n\\.ico$|\\.gif$|\\.bmp$|\\.JPG$|\\.png$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n\\\\.settings\\\\|\\\\test\\\\|\\\\META-INF\\\\");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "H2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "R\u00E8gles de nommage pour les plans d'action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "%[MJ SUSPENDU]%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "MJ SUSPENDU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "C'est un faux positif sur le dashboard qui provient d'un bug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "%[MJ NON CORRECTION JUSTIFIEE]% OU %[INTENTIONNEL]%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "INTENTIONNEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "C'est un faux positif ou une erreur identifi\u00E9e qui ne sera pas corrig\u00E9e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "not like %[MJ %]% and not like %MOE MJ%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "PRESTATAIRE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "PA \u00E0 corriger par le prestataire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "%[MAJ %]%and vap.action_def like ''%MOE MJ%'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "MOE MJ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "PA \u00E0 corriger par le prestataire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "H2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Nommage pour les dumps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " YYYYMMDD - ETAT - \u2039numero\u203A - \u2039versionApp\u203A - \u2039ENV\u203A - \u2039VersionAIP\u203A - \u2039Commentaire\u203A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Numero: correspond \u00C0 l'\u00E9tat du snapshot sauvegard\u00E9 peut prendre les valeurs: 1, 2 ou 3 uniquement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "VersionApp: correspond au num\u00E9ro de version tel que mention\u00E9 dans le git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "ENV: environnement de travail peut prendre les valeurs dev ou prod ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Version: correspond \u00E0 la version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Commentaire: champ libre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "H2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Status violations (valeurs possible dans la table action_plan.status)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n- NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\n- STILL_VIOLATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n- CORRECTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n- TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\n- EXCLUDED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "les annotations pour les analysis units");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\nLors du \"run\" final penser a supprimer les annotations dans les analysis units !\nune requete utile pour supprimer toutes les annotations des analysis unit :update cms_j2ee_analysis set exectag = null; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Nommage des applications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\nLe noms des applications doit etre en majuscule. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "nomenclature du H:/source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\n- supprimer le nom de l'appli si possible pour r\u00E9duire le chemin dans le file system. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\n- mettre les SQL dans h:/sources/DDL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Priorit\u00E9 pour les plans d'action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "xxx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "yyy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "1 - Extreme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "0 - Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "2 - High");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "1 - Not exploitable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "3 - Moderate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "2 - Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "4 - Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "3 - Urgent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Criticit\u00E9 pour les plans d'action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Criticit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "xxx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "yyy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "1 - Critical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "0 - Not critical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "High");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "analyseur PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\npenser \u00E0 vider le r\u00E9pertoire C:\\Users\\Administrateur\\.pdepend apr\u00E8s analyse php.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "\nemplacement du parametre pdepend si on veut le changer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "\n1. Go to the installation directory where you have installed PHP. In my case its in C:\\php");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\n2. Go to the folder C:\\[installation folder of PHP]\\pear\\PHP\\Depend\\Util\\Configuration - In my case its C:\\php\\pear\\PHP\\Depend\\Util\\Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "\n3. Open the file Factory.php in edit mode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\n4. Change the line number 107 - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "\n$this->default->cache->location = $home . '/.pdepend'; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "\nas follows $this->default->cache->location = 'Q:/Q/DMT/.pdepend [The location of your choice]';");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "framework symfony");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "\nPour les applications symfony, regarder dans la configuration pour reprendre les ref Pattern \u00E0 appliqu\u00E9 pour avoir les liens manquants.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vbWVuY2xhdHVyZS9ub21lbmNsYXR1cmUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NomenclatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nomenclature',
                templateUrl: './nomenclature.component.html',
                styleUrls: ['./nomenclature.component.scss']
            }]
    }], function () { return [{ type: _services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/rules-referentiel/rules-referentiel-partie-droite/rules-referentiel-partie-droite.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/rules-referentiel/rules-referentiel-partie-droite/rules-referentiel-partie-droite.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: RulesReferentielPartieDroiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesReferentielPartieDroiteComponent", function() { return RulesReferentielPartieDroiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _services_ref_rules_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ref-rules.service */ "./src/app/services/ref-rules.service.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");












function RulesReferentielPartieDroiteComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " metric_labels ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielPartieDroiteComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.metric_labels, " ");
} }
function RulesReferentielPartieDroiteComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " metric_ids ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielPartieDroiteComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.metric_ids, " ");
} }
function RulesReferentielPartieDroiteComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " NB r\u00E8gles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielPartieDroiteComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.nbrule, " ");
} }
function RulesReferentielPartieDroiteComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " NB PA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielPartieDroiteComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.nbpa, " ");
} }
function RulesReferentielPartieDroiteComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " absday ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielPartieDroiteComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r22.absday, " ");
} }
function RulesReferentielPartieDroiteComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielPartieDroiteComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r23.last_version_analyzed, " ");
} }
function RulesReferentielPartieDroiteComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " App. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielPartieDroiteComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.name, "");
} }
function RulesReferentielPartieDroiteComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "outil");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielPartieDroiteComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.outil, " ");
} }
function RulesReferentielPartieDroiteComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
function RulesReferentielPartieDroiteComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
const _c0 = function () { return [10, 20, 50, 100]; };
const ELEMENT_DATA = [
    { metric_labels: 'test, regle', metric_ids: '123,234,345', name: 'rule1', nbrule: 1, nbpa: 10, absday: '2018/09/09', outil: 2, last_version_analyzed: 'v1.0' },
    { metric_labels: 'test, regle', metric_ids: '123,234,345', name: 'rule2', nbrule: 2, nbpa: 20, absday: '2018/09/09', outil: 1, last_version_analyzed: 'v1.0' },
    { metric_labels: 'test, regle', metric_ids: '123,234,345', name: 'rule3', nbrule: 3, nbpa: 30, absday: '2018/09/09', outil: 1, last_version_analyzed: 'v1.0' }
];
class RulesReferentielPartieDroiteComponent {
    constructor(refRulesService) {
        this.refRulesService = refRulesService;
        this.displayedColumns = ['nbrule', 'nbpa', 'absday', 'last_version_analyzed', 'name', 'outil'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
    }
    ngOnInit() {
        this.rulesDetailSubscription = this.refRulesService.ruleDetailSubject.subscribe((rulesDetail) => {
            this.rulesDetail = rulesDetail;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.rulesDetail);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        });
        this.refRulesService.getRulesDetailAgg();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
RulesReferentielPartieDroiteComponent.ɵfac = function RulesReferentielPartieDroiteComponent_Factory(t) { return new (t || RulesReferentielPartieDroiteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ref_rules_service__WEBPACK_IMPORTED_MODULE_4__["RefRulesService"])); };
RulesReferentielPartieDroiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RulesReferentielPartieDroiteComponent, selectors: [["app-rules-referentiel-partie-droite"]], viewQuery: function RulesReferentielPartieDroiteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 34, vars: 6, consts: [["cols", "14", "rowHeight", "100px"], [3, "colspan"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "metric_labels"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "metric_ids"], ["matColumnDef", "nbrule"], ["matColumnDef", "nbpa"], ["matColumnDef", "absday"], ["matColumnDef", "last_version_analyzed"], ["matColumnDef", "name"], ["matColumnDef", "outil"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function RulesReferentielPartieDroiteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RulesReferentielPartieDroiteComponent_Template_input_keyup_5_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RulesReferentielPartieDroiteComponent_th_8_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RulesReferentielPartieDroiteComponent_td_9_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RulesReferentielPartieDroiteComponent_th_11_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RulesReferentielPartieDroiteComponent_td_12_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RulesReferentielPartieDroiteComponent_th_14_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RulesReferentielPartieDroiteComponent_td_15_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RulesReferentielPartieDroiteComponent_th_17_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RulesReferentielPartieDroiteComponent_td_18_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RulesReferentielPartieDroiteComponent_th_20_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RulesReferentielPartieDroiteComponent_td_21_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RulesReferentielPartieDroiteComponent_th_23_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RulesReferentielPartieDroiteComponent_td_24_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, RulesReferentielPartieDroiteComponent_th_26_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RulesReferentielPartieDroiteComponent_td_27_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RulesReferentielPartieDroiteComponent_th_29_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RulesReferentielPartieDroiteComponent_td_30_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RulesReferentielPartieDroiteComponent_tr_31_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RulesReferentielPartieDroiteComponent_tr_32_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-paginator", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW5sYW0vRG9jdW1lbnRzL25vZGVKUy9Qcm9qZXQ2QW5nL2FuZ3VsYXJQcmVtaWVyL3NyYy9hcHAvcnVsZXMtcmVmZXJlbnRpZWwvcnVsZXMtcmVmZXJlbnRpZWwtcGFydGllLWRyb2l0ZS9ydWxlcy1yZWZlcmVudGllbC1wYXJ0aWUtZHJvaXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ydWxlcy1yZWZlcmVudGllbC9ydWxlcy1yZWZlcmVudGllbC1wYXJ0aWUtZHJvaXRlL3J1bGVzLXJlZmVyZW50aWVsLXBhcnRpZS1kcm9pdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcnVsZXMtcmVmZXJlbnRpZWwvcnVsZXMtcmVmZXJlbnRpZWwtcGFydGllLWRyb2l0ZS9ydWxlcy1yZWZlcmVudGllbC1wYXJ0aWUtZHJvaXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RulesReferentielPartieDroiteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rules-referentiel-partie-droite',
                templateUrl: './rules-referentiel-partie-droite.component.html',
                styleUrls: ['./rules-referentiel-partie-droite.component.scss']
            }]
    }], function () { return [{ type: _services_ref_rules_service__WEBPACK_IMPORTED_MODULE_4__["RefRulesService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/rules-referentiel/rules-referentiel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/rules-referentiel/rules-referentiel.component.ts ***!
  \******************************************************************/
/*! exports provided: RulesReferentielComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesReferentielComponent", function() { return RulesReferentielComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/application.service */ "./src/app/services/application.service.ts");
/* harmony import */ var _services_ref_rules_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ref-rules.service */ "./src/app/services/ref-rules.service.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _rules_referentiel_partie_droite_rules_referentiel_partie_droite_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rules-referentiel-partie-droite/rules-referentiel-partie-droite.component */ "./src/app/rules-referentiel/rules-referentiel-partie-droite/rules-referentiel-partie-droite.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















function RulesReferentielComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " metric_id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.metric_id, " ");
} }
function RulesReferentielComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Outil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_13_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_13_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RulesReferentielComponent_td_13_p_1_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RulesReferentielComponent_td_13_p_2_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RulesReferentielComponent_td_13_p_3_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r19.id_outil === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r19.id_outil === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r19.id_outil === 3);
} }
function RulesReferentielComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Impact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_16_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_16_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_16_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_16_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_16_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_16_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_16_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_16_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RulesReferentielComponent_td_16_p_1_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RulesReferentielComponent_td_16_p_2_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RulesReferentielComponent_td_16_p_3_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RulesReferentielComponent_td_16_p_4_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RulesReferentielComponent_td_16_p_5_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RulesReferentielComponent_td_16_p_6_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RulesReferentielComponent_td_16_p_7_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RulesReferentielComponent_td_16_p_8_Template, 2, 0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r23.severity === "NOT CRITICAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r23.severity === "CRITICAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r23.severity === "MEDIUM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r23.severity === "INFO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r23.severity === "LOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r23.severity === "HIGH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r23.severity === "MAJOR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r23.severity === "BLOCKER");
} }
function RulesReferentielComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " libell\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r32.metric_description, " ");
} }
function RulesReferentielComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Impact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r33.hf, "");
} }
function RulesReferentielComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " date d\u00E9but ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r34.date_premier, " ");
} }
function RulesReferentielComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " date fin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r35.date_fin, " ");
} }
function RulesReferentielComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Apps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RulesReferentielComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r36.nb_application, " ");
} }
function RulesReferentielComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 32);
} }
function RulesReferentielComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 33);
} }
const _c0 = function () { return [10, 20, 50, 100]; };
const ELEMENT_DATA_PA = [
    { metric_id: 1770, id_outil: 1, severity: 'minor', metric_description: 'regle 1' },
    { metric_id: 1775, id_outil: 2, severity: 'severe', metric_description: 'regle 2' },
    { metric_id: 1780, id_outil: 3, severity: 'critical', metric_description: 'regle 3' },
];
class RulesReferentielComponent {
    constructor(applicationService, refRulesService) {
        this.applicationService = applicationService;
        this.refRulesService = refRulesService;
        this.displayedColumnsPA = ['id_outil', 'severity', 'metric_description', 'hf', 'date_premier', 'date_fin', 'nb_application'];
        this.dataSourcePA = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA_PA);
    }
    ngOnInit() {
        this.applicationService.setApplicationMenu(null);
        this.rulesSubscription = this.refRulesService.ruleSubject.subscribe((rules) => {
            this.rules = rules;
            this.dataSourcePA = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.rules);
            this.dataSourcePA.sort = this.sortPA;
            this.dataSourcePA.paginator = this.paginatorPA;
            console.log("this.rules=" + this.rules);
            //        this.dataSource = new MatTableDataSource(this.rules);
            //      this.dataSource.sort = this.sort;
            //    this.dataSource.paginator = this.paginator;
        });
        this.refRulesService.getRulesAgg();
    }
    applyFilter(event) {
        const filterValuePA = event.target.value;
        this.dataSourcePA.filter = filterValuePA.trim().toLowerCase();
    }
}
RulesReferentielComponent.ɵfac = function RulesReferentielComponent_Factory(t) { return new (t || RulesReferentielComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ref_rules_service__WEBPACK_IMPORTED_MODULE_5__["RefRulesService"])); };
RulesReferentielComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RulesReferentielComponent, selectors: [["app-rules-referentiel"]], viewQuery: function RulesReferentielComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sortPA = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginatorPA = _t.first);
    } }, decls: 37, vars: 6, consts: [[1, "col-sm-12"], ["cols", "14", "rowHeight", "100px"], [3, "colspan"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "metric_id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id_outil"], ["matColumnDef", "severity"], ["matColumnDef", "metric_description"], ["matColumnDef", "hf"], ["matColumnDef", "date_premier"], ["matColumnDef", "date_fin"], ["matColumnDef", "nb_application"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf"], ["src", "../assets/images/castLogo_ico.PNG", "width", "25px", "height", "25px"], ["src", "../assets/images/cmarx.PNG", "width", "25px", "height", "25px"], ["src", "../assets/images/sonar.PNG", "width", "25px", "height", "25px"], ["src", "../assets/images/cast_NOT_CRITICAL.PNG", "width", "25px", "height", "25px"], ["src", "../assets/images/cast_CRITICAL.PNG", "width", "25px", "height", "25px"], ["src", "../assets/images/cx_MEDIUM.PNG", "width", "25px", "height", "25px"], ["src", "../assets/images/cx_INFO.PNG", "width", "25px", "height", "25px"], ["src", "../assets/images/cx_LOW.PNG", "width", "25px", "height", "25px"], ["src", "../assets/images/cx_HIGH.PNG", "width", "25px", "height", "25px"], ["src", "../assets/images/sonar_MAJOR.PNG", "width", "25px", "height", "25px"], ["src", "../assets/images/sonar_BLOCKER.PNG", "width", "25px", "height", "25px"], ["mat-header-row", ""], ["mat-row", ""]], template: function RulesReferentielComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function RulesReferentielComponent_Template_input_keyup_6_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RulesReferentielComponent_th_9_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RulesReferentielComponent_td_10_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RulesReferentielComponent_th_12_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RulesReferentielComponent_td_13_Template, 4, 3, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RulesReferentielComponent_th_15_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RulesReferentielComponent_td_16_Template, 9, 8, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RulesReferentielComponent_th_18_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RulesReferentielComponent_td_19_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RulesReferentielComponent_th_21_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RulesReferentielComponent_td_22_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RulesReferentielComponent_th_24_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RulesReferentielComponent_td_25_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RulesReferentielComponent_th_27_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RulesReferentielComponent_td_28_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RulesReferentielComponent_th_30_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RulesReferentielComponent_td_31_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RulesReferentielComponent_tr_32_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RulesReferentielComponent_tr_33_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-rules-referentiel-partie-droite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSourcePA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsPA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsPA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTile"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _rules_referentiel_partie_droite_rules_referentiel_partie_droite_component__WEBPACK_IMPORTED_MODULE_9__["RulesReferentielPartieDroiteComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW5sYW0vRG9jdW1lbnRzL25vZGVKUy9Qcm9qZXQ2QW5nL2FuZ3VsYXJQcmVtaWVyL3NyYy9hcHAvcnVsZXMtcmVmZXJlbnRpZWwvcnVsZXMtcmVmZXJlbnRpZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3J1bGVzLXJlZmVyZW50aWVsL3J1bGVzLXJlZmVyZW50aWVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3J1bGVzLXJlZmVyZW50aWVsL3J1bGVzLXJlZmVyZW50aWVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RulesReferentielComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rules-referentiel',
                templateUrl: './rules-referentiel.component.html',
                styleUrls: ['./rules-referentiel.component.scss']
            }]
    }], function () { return [{ type: _services_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] }, { type: _services_ref_rules_service__WEBPACK_IMPORTED_MODULE_5__["RefRulesService"] }]; }, { sortPA: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }]
        }], paginatorPA: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/script-sql/script-sql.component.ts":
/*!****************************************************!*\
  !*** ./src/app/script-sql/script-sql.component.ts ***!
  \****************************************************/
/*! exports provided: ScriptSQLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptSQLComponent", function() { return ScriptSQLComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/application.service */ "./src/app/services/application.service.ts");



class ScriptSQLComponent {
    constructor(applicationService) {
        this.applicationService = applicationService;
    }
    ngOnInit() {
        this.applicationService.setApplicationMenu(null);
    }
}
ScriptSQLComponent.ɵfac = function ScriptSQLComponent_Factory(t) { return new (t || ScriptSQLComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"])); };
ScriptSQLComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScriptSQLComponent, selectors: [["app-script-sql"]], decls: 506, vars: 0, consts: [[1, "list-group"], [1, "list-group-item", "active"], [1, "list-group-item"]], template: function ScriptSQLComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mise \u00E0 jour du path (chemin vers deploy) dans les bases CAST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " update basecss_central.dss_objects set object_full_name= replace(object_full_name, '\\basecss\\SAP', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " update basecss_local.refpath set path= replace(path, '\\basecss\\SAP', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " update basecss_local.cdt_objects set object_fullname= replace(object_fullname, '\\basecss\\SAP', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " update basecss_local.objfulnam set fullname = replace(fullname, '\\basecss\\SAP', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " update basecss_local.cdt_objects set object_name = replace(object_name, '\\basecss\\SAP', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " update basecss_central.dss_source_texts set source_path = replace(source_path, '\\basecss\\SAP', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " update basecss_local.dss_code_sources set source_path = replace(source_path, '\\basecss\\SAP', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " update basecss_local.dss_code_sources set source_path = replace(source_path, '\\basecss\\sap', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " update basecss_local.dss_objects set object_full_name = replace(object_full_name, '\\basecss\\SAP', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " update basecss_local.keys set keynam = replace(keynam, '\\basecss\\SAP', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " update basecss_local.objdsc set infval = replace(infval, '\\basecss\\SAP', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " update basecss_local.objdsc set infval = replace(infval, '\\basecss\\sap', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " update basecss_local.objects set idnam = replace(idnam, '\\basecss\\SAP', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " update basecss_local.objects set idshortnam = replace(idshortnam, '\\basecss\\SAP', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " update basecss_local.refpath set path = replace(path, '\\basecss\\SAP', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " update basecss_local.refpath set path = replace(path, '\\basecss\\sap', '') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Rattachement de snapshots \u00E0 la suite d'une migration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\nIl faut passer les requetes suivantes sur la base centrale :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\nOu 3 est l'ID de l'ancienne application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\nOu 188152 est l'ID de la nouvelle application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\nupdate basecss_central.dss_metric_results set object_id = 188152 where object_id = 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\nupdate basecss_central.dss_metric_values set object_id = 188152 where object_id = 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\nupdate basecss_central.dss_module_links set object_id = 188152 where object_id = 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\nupdate basecss_central.dss_portf_tree set app_id = 188152 where app_id = 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\nupdate basecss_central.dss_func_module_links set object_id = 188152 where object_id = 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\nupdate basecss_central.dss_link_info set previous_object_id = 188152 where previous_object_id = 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\nupdate basecss_central.dss_snapshot_info set object_id = 188152 where object_id = 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Liste des proc\u00E9dures MDLJ sur une base postgreSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\nSELECT routines.routine_name, parameters.data_type, parameters.ordinal_position, routines.specific_schema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\nFROM information_schema.routines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " LEFT JOIN information_schema.parameters ON routines.specific_name=parameters.specific_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\nWHERE --routines.specific_schema='basecss_local'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\nroutines.routine_name like 'mdlj%'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\nand parameters.ordinal_position = 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\nORDER BY routines.specific_schema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Exclusion de code des modules dans CMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\nupdate CTT_OBJECT_APPLICATIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\nset PROPERTIES = 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\nwhere OBJECT_ID in (select OBJECT_ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\nfrom CSV_FILE_OBJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\nwhere lower(FILE_PATH) like '%tiny_mce%')");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Liste des applications r\u00E9alis\u00E9es depuis le 1er janvier 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "\nSelect distinct ap.name,to_char(s.date_snapshot,'DD/MM/YYYY') dsnapshot, s.last_version_analyzed, am.url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " from benchmark.application ap, benchmark.snapshot s, benchmark.application_man am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " where s.id_application=ap.id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " and am.name=ap.name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " and date_snapshot > to_timestamp('01/01/2018','DD/MM/YYYY') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " and s.etat_workflow=3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " order by 1, 2 desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "LoC par modules et par snapshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\nSELECT snapshot_id, dob.Object_name, dmr.Metric_num_value AS LOC,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " CASE WHEN dob.object_type_id = -102 THEN 'APPLICATION LEVEL'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " WHEN dob.object_type_id = 20000 THEN 'MODULE LEVEL'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " WHEN dob.object_type_id in (886453,886291, 889716, 896001) THEN 'FILE LEVEL' -- .html .jsp .ts .js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " ELSE 'TECHNICAL CAST OBJESCT'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " END AS lEVEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " FROM dss_metric_results dmr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " join dss_objects dob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " on dob.object_id = dmr.object_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " where metric_id = 10151");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " group by snapshot_id, dob.Object_name, dmr.Metric_num_value, dob.object_type_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " order by snapshot_id , dob.Object_name, dmr.Metric_num_value, dob.object_type_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "D\u00E9finition de modules par explicit content - Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Delete from \u00A7CI_OBJECTS_SET Where SET_NAME = '$(ModuleName)'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\n/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\nInsert Into \u00A7CI_OBJECTS_SET(SET_NAME, OBJECT_ID, ERROR_ID)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\nselect distinct '$(ModuleName)', OBJECT_ID, 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\nfrom \u00A7csv_file_objects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "\nwhere (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " file_path LIKE replace('\\%XXXX\\%', '\\','\\\\') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "\nunion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\nselect distinct '$(ModuleName)', p.IdKey, 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "\nfrom \u00A7Keys p, \u00A7KeyPar kp, \u00A7Keys k, \u00A7ObjFilRef r, \u00A7RefPath rp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\nwhere (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " rp.Path LIKE replace('%\\XXXX\\%', '\\','\\\\') ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "\nand r.IdFilRef = rp.IdFilRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\nand k.IdKey = r.IdObj");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "\nand kp.IdKey = k.IdKey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\nand p.IdKey = kp.IdParent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "\nand p.ObjTyp = 99 /*Java Package*/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "\n/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Liste des transactions avec CC, FP, LoC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\nselect CDTO.form_id, TX.object_name , DMR.metric_char_value Details, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\nDMR.metric_num_value FP, sum(DA.CYCLOMATIC) Total_CC, sum(DA.CODE_LINES) Total_Code_Lines, sum(DA.H_VOLUME) Total_Halstead_Volume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "\nfrom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\ndss_links lk, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\ndss_objects ob, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\ndss_objects TX,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\nDSS_TRANSLATION_TABLE TT, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "\nDSS_TRANSLATION_TABLE TTX, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "\nned_local.DSS_OBJECTS O, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "\nned_local.DSSAPP_ARTIFACTS DA, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "\nDSS_METRIC_RESULTS DMR ,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "\nned_local.dss_transaction CDTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "\nwhere ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "\nCDTO.object_id=TTX.site_object_id and TTX.object_id=tx.object_id and");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "\nDMR.SNAPSHOT_ID=(select max(snapshot_id) from DSS_SNAPSHOTS) and");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\nDMR.metric_char_value != 'NULL' and");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "\nTX.object_id=DMR.object_id and");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "\nTT.SITE_OBJECT_ID=O.OBJECT_ID and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " O.OBJECT_ID=DA.OBJECT_ID and");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "\nob.object_id=TT.object_id and");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "\nlk.previous_object_id = TX.object_id and lk.next_object_id = ob.object_id and lk.link_type_id=11003");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "\ngroup by CDTO.form_id,TX.object_name, DMR.metric_char_value, DMR.metric_num_value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "\norder by 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Liste des rules/notes/violations/critere technique/facteurs de sante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "\nSELECT DISTINCT( metric_id ) mtid,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " critical,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " b_criterion_name,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, " t_criterion_name,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " m_weight weight,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " metric_name mtname,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " note mark,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " SUM(detail) checkkO,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " ( SUM(total) - SUM(detail) ) checkOK,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " SUM(total) Total,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, " note_ct,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, " weight_ct,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " critical_ct,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, " b_criterion_name,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " metric_description,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " b_criterion_id,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " t_criterion_id,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " bc_note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "\nFROM (SELECT DISTINCT( CQT.metric_name ),");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, " CQT.metric_id,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " CQT.m_weight,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " CQT.t_criterion_name,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " CQT.b_criterion_name,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, " DMR_DTAIL.metric_num_value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " Detail,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " Round(Cast(DMR_NOTE.metric_num_value AS DECIMAL), 2) note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, " ,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " DMTT.metric_critical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, " Critical,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, " DMR_TOTAL.metric_num_value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, " Total,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, " DMR_CT.metric_num_value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, " note_ct,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " CQT.t_weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, " weight_ct,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, " CQT.t_crit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, " critical_ct");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, " ,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, " metric_description,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, " b_criterion_id,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, " t_criterion_id,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, " DMR_BC.metric_num_value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, " bc_note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, " FROM csv_quality_tree CQT,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, " dss_metric_results DMR_DTAIL,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, " dss_metric_results DMR_NOTE,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " dss_metric_results DMR_TOTAL,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, " dss_metric_results DMR_CT,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, " dss_metric_results DMR_BC,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " dss_metric_type_trees DMTT,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, " dss_metric_types DMT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, " WHERE DMR_BC.metric_id = CQT.b_criterion_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, " AND DMR_BC.metric_value_index = 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, " AND DMR_BC.object_id = < application_id >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, " AND DMR_BC.snapshot_id = < snapshot_id >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, " AND CQT.metric_id = dmr_Dtail.metric_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, " AND CQT.metric_id = DMTT.metric_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, " AND DMR_DTAIL.snapshot_id = < snapshot_id >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, " AND DMR_DTAIL.metric_value_index = 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, " AND CQT.metric_id = DMR_TOTAL.metric_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, " AND DMR_TOTAL.snapshot_id = < snapshot_id >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, " AND DMR_TOTAL.metric_value_index = 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, " AND DMR_DTAIL.object_id = DMR_TOTAL.object_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, " AND CQT.metric_id = DMR_NOTE.metric_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, " AND DMR_NOTE.snapshot_id = < snapshot_id >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, " AND DMR_NOTE.metric_value_index = 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, " AND dmr_note.object_id = < application_id >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, " AND dmr_Dtail.object_id IN (SELECT DISTINCT( dss_ml2.module_id )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, " FROM dss_module_links dss_ml2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, " WHERE dss_ml2.object_id = 3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, " AND CQT.b_criterion_id IN ( 60011, 60012, 60013, 60014,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, " 60016, 60017 )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, " AND DMR_CT.object_id = < application_id >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, " AND DMR_CT.metric_value_index = 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, " AND DMR_CT.snapshot_id = < snapshot_id >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, " AND DMR_CT.metric_id = CQT.t_criterion_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, " AND DMT.metric_id = DMR_DTAIL.metric_id)AS foo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "\nGROUP BY metric_id,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, " metric_name,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](402, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, " note,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, " critical,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](406, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, " t_criterion_name,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](408, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, " m_weight,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, " b_criterion_name,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](412, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, " note_ct,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, " weight_ct,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, " critical_ct,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, " metric_description,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, " b_criterion_id,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, " t_criterion_id,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, " bc_note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](426, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "\nORDER BY 2 DESC,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, " 5 DESC,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, " 7 DESC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](432, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "Isolation des micro service (1 projet => 1 base de donn\u00E9es)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "\nselect t.object_name, j.object_fullname, rp2.path");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "\n--select j.object_id, t.object_id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "\nfrom ctv_guid_objects t, ctv_links cl, ObjFilRef ofr, RefPath rp, ctv_guid_objects j, objfilref ofr2, refpath rp2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "\nwhere t.object_id = cl.called_id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "\nand t.object_type_str = 'Table'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](447, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "\nand ofr.idobj = t.object_id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](449, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "\nand rp.idfilref = ofr.idfilref ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](451, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "\nand lower(rp.path) like lower('C:\\WEBI\\AipNode\\data\\deploy\\main_sources\\home-weather-code\\%') escape ''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "\nand j.object_id =cl.caller_id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "\nand ofr2.idobj = j.object_id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](457, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "\nand ofr2.idfilref =rp2.idfilref ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](459, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "\nand lower(rp2.path) not like lower('C:\\WEBI\\AipNode\\data\\deploy\\main_sources\\home-weather-code\\%') escape ''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](461, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](462, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "Les regles de distributions par cat\u00E9gorie (L,M,C,HC)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "\nSelect CASE WHEN (dmr.metric_value_index=-4) THEN 'l_artefact' ELSE CASE WHEN (dmr.metric_value_index=-3) THEN 'm_artefact' ELSE CASE WHEN (dmr.metric_value_index=-2) THEN 'h_artefact' ELSE 'vh_artefact' ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](468, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "\nEND END END severite ,sum(dmr.metric_num_value) valeur,dmr.metric_id metric_id from basecss_central.dss_metric_results dmr, basecss_central.DSS_SNAPSHOTS DS, basecss_central.dss_links dl1, basecss_central.dss_links dl2 where dmr.SNAPSHOT_ID = DS.SNAPSHOT_ID and dmr.object_id = dl1.next_object_id and dl1.link_type_id = 1 and dl2.link_type_id = 1 and dl1.previous_object_id = dl2.next_object_id and dl2.previous_object_id in (select object_id from basecss_central.dss_objects where object_type_id = -102 )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](470, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "\nand dmr.metric_id in (65501,65350,66015,65105,66021,66020,65701,65801,66010) and dmr.metric_value_index in (-4,-3,-2,-1) group by dmr.metric_id, dl2.previous_object_id, DS.SNAPSHOT_NAME,dmr.metric_value_index,DS.SNAPSHOT_ID;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](472, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](473, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "CC par modules");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "\nselect CASE WHEN (dmr.metric_value_index=-4) THEN 'l_artefact' ELSE CASE WHEN (dmr.metric_value_index=-3) THEN 'm_artefact' ELSE CASE WHEN (dmr.metric_value_index=-2) THEN 'h_artefact' ELSE 'vh_artefact'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](479, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "\nEND END END severite ,sum(dmr.metric_num_value) valeur,dmr.metric_id metric_id, do2.object_name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](481, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "\nfrom basecss_central.dss_metric_results dmr, basecss_central.DSS_SNAPSHOTS DS, basecss_central.dss_links dl1, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](483, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "\nbasecss_central.dss_links dl2, basecss_central.dss_links dl3, basecss_central.dss_objects do2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](485, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "\nwhere dmr.SNAPSHOT_ID = DS.SNAPSHOT_ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](487, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "\nand dmr.object_id = dl1.next_object_id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](489, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "\nand dl3.link_type_id = 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "\nand dl1.previous_object_id = dl2.next_object_id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](493, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "\nand dl2.previous_object_id = dl3.next_object_id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](495, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "\nand dl3.previous_object_id in (select object_id from basecss_central.dss_objects where object_type_id = -102 )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](497, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "\nand do2.object_id = dl2.previous_object_id ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](499, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "\nand dmr.metric_id in (65501) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](501, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "\nand dmr.metric_value_index in (-4,-3,-2,-1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](503, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "\ngroup by dmr.metric_id, do2.object_name, DS.SNAPSHOT_NAME,dmr.metric_value_index,DS.SNAPSHOT_ID;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](505, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjcmlwdC1zcWwvc2NyaXB0LXNxbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScriptSQLComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-script-sql',
                templateUrl: './script-sql.component.html',
                styleUrls: ['./script-sql.component.scss']
            }]
    }], function () { return [{ type: _services_application_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/action-plan.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/action-plan.service.ts ***!
  \*************************************************/
/*! exports provided: ActionPlanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPlanService", function() { return ActionPlanService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _variables_globales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.globales */ "./src/app/services/variables.globales.ts");





class ActionPlanService {
    constructor(httpClient, variablesGlobales) {
        this.httpClient = httpClient;
        this.variablesGlobales = variablesGlobales;
        this.actionPlanSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    emitActionPlanListSubject() {
        this.actionPlanSubject.next(this.actionPlanList.slice());
    }
    getActionPLanList(idApp, idSnapshot, apStatus) {
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/ActionPlanPerApp/' + idApp + '/' + idSnapshot + '/' + apStatus)
            .subscribe((response) => {
            console.log(response);
            this.actionPlanList = response;
            this.emitActionPlanListSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('GET getActionPLanList fin ! : ');
    }
}
ActionPlanService.ɵfac = function ActionPlanService_Factory(t) { return new (t || ActionPlanService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"])); };
ActionPlanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ActionPlanService, factory: ActionPlanService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActionPlanService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/appareil.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/appareil.service.ts ***!
  \**********************************************/
/*! exports provided: AppareilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppareilService", function() { return AppareilService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AppareilService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.appareilSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.appareils = [
            {
                id: 1,
                name: 'Machine à laver',
                status: 'éteint'
            },
            {
                id: 2,
                name: 'Télévision',
                status: 'allumé'
            },
            {
                id: 3,
                name: 'Ordinateur',
                status: 'éteint'
            }
        ];
    }
    emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice());
    }
    getAppareilId(id) {
        const appareil = this.appareils.find((appareilObject) => {
            return appareilObject.id === id;
        });
        return appareil;
    }
    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
        this.emitAppareilSubject();
    }
    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }
    switchOnOne(index) {
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubject();
    }
    switchOffOne(index) {
        this.appareils[index].status = 'éteint';
        this.emitAppareilSubject();
    }
    addAppareil(name, status) {
        const appareilObject = {
            id: 0,
            name: '',
            status: ''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }
    saveAppareilsToServer() {
        this.httpClient
            .put('https://microcommerce-nguyen.firebaseio.com/appareils.json', this.appareils)
            .subscribe(() => {
            console.log('Enregistrement terminé !');
        }, (error) => {
            console.log('Erreur  dans le saveAppareilsToServer : ' + error);
        });
    }
    getAppareilsFromServer() {
        this.httpClient
            .get('https://microcommerce-nguyen.firebaseio.com/appareils.json')
            .subscribe((response) => {
            this.appareils = response;
            this.emitAppareilSubject();
            console.log('getAppareilsFromServer !');
        }, (error) => {
            console.log('Erreur ! : ' + error);
        });
    }
    getAppareilsFromServer2() {
        this.httpClient
            .get('http://localhost:9090/Produits/1')
            .subscribe((response) => {
            //response;
            console.log('Lecture Produits OK ');
        }, (error) => {
            console.log('Erreur ! : ' + error);
        });
    }
    readAPI() {
        this.httpClient.get('http://localhost:9090/Produits/1')
            .subscribe((data) => {
            console.log(data);
        });
    }
    autreExemple() {
        this.httpClient.get('http://localhost:9090/Applications')
            //      this.httpClient.put('https://microcommerce-nguyen.firebaseio.com/appareils.json', this.appareils)
            .subscribe((response) => {
            console.log(response);
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('GET autreExemple fin ! : ');
    }
}
AppareilService.ɵfac = function AppareilService_Factory(t) { return new (t || AppareilService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppareilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppareilService, factory: AppareilService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppareilService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/application-man.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/application-man.service.ts ***!
  \*****************************************************/
/*! exports provided: ApplicationManService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationManService", function() { return ApplicationManService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _variables_globales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.globales */ "./src/app/services/variables.globales.ts");





class ApplicationManService {
    constructor(httpClient, variablesGlobales) {
        this.httpClient = httpClient;
        this.variablesGlobales = variablesGlobales;
        this.applicationManSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    emitApplicationManSubject() {
        this.applicationManSubject.next(this.applications.slice());
    }
    getApplicationsMan() {
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/ApplicationManuelle')
            .subscribe((response) => {
            console.log(response);
            this.applications = response;
            this.emitApplicationManSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('GET getApplicationsMan fin ! : ');
    }
}
ApplicationManService.ɵfac = function ApplicationManService_Factory(t) { return new (t || ApplicationManService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"])); };
ApplicationManService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApplicationManService, factory: ApplicationManService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApplicationManService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/application.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/application.service.ts ***!
  \*************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _variables_globales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.globales */ "./src/app/services/variables.globales.ts");





class ApplicationService {
    constructor(httpClient, variablesGlobales) {
        this.httpClient = httpClient;
        this.variablesGlobales = variablesGlobales;
        this.applicationMenuSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.applicationSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.snapshotSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.statAppByYearSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.oneApplicationSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.appsByTechnoSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.nbAppByVersionAIPSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.extensionByAppSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    emitExtensionsByAppSubject() {
        this.extensionByAppSubject.next(this.extensionByApp.slice());
    }
    emitNbAppByVersionAIPSubject() {
        this.nbAppByVersionAIPSubject.next(this.nbAppByVersionAIP.slice());
    }
    emitAppsByTechnoSubject() {
        this.appsByTechnoSubject.next(this.appsByTechno.slice());
    }
    emitApplicationSubject() {
        this.applicationSubject.next(this.applications.slice());
    }
    emitAppByYearSubject() {
        this.statAppByYearSubject.next(this.appByYear.slice());
    }
    emitOneApplicationSubject() {
        this.oneApplicationSubject.next(this.application);
    }
    emitApplicationMenuSubject() {
        // console.log('application.service.emitApplicationMenuSubject this.applicationMenu='+this.applicationMenu);
        this.applicationMenuSubject.next(this.applicationMenu);
    }
    emitSnapshotSubject() {
        this.snapshotSubject.next(this.snapshots.slice());
    }
    getApplications() {
        return this.applications;
    }
    getApplication(id) {
        const application = this.applications.find((applicationObject) => {
            return applicationObject.id === id;
        });
        return application;
    }
    setApplicationMenu(applicationMenu) {
        console.log('application.service.setApplicationMenu');
        if (applicationMenu == null) {
            this.applicationMenu = null;
        }
        else {
            this.applicationMenu = applicationMenu;
        }
        this.emitApplicationMenuSubject();
    }
    getApplicationMenu() {
        //  console.log('application.service.getApplicationMenu');
        return this.applicationMenu;
    }
    getExtensionByApp(idApp) {
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/ExtensionsByApp/' + idApp)
            .subscribe((response) => {
            this.extensionByApp = response;
            console.log('getExtensionByApp apres catch response');
            this.emitExtensionsByAppSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('getExtensionByApp fin');
    }
    getNbAppByVersionAIP() {
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/AIPVersions')
            .subscribe((response) => {
            this.nbAppByVersionAIP = response;
            console.log('getNbAppByVersionAIP apres catch response');
            this.emitNbAppByVersionAIPSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('getNbAppByVersionAIP fin');
    }
    getStatAppByYearREST(nbMonth) {
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/StatsAppByYear/' + nbMonth)
            .subscribe((response) => {
            this.appByYear = response;
            console.log('getStatAppByYearREST apres catch response');
            this.emitAppByYearSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('getStatAppByYearREST fin');
    }
    getApplicationByIdREST(id) {
        this.variablesGlobales.URL_MICRO_SERVICE;
        console.log("this.variablesGlobales.URL_MICRO_SERVICE=" + this.variablesGlobales.URL_MICRO_SERVICE);
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/ApplicationDetail/' + id)
            .subscribe((response) => {
            this.application = response;
            console.log('getApplicationByIdREST apres catch response');
            this.emitOneApplicationSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('getApplicationByIdREST fin');
    }
    getApplicationsSnapshotREST() {
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/ApplicationsSnapshot')
            .subscribe((response) => {
            console.log(response);
            this.applications = response;
            this.emitApplicationSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('GET getApplicationREST fin ! : ');
    }
    getSnapshotsREST(id, idOutil) {
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/SnapshotByAppAndOutil/' + id + '/' + idOutil)
            .subscribe((response) => {
            console.log(response);
            this.snapshots = response;
            this.emitSnapshotSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('GET getSnapshotsREST fin ! : ');
    }
    getAppsByTechno() {
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/ApplicationByTechno')
            .subscribe((response) => {
            console.log(response);
            this.appsByTechno = response;
            this.emitAppsByTechnoSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('GET getAppsByTechno fin ! : ');
    }
}
ApplicationService.ɵfac = function ApplicationService_Factory(t) { return new (t || ApplicationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"])); };
ApplicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApplicationService, factory: ApplicationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApplicationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-gard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth-gard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGard", function() { return AuthGard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isAuth) {
            return true;
        }
        else {
            this.router.navigate(['/auth']);
        }
    }
}
AuthGard.ɵfac = function AuthGard_Factory(t) { return new (t || AuthGard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGard, factory: AuthGard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
class AuthService {
    constructor() {
        this.isAuth = false;
    }
    signIn() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.isAuth = true;
                resolve(true);
            }, 2000);
        });
    }
    signOut() {
        this.isAuth = false;
    }
}


/***/ }),

/***/ "./src/app/services/extension.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/extension.service.ts ***!
  \***********************************************/
/*! exports provided: ExtensionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionService", function() { return ExtensionService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _variables_globales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.globales */ "./src/app/services/variables.globales.ts");





class ExtensionService {
    constructor(httpClient, variablesGlobales) {
        this.httpClient = httpClient;
        this.variablesGlobales = variablesGlobales;
        this.extensionSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.extensionsListSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    emitExtensionsSubject() {
        this.extensionSubject.next(this.extensions.slice());
    }
    emitExtensionsListSubject() {
        this.extensionsListSubject.next(this.extensionsList.slice());
    }
    getExtensions() {
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/ExtensionsByApp')
            .subscribe((response) => {
            console.log(response);
            this.extensions = response;
            this.emitExtensionsSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('GET getExtensions fin ! : ');
    }
    getExtensionsByIdApp(idApp) {
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/ExtensionsByApp/' + idApp)
            .subscribe((response) => {
            console.log(response);
            this.extensionsList = response;
            this.emitExtensionsListSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('GET getExtensionsByIdApp fin ! : ');
    }
}
ExtensionService.ɵfac = function ExtensionService_Factory(t) { return new (t || ExtensionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"])); };
ExtensionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExtensionService, factory: ExtensionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExtensionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/ref-ponderation-cc.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/ref-ponderation-cc.service.ts ***!
  \********************************************************/
/*! exports provided: RefPonderationCCService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefPonderationCCService", function() { return RefPonderationCCService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _variables_globales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.globales */ "./src/app/services/variables.globales.ts");





class RefPonderationCCService {
    constructor(httpClient, variablesGlobales) {
        this.httpClient = httpClient;
        this.variablesGlobales = variablesGlobales;
        this.refPonderationSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    emitRefPonderationSubject() {
        this.refPonderationSubject.next(this.refPonderation.slice());
    }
    getRefPonderationCC() {
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/refPonderationCC')
            .subscribe((response) => {
            console.log(response);
            this.refPonderation = response;
            this.emitRefPonderationSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('GET getRefPonderationCC fin ! : ');
    }
}
RefPonderationCCService.ɵfac = function RefPonderationCCService_Factory(t) { return new (t || RefPonderationCCService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"])); };
RefPonderationCCService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RefPonderationCCService, factory: RefPonderationCCService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RefPonderationCCService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/ref-rules.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/ref-rules.service.ts ***!
  \***********************************************/
/*! exports provided: RefRulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefRulesService", function() { return RefRulesService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _variables_globales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.globales */ "./src/app/services/variables.globales.ts");





class RefRulesService {
    constructor(httpClient, variablesGlobales) {
        this.httpClient = httpClient;
        this.variablesGlobales = variablesGlobales;
        this.ruleDetailSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.ruleSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.rulePerToolSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    emitRulesPerToolSubject() {
        this.rulePerToolSubject.next(this.rulesPerTool.slice());
    }
    emitRulesDetailSubject() {
        this.ruleDetailSubject.next(this.rulesDetailAgg.slice());
    }
    emitRulesSubject() {
        this.ruleSubject.next(this.rulesAgg.slice());
    }
    getRulesPerToolAgg() {
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/nbRulesUsedByTool')
            .subscribe((response) => {
            console.log(response);
            this.rulesPerTool = response;
            this.emitRulesPerToolSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('GET getRulesPerToolAgg fin ! : ');
    }
    getRulesDetailAgg() {
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/refRuleAgg')
            .subscribe((response) => {
            console.log(response);
            this.rulesDetailAgg = response;
            this.emitRulesDetailSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('GET getRulesDetailAgg fin ! : ');
    }
    getRulesAgg() {
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/refRulePAAgg')
            .subscribe((response) => {
            console.log(response);
            this.rulesAgg = response;
            this.emitRulesSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('GET getRulesAgg fin ! : ');
    }
}
RefRulesService.ɵfac = function RefRulesService_Factory(t) { return new (t || RefRulesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"])); };
RefRulesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RefRulesService, factory: RefRulesService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RefRulesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/server-css.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/server-css.service.ts ***!
  \************************************************/
/*! exports provided: ServerCssService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerCssService", function() { return ServerCssService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _variables_globales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.globales */ "./src/app/services/variables.globales.ts");





class ServerCssService {
    constructor(httpClient, variablesGlobales) {
        this.httpClient = httpClient;
        this.variablesGlobales = variablesGlobales;
        this.serverSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    emitServerCssSubject() {
        this.serverSubject.next(this.servers.slice());
    }
    getServerCss() {
        this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/ServerCSS')
            .subscribe((response) => {
            console.log(response);
            this.servers = response;
            this.emitServerCssSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('GET getServerCss fin ! : ');
    }
}
ServerCssService.ɵfac = function ServerCssService_Factory(t) { return new (t || ServerCssService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"])); };
ServerCssService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ServerCssService, factory: ServerCssService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ServerCssService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/snapshot.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/snapshot.service.ts ***!
  \**********************************************/
/*! exports provided: SnapshotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnapshotService", function() { return SnapshotService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _variables_globales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./variables.globales */ "./src/app/services/variables.globales.ts");





class SnapshotService {
    constructor(httpClient, variablesGlobales) {
        this.httpClient = httpClient;
        this.variablesGlobales = variablesGlobales;
        this.oneSnapshotSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.forDeleteSnapshotSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    emitOneSnapshotSubject() {
        this.oneSnapshotSubject.next(this.snapshot);
    }
    emitForDeleteSnapshotSubject() {
        this.forDeleteSnapshotSubject.next(this.snapshotForDelete);
    }
    purgeCentralById(id_application) {
        return this.httpClient.get(this.variablesGlobales.URL_MICRO_SERVICE + '/purgeCentralBase/' + id_application)
            .subscribe((response) => {
            this.snapshot = response;
            console.log('purgeCentralById apres catch response');
            this.emitOneSnapshotSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('purgeCentralById fin id_application=' + id_application);
    }
    deleteCommentForSnapshot(snapshot) {
        return this.httpClient.post(this.variablesGlobales.URL_MICRO_SERVICE + '/saveCommentForSnapshot', snapshot)
            .subscribe((response) => {
            this.snapshotForDelete = response;
            console.log('saveCommentForSnapshot apres catch response');
            this.emitForDeleteSnapshotSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('saveCommentForSnapshot fin');
    }
    /** POST: update comment for a snapshot to the database */
    saveCommentForSnapshot(snapshot) {
        return this.httpClient.post(this.variablesGlobales.URL_MICRO_SERVICE + '/saveCommentForSnapshot', snapshot)
            .subscribe((response) => {
            this.snapshot = response;
            console.log('saveCommentForSnapshot apres catch response');
            this.emitOneSnapshotSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('saveCommentForSnapshot fin');
    }
    /** POST: Delete Forever a snapshot in the database, Be carreful, once it is done, no rollback possible ! */
    deleteForeverSnapshotById(id_snapshot) {
        return this.httpClient.post(this.variablesGlobales.URL_MICRO_SERVICE + '/deleteSnapshotForever', id_snapshot)
            .subscribe((response) => {
            this.snapshot = response;
            console.log('deleteForeverSnapshotById apres catch response');
            this.emitOneSnapshotSubject();
        }, (err) => {
            console.log(err.error);
            console.log(err.name);
            console.log(err.message);
            console.log(err.status);
        });
        console.log('deleteForeverSnapshotById fin');
    }
}
SnapshotService.ɵfac = function SnapshotService_Factory(t) { return new (t || SnapshotService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"])); };
SnapshotService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SnapshotService, factory: SnapshotService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SnapshotService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _variables_globales__WEBPACK_IMPORTED_MODULE_3__["VariablesGlobales"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");

class UserService {
    constructor() {
        this.users = [
            {
                firstName: 'Nguyen',
                lastName: 'Lam',
                email: 'nguyen.lam@gmail.com',
                drinkPreference: 'cocacola',
                hobbies: [
                    'coder',
                    'jouer',
                    'lire'
                ]
            }
        ];
        this.userSubject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    emitUser() {
        this.userSubject.next(this.users.slice());
    }
    addUser(user) {
        this.users.push(user);
        this.emitUser();
    }
}


/***/ }),

/***/ "./src/app/services/variables.globales.ts":
/*!************************************************!*\
  !*** ./src/app/services/variables.globales.ts ***!
  \************************************************/
/*! exports provided: VariablesGlobales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesGlobales", function() { return VariablesGlobales; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VariablesGlobales {
    constructor() {
        this.URL_MICRO_SERVICE = 'http://localhost:9090';
    }
}
VariablesGlobales.ɵfac = function VariablesGlobales_Factory(t) { return new (t || VariablesGlobales)(); };
VariablesGlobales.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VariablesGlobales, factory: VariablesGlobales.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VariablesGlobales, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/single-appareil/single-appareil.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/single-appareil/single-appareil.component.ts ***!
  \**************************************************************/
/*! exports provided: SingleAppareilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleAppareilComponent", function() { return SingleAppareilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_appareil_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/appareil.service */ "./src/app/services/appareil.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class SingleAppareilComponent {
    constructor(appareilService, route) {
        this.appareilService = appareilService;
        this.route = route;
        this.name = 'Appareil';
        this.status = 'Status';
    }
    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.name = this.appareilService.getAppareilId(+id).name;
        this.status = this.appareilService.getAppareilId(+id).status;
    }
}
SingleAppareilComponent.ɵfac = function SingleAppareilComponent_Factory(t) { return new (t || SingleAppareilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_appareil_service__WEBPACK_IMPORTED_MODULE_1__["AppareilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SingleAppareilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleAppareilComponent, selectors: [["app-single-appareil"]], decls: 6, vars: 2, consts: [["routerLink", "/appareils"]], template: function SingleAppareilComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "retour \u00E0 la liste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.status);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1hcHBhcmVpbC9zaW5nbGUtYXBwYXJlaWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleAppareilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-appareil',
                templateUrl: './single-appareil.component.html',
                styleUrls: ['./single-appareil.component.scss']
            }]
    }], function () { return [{ type: _services_appareil_service__WEBPACK_IMPORTED_MODULE_1__["AppareilService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/single-application-action-plan-snapshot/single-application-action-plan-snapshot.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/single-application-action-plan-snapshot/single-application-action-plan-snapshot.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SingleApplicationActionPlanSnapshotComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleApplicationActionPlanSnapshotComponent", function() { return SingleApplicationActionPlanSnapshotComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _single_rules_list_single_rules_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../single-rules-list/single-rules-list.component */ "./src/app/single-rules-list/single-rules-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_snapshot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/snapshot.service */ "./src/app/services/snapshot.service.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_Forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/Forms */ "./node_modules/@angular/Forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
















function SingleApplicationActionPlanSnapshotComponent_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r0.comment);
} }
const _c0 = function (a0) { return { "affichecommentaire": a0 }; };
class SingleApplicationActionPlanSnapshotComponent {
    constructor(dialog, snapshotService) {
        this.dialog = dialog;
        this.snapshotService = snapshotService;
        this.panelOpenState = false;
        this.commentaireInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.hidden = false;
        this.hiddenCorrected = false;
        this.hiddenNew = false;
        this.hiddenStillViolation = false;
        this.hiddenTotal = false;
    }
    ngOnInit() {
        if (this.comment === null) {
            this.hidden = true;
        }
        else {
            this.commentaireInput.setValue(this.comment);
        }
        if (this.nb_corrected === 0) {
            this.hiddenCorrected = true;
            this.nb_correctedHTML = '-';
        }
        else {
            this.nb_correctedHTML = this.nb_corrected.toString();
        }
        if (this.nb_orphelin === 0) {
            this.nb_orphelinHTML = '-';
        }
        else {
            this.nb_orphelinHTML = this.nb_orphelin.toString();
        }
        if (this.plan_action_orphelin === 0) {
            this.plan_action_orphelinHTML = '-';
        }
        else {
            this.plan_action_orphelinHTML = this.plan_action_orphelin.toString();
        }
        if (this.exclusion_orphelin === 0) {
            this.exclusion_orphelinHTML = '-';
        }
        else {
            this.exclusion_orphelinHTML = this.exclusion_orphelin.toString();
        }
        if (this.obj_deleted === 0) {
            this.obj_deletedHTML = '-';
        }
        else {
            this.obj_deletedHTML = this.obj_deleted.toString();
        }
        if (this.nb_new === 0) {
            this.hiddenNew = true;
            this.nb_newHTML = '-';
        }
        else {
            this.nb_newHTML = this.nb_new.toString();
        }
        if (this.nb_still_violation === 0) {
            this.hiddenStillViolation = true;
            this.nb_still_violationHTML = '-';
        }
        else {
            this.nb_still_violationHTML = this.nb_still_violation.toString();
        }
        if (this.nb_total === 0) {
            this.hiddenTotal = true;
            this.nb_totalHTML = '-';
        }
        else {
            this.nb_totalHTML = this.nb_total.toString();
        }
    }
    //[ngClass]="onSwitchComment()"
    onSwitchComment() {
        if (this.hidden === true) {
            return 'affichecommentaire';
        }
        return '';
    }
    changement() {
        const snapshot = {
            id: this.id_snapshot,
            comment: this.commentaireInput.value
        };
        this.snapshotSubscription = this.snapshotService.oneSnapshotSubject.subscribe((snapshot) => {
            //this.snapshotsHTML = snapshot;
            this.hidden = false;
            this.comment = this.commentaireInput.value;
            console.log('changement effectué, this.commentaireInput.value=' + this.commentaireInput.value);
            //        this.commentaireInput.setValue();
            //this.snapshotService.emitOneSnapshotSubject();
        });
        this.snapshotService.saveCommentForSnapshot(snapshot);
    }
    deleteComment() {
        const snapshot = {
            id: this.id_snapshot,
            comment: null
        };
        this.snapshotSubscription = this.snapshotService.forDeleteSnapshotSubject.subscribe((snapshot) => {
            //this.snapshotsHTML = snapshot;
            this.hidden = true;
            this.commentaireInput.setValue('');
            this.comment = null;
        });
        this.snapshotService.deleteCommentForSnapshot(snapshot);
    }
    openDialog(idApp, idSnapshot, apStatus) {
        const dialogRef = this.dialog.open(_single_rules_list_single_rules_list_component__WEBPACK_IMPORTED_MODULE_2__["SingleRulesListComponent"], {
            width: '80%',
            data: { idApp: idApp, idSnapshot: idSnapshot, apStatus: apStatus }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }
    openDialogDeleteSnapshot() {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '650px',
            data: {
                id_snapshot: this.id_snapshot,
                last_version_analyzed: this.last_version_analyzed,
                date_snapshot: this.date_snapshot
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            //this.animal = result;
        });
    }
}
SingleApplicationActionPlanSnapshotComponent.ɵfac = function SingleApplicationActionPlanSnapshotComponent_Factory(t) { return new (t || SingleApplicationActionPlanSnapshotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_snapshot_service__WEBPACK_IMPORTED_MODULE_4__["SnapshotService"])); };
SingleApplicationActionPlanSnapshotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleApplicationActionPlanSnapshotComponent, selectors: [["app-single-application-action-plan-snapshot"]], inputs: { last_version_analyzed: "last_version_analyzed", etat_workflow: "etat_workflow", date_snapshot: "date_snapshot", nb_total: "nb_total", nb_totalHTML: "nb_totalHTML", nb_corrected: "nb_corrected", nb_correctedHTML: "nb_correctedHTML", nb_new: "nb_new", nb_newHTML: "nb_newHTML", obj_deleted: "obj_deleted", obj_deletedHTML: "obj_deletedHTML", exclusion_orphelin: "exclusion_orphelin", exclusion_orphelinHTML: "exclusion_orphelinHTML", nb_orphelin: "nb_orphelin", nb_orphelinHTML: "nb_orphelinHTML", loc: "loc", couleurFond: "couleurFond", id_snapshot_cast: "id_snapshot_cast", cast_version: "cast_version", last_update: "last_update", plan_action_orphelin: "plan_action_orphelin", plan_action_orphelinHTML: "plan_action_orphelinHTML", id_snapshot: "id_snapshot", id_app: "id_app", nb_still_violation: "nb_still_violation", nb_still_violationHTML: "nb_still_violationHTML", indexOfApplication: "indexOfApplication", comment: "comment" }, decls: 78, vars: 34, consts: [[1, "col-sm-12"], [1, "col-sm-1"], ["width", "25px", "height", "20px", 3, "src"], [1, "col-sm-2"], ["matTooltipPosition", "left", "matTooltipHideDelay", "500", "aria-hidden", "false", "aria-label", "Example home icon", 3, "matTooltip", 4, "ngIf"], [1, "col-sm-1", "border-left"], [3, "ngClass", "click"], ["aria-hidden", "false", "aria-label", "Example home icon"], [1, "col-sm-6"], ["role", "list"], ["role", "listitem"], ["appearance", "outline"], ["matInput", "", "placeholder", "saisir le commentaire ici", 3, "formControl", "change"], [3, "click"], ["aria-hidden", "false", "aria-label", "Supprimer le commentaire"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["matTooltipPosition", "left", "matTooltipHideDelay", "500", "aria-hidden", "false", "aria-label", "Example home icon", 3, "matTooltip"]], template: function SingleApplicationActionPlanSnapshotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SingleApplicationActionPlanSnapshotComponent_mat_icon_11_Template, 2, 1, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleApplicationActionPlanSnapshotComponent_Template_p_click_33_listener() { return ctx.openDialog(ctx.id_app, ctx.id_snapshot, "CORRECTED"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleApplicationActionPlanSnapshotComponent_Template_p_click_37_listener() { return ctx.openDialog(ctx.id_app, ctx.id_snapshot, "NEW"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleApplicationActionPlanSnapshotComponent_Template_p_click_41_listener() { return ctx.openDialog(ctx.id_app, ctx.id_snapshot, "STILL_VIOLATION"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleApplicationActionPlanSnapshotComponent_Template_p_click_45_listener() { return ctx.openDialog(ctx.id_app, ctx.id_snapshot, "TOTAL"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Commentaire: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SingleApplicationActionPlanSnapshotComponent_Template_input_change_71_listener() { return ctx.changement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleApplicationActionPlanSnapshotComponent_Template_p_click_72_listener() { return ctx.deleteComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleApplicationActionPlanSnapshotComponent_Template_button_click_76_listener() { return ctx.openDialogDeleteSnapshot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Supprimer le snapshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.couleurFond);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.date_snapshot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../assets/images/etat_", ctx.etat_workflow, ".PNG", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.last_version_analyzed, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nb_correctedHTML);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nb_newHTML);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nb_still_violationHTML);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nb_totalHTML);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.obj_deletedHTML);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.plan_action_orphelinHTML);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.exclusion_orphelinHTML);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nb_orphelinHTML);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.hiddenCorrected === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.hiddenNew === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.hiddenStillViolation === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx.hiddenTotal === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("LoC: ", ctx.loc, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Snapshot ID dans la benchmark: ", ctx.id_snapshot, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Snapshot ID dans la base central CAST: ", ctx.id_snapshot_cast, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Version CAST AIP: ", ctx.cast_version, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date snapshot (dans la base central): ", ctx.date_snapshot, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Date d'insert dans la benchmark: ", ctx.last_update, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.commentaireInput);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_Forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_Forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_Forms__WEBPACK_IMPORTED_MODULE_11__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"]], styles: [".fixWidth[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.affichecommentaire[_ngcontent-%COMP%] {\n  Display: none;\n}\n\n.blanc[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 0, 0.123);\n}\n\n.bleu[_ngcontent-%COMP%] {\n  background-color: rgba(0, 176, 79, 0.103);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW5sYW0vRG9jdW1lbnRzL25vZGVKUy9Qcm9qZXQ2QW5nL2FuZ3VsYXJQcmVtaWVyL3NyYy9hcHAvc2luZ2xlLWFwcGxpY2F0aW9uLWFjdGlvbi1wbGFuLXNuYXBzaG90L3NpbmdsZS1hcHBsaWNhdGlvbi1hY3Rpb24tcGxhbi1zbmFwc2hvdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2luZ2xlLWFwcGxpY2F0aW9uLWFjdGlvbi1wbGFuLXNuYXBzaG90L3NpbmdsZS1hcHBsaWNhdGlvbi1hY3Rpb24tcGxhbi1zbmFwc2hvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURHQTtFQUNFLDBDQUFBO0FDQUY7O0FER0E7RUFDRSx5Q0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlLWFwcGxpY2F0aW9uLWFjdGlvbi1wbGFuLXNuYXBzaG90L3NpbmdsZS1hcHBsaWNhdGlvbi1hY3Rpb24tcGxhbi1zbmFwc2hvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXhXaWR0aHtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbi5hZmZpY2hlY29tbWVudGFpcmV7XG4gICAgRGlzcGxheTogbm9uZTtcbn1cblxuXG4uYmxhbmN7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDI1NSwgMCwgMC4xMjMpO1xufVxuXG4uYmxldXtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDE3NiwgNzksIDAuMTAzKTtcbn0iLCIuZml4V2lkdGgge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5hZmZpY2hlY29tbWVudGFpcmUge1xuICBEaXNwbGF5OiBub25lO1xufVxuXG4uYmxhbmMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjEyMyk7XG59XG5cbi5ibGV1IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxNzYsIDc5LCAwLjEwMyk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleApplicationActionPlanSnapshotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-application-action-plan-snapshot',
                templateUrl: './single-application-action-plan-snapshot.component.html',
                styleUrls: ['./single-application-action-plan-snapshot.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _services_snapshot_service__WEBPACK_IMPORTED_MODULE_4__["SnapshotService"] }]; }, { last_version_analyzed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], etat_workflow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], date_snapshot: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nb_total: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nb_totalHTML: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nb_corrected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nb_correctedHTML: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nb_new: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nb_newHTML: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], obj_deleted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], obj_deletedHTML: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], exclusion_orphelin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], exclusion_orphelinHTML: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nb_orphelin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nb_orphelinHTML: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], couleurFond: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id_snapshot_cast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cast_version: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], last_update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], plan_action_orphelin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], plan_action_orphelinHTML: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id_snapshot: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id_app: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nb_still_violation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nb_still_violationHTML: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], indexOfApplication: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class DialogOverviewExampleDialog {
    constructor(dialogRef, data, dialog, snapshotService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.snapshotService = snapshotService;
        this.id_snapshot = 0;
        this.last_version_analyzed = '';
        this.date_snapshot = '';
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.id_snapshot = this.data.id_snapshot;
        this.last_version_analyzed = this.data.last_version_analyzed;
        this.date_snapshot = this.data.date_snapshot;
    }
    deleteSnapshotForever() {
        console.log('this.deleteSnapshotForever');
        this.snapshotSubscription = this.snapshotService.oneSnapshotSubject.subscribe((snapshot) => {
        });
        this.snapshotService.deleteForeverSnapshotById(this.data.id_snapshot);
    }
}
DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) { return new (t || DialogOverviewExampleDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_snapshot_service__WEBPACK_IMPORTED_MODULE_4__["SnapshotService"])); };
DialogOverviewExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogOverviewExampleDialog, selectors: [["dialog-overview-example-dialog"]], decls: 17, vars: 3, consts: [[1, "text-center"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function DialogOverviewExampleDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Vous \u00EAtes sur le point de supprimer le snapshot suivant:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cette action est irr\u00E9versible, veuillez confirmer votre action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogOverviewExampleDialog_Template_button_click_12_listener() { return ctx.deleteSnapshotForever(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Oui je veux supprimer le snapshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00A0\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogOverviewExampleDialog_Template_button_click_15_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Fermer la fen\u00EAtre sans supprimer le snapshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ID:", ctx.id_snapshot, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Last_version_analyzed: ", ctx.last_version_analyzed, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" date_snapshot: ", ctx.date_snapshot, "");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogOverviewExampleDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dialog-overview-example-dialog',
                templateUrl: 'popupDeleteForeverSnapshotConfirm.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _services_snapshot_service__WEBPACK_IMPORTED_MODULE_4__["SnapshotService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/single-application-action-plan/single-application-action-plan.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/single-application-action-plan/single-application-action-plan.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SingleApplicationActionPlanComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleApplicationActionPlanComponent", function() { return SingleApplicationActionPlanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/application.service */ "./src/app/services/application.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _single_application_action_plan_snapshot_single_application_action_plan_snapshot_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../single-application-action-plan-snapshot/single-application-action-plan-snapshot.component */ "./src/app/single-application-action-plan-snapshot/single-application-action-plan-snapshot.component.ts");
/* harmony import */ var _services_snapshot_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/snapshot.service */ "./src/app/services/snapshot.service.ts");















function SingleApplicationActionPlanComponent_app_single_application_action_plan_snapshot_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-single-application-action-plan-snapshot", 17);
} if (rf & 2) {
    const snapshot_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("last_version_analyzed", snapshot_r1.last_version_analyzed)("etat_workflow", snapshot_r1.etat_workflow)("date_snapshot", snapshot_r1.date_snapshot)("nb_total", snapshot_r1.nb_total)("nb_corrected", snapshot_r1.nb_corrected)("nb_new", snapshot_r1.nb_new)("nb_still_violation", snapshot_r1.nb_still_violation)("obj_deleted", snapshot_r1.obj_deleted)("exclusion_orphelin", snapshot_r1.exclusion_orphelin)("nb_orphelin", snapshot_r1.nb_orphelin)("plan_action_orphelin", snapshot_r1.plan_action_orphelin)("loc", snapshot_r1.loc)("id_snapshot", snapshot_r1.id_snapshot)("id_app", snapshot_r1.id)("cast_version", snapshot_r1.cast_version)("last_update", snapshot_r1.last_update)("id_snapshot_cast", snapshot_r1.id_snapshot_cast)("comment", snapshot_r1.comment)("couleurFond", snapshot_r1.couleurFond)("indexOfApplication", i_r2);
} }
const ELEMENT_DATA = [
    { id: 1, date_snapshot: '12/12/2019', etat_workflow: '1', last_version_analyzed: 'v1.2', nb_corrected: 12 },
    { id: 2, date_snapshot: '01/01/2020', etat_workflow: '2', last_version_analyzed: 'v1.2', nb_corrected: 24 },
    { id: 3, date_snapshot: '04/05/2020', etat_workflow: '3', last_version_analyzed: 'v1.2', nb_corrected: 36 },
];
class SingleApplicationActionPlanComponent {
    constructor(applicationService, route, dialog) {
        this.applicationService = applicationService;
        this.route = route;
        this.dialog = dialog;
        this.displayedColumns = ['date_snapshot', 'etat_workflow', 'last_version_analyzed', 'nb_corrected'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
        this.id_application = 0;
        this.snapshotsEtatReduitUniquement = [];
    }
    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        const idOutil = this.route.snapshot.params['idOutil'];
        this.snapshotsSubscription = this.applicationService.snapshotSubject.subscribe((snapshots) => {
            this.snapshotsHTML = snapshots;
            this.snapshots = snapshots;
            const name = this.findFirstItem(this.snapshots);
            this.id_application = this.findIdApplication(this.snapshots);
            this.applicationService.setApplicationMenu(name);
            this.columnChartPopulation();
            let previous_version_analysed = '';
            let couleurFond = 'blanc';
            for (var snapshot of this.snapshotsHTML) {
                if (snapshot.last_version_analyzed === previous_version_analysed) {
                    snapshot.couleurFond = couleurFond;
                }
                else {
                    if (couleurFond === 'blanc') {
                        couleurFond = 'bleu';
                    }
                    else {
                        couleurFond = 'blanc';
                    }
                    previous_version_analysed = snapshot.last_version_analyzed;
                    snapshot.couleurFond = couleurFond;
                }
            }
            for (var snapshot of snapshots) {
                if (snapshot.etat_workflow === 3) {
                    this.snapshotsEtatReduitUniquement.push(snapshot);
                }
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](snapshots);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        });
        this.applicationService.getSnapshotsREST(id, idOutil);
    }
    findFirstItem(snapshots) {
        console.log('findFirstItem');
        const name = snapshots.find((snapshotObject) => {
            return 'ASTREA findFirstItem'; //snapshotObject.name;
        });
        console.log('findFirstItem name=' + name.name);
        return name;
    }
    findIdApplication(snapshots) {
        console.log('findIdApplication');
        const name = snapshots.find((snapshotObject) => {
            return 'ASTREA findIdApplication'; //snapshotObject.name;
        });
        console.log('findIdApplication ID=' + name.id);
        return name.id;
    }
    columnChartPopulation() {
        const libelleAbscisse = [];
        const nbNew = [];
        const nbDeleted = [];
        const nbStill = [];
        const nbCorrected = [];
        let YaxisMax = 20;
        let YaxisMin = 0;
        for (var snapshot of this.snapshots) {
            if (snapshot.etat_workflow === 3) {
                libelleAbscisse.push(snapshot.last_version_analyzed);
                nbNew.push(snapshot.nb_new);
                nbStill.push(snapshot.nb_still_violation);
                const temp = snapshot.nb_new + snapshot.nb_still_violation;
                if (YaxisMax < temp) {
                    YaxisMax = temp;
                }
            }
            if (snapshot.etat_workflow === 1) {
                nbCorrected.push(-snapshot.nb_corrected);
                nbDeleted.push(-snapshot.obj_deleted);
                const temp = -(snapshot.nb_corrected + snapshot.obj_deleted);
                if (YaxisMin > temp) {
                    YaxisMin = temp;
                }
            }
        }
        console.log('YaxisMax=' + YaxisMax);
        highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]({
            chart: {
                renderTo: 'columnChartPA',
                type: 'column'
            },
            title: { text: '' },
            exporting: { enabled: false },
            legend: { enabled: false },
            credits: { enabled: false },
            xAxis: {
                labels: {
                    style: { fontSize: '9px' }
                },
                categories: libelleAbscisse,
            },
            yAxis: {
                min: YaxisMin,
                max: YaxisMax,
                title: {
                    text: 'PA'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                }
            },
            tooltip: {
                headerFormat: ' ',
                pointFormat: '{series.name}: {point.y}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: 'white'
                    }
                },
                series: {
                    cursor: 'pointer',
                    events: {
                        click: function (event) {
                        }
                    }
                }
            },
            series: [
                {
                    name: 'Corrected',
                    color: '#01DF01',
                    type: undefined,
                    data: nbCorrected
                },
                {
                    name: 'Deleted',
                    color: '#006600',
                    type: undefined,
                    data: nbDeleted
                }, {
                    name: 'New',
                    color: '#A4A4A4',
                    type: undefined,
                    data: nbNew
                }, {
                    name: 'Still Violation',
                    color: '#DF0101',
                    type: undefined,
                    data: nbStill
                }
            ]
        });
    }
    onFetch() {
        if (this.snapshotsHTML === this.snapshots) {
            this.snapshotsHTML = this.snapshotsEtatReduitUniquement;
        }
        else {
            this.snapshotsHTML = this.snapshots;
        }
    }
    purgeBaseCentral() {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '650px',
            data: {
                id_application: this.id_application
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
SingleApplicationActionPlanComponent.ɵfac = function SingleApplicationActionPlanComponent_Factory(t) { return new (t || SingleApplicationActionPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
SingleApplicationActionPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleApplicationActionPlanComponent, selectors: [["app-single-application-action-plan"]], viewQuery: function SingleApplicationActionPlanComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 53, vars: 1, consts: [[1, "col-xs-12"], [1, "col-sm-12", "headerTab", "titre_section"], [1, "col-sm-12", "text-left"], [1, "col-sm-12", "headerTabnoradius", "surligneLeger"], [1, "col-sm-1"], [1, "btn", "btn-primary", 3, "click"], [1, "col-sm-2"], [1, "list-group", "cadreApp350"], [3, "last_version_analyzed", "etat_workflow", "date_snapshot", "nb_total", "nb_corrected", "nb_new", "nb_still_violation", "obj_deleted", "exclusion_orphelin", "nb_orphelin", "plan_action_orphelin", "loc", "id_snapshot", "id_app", "cast_version", "last_update", "id_snapshot_cast", "comment", "couleurFond", "indexOfApplication", 4, "ngFor", "ngForOf"], [1, "col-sm"], ["mat-raised-button", "", "color", "primary", 1, "col-sm-4", 3, "click"], [1, "font_legend"], [1, "fas", "fa-circle", "corrected_color"], [1, "fas", "fa-circle", "deleted_color"], [1, "fas", "fa-circle", "new_color"], [1, "fas", "fa-circle", "still_violation_color"], ["id", "columnChartPA", 2, "min-width", "510px", "max-width", "100%", "height", "300px", "margin", "0 auto"], [3, "last_version_analyzed", "etat_workflow", "date_snapshot", "nb_total", "nb_corrected", "nb_new", "nb_still_violation", "obj_deleted", "exclusion_orphelin", "nb_orphelin", "plan_action_orphelin", "loc", "id_snapshot", "id_app", "cast_version", "last_update", "id_snapshot_cast", "comment", "couleurFond", "indexOfApplication"]], template: function SingleApplicationActionPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Date snapshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleApplicationActionPlanComponent_Template_button_click_7_listener() { return ctx.onFetch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Etat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Corrected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Still");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Del.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Orph.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Exc. Orph.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Exc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SingleApplicationActionPlanComponent_app_single_application_action_plan_snapshot_28_Template, 1, 20, "app-single-application-action-plan-snapshot", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleApplicationActionPlanComponent_Template_button_click_30_listener() { return ctx.purgeBaseCentral(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Purge de la base central ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "offline_pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleApplicationActionPlanComponent_Template_button_click_34_listener() { return ctx.purgeBaseCentral(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Charger central ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "arrow_circle_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleApplicationActionPlanComponent_Template_button_click_38_listener() { return ctx.purgeBaseCentral(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Dump CSS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Corrected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Deleted ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Still violation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.snapshotsHTML);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _single_application_action_plan_snapshot_single_application_action_plan_snapshot_component__WEBPACK_IMPORTED_MODULE_11__["SingleApplicationActionPlanSnapshotComponent"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW5sYW0vRG9jdW1lbnRzL25vZGVKUy9Qcm9qZXQ2QW5nL2FuZ3VsYXJQcmVtaWVyL3NyYy9hcHAvc2luZ2xlLWFwcGxpY2F0aW9uLWFjdGlvbi1wbGFuL3NpbmdsZS1hcHBsaWNhdGlvbi1hY3Rpb24tcGxhbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2luZ2xlLWFwcGxpY2F0aW9uLWFjdGlvbi1wbGFuL3NpbmdsZS1hcHBsaWNhdGlvbi1hY3Rpb24tcGxhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtYXBwbGljYXRpb24tYWN0aW9uLXBsYW4vc2luZ2xlLWFwcGxpY2F0aW9uLWFjdGlvbi1wbGFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleApplicationActionPlanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-application-action-plan',
                templateUrl: './single-application-action-plan.component.html',
                styleUrls: ['./single-application-action-plan.component.scss']
            }]
    }], function () { return [{ type: _services_application_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }]
        }] }); })();
/**
 *  Popup de confirmation de purge des données dans la base centrale
 */
class DialogOverviewExampleDialog {
    constructor(dialogRef, data, dialog, snapshotService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.snapshotService = snapshotService;
        this.id_application = 0;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    ngOnInit() {
        this.id_application = this.data.id_application;
    }
    purgeCentral() {
        console.log('this.purgeCentral');
        this.snapshotSubscription = this.snapshotService.oneSnapshotSubject.subscribe((snapshot) => {
        });
        this.snapshotService.purgeCentralById(this.id_application);
    }
}
DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) { return new (t || DialogOverviewExampleDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_snapshot_service__WEBPACK_IMPORTED_MODULE_12__["SnapshotService"])); };
DialogOverviewExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogOverviewExampleDialog, selectors: [["dialog-overview-example-dialog"]], decls: 10, vars: 0, consts: [[1, "text-center"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function DialogOverviewExampleDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00EAtes-vous s\u00FBr de vouloir purger la base central des donn\u00E9es Orphelines ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cette action est irreversible, vous devez avoir fait un dump des bases CSS avant de proc\u00E9der \u00E0 cette purge.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogOverviewExampleDialog_Template_button_click_5_listener() { return ctx.purgeCentral(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Oui je veux purger la base central");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogOverviewExampleDialog_Template_button_click_8_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fermer la fen\u00EAtre sans purger la base central");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogOverviewExampleDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dialog-overview-example-dialog',
                templateUrl: 'popupPurgeBaseCentralConfirm.html',
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _services_snapshot_service__WEBPACK_IMPORTED_MODULE_12__["SnapshotService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/single-application-identity/single-application-identity.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/single-application-identity/single-application-identity.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SingleApplicationIdentityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleApplicationIdentityComponent", function() { return SingleApplicationIdentityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/application.service */ "./src/app/services/application.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");












function SingleApplicationIdentityComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nom ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingleApplicationIdentityComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r6.label, " ");
} }
function SingleApplicationIdentityComponent_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingleApplicationIdentityComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r7.version, " ");
} }
function SingleApplicationIdentityComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function SingleApplicationIdentityComponent_tr_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
const _c0 = function () { return [10, 20, 50, 100]; };
const ELEMENT_DATA = [
    { label: 'mon extension', version: '1.2.3' },
    { label: 'ma 2eme extension', version: '2.3.4' }
];
class SingleApplicationIdentityComponent {
    constructor(applicationService, route) {
        this.applicationService = applicationService;
        this.route = route;
        this.displayedColumns = ['label', 'version'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
    }
    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.applicationSubscription = this.applicationService.oneApplicationSubject.subscribe((application) => {
            this.application = application[0];
            this.applicationService.setApplicationMenu(application[0]);
            console.log("SingleApplicationIdentityComponent.ngOnInit.après appel setApplicationMenu application[0].name =" + application[0].name);
            // this.applicationService.emitOneApplicationSubject();
        });
        this.applicationService.getApplicationByIdREST(id);
        this.extensionSubscription = this.applicationService.extensionByAppSubject.subscribe((extensions) => {
            this.extensions = extensions;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](extensions);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            // console.log("SingleApplicationIdentityComponent.ngOnInit.après appel setApplicationMenu application[0].name ="+ application[0].name);
            // this.applicationService.emitOneApplicationSubject();
        });
        this.applicationService.getExtensionByApp(id);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
SingleApplicationIdentityComponent.ɵfac = function SingleApplicationIdentityComponent_Factory(t) { return new (t || SingleApplicationIdentityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
SingleApplicationIdentityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleApplicationIdentityComponent, selectors: [["app-single-application-identity"]], viewQuery: function SingleApplicationIdentityComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 63, vars: 18, consts: [[1, "col-sm-12"], [1, "col-sm-5", "cadrefin"], [1, "card-body"], [1, "cadrefinTitre"], ["href", "#", 1, "btn", "btn-primary"], [1, "col-sm-3", "cadrefin"], [1, "col-sm-6", "cadrefin"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "label"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "version"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function SingleApplicationIdentityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Techno AIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Facteurs de sant\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Volume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Liste des extensions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SingleApplicationIdentityComponent_Template_input_keyup_52_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](54, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, SingleApplicationIdentityComponent_th_55_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, SingleApplicationIdentityComponent_td_56_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](57, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, SingleApplicationIdentityComponent_th_58_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, SingleApplicationIdentityComponent_td_59_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, SingleApplicationIdentityComponent_tr_60_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, SingleApplicationIdentityComponent_tr_61_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "mat-paginator", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Techno: ", ctx.application.techno, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Central base : ", ctx.application.central_base, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Version AIP: ", ctx.application.cast_version, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Derni\u00E8re version analys\u00E9e: ", ctx.application.last_version_analyzed, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("URL : ", ctx.application.url, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("TQI: ", ctx.application.tqi, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("S\u00E9curit\u00E9: ", ctx.application.secu, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Transf\u00E9rabilit\u00E9: ", ctx.application.transf, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Robustesse: ", ctx.application.robu, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Efficience: ", ctx.application.efficiency, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Evolutivit\u00E9: ", ctx.application.changeability, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("loc : ", ctx.application.loc, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("cc : ", ctx.application.cc, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".highcharts-figure[_ngcontent-%COMP%], .highcharts-data-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  min-width: 320px;\n  max-width: 700px;\n  margin: 1em auto;\n}\n\n.highcharts-data-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  font-family: Verdana, sans-serif;\n  border-collapse: collapse;\n  border: 1px solid #EBEBEB;\n  margin: 10px auto;\n  text-align: center;\n  width: 100%;\n  max-width: 500px;\n}\n\n.highcharts-data-table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  padding: 1em 0;\n  font-size: 1.2em;\n  color: #555;\n}\n\n.highcharts-data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 0.5em;\n}\n\n.highcharts-data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .highcharts-data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .highcharts-data-table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\n  padding: 0.5em;\n}\n\n.highcharts-data-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .highcharts-data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background: #f8f8f8;\n}\n\n.highcharts-data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f1f7ff;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW5sYW0vRG9jdW1lbnRzL25vZGVKUy9Qcm9qZXQ2QW5nL2FuZ3VsYXJQcmVtaWVyL3NyYy9hcHAvc2luZ2xlLWFwcGxpY2F0aW9uLWlkZW50aXR5L3NpbmdsZS1hcHBsaWNhdGlvbi1pZGVudGl0eS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2luZ2xlLWFwcGxpY2F0aW9uLWlkZW50aXR5L3NpbmdsZS1hcHBsaWNhdGlvbi1pZGVudGl0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0MsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NEOztBRENBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0VKOztBREFBO0VBQ0MsZ0JBQUE7RUFDRyxjQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0FDSUo7O0FERkE7RUFDSSxtQkFBQTtBQ0tKOztBREhBO0VBQ0ksbUJBQUE7QUNNSjs7QURGQTtFQUNJLFdBQUE7QUNLSjs7QURGRTtFQUNFLFlBQUE7QUNLSjs7QURGRTtFQUNFLGVBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1hcHBsaWNhdGlvbi1pZGVudGl0eS9zaW5nbGUtYXBwbGljYXRpb24taWRlbnRpdHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlnaGNoYXJ0cy1maWd1cmUsIC5oaWdoY2hhcnRzLWRhdGEtdGFibGUgdGFibGUge1xuICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xufVxuXG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRhYmxlIHtcblx0Zm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUI7XG5cdG1hcmdpbjogMTBweCBhdXRvO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXgtd2lkdGg6IDUwMHB4O1xufVxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSBjYXB0aW9uIHtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiAjNTU1O1xufVxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0aCB7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMC41ZW07XG59XG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRkLCAuaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRoLCAuaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIGNhcHRpb24ge1xuICAgIHBhZGRpbmc6IDAuNWVtO1xufVxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0aGVhZCB0ciwgLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmN2ZmO1xufVxuXG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH0iLCIuaGlnaGNoYXJ0cy1maWd1cmUsIC5oaWdoY2hhcnRzLWRhdGEtdGFibGUgdGFibGUge1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDFlbSBhdXRvO1xufVxuXG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUI7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIGNhcHRpb24ge1xuICBwYWRkaW5nOiAxZW0gMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5oaWdoY2hhcnRzLWRhdGEtdGFibGUgdGgge1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0ZCwgLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0aCwgLmhpZ2hjaGFydHMtZGF0YS10YWJsZSBjYXB0aW9uIHtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi5oaWdoY2hhcnRzLWRhdGEtdGFibGUgdGhlYWQgdHIsIC5oaWdoY2hhcnRzLWRhdGEtdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cblxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmMWY3ZmY7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleApplicationIdentityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-application-identity',
                templateUrl: './single-application-identity.component.html',
                styleUrls: ['./single-application-identity.component.scss']
            }]
    }], function () { return [{ type: _services_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/single-rules-list/single-rules-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/single-rules-list/single-rules-list.component.ts ***!
  \******************************************************************/
/*! exports provided: SingleRulesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleRulesListComponent", function() { return SingleRulesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/__ivy_ngcc__/fesm2015/igniteui-angular.js");
/* harmony import */ var _services_action_plan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/action-plan.service */ "./src/app/services/action-plan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
















function SingleRulesListComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Metric ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingleRulesListComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.id_metric, " ");
} }
function SingleRulesListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingleRulesListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.metric_description, " ");
} }
function SingleRulesListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " priorit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingleRulesListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.priority, " ");
} }
function SingleRulesListComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Criticit\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingleRulesListComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.criticalViolation, " ");
} }
function SingleRulesListComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nb ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingleRulesListComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.nb_object, " ");
} }
function SingleRulesListComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Commentaire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingleRulesListComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.comment_action, " ");
} }
function SingleRulesListComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
function SingleRulesListComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
const _c0 = function () { return [10, 20, 50, 100]; };
const ELEMENT_DATA = [
    { id: 1, id_metric: 123, metric_description: 'Java', priority: 'css1', criticalViolation: 'central_1', nb_object: 'v1.2', comment_action: '7.3.21', last_update: '01/01/20' },
    { id: 2, id_metric: 234, metric_description: 'Angular', priority: 'css1', criticalViolation: 'nb_object', nb_object: 'v1.5', comment_action: '8.2.1', last_update: '01/01/20' },
    { id: 3, id_metric: 122, metric_description: 'JEE', priority: 'css1', criticalViolation: 'nb_object', nb_object: 'v2.2', comment_action: '8.3', last_update: '01/01/20' }
];
class SingleRulesListComponent {
    constructor(actionPlanService, route, data, excelExportService) {
        this.actionPlanService = actionPlanService;
        this.route = route;
        this.data = data;
        this.excelExportService = excelExportService;
        this.displayedColumns = ['id_metric', 'metric_description', 'priority', 'criticalViolation', 'nb_object', 'comment_action'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.type_rule = 'NEW';
        this.actionPlanListExport = [];
    }
    exportButtonHandler() {
        this.excelExportService.exportData(this.actionPlanListExport, new igniteui_angular__WEBPACK_IMPORTED_MODULE_5__["IgxExcelExporterOptions"]("ExportedDataFile"));
    }
    ngOnInit() {
        const idApp = this.data.idApp;
        const idSnapshot = this.data.idSnapshot;
        const apStatus = this.data.apStatus;
        this.actionPlanSubscription = this.actionPlanService.actionPlanSubject.subscribe((actionPlanList) => {
            this.actionPlanList = actionPlanList;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](actionPlanList);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            actionPlanList.forEach(element => {
                const ele = {
                    id_metric: element.id_metric,
                    metric_description: element.metric_description,
                    priority: element.priority,
                    criticalViolation: element.criticalViolation,
                    nb_object: element.nb_object,
                    comment_action: element.comment_action
                };
                this.actionPlanListExport.push(ele);
            });
            console.log(this.actionPlanList);
            this.type_rule = apStatus;
        });
        this.actionPlanService.getActionPLanList(idApp, idSnapshot, apStatus);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    getTotalCost() {
        return this.actionPlanList.map(t => t.nb_object).reduce((acc, value) => acc + value, 0);
    }
    getLibelle() {
        return this.actionPlanList[0].name;
    }
    getNbRules() {
        return this.actionPlanList.length;
    }
    getTypeRule() {
        return this.type_rule;
    }
}
SingleRulesListComponent.ɵfac = function SingleRulesListComponent_Factory(t) { return new (t || SingleRulesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_action_plan_service__WEBPACK_IMPORTED_MODULE_6__["ActionPlanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](igniteui_angular__WEBPACK_IMPORTED_MODULE_5__["IgxExcelExporterService"])); };
SingleRulesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleRulesListComponent, selectors: [["app-single-rules-list"]], viewQuery: function SingleRulesListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 29, vars: 9, consts: [["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["aria-hidden", "false", "aria-label", "Example home icon", 3, "click"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id_metric"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "metric_description"], ["matColumnDef", "priority"], ["matColumnDef", "criticalViolation"], ["matColumnDef", "nb_object"], ["matColumnDef", "comment_action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function SingleRulesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SingleRulesListComponent_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleRulesListComponent_Template_mat_icon_click_4_listener() { return ctx.exportButtonHandler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " text_snippet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SingleRulesListComponent_th_9_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SingleRulesListComponent_td_10_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SingleRulesListComponent_th_12_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SingleRulesListComponent_td_13_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SingleRulesListComponent_th_15_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SingleRulesListComponent_td_16_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SingleRulesListComponent_th_18_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SingleRulesListComponent_td_19_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SingleRulesListComponent_th_21_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SingleRulesListComponent_td_22_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SingleRulesListComponent_th_24_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SingleRulesListComponent_td_25_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SingleRulesListComponent_tr_26_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SingleRulesListComponent_tr_27_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-paginator", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("\n", ctx.getLibelle(), "\u00A0\u00A0\u00A0-\u00A0\u00A0\u00A0Nb r\u00E8gles ", ctx.getTypeRule(), ": ", ctx.getNbRules(), "\u00A0\u00A0\u00A0-\u00A0\u00A0\u00A0Nb total d'objets: ", ctx.getTotalCost(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW5sYW0vRG9jdW1lbnRzL25vZGVKUy9Qcm9qZXQ2QW5nL2FuZ3VsYXJQcmVtaWVyL3NyYy9hcHAvc2luZ2xlLXJ1bGVzLWxpc3Qvc2luZ2xlLXJ1bGVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpbmdsZS1ydWxlcy1saXN0L3NpbmdsZS1ydWxlcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlLXJ1bGVzLWxpc3Qvc2luZ2xlLXJ1bGVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIHRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleRulesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-rules-list',
                templateUrl: './single-rules-list.component.html',
                styleUrls: ['./single-rules-list.component.scss']
            }]
    }], function () { return [{ type: _services_action_plan_service__WEBPACK_IMPORTED_MODULE_6__["ActionPlanService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
            }] }, { type: igniteui_angular__WEBPACK_IMPORTED_MODULE_5__["IgxExcelExporterService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/sizing-complexite/sizing-complexite.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sizing-complexite/sizing-complexite.component.ts ***!
  \******************************************************************/
/*! exports provided: SizingComplexiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizingComplexiteComponent", function() { return SizingComplexiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/application.service */ "./src/app/services/application.service.ts");
/* harmony import */ var _services_ref_ponderation_cc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ref-ponderation-cc.service */ "./src/app/services/ref-ponderation-cc.service.ts");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");














function SizingComplexiteComponent_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SizingComplexiteComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r30.name, "");
} }
function SizingComplexiteComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SizingComplexiteComponent_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r31.last_version_analyzed, " ");
} }
function SizingComplexiteComponent_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SizingComplexiteComponent_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r32.loc, " ");
} }
function SizingComplexiteComponent_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " TQI ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.refPonderationCC[0].tqi, "");
} }
function SizingComplexiteComponent_td_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r33.tqi, " ");
} }
function SizingComplexiteComponent_th_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " VHCC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.refPonderationCC[0].vhcc, "");
} }
function SizingComplexiteComponent_td_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r34.vhcc, " ");
} }
function SizingComplexiteComponent_th_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " HCC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SizingComplexiteComponent_td_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r35.hcc, " ");
} }
function SizingComplexiteComponent_th_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ACC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SizingComplexiteComponent_td_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r36.acc, " ");
} }
function SizingComplexiteComponent_th_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LCC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SizingComplexiteComponent_td_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r37.lcc, " ");
} }
function SizingComplexiteComponent_th_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " VHFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SizingComplexiteComponent_td_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r38.vhfo, " ");
} }
function SizingComplexiteComponent_th_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " HFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SizingComplexiteComponent_td_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r39.hfo, " ");
} }
function SizingComplexiteComponent_th_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " AFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SizingComplexiteComponent_td_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r40.afo, " ");
} }
function SizingComplexiteComponent_th_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " LFO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SizingComplexiteComponent_td_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r41.lfo, " ");
} }
function SizingComplexiteComponent_th_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " FP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SizingComplexiteComponent_td_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r42.fp, " ");
} }
function SizingComplexiteComponent_th_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SizingComplexiteComponent_td_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r43.total, " ");
} }
function SizingComplexiteComponent_tr_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 56);
} }
function SizingComplexiteComponent_tr_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 57);
} }
const _c0 = function () { return [10, 20, 50, 100]; };
const ELEMENT_DATA = [
    { id: 1, name: 'FAKE app_1', last_version_analyzed: 'v1.2', loc: 1200430, tqi: 3.12, vhcc: 10, hcc: 5, acc: 43, lcc: 9, vhfo: 10, hfo: 5, afo: 43, lfo: 9, fp: 500 },
    { id: 2, name: 'FAKE app_2', last_version_analyzed: 'v1.5', loc: 564012, tqi: 2.92, vhcc: 10, hcc: 5, acc: 43, lcc: 9, vhfo: 10, hfo: 5, afo: 43, lfo: 9, fp: 500 },
    { id: 3, name: 'FAKE app_3', last_version_analyzed: 'v2.2', loc: 200342, tqi: 3.01, vhcc: 10, hcc: 5, acc: 43, lcc: 9, vhfo: 10, hfo: 5, afo: 43, lfo: 9, fp: 500 }
];
class SizingComplexiteComponent {
    constructor(applicationService, refPonderationCCService) {
        this.applicationService = applicationService;
        this.refPonderationCCService = refPonderationCCService;
        this.displayedColumns = ['name', 'last_version_analyzed', 'loc', 'tqi', 'vhcc', 'hcc', 'acc', 'lcc', 'vhfo', 'hfo', 'afo', 'lfo', 'fp', 'total'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        /*
        applications = [
          {
            id: 1,
            name: 'TEMPLATE App 1'
            
          },
          {
            id: 2,
            name: 'TEMPLATE App 2'
            
          },
          {
            id: 3,
            name: 'TEMPLATE App 3'
          
          }
          ];
        */
        this.applications = [];
    }
    ngOnInit() {
        console.log("SizingComplexiteComponent.ngOnInit");
        this.applicationSubscription = this.applicationService.applicationSubject.subscribe((applications) => {
            for (var reponse of applications) {
                const point = {
                    loc: reponse.loc,
                    tqi: reponse.tqi,
                    vhcc: reponse.vhcc,
                    hcc: reponse.hcc,
                    acc: reponse.acc,
                    lcc: reponse.lcc,
                    vhfo: reponse.vhfo,
                    hfo: reponse.hfo,
                    afo: reponse.afo,
                    lfo: reponse.lfo,
                    fp: reponse.fp,
                    name: reponse.name,
                    last_version_analyzed: reponse.last_version_analyzed,
                    // TODO: Attention code en dur !!!
                    total: (reponse.loc * this.refPonderationCC[0].loc + (4.01 - reponse.tqi) * this.refPonderationCC[0].tqi +
                        reponse.vhcc * this.refPonderationCC[0].vhcc + reponse.hcc * this.refPonderationCC[0].hcc + reponse.acc * this.refPonderationCC[0].acc + reponse.lcc * this.refPonderationCC[0].lcc +
                        reponse.vhfo * this.refPonderationCC[0].vhfo + reponse.hfo * this.refPonderationCC[0].hfo + reponse.afo * this.refPonderationCC[0].afo + reponse.lfo * this.refPonderationCC[0].lfo).toFixed(2)
                };
                //console.log(point.total.toFixed(2));
                //point.total = point.total.toFixed(2);
                this.applications.push(point);
            }
            //        this.applications = applications;
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.applications);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        });
        this.applicationService.getApplicationsSnapshotREST();
        this.applicationService.setApplicationMenu(null);
        this.refPonderationCCSubscription = this.refPonderationCCService.refPonderationSubject.subscribe((refPonderationCC) => {
            this.refPonderationCC = refPonderationCC;
            console.log("this.refPonderationCC=" + this.refPonderationCC);
        });
        this.refPonderationCCService.getRefPonderationCC();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
SizingComplexiteComponent.ɵfac = function SizingComplexiteComponent_Factory(t) { return new (t || SizingComplexiteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ref_ponderation_cc_service__WEBPACK_IMPORTED_MODULE_5__["RefPonderationCCService"])); };
SizingComplexiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SizingComplexiteComponent, selectors: [["app-sizing-complexite"]], viewQuery: function SizingComplexiteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 102, vars: 16, consts: [["cols", "14", "rowHeight", "100px"], [3, "colspan"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], [1, "example-full-width"], ["matInput", "", "placeholder", "LoC", 3, "value"], ["matInput", "", "placeholder", "TQI", 3, "value"], ["matInput", "", "placeholder", "VHCC", 3, "value"], ["matInput", "", "placeholder", "HCC", 3, "value"], ["matInput", "", "placeholder", "ACC", 3, "value"], ["matInput", "", "placeholder", "LCC", 3, "value"], ["matInput", "", "placeholder", "VHFO", 3, "value"], ["matInput", "", "placeholder", "HFO", 3, "value"], ["matInput", "", "placeholder", "afo", 3, "value"], ["matInput", "", "placeholder", "LFO", 3, "value"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "last_version_analyzed"], ["matColumnDef", "loc"], ["matColumnDef", "tqi"], ["matTooltip", "Technical Quality Index", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "vhcc"], ["matTooltip", "Very High Cyclomatic Complexity", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "hcc"], ["matTooltip", "High Cyclomatic Complexity", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "acc"], ["matTooltip", "Average Cyclomatic Complexity", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "lcc"], ["matTooltip", "Low Cyclomatic Complexity", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "vhfo"], ["matTooltip", "Very High Fan Out", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "hfo"], ["matTooltip", "High Fan Out", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "afo"], ["matTooltip", "Average Fan Out", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "lfo"], ["matTooltip", "Low Fan Out", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "fp"], ["matTooltip", "Function Points", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "total"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["matTooltip", "Technical Quality Index", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", ""], ["matTooltip", "Very High Cyclomatic Complexity", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", ""], ["matTooltip", "High Cyclomatic Complexity", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", ""], ["matTooltip", "Average Cyclomatic Complexity", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", ""], ["matTooltip", "Low Cyclomatic Complexity", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", ""], ["matTooltip", "Very High Fan Out", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", ""], ["matTooltip", "High Fan Out", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", ""], ["matTooltip", "Average Fan Out", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", ""], ["matTooltip", "Low Fan Out", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", ""], ["matTooltip", "Function Points", "matTooltipPosition", "left", "matTooltipHideDelay", "500", "mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function SizingComplexiteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SizingComplexiteComponent_Template_input_keyup_5_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LoC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TQI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "VHCC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "HCC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ACC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "LCC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "VHFO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "HFO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "AFO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "LFO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](57, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, SizingComplexiteComponent_th_58_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, SizingComplexiteComponent_td_59_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, SizingComplexiteComponent_th_61_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, SizingComplexiteComponent_td_62_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, SizingComplexiteComponent_th_64_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, SizingComplexiteComponent_td_65_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](66, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, SizingComplexiteComponent_th_67_Template, 4, 1, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, SizingComplexiteComponent_td_68_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](69, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, SizingComplexiteComponent_th_70_Template, 4, 1, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, SizingComplexiteComponent_td_71_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](72, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, SizingComplexiteComponent_th_73_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, SizingComplexiteComponent_td_74_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](75, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, SizingComplexiteComponent_th_76_Template, 2, 0, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, SizingComplexiteComponent_td_77_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](78, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, SizingComplexiteComponent_th_79_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, SizingComplexiteComponent_td_80_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](81, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, SizingComplexiteComponent_th_82_Template, 2, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, SizingComplexiteComponent_td_83_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](84, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, SizingComplexiteComponent_th_85_Template, 2, 0, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, SizingComplexiteComponent_td_86_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](87, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, SizingComplexiteComponent_th_88_Template, 2, 0, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, SizingComplexiteComponent_td_89_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](90, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, SizingComplexiteComponent_th_91_Template, 2, 0, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, SizingComplexiteComponent_td_92_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](93, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, SizingComplexiteComponent_th_94_Template, 2, 0, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, SizingComplexiteComponent_td_95_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](96, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, SizingComplexiteComponent_th_97_Template, 2, 0, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, SizingComplexiteComponent_td_98_Template, 2, 1, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, SizingComplexiteComponent_tr_99_Template, 1, 0, "tr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, SizingComplexiteComponent_tr_100_Template, 1, 0, "tr", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "mat-paginator", 43);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.refPonderationCC[0].loc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.refPonderationCC[0].tqi);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.refPonderationCC[0].vhcc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.refPonderationCC[0].hcc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.refPonderationCC[0].acc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.refPonderationCC[0].lcc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.refPonderationCC[0].vhfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.refPonderationCC[0].hfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.refPonderationCC[0].afo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.refPonderationCC[0].lfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridTile"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW5sYW0vRG9jdW1lbnRzL25vZGVKUy9Qcm9qZXQ2QW5nL2FuZ3VsYXJQcmVtaWVyL3NyYy9hcHAvc2l6aW5nLWNvbXBsZXhpdGUvc2l6aW5nLWNvbXBsZXhpdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpemluZy1jb21wbGV4aXRlL3NpemluZy1jb21wbGV4aXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NpemluZy1jb21wbGV4aXRlL3NpemluZy1jb21wbGV4aXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SizingComplexiteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sizing-complexite',
                templateUrl: './sizing-complexite.component.html',
                styleUrls: ['./sizing-complexite.component.scss']
            }]
    }], function () { return [{ type: _services_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] }, { type: _services_ref_ponderation_cc_service__WEBPACK_IMPORTED_MODULE_5__["RefPonderationCCService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], { static: true }]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/statistic-charts/statistic-charts.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/statistic-charts/statistic-charts.component.ts ***!
  \****************************************************************/
/*! exports provided: StatisticChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticChartsComponent", function() { return StatisticChartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/application.service */ "./src/app/services/application.service.ts");
/* harmony import */ var _services_server_css_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/server-css.service */ "./src/app/services/server-css.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
















function StatisticChartsComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Techno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StatisticChartsComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8.techno, " ");
} }
function StatisticChartsComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nb ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StatisticChartsComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r9.nb, " ");
} }
function StatisticChartsComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Applications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StatisticChartsComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.name, " ");
} }
function StatisticChartsComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
function StatisticChartsComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
const _c0 = function () { return [3, 6, 9, 12]; };
Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3___default.a, "fr");
const ELEMENT_DATA = [
    { techno: 'JEE', nb: 123, name: 'App1, App2' },
    { techno: 'SQL', nb: 50, name: 'app3, app4' },
    { techno: 'NET', nb: 80, name: 'app5, app6' },
];
class StatisticChartsComponent {
    constructor(applicationService, serverCssService) {
        this.applicationService = applicationService;
        this.serverCssService = serverCssService;
        this.displayedColumns = ['techno', 'nb', 'name'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](ELEMENT_DATA);
        this.serverCssOrdonnee = [];
        this.appsByTechnoOrdonnee = [];
        this.nbAppByVersionAIPOrdonnee = [];
        this.libelleAbscisseNbAppByVersionAIP = [];
        this.libelleAbscisse = [];
        this.locOrdonnee = [];
        this.nbApplicationByMonth = [];
    }
    ngOnInit() {
        this.statAppByYearSubscription = this.applicationService.statAppByYearSubject.subscribe((statAppByYear) => {
            this.appByYear = statAppByYear;
            console.log(this.appByYear);
            this.computeYAxis();
            this.graphColumnChartAppByYear();
            this.graphColumnNbAppByMonth();
        });
        this.applicationService.getStatAppByYearREST(36);
        this.applicationService.setApplicationMenu(null);
        this.serverCssSubscription = this.serverCssService.serverSubject.subscribe((servers) => {
            this.serverCssList = servers;
            // console.log(this.serverCssList);
            this.computeYAxisServerCss();
            this.graphPieNbAppByServer();
        });
        this.serverCssService.getServerCss();
        this.appsByTechnoSubscription = this.applicationService.appsByTechnoSubject.subscribe((appsByTechno) => {
            this.appsByTechno = appsByTechno;
            this.computeYAxisTechno();
            this.graphPieNbAppByTechno();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](appsByTechno);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        });
        this.applicationService.getAppsByTechno();
        this.nbAppByVersionAIPSubscription = this.applicationService.nbAppByVersionAIPSubject.subscribe((nbAppByVersionAIP) => {
            this.nbAppByVersionAIP = nbAppByVersionAIP;
            console.log(this.nbAppByVersionAIP);
            this.computeYAxisNbAppByVersionAIP();
            this.graphColumnNbAppByVersionAIP();
        });
        this.applicationService.getNbAppByVersionAIP();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    computeYAxisNbAppByVersionAIP() {
        let i = 0;
        for (var nbApp of this.nbAppByVersionAIP) {
            const pointcss = {
                name: nbApp.version,
                y: nbApp.nb
            };
            this.nbAppByVersionAIPOrdonnee.push(pointcss);
            this.libelleAbscisseNbAppByVersionAIP.push(nbApp.version);
        }
        console.log(this.nbAppByVersionAIPOrdonnee);
    }
    computeYAxisTechno() {
        let i = 0;
        for (var techno of this.appsByTechno) {
            const pointcss = {
                name: techno.techno,
                y: techno.nb
            };
            if (techno.techno != 'SQL') {
                this.appsByTechnoOrdonnee.push(pointcss);
            }
        }
        console.log(this.appsByTechnoOrdonnee);
    }
    computeYAxisServerCss() {
        let i = 0;
        for (var servercss of this.serverCssList) {
            const pointcss = {
                name: servercss.server_name,
                y: servercss.nb
            };
            this.serverCssOrdonnee.push(pointcss);
        }
        console.log(this.serverCssOrdonnee);
    }
    computeYAxis() {
        let date = new Date();
        date.setMonth(date.getMonth() - 12);
        for (let i = 0; i < 12; i++) {
            date.setMonth(date.getMonth() + 1);
            const mois = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'MMM-yy', 'fr-FR');
            const moisYYYmm = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, 'yyyy-MM', 'fr-FR');
            this.libelleAbscisse.push(mois);
            let nbAppcalcul = 0;
            let abscisse = 0;
            let names = '';
            //  console.log(moisYYYmm);
            for (var snapshot of this.appByYear) {
                if (moisYYYmm === snapshot.abscisse) {
                    abscisse = abscisse + snapshot.loc;
                    nbAppcalcul = nbAppcalcul + 1;
                    names = names + "," + snapshot.name;
                }
            }
            // const ordonnee = "{y:20, name: 'APP', nbApp: 3}";
            const pointapp = {
                name: names,
                y: abscisse,
                nbApp: nbAppcalcul
            };
            this.locOrdonnee.push(pointapp);
            const pointapp2 = {
                name: names,
                y: nbAppcalcul
            };
            this.nbApplicationByMonth.push(pointapp2);
        }
        //  console.log(this.locOrdonnee);
    }
    graphColumnNbAppByVersionAIP() {
        highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]({
            chart: {
                renderTo: 'columnNbAppByVersionAIP',
                type: 'column'
            },
            title: { text: '' },
            xAxis: { categories: this.libelleAbscisseNbAppByVersionAIP },
            yAxis: {
                min: 0,
                title: { text: 'Loc analysées' },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                }
            },
            exporting: { enabled: false },
            legend: { enabled: false },
            credits: { enabled: false },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{point.name}<br/>Nb App: {point.nbApp}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            series: [{
                    name: 'LoC',
                    type: undefined,
                    data: this.nbAppByVersionAIPOrdonnee
                }]
        });
    }
    graphColumnChartAppByYear() {
        highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]({
            chart: {
                renderTo: 'columnChartAppByYear',
                type: 'column'
            },
            title: { text: '' },
            xAxis: { categories: this.libelleAbscisse },
            yAxis: {
                min: 0,
                title: { text: 'Loc analysées' },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                }
            },
            exporting: { enabled: false },
            legend: { enabled: false },
            credits: { enabled: false },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{point.name}<br/>Nb App: {point.nbApp}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            series: [{
                    name: 'LoC',
                    type: undefined,
                    data: this.locOrdonnee
                }]
        });
    }
    graphColumnNbAppByMonth() {
        highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]({
            chart: {
                renderTo: 'columnNbAppByMonth',
                type: 'column'
            },
            title: { text: '' },
            exporting: { enabled: false },
            legend: { enabled: false },
            credits: { enabled: false },
            xAxis: {
                categories: this.libelleAbscisse,
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Nb app. réalisées'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                }
            },
            tooltip: {
                headerFormat: ' ',
                pointFormat: '{series.name}: {point.y}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: false,
                        color: 'white'
                    }
                },
                series: {
                    cursor: 'pointer',
                    events: {
                        click: function (event) { }
                    }
                }
            },
            series: [{
                    name: 'nb apps',
                    type: undefined,
                    data: this.nbApplicationByMonth
                }]
        });
    }
    graphPieNbAppByServer() {
        highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]({
            chart: {
                renderTo: 'pieNbAppByServer',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: { text: '' },
            tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },
            exporting: { enabled: false },
            legend: { enabled: false },
            credits: { enabled: false },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        distance: -40,
                        format: '<b>{point.name}</b><br>Nb app.: {point.y}<br>{point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        },
                        connectorColor: 'silver'
                    }
                }
            },
            series: [{
                    name: 'Nb app',
                    type: undefined,
                    data: this.serverCssOrdonnee
                }]
        });
    }
    graphPieNbAppByTechno() {
        highcharts__WEBPACK_IMPORTED_MODULE_1__["chart"]({
            chart: {
                renderTo: 'pieNbAppByTechno',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: { text: '' },
            tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },
            exporting: { enabled: false },
            legend: { enabled: false },
            credits: { enabled: false },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        distance: -40,
                        format: '<b>{point.name}</b><br>Nb app.: {point.y}<br>{point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        },
                        connectorColor: 'silver'
                    }
                }
            },
            series: [{
                    name: 'Nb app',
                    type: undefined,
                    data: this.appsByTechnoOrdonnee
                }]
        });
    }
}
StatisticChartsComponent.ɵfac = function StatisticChartsComponent_Factory(t) { return new (t || StatisticChartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_application_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_server_css_service__WEBPACK_IMPORTED_MODULE_8__["ServerCssService"])); };
StatisticChartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticChartsComponent, selectors: [["app-statistic-charts"]], viewQuery: function StatisticChartsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 43, vars: 5, consts: [[1, "list-group"], [1, "list-group-item", "active"], [1, "list-group-item"], ["id", "columnChartAppByYear", 2, "min-width", "310px", "max-width", "100%", "height", "250px", "margin", "0 auto"], ["id", "columnNbAppByMonth", 2, "min-width", "310px", "max-width", "100%", "height", "250px", "margin", "0 auto"], ["id", "pieNbAppByServer", 2, "min-width", "310px", "max-width", "100%", "height", "250px", "margin", "0 auto"], ["id", "columnNbAppByVersionAIP", 2, "min-width", "310px", "max-width", "100%", "height", "250px", "margin", "0 auto"], [1, "list-group", "col-sm-4"], ["id", "pieNbAppByTechno", 2, "min-width", "310px", "max-width", "100%", "height", "350px", "margin", "0 auto"], [1, "col-sm-8", "list-group"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "techno"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nb"], ["matColumnDef", "name"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function StatisticChartsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nb de lignes de code analys\u00E9es par mois sur les 13 derniers mois glissants");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "R\u00E9partition des applications par Serveur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "R\u00E9partition des applications par version AIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "R\u00E9partition des applications par Techno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Applications par Techno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function StatisticChartsComponent_Template_input_keyup_29_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, StatisticChartsComponent_th_32_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, StatisticChartsComponent_td_33_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, StatisticChartsComponent_th_35_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, StatisticChartsComponent_td_36_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, StatisticChartsComponent_th_38_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, StatisticChartsComponent_td_39_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, StatisticChartsComponent_tr_40_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, StatisticChartsComponent_tr_41_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "mat-paginator", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ3V5ZW5sYW0vRG9jdW1lbnRzL25vZGVKUy9Qcm9qZXQ2QW5nL2FuZ3VsYXJQcmVtaWVyL3NyYy9hcHAvc3RhdGlzdGljLWNoYXJ0cy9zdGF0aXN0aWMtY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGF0aXN0aWMtY2hhcnRzL3N0YXRpc3RpYy1jaGFydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlzdGljLWNoYXJ0cy9zdGF0aXN0aWMtY2hhcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICB0aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticChartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statistic-charts',
                templateUrl: './statistic-charts.component.html',
                styleUrls: ['./statistic-charts.component.scss']
            }]
    }], function () { return [{ type: _services_application_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationService"] }, { type: _services_server_css_service__WEBPACK_IMPORTED_MODULE_8__["ServerCssService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nguyenlam/Documents/nodeJS/Projet6Ang/angularPremier/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map