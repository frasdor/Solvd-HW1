String.prototype.minus = function (other) {

  const num1 = Number(this);
  const num2 = Number(other);

  if (num2 > num1) {
    return "0";
  }
  
  const result = num1 - num2;
  
  console.log('Difference:', result);
  
  return String(result);
};
console.log("256".minus("56"));        
console.log("1000".minus("1001"));     
console.log("1000000".minus("222222")); 
