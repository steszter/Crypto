import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { GlobalData } from '../interfaces/global.interfaces';

@Component({
  selector: 'app-crypto-data',
  templateUrl: './crypto-data.component.html',
  styleUrls: ['./crypto-data.component.css'],
})
export class CryptoDataComponent implements OnInit {
  active = 'top';
  cryptoDataGlobal: GlobalData[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.sendGetRequestGlobal().subscribe(
      (data) => {
        this.cryptoDataGlobal = data;
        console.log(this.cryptoDataGlobal);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
