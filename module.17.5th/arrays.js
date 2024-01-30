let myName = 'SUNY'
let names = [myName, 'FORHAD', 'ROHOMOT', 'NELOY']
let isArray = Array.isArray(myName)
let isArrays = Array.isArray(names)

!isArray ? console.log(`${myName} is not array`) : console.log(myName)
!isArrays ? console.log(`${names} is not array`) : console.log(names)

// if (!isArray) {
//     console.log(`${myName} is not array`);
// }
// else {
//     console.log(myName);
// }
// if (!isArrays) {
//     console.log(`${names} is not array`);
// }
// else {
//     console.log(names);
// }