import { describe, it } from 'mocha';
import { expect } from 'chai';
import calculateNumber from './0-calcul.js';

describe('test add func', () => {
  it('should return 7', () => {
    expect(calculateNumber(8, -1)).equal(7);
  });
});
