import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CryptoEffects } from './crypto.effects';

describe('CryptoEffects', () => {
  let actions$: Observable<any>;
  let effects: CryptoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CryptoEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(CryptoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
