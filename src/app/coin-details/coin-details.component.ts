import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TickerData } from '../interfaces/tickers.interfaces';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css'],
})
export class CoinDetailsComponent implements OnInit, OnDestroy {
  coinDetails: TickerData[] = [];
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(switchMap((params) => this.apiService.sendGetRequestId(params.id)))
      .subscribe(
        (data) => {
          this.coinDetails = data;
          console.log(this.coinDetails);
        },
        (error) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
