class DataFormatter {
    constructor() {
    }

    formatDate(date) {
        if (!(date instanceof Date)) {
      throw new Error('Input must be a Date object');
    }
        return date.toDateString(); 
    }
}

class LazyMapper {
    constructor(array,mapFn) {
        if (!Array.isArray(array)) {
        throw new Error('First argument must be an array');
        }
        if (typeof mapFn !== 'function') {
        throw new Error('Second argument must be a function');
        }
        this.array = array;
        this.mapFn = mapFn;
        this.index = 0;
    }
    
    lazyMap(){
         if (this.index < this.array.length) {
            const value = this.mapFn(this.array[this.index]);
                    this.index++;
                    return {value, done: false };
                } else {
                    return { value: undefined, done: true };
                }      
    }     
 }


class FibonacciGenerator {
    constructor(){
    this.n1 = 0;
    this.n2 = 1;
    }
     next() {
            const value = this.n1;
            const nextValue = this.n1 + this.n2;
            this.n1 = this.n2;
            this.n2 = nextValue;
            return { value, done: false };
        }
}
const dates = [
  new Date(2025, 5, 17), 
  new Date(2025, 5, 18), 
  new Date(2025, 5, 19)  
];
const formatter = new DataFormatter();
const mapper = new LazyMapper(dates, date => formatter.formatDate(date));

console.log(mapper.lazyMap());
console.log(mapper.lazyMap());
console.log(mapper.lazyMap());
console.log(mapper.lazyMap());


const fibG = new FibonacciGenerator();
console.log(fibG.next());
console.log(fibG.next());
console.log(fibG.next());
console.log(fibG.next());