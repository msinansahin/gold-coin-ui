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
import { LoginComponent }         from './login/login.component';
import { AuthenticationService }  from './_services/authentication.service';
import { RegisterComponent}       from './register/register.component';
import { UserService }            from './_services/_users/user.service';
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
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
      AuthGuard,
      AuthenticationService,
      UserService,

      fakeBackendProvider,
      MockBackend,
      BaseRequestOptions
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
