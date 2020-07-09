import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalData } from './interfaces/global.interfaces';
import { Tickers, TickerData } from './interfaces/tickers.interfaces';

const API_URL = 'https://api.coinlore.net/api/';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  sendGetRequestGlobal() {
    return this.httpClient.get<GlobalData[]>(`${API_URL}global/`);
  }

  sendGetRequestTickers(start: number = 0, limit: number = 100) {
    return this.httpClient.get<Tickers>(
      `${API_URL}tickers/?start=${start}&limit=${limit}`
    );
  }

  sendGetRequestId(id: string) {
    return this.httpClient.get<TickerData[]>(`${API_URL}ticker/?id=${id}`);
  }
}
