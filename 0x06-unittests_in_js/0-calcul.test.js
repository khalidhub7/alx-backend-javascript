import { describe, it } from 'mocha';
import calculateNumber from './0-calcul.js';
import assert from 'assert';

describe('test add func', () => {
  it('should return 7', () => {
    assert.strictEqual(
      calculateNumber(8, -1), 7);
  });
});
