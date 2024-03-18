const calculateNumber = function(type, a, b) {

  switch (type) {
    case 'SUM': return Math.round(a) + Math.round(b);
    case 'SUBTRACT': return Math.round(a) - Math.round(b);
    case 'DIVIDE': return (b !== 0) ? a / b : "Error";
  }


};

module.exports = calculateNumber;