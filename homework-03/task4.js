class MathOperations {
    calculateFactorial(n, acc = 1) {
        if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
            throw new Error('Factorial input must be a non-negative integer');
        }

        if (n === 0) {
            return acc;
        } else {
            return this.calculateFactorial (n - 1, n * acc);
        }
    }
 
 power(base, exponent) {
    if (typeof base !== 'number') {
      throw new Error('Base must be a number');
    }
    if (typeof exponent !== 'number' || !Number.isInteger(exponent)) {
      throw new Error('Exponent must be an integer');
    }

    if (exponent === 0) {
        return 1;
    } else {
        return base * this.power (base, exponent -1);
    }
}

}

const math = new MathOperations();
console.log(math.calculateFactorial(6));
console.log(math.power(2,3));