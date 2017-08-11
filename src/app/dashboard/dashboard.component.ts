import { Component, OnInit }  from '@angular/core';
import { DashboardService}    from "../_services/_dashboard/dashboard.service"

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

    results: string;
    errors: string;
    showHideMain: false;
    showHideBalance: false;
    addressBalance: string;

    constructor(
        private dasboardService: DashboardService) {}

  ngOnInit(): void {
    // TODO init dashboard
  }

  public myEvent(): void {
     this.dasboardService.getLtcMain().subscribe(
         data => {this.results = data.json();
         },
         error => {this.errors = error;});
  }

  public getAddressBalance(): void {
        this.dasboardService.getAddressBalance('LL7TaQ2zvtyD6UPC9uDoxzPSPrP2ERB1X3').subscribe(
            data => {this.addressBalance = data.json();
            },
            error => {this.errors = error;});
  }
}
