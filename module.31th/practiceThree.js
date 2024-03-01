const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Shucorita', age: 22}
]

// for...of loop
let sum = 0
for(const person of people) {
    sum += person.age
}
console.log(sum)

// people.reduce()
const totalAge = people.reduce((acc, person) => acc + person.age, 0)
console.log(totalAge)