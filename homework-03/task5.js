const dates = [
  new Date(2025, 5, 17), 
  new Date(2025, 5, 18), 
  new Date(2025, 5, 19)  
];

function formatDate(date) {
  return date.toDateString(); 
}

function lazyMap(array, mapFn){
    let index = 0;

    return {
        next: function () {
            if (index < array.length) {
                const value = mapFn(array[index]);
                index++;
                return {value, done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };
}

const lazy = lazyMap(dates, formatDate);

console.log(lazy.next());
console.log(lazy.next());
console.log(lazy.next());
console.log(lazy.next());


function fibonacciGenerator (){
    let n1 = 0;
    let n2 = 1;
    
    return {
        next: function () {
            const value = n1;
            const nextValue = n1 + n2;
            n1 = n2;
            n2 = nextValue;
            return value;
        }
    };
}

const fibG = fibonacciGenerator();
console.log(fibG.next());
console.log(fibG.next());
console.log(fibG.next());
console.log(fibG.next());