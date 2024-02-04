function oddMultiply (number) {
    if (number % 2 === 1) {
        return number * 2
    }
    else {
        return number / 2
    }
}

const result = oddMultiply(6)
console.log(result);