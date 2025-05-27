String.prototype.plus = function (other) {
  let a = this.toString();
  let b = other.toString();

  let carry = 0;
  let result = '';

  while (a.length < b.length) a = '0' + a;
  while (b.length < a.length) b = '0' + b;

  for (let i = a.length -1; i>= 0; i--) {
    let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }
  if (carry > 0) {
        result = carry + result;
    }

    return result;
};

console.log('123456789123456789'.plus('987654321987654321')); 
console.log('1'.plus('9999'));
console.log('345678'.plus('12356'));