String.prototype.multiply = function (other) {
  const num1 = this;
  const num2 = other;

  if (num1 === '0' || num2 === '0') return '0';

  const result = Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    const n1 = parseInt(num1[i]);
    for (let j = num2.length - 1; j >= 0; j--) {
      const n2 = parseInt(num2[j]);
      const mul = n1 * n2 + result[i + j + 1];
      result[i + j + 1] = mul % 10;
      result[i + j] += Math.floor(mul / 10);
    }
  }

  while (result[0] === 0) result.shift();

  return result.join('');
};

console.log('123'.multiply('456'));
console.log('99'.multiply('99')); 
