const oddArray = [1,3,5,7,9]
// For loop
const newEvenArr = []
for(const num of oddArray) {
    let sum = num + 1
    newEvenArr.push(sum)
}
console.log(newEvenArr)
// Array.map()
const evenArray = oddArray.map(n => n + 1)
console.log(evenArray)

// Filtering - numbers.filter()
const numbers = [33,50,79,78,90,101,30]
const filteredNumbers = numbers.filter(n => n % 10 === 0)
console.log(filteredNumbers)
// Finding - numbers.find()
const findNumber = numbers.find(n => n % 10 === 0)
console.log(findNumber)