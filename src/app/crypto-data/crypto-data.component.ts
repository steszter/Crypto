import { Component, OnInit } from '@angular/core';

import { CryptoFacade } from '../facade';

@Component({
  selector: 'app-crypto-data',
  templateUrl: './crypto-data.component.html',
  styleUrls: ['./crypto-data.component.css'],
})
export class CryptoDataComponent implements OnInit {
  active = 'top';
  cryptoDataGlobal$ = this.facade.cryptoDataGlobal$;

  constructor(private facade: CryptoFacade) {}

  ngOnInit(): void {
    this.facade.loadGlobalData();
  }
}
