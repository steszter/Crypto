import * as fromCrypto from './crypto.reducer';
import { selectCryptoState } from './crypto.selectors';

describe('Crypto Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCryptoState({
      [fromCrypto.cryptoFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
