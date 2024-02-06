// function oddNumbers(from, to) {
//     const oddArr = []
//     for(let i = from; i <= to; i++) {
//         if(i % 2 === 1) {
//             oddArr.push(i)
//         }
//     }
//     return oddArr
// }
// function sumOfOddNumbers(arr) {
//     let sum = 0
//     for(const item of arr) {
//         sum += item
//     }
//     return sum
// }

function sumOfOddNumbers(from, to) {
    const oddArr = []
    for(let i = from; i <= to; i++) {
        if(i % 2 === 1) {
            oddArr.push(i)
        }
    }
    let sum = 0
    for(const item of oddArr) {
        sum += item
    }
    return sum
}

function sumOfEvenNumbers(from, to) {
    const evenArr = []
    for(let i = from; i <= to; i++) {
        if(i % 2 === 0) {
            evenArr.push(i)
        }
    }
    let sum = 0
    for(const item of evenArr) {
        sum += item
    }
    return sum
}

// function evenNumbers(from, to) {
//     const evenArr = []
//     for(let i = from; i <= to; i++) {
//         if(i % 2 === 0) {
//             evenArr.push(i)
//         }
//     }
//     return evenArr
// }
// function sumOfEvenNumbers(arr) {
//     let sum = 0
//     for(const item of arr) {
//         sum += item
//     }
//     return sum
// }

// const oddNumber = oddNumbers(1, 10)
// const evenNumber = evenNumbers(51, 85)

const totalOddNumbers = sumOfOddNumbers(1, 10)
const totalEvenNumbers = sumOfEvenNumbers(51, 85)
console.log(`Total odd numbers: ${totalOddNumbers}\nTotal even numbers: ${totalEvenNumbers}`)