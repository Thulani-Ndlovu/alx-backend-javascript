const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return whole numbers from floating point inputs', () => {
    assert.strictEqual(calculateNumber(2.0, 2.0), 4);
  });

  it('should round down the b argument floating point inputs', () => {
    assert.strictEqual(calculateNumber(2.0, 3.3), 5);
  });

  it('should round down the a argument floating point inputs', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('should return a whole number when only a\ is a float', () => {
    assert.strictEqual(calculateNumber(5.2, 2), 7);
  });

  it('should return a whole number when only a\ is a float', () => {
    assert.strictEqual(calculateNumber(5, 4.5), 10);
  });

  it('it should round up a\ argument when its a float', () => {
    assert.strictEqual(calculateNumber(5.5, 4), 10);
  });

  it('it should round up b\ argument when its a float', () => {
    assert.strictEqual(calculateNumber(4, 5.5), 10);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });

  it('should handle both negative inputs', () => {
    assert.strictEqual(calculateNumber(-10, -1), -11);
  });
  
  it('should handle a negative a\ argument input', () => {
    assert.strictEqual(calculateNumber(-11, 1), -10);
  });

  it('should handle a negative b\ argument input', () => {
    assert.strictEqual(calculateNumber(11, -1), 10);
  });

  it('should handle a case where both inputs are zero', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle one large floating number and a small one', () => {
    assert.strictEqual(calculateNumber(999999999.5, 0.5), 1000000001);
  });

  it('should handle both large floating points', () => {
    assert.strictEqual(calculateNumber(999999999.5, 999999999.5), 2000000000);
  });
});