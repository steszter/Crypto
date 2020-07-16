import { createReducer, on } from '@ngrx/store';
import * as CryptoActions from './crypto.actions';
import { GlobalData } from '../interfaces/global.interfaces';
import { TickerData } from '../interfaces/tickers.interfaces';

export const cryptoFeatureKey = 'crypto';

export interface State {
  globalData: GlobalData;
  globalDataLoading: boolean;
  tickers: TickerData[];
  collectionSize: number;
  tickersLoading: boolean;
  tickerData: TickerData;
  tickerDataLoading: boolean;
}

export const initialState: State = {
  globalData: undefined,
  globalDataLoading: false,
  tickers: [],
  collectionSize: 0,
  tickersLoading: false,
  tickerData: undefined,
  tickerDataLoading: false,
};

export const reducer = createReducer(
  initialState,

  on(CryptoActions.loadGlobalData, (state) => ({
    ...state,
    globalDataLoading: true,
  })),
  on(CryptoActions.loadGlobalDataSuccess, (state, action) => ({
    ...state,
    globalDataLoading: false,
    globalData: action.data,
  })),
  on(CryptoActions.loadGlobalDataFailure, (state, action) => ({
    ...state,
    globalDataLoading: false,
  })),

  on(CryptoActions.loadTickers, (state) => ({
    ...state,
    tickersLoading: true,
  })),
  on(CryptoActions.loadTickersSuccess, (state, action) => ({
    ...state,
    tickers: action.tickers,
    collectionSize: action.collectionSize,
    tickersLoading: false,
  })),
  on(CryptoActions.loadTickersFailure, (state, action) => ({
    ...state,
    tickersLoading: false,
  })),

  on(CryptoActions.loadTickerData, (state) => ({
    ...state,
    tickerDataLoading: true,
  })),
  on(CryptoActions.loadTickerDataSuccess, (state, action) => ({
    ...state,
    tickerDataLoading: false,
    tickerData: action.data,
  })),
  on(CryptoActions.loadTickerDataFailure, (state, action) => ({
    ...state,
    tickerDataLoading: false,
  }))
);
