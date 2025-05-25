String.prototype.divide = function (other) {
  const num1 = Number(this);
  const num2 = Number(other);

  if (num2 === 0) {
    throw new Error("Division by zero");
  }

  const result = Math.floor(num1 / num2);

  console.log('Result:', result);
  
  return String(result);
  
};
console.log("256".divide("4"));        
console.log("100".divide("25"));       
console.log("10".divide("3"));         
console.log("1".divide("2"));          
console.log("123456".divide("1"));     