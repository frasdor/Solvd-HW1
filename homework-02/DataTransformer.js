const DataTransformer = {


     invertBoolean(value) { 
        if (typeof value  !== 'boolean') {
            throw new Error ('Argument must be a boolean.');
        }
        return !value;
    },
       

     addValues (a,b) {
        if (typeof a === 'number' && typeof b === 'number') {
            const sum = a + b;
            return sum;
        }
        if (typeof a === 'string' || typeof b ==='string') {
            const con = String(a) + String(b);
            return con;
        }
        if (Array.isArray(a) && Array.isArray(b)) {
            const concat = a.concat(b);
            return concat;
        }
        if (typeof a === 'object' && typeof b === 'object' && a && b) {
            const conbined = { ...a, ...b };
            return conbined;
        }
        throw new Error ('Addition is not possible')
        
    },
    
    
     convertToNumber (value) {
        if (typeof value === 'string'){
            const num = value.includes('.') ? parseFloat(value) : parseInt(value);
            if (isNaN(num)) {
                throw new Error ('Conversion from string is not possible');
            }
            return num;
        }

        if (typeof value === 'number'){
            return value;
        }

        const num = Number(value);
        if (isNaN(num)) {
            throw new Error('Conversion is not possible');
        } 
        return num;

    },
    

     coerceToType ( value, type) {
        if (type === 'number'){
            const result = Number(value); 
            if(isNaN(result)) {
                throw new Error('Cannot convert to number');
            }
            return result;
        };

        if ( type === 'string') {
            return String(value);
        };
              
        if( type === 'boolean') {
            return Boolean(value);
        }

        throw new Error('Unsupported type')
    },

    stringifyValue(value) {
        if (typeof value === 'object' && value !== null ) {
            const myJSON = JSON.stringify(value);
            return myJSON;
        } else {
            return String(value);
        }
    }
};
console.log(DataTransformer.invertBoolean(true));            
console.log(DataTransformer.addValues(10, 5));               
console.log(DataTransformer.addValues("Hello, ", "world!")); 
console.log(DataTransformer.addValues([1, 2], [3, 4]));      
console.log(DataTransformer.addValues({a:1}, {b:2}));        

console.log(DataTransformer.convertToNumber("123.45"));      
console.log(DataTransformer.convertToNumber(true));          

console.log(DataTransformer.coerceToType("100", "number"));  
console.log(DataTransformer.coerceToType(0, "boolean"));     
console.log(DataTransformer.coerceToType(123, "string"));    

console.log(DataTransformer.stringifyValue({x: 1, y: 2}));   
console.log(DataTransformer.stringifyValue(42));             

           