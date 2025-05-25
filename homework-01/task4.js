String.prototype.multiply = function (other) {
    const num1 = Number(this);
    const num2 = Number(other);

    if (num1 === 0 || num2 === 0) {
    return "0";
    }
    const result = num1 * num2;

    console.log('Result:', result);

    return String(result);

};
console.log("256".multiply("4"));        
console.log("100".multiply("25"));       
console.log("10".multiply("3"));         
console.log("1".multiply("2"));          
console.log("123456".multiply("1"));   