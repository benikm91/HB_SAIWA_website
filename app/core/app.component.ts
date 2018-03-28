import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { PageScrollConfig } from 'ng2-page-scroll';
import { Renderer2 } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.pug'
})
/**
 * Scroll to top if there is a routerLink change.
 */
export class AppComponent implements OnInit, OnDestroy {

    routerSubscription: Subscription;

    constructor(private renderer: Renderer2, private router: Router) { }

    ngOnInit() { }

    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }

}
