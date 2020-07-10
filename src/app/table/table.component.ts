import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnDestroy {
  allCoins;
  allCoinsData;
  page = 1;
  pageSize = 20;
  collectionSize = 100;
  coinsLoaded: Promise<boolean>;
  subscription: Subscription;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.subscription = this.apiService.sendGetRequestTickers().subscribe(
      (response) => {
        this.allCoins = response;
        this.allCoinsData = this.allCoins.data;
        this.coinsLoaded = Promise.resolve(true);
      },
      (error) => console.log(error)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get coins(): any[] {
    return this.allCoinsData
      .map((coin, i) => ({ row_id: i + 1, ...coin }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
}
