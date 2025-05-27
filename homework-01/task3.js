String.prototype.divide = function(divisorStr) {
  const dividendStr = this;

  if (divisorStr === '0') throw new Error('Division by zero');
  if (dividendStr === '0') return '0';
  if (divisorStr === '1') return dividendStr;

 
  function compare(a, b) {
    if (a.length !== b.length) return a.length - b.length;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return parseInt(a[i]) - parseInt(b[i]);
    }
    return 0;
  }

  function subtract(a, b) {
    let res = '';
    let carry = 0;

    a = a.split('').map(d => parseInt(d));
    b = b.split('').map(d => parseInt(d));

    while (b.length < a.length) b.unshift(0);

    for (let i = a.length - 1; i >= 0; i--) {
      let diff = a[i] - b[i] - carry;
      if (diff < 0) {
        diff += 10;
        carry = 1;
      } else {
        carry = 0;
      }
      res = diff.toString() + res;
    }

    return res.replace(/^0+/, '') || '0';
  }

  function multiplyByDigit(numStr, digit) {
    if (digit === 0) return '0';
    let carry = 0;
    let res = '';

    for (let i = numStr.length - 1; i >= 0; i--) {
      let mul = parseInt(numStr[i]) * digit + carry;
      carry = Math.floor(mul / 10);
      res = (mul % 10).toString() + res;
    }

    if (carry > 0) res = carry.toString() + res;
    return res;
  }


  let quotient = '';
  let remainder = '';

  for (let i = 0; i < dividendStr.length; i++) {
    remainder += dividendStr[i];
    remainder = remainder.replace(/^0+/, '') || '0';

    if (compare(remainder, divisorStr) < 0) {
      quotient += '0';
      continue;
    }

    let q = 0;
    for (let d = 1; d <= 9; d++) {
      let prod = multiplyByDigit(divisorStr, d);
      if (compare(prod, remainder) > 0) break;
      q = d;
    }

    quotient += q.toString();
    remainder = subtract(remainder, multiplyByDigit(divisorStr, q));
  }

  return quotient.replace(/^0+/, '') || '0';
};
console.log('123456'.divide('123'));     
console.log('1000'.divide('10'));        
console.log('987654321'.divide('12345'));
console.log('10'.divide('3'));           
console.log('5'.divide('10'));           