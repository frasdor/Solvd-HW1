String.prototype.plus = function (other) {

  const num1 = Number(this);
  const num2 = Number(other);

  
  const sum = num1 + num2;
 console.log('Sum:', sum);
  
  return String(sum);
};
console.log("256".plus("99999999956"));
console.log("1000000".plus("2222222222"));