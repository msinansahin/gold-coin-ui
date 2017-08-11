import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    public static get AUTH_URL(): string {
        return '/api/Users/login';
    };
    public static get LTC_URL(): string { return 'https://api.blockcypher.com/v1/ltc/main'; };
    public static get ASSETS_URL(): string {return '/api/assets'};
}
