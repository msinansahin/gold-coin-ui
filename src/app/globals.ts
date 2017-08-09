import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    public static get AUTH_URL(): string {
        return '/api/Users/login';
    };
}
