import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-crypto-data',
  templateUrl: './crypto-data.component.html',
  styleUrls: ['./crypto-data.component.css'],
})
export class CryptoDataComponent implements OnInit {
  cryptoDataGlobal = [];
  objectKeys = Object.keys;
  API_URL = 'https://api.coinlore.net/api/global/';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.sendGetRequest(this.API_URL).subscribe(
      (data: string[]) => {
        this.cryptoDataGlobal = data;
        console.log('final:', this.cryptoDataGlobal);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
