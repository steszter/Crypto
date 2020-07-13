import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { CryptoDataComponent } from './crypto-data/crypto-data.component';
import { CryptoEffects } from './+state/crypto.effects';
import { TableComponent } from './table/table.component';
import { cryptoFeatureKey, reducer } from './+state/crypto.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(
  r: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: [cryptoFeatureKey], rehydrate: true })(r);
}

@NgModule({
  declarations: [
    AppComponent,
    CryptoDataComponent,
    TableComponent,
    CoinDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, { metaReducers: [localStorageSyncReducer] }),
    StoreModule.forFeature(cryptoFeatureKey, reducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([CryptoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
