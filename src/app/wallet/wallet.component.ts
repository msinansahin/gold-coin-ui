import { Component, OnInit } from '@angular/core';
import {User} from '../_models/user';
import {UserService} from '../_services/_users/user.service';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'wallet.component.html'
})

export class WalletComponent implements OnInit {

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        // throw new Error('Method not implemented.');
    }

    getCurrentUser(): User {
        return this.userService.getLoggedUser();
    }
}
