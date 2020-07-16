import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptoFacade } from '../+state/facade';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css'],
})
export class CoinDetailsComponent implements OnInit, OnDestroy {
  coinDetails$ = this.facade.coinDetails$;

  constructor(private route: ActivatedRoute, private facade: CryptoFacade) {}

  ngOnInit(): void {
    this.facade.loadTickerData(this.route.snapshot.params.id);
  }

  ngOnDestroy() {
    this.facade.deleteTickerData();
  }
}
