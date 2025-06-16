const user = {
    firstName:'Dorota',
    lastName: 'Frasunkiewicz'
}

function getFullName(person) {
    return person.firstName + " " + person.lastName;
}
console.log(getFullName(user));

