import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { PageScrollConfig } from 'ng2-page-scroll';
import { Renderer2 } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
/**
 * Scroll to top if there is a routerLink change.
 */
export class AppComponent implements OnInit, OnDestroy {

    routerSubscription: Subscription;

    constructor(private renderer: Renderer2, private router: Router) { }

    ngOnInit() {
        this.routerSubscription = this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe(_ => {
                this.renderer.setProperty(document.querySelector('html'), 'scrollTop', 0);
                this.renderer.setProperty(document.querySelector('body'), 'scrollTop', 0);
            });
            PageScrollConfig.defaultDuration = 1000;
            PageScrollConfig.defaultEasingLogic = {
            ease: (t: number, b: number, c: number, d: number): number => {
                // easeInOutExpo easing
                if (t === 0) return b;
                if (t === d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
    }

    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }

}
