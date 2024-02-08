function findLetter(str, letter) {
    const strArr = []
    for(const item of str) {
        if(item === letter) {
            strArr.push(letter)
        }
    }
    console.log(strArr)
    return strArr.length
}

const demoStr = "bangladesh"
const totalLetter = findLetter(demoStr, "a")
console.log(totalLetter, "time(s)")