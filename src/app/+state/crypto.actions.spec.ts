import * as fromCrypto from './crypto.actions';

describe('loadCryptos', () => {
  it('should return an action', () => {
    expect(fromCrypto.loadCryptos().type).toBe('[Crypto] Load Cryptos');
  });
});
