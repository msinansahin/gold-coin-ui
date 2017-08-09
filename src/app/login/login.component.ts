import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    loading = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
        // private alertService: AlertService
    ) { }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        // reset login status
        this.authenticationService.logout();
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
                    // this.alertService.error(error);
                    this.loading = false;
                });
    }

}
