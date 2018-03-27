import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [ ]
})
export class HomeComponent {

    public constructor(
        titleService: Title
    ) {
        titleService.setTitle('SaiwA');
    }

}
