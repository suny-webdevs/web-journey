function count_zero(chars) {
    const zeros = []
    for (const char of chars) {
        if (char === '0') {
            zeros.push(char)
        }
    }
    const totalZeros = zeros.length
    return totalZeros
}

const binaryString = '001110001100'
const result = count_zero(binaryString)
console.log(result, 'zero(s)');