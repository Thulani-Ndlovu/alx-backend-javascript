const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return whole numbers from floating point inputs', () => {
      expect(calculateNumber("SUM", 2.0, 2.0)).to.equal(4);
    });
  
    it('should round down the b argument floating point inputs', () => {
      expect(calculateNumber("SUM", 2.0, 3.3)).to.equal(5);
    });
  
    it('should round down the a argument floating point inputs', () => {
      expect(calculateNumber("SUM", 1.4, 2.0)).to.equal(3);
    });
  
    it('should return a whole number when only a\ is a float', () => {
      expect(calculateNumber("SUM", 5.2, 2)).to.equal(7);
    });
  
    it('should return a whole number when only a\ is a float', () => {
      expect(calculateNumber("SUM", 5, 4.5)).to.equal(10);
    });
  
    it('it should round up a\ argument when its a float', () => {
      expect(calculateNumber("SUM", 5.5, 4)).to.equal(10);
    });
  
    it('it should round up b\ argument when its a float', () => {
      expect(calculateNumber("SUM", 4, 5.5)).to.equal(10);
    });
  
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      expect(calculateNumber("SUM", 2.499999, 3.499999)).to.equal(5);
    });
  
    it('should handle both negative inputs', () => {
      expect(calculateNumber("SUM", -10, -1)).to.equal(-11);
    });
    
    it('should handle a negative a\ argument input', () => {
      expect(calculateNumber("SUM", -11, 1)).to.equal(-10);
    });
  
    it('should handle a negative b\ argument input', () => {
      expect(calculateNumber("SUM", 11, -1)).to.equal(10);
    });
  
    it('should handle a case where both inputs are zero', () => {
      expect(calculateNumber("SUM", 0, 0)).to.equal(0);
    });
  
    it('should handle one large floating number and a small one', () => {
      expect(calculateNumber("SUM", 999999999.5, 0.5)).to.equal(1000000001);
    });
  
    it('should handle both large floating points', () => {
      expect(calculateNumber("SUM", 999999999.5, 999999999.5)).to.equal(2000000000);
    });
  
  });
  
  describe('SUBTRACT', () => {
  
  
    it('should return whole numbers from floating point inputs', () => {
      expect(calculateNumber("SUBTRACT", 2.0, 2.0)).to.equal(0);
    });
  
    it('should round down the b\ argument floating point inputs', () => {
      expect(calculateNumber("SUBTRACT", 2.0, 3.3)).to.equal(-1);
    });
  
    it('should round down the a\ argument floating point inputs', () => {
      expect(calculateNumber("SUBTRACT", 1.4, 2.0)).to.equal(-1);
    });
  
    it('should return a whole number when only a\ is a float', () => {
      expect(calculateNumber("SUBTRACT", 5.2, 2)).to.equal(3);
    });
  
    it('should return a whole number when only a\ is a float', () => {
      expect(calculateNumber("SUBTRACT", 5, 4.5)).to.equal(0);
    });
  
    it('it should round up a\ argument when its a float', () => {
      expect(calculateNumber("SUBTRACT", 5.5, 4)).to.equal(2);
    });
  
    it('it should round up b\ argument when its a float', () => {
      expect(calculateNumber("SUBTRACT", 4, 5.5)).to.equal(-2);
    });
  
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      expect(calculateNumber("SUBTRACT", 2.499999, 3.499999)).to.equal(-1);
    });
  
    it('should handle both negative inputs', () => {
      expect(calculateNumber("SUBTRACT", -10, -1)).to.equal(-9);
    });
    
    it('should handle a negative a\ argument input', () => {
      expect(calculateNumber("SUBTRACT", -11, 1)).to.equal(-12);
    });
  
    it('should handle a negative b\ argument input', () => {
      expect(calculateNumber("SUBTRACT", 11, -1)).to.equal(12);
    });
  
    it('should handle a case where both inputs are zero', () => {
      expect(calculateNumber("SUBTRACT", 0, 0)).to.equal(0);
    });
  
    it('should handle one large floating number and a small one', () => {
      expect(calculateNumber("SUBTRACT", 999999999.5, 0.5)).to.equal(999999999);
    });
  
    it('should handle both large floating points', () => {
      expect(calculateNumber("SUBTRACT", 999999999.5, 999999999.5)).to.equal(0);
    });
  
  });
  
  describe('DIVIDE', () => {
  
    it('should handle a denominator of zero', () => {
      expect(calculateNumber("DIVIDE", 5, 0)).to.equal("Error");
    });
  
    it('it should return a positive result when a\ & b\ are negative', () => {
      expect(calculateNumber("DIVIDE", -5, -5)).to.equal(1);
    });
  
    it('it should return a positive result when ONLY a\ negative', () => {
      expect(calculateNumber("DIVIDE", -5, 5)).to.equal(-1);
    });
  
    it('it should return a negative result when ONLY b\ is negative', () => {
      expect(calculateNumber("DIVIDE", 5, -5)).to.equal(-1);
    });
  
    it('it should return a positive result when BOTH a\ and b\ are positive', () => {
      expect(calculateNumber("DIVIDE", 5, 5)).to.equal(1);
    });
  
    it('it should return a positive floating point when both a\ and b\ are positive', () => {
      expect(calculateNumber("DIVIDE", 5.5, 2.5).to.equal(2.2))
    });
  });
});
