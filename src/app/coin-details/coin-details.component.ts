import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css'],
})
export class CoinDetailsComponent implements OnInit {
  API_URL = 'https://api.coinlore.net/api/ticker/?id=';
  coinId;
  coinDetails = [];
  objectKeys = Object.keys;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((parameter) => {
      this.coinId = parameter.id;
    });
    this.apiService.sendGetRequest(this.API_URL + this.coinId).subscribe(
      (data: any[]) => {
        this.coinDetails = data;
        console.log(this.coinDetails);
      },
      (error) => console.log(error)
    );
  }
}
