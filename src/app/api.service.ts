import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  sendGetRequest(API_URL: string) {
    return this.httpClient.get(API_URL);
  }
}
