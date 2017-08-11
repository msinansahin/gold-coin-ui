import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule }     from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }           from './app.component';
import { AlertComponent }         from './_directives/index';
import { DashboardComponent }     from './dashboard/dashboard.component';
import { LoginComponent }         from './login/login.component';
import { AuthenticationService, AlertService }  from './_services/index';
import { RegisterComponent}       from './register/register.component';
import { UserService }            from './_services/_users/user.service';
import { AuthGuard }              from './_guards/index';

import { WalletComponent }         from './wallet/wallet.component';

// translation imports
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { UserMenuComponent } from './dashboard/user-menu/user-menu.component';
import { HttpClient } from '@angular/common/http';


export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [Http]
      }
    })
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    WalletComponent,
    UserMenuComponent
  ],
  providers: [
      AuthGuard,
      AuthenticationService,
      UserService,
      AlertService,

      fakeBackendProvider,
      MockBackend,
      BaseRequestOptions
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
