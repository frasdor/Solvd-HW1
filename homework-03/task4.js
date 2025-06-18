function calculateFactorial(n, acc = 1) {
    if (n === 0) {
        return acc;
    } else {
        return calculateFactorial (n - 1, n * acc);
    }
}
console.log(calculateFactorial(5));

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power (base, exponent -1);
    }
}
console.log(power(2,3));