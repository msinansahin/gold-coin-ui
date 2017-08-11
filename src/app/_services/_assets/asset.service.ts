import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AssetService {

    constructor(private http: Http) {}

    getAssetsList() {
        return this.http.get('/api/assets');
    }

    getById (id: number) {
        return this.http.get('/api/assets/' + id);
    }
}