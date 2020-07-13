import { createAction, props } from '@ngrx/store';
import { GlobalData } from '../interfaces/global.interfaces';
import { Tickers, TickerData } from '../interfaces/tickers.interfaces';

export const loadGlobalData = createAction('[Crypto] Load Global Data');
export const loadGlobalDataSuccess = createAction(
  '[Crypto] Load Global Data Success',
  props<{ data: GlobalData }>()
);
export const loadGlobalDataFailure = createAction(
  '[Crypto] Load Global Data Failure',
  props<{ error: any }>()
);

export const loadTickers = createAction(
  '[Crypto] Load Tickers',
  props<{ start: number }>()
);
export const loadTickersSuccess = createAction(
  '[Crypto] Load Tickers Success',
  props<{ tickers: TickerData[]; collectionSize: number }>()
);
export const loadTickersFailure = createAction(
  '[Crypto] Load Tickers Failure',
  props<{ error: any }>()
);

export const loadTickerData = createAction(
  '[Crypto] Load Ticker Data',
  props<{ id: string }>()
);
export const loadTickerDataSuccess = createAction(
  '[Crypto] Load Ticker Data Success',
  props<{ data: TickerData }>()
);
export const loadTickerDataFailure = createAction(
  '[Crypto] Load Ticker Data Failure',
  props<{ error: any }>()
);
