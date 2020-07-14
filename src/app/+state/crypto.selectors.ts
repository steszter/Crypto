import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCrypto from './crypto.reducer';

const selectCryptoState = createFeatureSelector<fromCrypto.State>(
  fromCrypto.cryptoFeatureKey
);

export const selectGlobalData = createSelector(
  selectCryptoState,
  (state) => state.globalData
);

export const selectTickers = createSelector(
  selectCryptoState,
  (state) => state.tickers
);

export const selectCollectionSize = createSelector(
  selectCryptoState,
  (state) => state.collectionSize
);

export const selectTickerData = createSelector(
  selectCryptoState,
  (state) => state.tickerData
);
