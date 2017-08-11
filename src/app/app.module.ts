import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }           from './app.component';
import { DashboardComponent }     from './dashboard/dashboard.component';
import { AssetListComponent }     from './assets/asset-list/asset-list.component';
import { AssetDetailComponent }   from "./assets/asset-detail/asset-detail.component"
import { LoginComponent }         from './login/login.component';
import { AuthenticationService }  from './_services/authentication.service';
import { RegisterComponent}       from './register/register.component';
import { UserService }            from './_services/_users/user.service';
import { AssetService}            from "./_services/_assets/asset.service"
import { DashboardService}        from "./_services/_dashboard/dashboard.service"
import { AuthGuard }              from './_guards/index';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AssetListComponent,
    AssetDetailComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
      AuthGuard,
      AuthenticationService,
      UserService,
      AssetService,
      DashboardService,

      fakeBackendProvider,
      MockBackend,
      BaseRequestOptions
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
