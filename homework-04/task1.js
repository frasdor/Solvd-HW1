const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
};

for (let key in person) {
    Object.defineProperty(person, key, {
        writable: false,
        configurable: false,
        enumerable: true
    });
};

function updateInfo(obj, newInfo){
    const updated = { ...obj };

    for (let key in newInfo) {
        if (updated.hasOwnProperty(key)){
            updated[key] = newInfo[key];
        }
    }

for( let key in updated) {
    Object.defineProperty(updated, key, {
                value: updated[key],
                writable: false,
                configurable: false,
                enumerable: true
            });
    }

    Object.defineProperty(updated, "address",{
        value:obj.address,
        writable: true,
        configurable: false,
        enumerable: false
    });

    return updated;
}
const updatedPerson = updateInfo(person, { firstName: "Jane", age: 32 });
console.log(updatedPerson.firstName);
console.log(person.firstName);   
console.log(person.age);        
console.log(person.address);    