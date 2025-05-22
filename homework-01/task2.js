String.prototype.minus = function (other) {

  const num1 = Number(this);
  const num2 = Number(other);

  
  const sum = num1 - num2;
 console.log('Sum:', sum);
  
  return String(sum);
};
console.log("256".minus("99999999956"));
console.log("1000000".minus("2222222222"));