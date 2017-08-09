import { Component }  from '@angular/core';
import { User }               from './_models/user';
import { UserService }        from './_services/_users/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentUser: User;
    title = 'Gold Coin';

    constructor(private userService: UserService) {
        this.currentUser = this.userService.getLoggedUser();
    }

}
