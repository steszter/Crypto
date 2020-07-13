import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { loadGlobalData } from '../+state/crypto.actions';
import { selectGlobalData } from '../+state/crypto.selectors';

@Component({
  selector: 'app-crypto-data',
  templateUrl: './crypto-data.component.html',
  styleUrls: ['./crypto-data.component.css'],
})
export class CryptoDataComponent implements OnInit {
  active = 'top';
  cryptoDataGlobal$ = this.store.pipe(select(selectGlobalData));

  constructor(private apiService: ApiService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadGlobalData());
  }
}
