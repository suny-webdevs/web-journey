function getOddNumbers(from, to) {
    const oddArr = []
    for(let i = from; i <= to; i++) {
        if(i % 2 === 1) {
            oddArr.push(i)
        }
    }
    return oddArr
}
function getEvenNumbers(from, to) {
    const evenArr = []
    for(let i = from; i <= to; i++) {
        if(i % 2 === 0) {
            evenArr.push(i)
        }
    }
    return evenArr
}

const oddResult = getOddNumbers(61, 100)
const evenResult = getEvenNumbers(78, 98)
console.log(`Odd numbers: ${oddResult}\nEven numbers: ${evenResult}`)