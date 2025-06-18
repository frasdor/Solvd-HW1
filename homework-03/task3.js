function createCounter(){
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

function repeatFunction (fn, times) {
    return function() {
        if (times < 0) {
            const intervalId = setInterval (fn, 10);
            return () => clearInterval(intervalId);
        } else {
            for (let i = 0; i < times; i++) {
                fn();
            }
            return null;
        }
    };
}


const counter = createCounter();

const repeatCount = repeatFunction(() => console.log(counter()), 5);
repeatCount();