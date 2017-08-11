import { Component, OnInit }  from '@angular/core';
import { AssetService } from '../../_services/_assets/asset.service';

import 'rxjs/add/operator/map';
import {Asset} from "../../_models/asset";

@Component({
    selector:    'my-asset-list',
    templateUrl: './asset-list.component.html',
    styleUrls:   [ './asset-list.component.css' ]
})

export class AssetListComponent implements OnInit {

    assets: Asset[] = [];
    errors: string;

    constructor(
        private assetService: AssetService) {}

    ngOnInit(): void {
        this.assetService.getAssetsList().subscribe(
            data => {this.assets = data.json();
            },
            error => {this.errors = error;});
    }
}