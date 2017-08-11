import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Globals } from '../../globals';

@Injectable()
export class DashboardService {

    constructor(private http: Http) {}

    getLtcMain() {
        return this.http.get(Globals.LTC_URL);
    }

    getAddressBalance(address: string) {
        let urlStr = Globals.LTC_URL + '/addrs/' + address + '/balance';
        return this.http.get(urlStr);
    }

}