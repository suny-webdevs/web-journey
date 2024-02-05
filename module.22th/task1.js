const height = [167, 190, 120, 165, 137]

function getMin(number) {
    let min = number[0]
    for(const num of number) {
        if(num < min) {
            min = num
        }
    }
    return min
}

const minimum = getMin(height)
console.log(minimum, 'is minimum')