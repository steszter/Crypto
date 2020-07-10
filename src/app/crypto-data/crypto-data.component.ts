import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-crypto-data',
  templateUrl: './crypto-data.component.html',
  styleUrls: ['./crypto-data.component.css'],
})
export class CryptoDataComponent implements OnInit {
  active = 'top';
  cryptoDataGlobal$ = this.apiService
    .sendGetRequestGlobal()
    .pipe(map((response) => response[0]));

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}
}
