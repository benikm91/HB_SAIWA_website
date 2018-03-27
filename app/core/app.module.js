"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var app_component_1 = require("./app.component");
var default_header_component_1 = require("../layout/default/default-header.component");
var default_footer_component_1 = require("../layout/default/default-footer.component");
var home_component_1 = require("../home/home.component");
var page_not_found_component_1 = require("../error/page-not-found.component");
var ng2_page_scroll_1 = require("ng2-page-scroll");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                ngx_bootstrap_1.CollapseModule.forRoot(),
                ngx_bootstrap_1.CarouselModule.forRoot(),
                ngx_bootstrap_1.ModalModule.forRoot(),
                ng2_page_scroll_1.Ng2PageScrollModule
            ],
            declarations: [
                app_component_1.AppComponent,
                // header & footer
                default_header_component_1.DefaultHeaderComponent,
                default_footer_component_1.DefaultFooterComponent,
                // home
                home_component_1.HomeComponent,
                // error
                page_not_found_component_1.PageNotFoundComponent,
            ],
            providers: [
                platform_browser_1.Title
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map