import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

import {
    AuthenticationService,
    AlertService,
    UserService } from '../_services/index';
import {User} from "../_models/user";
import { environment } from '../../environments/environment.js';


@Component({
  moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    loading = false;
    production = environment.production;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        if (!this.userService.isLoggedIn()) {
            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

            // reset login status
            this.authenticationService.logout();
        } else {
            this.router.navigate(['']);
        }
    }

    login() {
        console.log('username:%s made a login request', this.model.username);
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}
