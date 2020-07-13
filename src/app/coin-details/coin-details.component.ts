import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectTickerData } from '../+state/crypto.selectors';
import { loadTickerData } from '../+state/crypto.actions';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css'],
})
export class CoinDetailsComponent implements OnInit {
  coinDetails$ = this.store.pipe(select(selectTickerData));

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadTickerData({ id: this.route.snapshot.params.id }));
  }
}
