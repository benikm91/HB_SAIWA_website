import { NgModule }                 from '@angular/core';
import { BrowserModule, Title }     from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { AppRoutingModule }         from './app-routing.module';

import { AppComponent }             from './app.component';
import { DefaultHeaderComponent }   from '../layout/default/default-header.component';
import { DefaultFooterComponent }   from '../layout/default/default-footer.component';
import { HomeComponent }            from '../home/home.component';

import { PageNotFoundComponent }    from "../error/page-not-found.component";
import {Ng2PageScrollModule}        from "ng2-page-scroll";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        Ng2PageScrollModule
    ],
    declarations: [
        AppComponent,
        // header & footer
        DefaultHeaderComponent,
        DefaultFooterComponent,
        // home
        HomeComponent,
        // error
        PageNotFoundComponent,
    ],
    providers: [
        Title
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
