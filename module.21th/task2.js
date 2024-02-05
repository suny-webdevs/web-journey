function repeated(numbers, char) {
    let newArr = []
    for(const number of numbers) {
        if(number === char) {
            newArr.push(number)
        }
    }
    console.log(newArr);
    return newArr.length
}

const ages = [15, 20, 22, 23, 20, 23]
const repeatedNumber = repeated(ages, 15)
console.log(repeatedNumber, 'time(s)')