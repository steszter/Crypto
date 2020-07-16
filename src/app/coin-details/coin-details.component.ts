import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoFacade } from '../facade';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css'],
})
export class CoinDetailsComponent implements OnInit {
  coinDetails$ = this.facade.coinDetails$;

  constructor(private route: ActivatedRoute, private facade: CryptoFacade) {}

  ngOnInit(): void {
    this.facade.loadTickerData(this.route.snapshot.params.id);
  }
}
