const users = [
    { id: '1', firstName: 'Vanesa', lastName: 'Villena', age: 13 },
    { id: '2', firstName: 'Gaspar', lastName: 'Caro', age: 19 },
    { id: '3', firstName: 'Ignacio', lastName: 'Pérez', age: 18 },
    { id: '4', firstName: 'Laura', lastName: 'García', age: 15 },
    { id: '5', firstName: 'Ramiro', lastName: 'Valle', age: 28 }
];
const filteredArr = users.filter(user => user.age > 15);
const finalArr = filteredArr.map(item => {
    // Map and newItem are only necessary if we don't want to mutate the original objects
    // If we can manipulate the OG objects we could just do a forEach on the Arr adding the property for all objects
    const newItem = Object.assign({}, item);
    newItem.fullName = newItem.firstName + ' ' + newItem.lastName;
    return newItem
});

console.log(finalArr);
