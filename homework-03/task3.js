class CounterRepeater{
    constructor() {
        this.count = 0;
    }

    createCounter() {
            this.count++;
            return this.count;
        }
    repeatFunction (fn, times) {
        if (typeof fn !== 'function') {
            throw new Error('Parameter fn must be a function');
        }
         if (typeof times !== 'number' || !Number.isInteger(times)) {
        throw new Error('Parameter times must be an integer');
        }

        if (times < 0) {
            const intervalId = setInterval (fn, 10);
            return () => clearInterval(intervalId);
        } else {
            for (let i = 0; i < times; i++) {
                fn();
            }
            return null;
        }
    }
    
}

 const myCounterRepeater = new CounterRepeater();
 const counterFn = () => console.log(myCounterRepeater.createCounter());
 myCounterRepeater.repeatFunction(counterFn, 5);

