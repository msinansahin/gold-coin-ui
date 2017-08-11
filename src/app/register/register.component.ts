import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, AlertService } from '../_services/index';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
    ) {
        /*
        this.model = new FormGroup({
            'email': new FormControl(this.model.email, [
                Validators.required,
                Validators.email,
                Validators.minLength(4)
            ])
        });
        */
    }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
