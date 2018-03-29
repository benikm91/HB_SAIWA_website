import { Component } from '@angular/core';

@Component({
    selector: 'default-header',
    templateUrl: './default-header.component.pug',
})
export class DefaultHeaderComponent {

    public logo = require('public/assets/template/img/logo/logo.png');
    public expanded = false;

}
