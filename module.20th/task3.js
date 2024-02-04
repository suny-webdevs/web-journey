function make_avg(numbers) {
    let sum = 0
    for (const number of numbers) {
        sum += number / 2
    }
    return sum
}

const numbers = [11, 22, 33, 44, 55]
const avg = make_avg(numbers)
console.log(numbers, "Average of numbers", avg);