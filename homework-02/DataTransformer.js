const DataTransformer = null;
    function invertBoolean(value) { 
        if (typeof value  !== 'boolean') {
            throw new Error ('Argument must be a boolean.');
        }
        return !value;
    };
        console.log(invertBoolean(true));
       try {
         console.log(invertBoolean("true"));
       } catch (error) {
        console.error(error.message);
       }

    function addValues (a,b) {
        if (typeof a === 'number' && typeof b === 'number') {
            const sum = a + b;
            return sum;
        } else {
            throw new Error ('Addition is not possible')
        }
    };
        console.log(addValues(2, 3));            
        console.log(addValues(3.5, 2.1));  
        try {
            console.log(addValues("2", 3));   
        } catch (error) {
            console.error(error.message);       
        }

        try {
            console.log(addValues(2, null)); 
        } catch (error) {
            console.error(error.message);
        };
    
    
    function convertToNumber (value) {
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

    }; 
    
    // console.log(convertToNumber("42"));      
    // console.log(convertToNumber("3.14"));    
    // console.log(convertToNumber(10));        
    // console.log(convertToNumber(true));      
     
    // console.log(convertToNumber(null));      

    // try {
    //     console.log(convertToNumber("abc")); 
    // } catch (error) {
    //     console.error(error.message);           
    // }

    // try {
    //     console.log(convertToNumber(undefined)); 
    // } catch (e) {
    //     console.error(error.message);               
    // }


    function coerceToType ( value, type) {
        if (typeof type === 'number'){
        const result = Number(value); 

        if(isNaN(result)) {
            throw new Error('Cannot convert to number');
        }
        return result;
        };

        if (typeof type === 'string') {
            return String(value);
        };
              
        if(typeof type === 'boolean') {
            return Boolean(value);
        }

        throw new Error('Unsupported type')
    };

    // console.log(coerceToType("123", "number"));   
    // console.log(coerceToType("abc", "string"));    
    // console.log(coerceToType(1, "boolean"));       
    // console.log(coerceToType(0, "boolean"));       
    // console.log(coerceToType(false, "string"));   

    // try {
    //     console.log(coerceToType("abc", "number")); 
    // } catch (e) {
    //     console.error(e.message);                 
    // }

    // try {
    //     console.log(coerceToType("123", "float"));  
    // } catch (e) {
    //     console.error(e.message);                  
    // }



   function stringifyValue(value) {
    if (typeof value === 'object' ) {
        const myJSON = JSON.stringify(value);
        return myJSON;
    } else {
        return String(value)
   }
};
    console.log(stringifyValue({ name: "Ana" }));   
    console.log(stringifyValue([1, 2, 3]));         
    console.log(stringifyValue(42));                
    console.log(stringifyValue(true));              
    console.log(stringifyValue(null));
    console.log(typeof(stringifyValue(null)));             
    console.log(stringifyValue(undefined));         