import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { getTranslationProviders } from './app/i18n-providers';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment.js';

if (environment.production) {
    enableProdMode();
}

const options = {  };
platformBrowserDynamic().bootstrapModule(AppModule, options);

/*
getTranslationProviders().then(providers => {
});
*/

