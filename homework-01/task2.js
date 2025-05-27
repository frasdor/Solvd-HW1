String.prototype.minus = function (other) {

  let a = this.toString();
    let b = other.toString();

    let result = '';
    let borrow = 0;

    while (a.length < b.length) a = '0' + a;
    while (b.length < a.length) b = '0' + b;


 for (let i = a.length - 1; i>=0; i--) {
  let digitA = parseInt(a[i]);
  let digitB = parseInt(b[i]) + borrow;

  if (digitA < digitB) {
    digitA += 10;
    borrow = 1;
  } else {
    borrow = 0;
  }
  result = (digitA - digitB) + result;
 }
   return result.replace(/^0+/, '') || '0';
};
console.log("256".minus("56"));            
console.log("1000000".minus("222222")); 
console.log("1000".minus("1"));      
console.log("123456".minus("456"));  
