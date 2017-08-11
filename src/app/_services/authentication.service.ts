import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { User } from '../_models/index';
import { environment } from '../../environments/environment.js';
import { Globals } from '../globals';

@Injectable()
export class AuthenticationService {
  apiContext: string;
  constructor(private http: Http) {
    this.apiContext = environment.apiContext;
  }

  // stub
  login(username: string, password: string) {
    let data = { username: username, password: password };
    return this.http.post( this.apiContext + Globals.AUTH_URL, data)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          Globals.currentUser = user;
        }
      });
  }

  logout(): void {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }

}
