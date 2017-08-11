import { Component }                from '@angular/core';
import { User }                     from './_models/user';
import {
    AuthenticationService,
    UserService}                from  './_services/index';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentUser: User;
    title = 'Gold Coin';

    constructor(private userService: UserService,
                private  authenticationService: AuthenticationService) {
        this.currentUser = this.userService.getLoggedUser();
    }
}
