import { select, Store } from '@ngrx/store';
import {
  selectCollectionSize,
  selectTickers,
  selectGlobalData,
  selectTickerData,
} from './crypto.selectors';
import {
  loadTickers,
  loadGlobalData,
  loadTickerData,
  deleteTickerData,
} from './crypto.actions';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CryptoFacade {
  collectionSize$ = this.store.pipe(select(selectCollectionSize));
  allCoinsData$ = this.store.pipe(select(selectTickers));
  cryptoDataGlobal$ = this.store.pipe(select(selectGlobalData));
  coinDetails$ = this.store.pipe(select(selectTickerData));

  constructor(private store: Store) {}

  updateTickersData(page: number, pageSize: number) {
    this.store.dispatch(loadTickers({ start: (page - 1) * pageSize }));
  }

  loadGlobalData() {
    this.store.dispatch(loadGlobalData());
  }
  loadTickerData(paramId: string) {
    this.store.dispatch(loadTickerData({ id: paramId }));
  }

  deleteTickerData() {
    this.store.dispatch(deleteTickerData());
  }
}
