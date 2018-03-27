import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './core/app.module';
import { enableProdMode } from '@angular/core';
import { environment, Enviroment } from './enviroment';


if (environment === Enviroment.Production) {
    enableProdMode ();
}

platformBrowserDynamic().bootstrapModule(AppModule);
