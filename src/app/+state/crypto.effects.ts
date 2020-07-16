import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import * as CryptoActions from './crypto.actions';

@Injectable()
export class CryptoEffects {
  loadGlobalData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CryptoActions.loadGlobalData),
      switchMap(() =>
        this.apiService.sendGetRequestGlobal().pipe(
          map((response) =>
            CryptoActions.loadGlobalDataSuccess({ data: response[0] })
          ),
          catchError((error) =>
            of(CryptoActions.loadGlobalDataFailure({ error }))
          )
        )
      )
    );
  });

  loadTickers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CryptoActions.loadTickers),
      switchMap(({ start }) =>
        this.apiService.sendGetRequestTickers(start).pipe(
          map((response) =>
            CryptoActions.loadTickersSuccess({
              tickers: response.data,
              collectionSize: response.info.coins_num,
            })
          ),
          catchError((error) => of(CryptoActions.loadTickersFailure({ error })))
        )
      )
    );
  });

  loadTickerData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CryptoActions.loadTickerData),
      switchMap(({ id }) =>
        this.apiService.sendGetRequestId(id).pipe(
          map((response) =>
            CryptoActions.loadTickerDataSuccess({ data: response[0] })
          ),
          catchError((error) =>
            of(CryptoActions.loadTickerDataFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
