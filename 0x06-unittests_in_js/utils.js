function calculateNumber(type, a, b) {
    a = Math.round(a);
    b = Math.round(b);
  
    switch (type) {
      case 'SUM':
        return a + b;
      case 'SUBTRACT':
        return a - b;
      case 'DIVIDE':
        if (b === 0) return 'Error';
        return a / b;
      default:
        throw new Error('Invalid type');
    }
  }
  
  module.exports = { calculateNumber };
