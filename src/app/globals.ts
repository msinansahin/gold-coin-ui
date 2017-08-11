import { Injectable } from '@angular/core';
import {User} from './_models/user';

@Injectable()
export class Globals {
    public static currentUser: User;
    public static get AUTH_URL(): string {
        return '/api/Users/login';
    };
    public EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;
}
