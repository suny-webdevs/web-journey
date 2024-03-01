const numbers = [2,3,4,5,6,7,8,9]

const avgOfArray = numbers => {
    const squares = []
    for(const number of numbers) {
        const square = (number*number)
        squares.push(square)
    }
    let sum = 0
    for(const num of squares) {
        sum += num
    }
    const totalAvg = sum / numbers.length
    return totalAvg
}

console.log(`Average of array: `, avgOfArray(numbers))