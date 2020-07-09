import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  allCoins;
  allCoinsData;
  page = 1;
  pageSize = 20;
  collectionSize = 100;
  coinsLoaded: Promise<boolean>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.sendGetRequestTickers().subscribe(
      (response) => {
        this.allCoins = response;
        this.allCoinsData = this.allCoins.data;
        console.log(this.allCoins);
        console.log(this.allCoinsData);
        this.coinsLoaded = Promise.resolve(true);
      },
      (error) => console.log(error)
    );
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
