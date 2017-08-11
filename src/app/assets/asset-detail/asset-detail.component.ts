import { Component, OnInit }  from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { AssetService } from '../../_services/_assets/asset.service';
import {Asset} from "../../_models/asset";


@Component({
    selector:    'my-asset-detail',
    templateUrl: './asset-detail.component.html',
    styleUrls:   [ './asset-detail.component.css' ]
})

export class AssetDetailComponent implements OnInit {

    asset = new Asset();
    errors: string;

    constructor(
        private assetService: AssetService,
        private route: ActivatedRoute) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.assetService.getById(id).subscribe(
            data => {this.asset = data.json();
            },
            error => {this.errors = error;});
    }
}