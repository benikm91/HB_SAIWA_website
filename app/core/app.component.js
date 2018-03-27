"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2_page_scroll_1 = require("ng2-page-scroll");
var core_2 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router) {
        this.renderer = renderer;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerSubscription = this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function (_) {
            _this.renderer.setProperty(document.querySelector('html'), 'scrollTop', 0);
            _this.renderer.setProperty(document.querySelector('body'), 'scrollTop', 0);
        });
        ng2_page_scroll_1.PageScrollConfig.defaultDuration = 1000;
        ng2_page_scroll_1.PageScrollConfig.defaultEasingLogic = {
            ease: function (t, b, c, d) {
                // easeInOutExpo easing
                if (t === 0)
                    return b;
                if (t === d)
                    return b + c;
                if ((t /= d / 2) < 1)
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.routerSubscription.unsubscribe();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: './app.component.html'
        })
        /**
         * Scroll to top if there is a routerLink change.
         */
        ,
        __metadata("design:paramtypes", [core_2.Renderer2, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map