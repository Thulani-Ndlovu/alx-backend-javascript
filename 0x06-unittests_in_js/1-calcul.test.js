const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('SUM', () => {
  it('should return whole numbers from floating point inputs', () => {
    assert.strictEqual(calculateNumber("SUM", 2.0, 2.0), 4);
  });

  it('should round down the b argument floating point inputs', () => {
    assert.strictEqual(calculateNumber("SUM", 2.0, 3.3), 5);
  });

  it('should round down the a argument floating point inputs', () => {
    assert.strictEqual(calculateNumber("SUM", 1.4, 2.0), 3);
  });

  it('should return a whole number when only a\ is a float', () => {
    assert.strictEqual(calculateNumber("SUM", 5.2, 2), 7);
  });

  it('should return a whole number when only a\ is a float', () => {
    assert.strictEqual(calculateNumber("SUM", 5, 4.5), 10);
  });

  it('it should round up a\ argument when its a float', () => {
    assert.strictEqual(calculateNumber("SUM", 5.5, 4), 10);
  });

  it('it should round up b\ argument when its a float', () => {
    assert.strictEqual(calculateNumber("SUM", 4, 5.5), 10);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber("SUM", 2.499999, 3.499999), 5);
  });

  it('should handle both negative inputs', () => {
    assert.strictEqual(calculateNumber("SUM", -10, -1), -11);
  });
  
  it('should handle a negative a\ argument input', () => {
    assert.strictEqual(calculateNumber("SUM", -11, 1), -10);
  });

  it('should handle a negative b\ argument input', () => {
    assert.strictEqual(calculateNumber("SUM", 11, -1), 10);
  });

  it('should handle a case where both inputs are zero', () => {
    assert.strictEqual(calculateNumber("SUM", 0, 0), 0);
  });

  it('should handle one large floating number and a small one', () => {
    assert.strictEqual(calculateNumber("SUM", 999999999.5, 0.5), 1000000001);
  });

  it('should handle both large floating points', () => {
    assert.strictEqual(calculateNumber("SUM", 999999999.5, 999999999.5), 2000000000);
  });

});

describe('SUBTRACT', () => {


  it('should return whole numbers from floating point inputs', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 2.0, 2.0), 0);
  });

  it('should round down the b\ argument floating point inputs', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 2.0, 3.3), -1);
  });

  it('should round down the a\ argument floating point inputs', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 2.0), -1);
  });

  it('should return a whole number when only a\ is a float', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 5.2, 2), 3);
  });

  it('should return a whole number when only a\ is a float', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 5, 4.5), 0);
  });

  it('it should round up a\ argument when its a float', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 5.5, 4), 2);
  });

  it('it should round up b\ argument when its a float', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 4, 5.5), -2);
  });

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 2.499999, 3.499999), -1);
  });

  it('should handle both negative inputs', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", -10, -1), -9);
  });
  
  it('should handle a negative a\ argument input', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", -11, 1), -12);
  });

  it('should handle a negative b\ argument input', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 11, -1), 12);
  });

  it('should handle a case where both inputs are zero', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 0, 0), 0);
  });

  it('should handle one large floating number and a small one', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 999999999.5, 0.5), 999999999);
  });

  it('should handle both large floating points', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 999999999.5, 999999999.5), 0);
  });

});

describe('DIVIDE', () => {

  it('should handle a denominator of zero', () => {
    assert.strictEqual(calculateNumber("DIVIDE", 5, 0), "Error");
  });

  it('it should return a positive result when a\ & b\ are negative', () => {
    assert.strictEqual(calculateNumber("DIVIDE", -5, -5), 1);
  });

  it('it should return a positive result when ONLY a\ negative', () => {
    assert.strictEqual(calculateNumber("DIVIDE", -5, 5), -1);
  });

  it('it should return a negative result when ONLY b\ is negative', () => {
    assert.strictEqual(calculateNumber("DIVIDE", 5, -5), -1);
  });

  it('it should return a positive result when BOTH a\ and b\ are positive', () => {
    assert.strictEqual(calculateNumber("DIVIDE", 5, 5), 1);
  });

  it('it should return a positive floating point when both a\ and b\ are positive', () => {
    assert.strictEqual(calculateNumber("DIVIDE", 5.5, 2.5), 2.2)
  });
});