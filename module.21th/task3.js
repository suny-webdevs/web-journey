function getVowel(chars) {
    let newArr = []
    for(const char of chars) {
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            newArr.push(char)
        }
    }
    console.log(newArr);
    return newArr.length
}

const str = 'consonant'
const result = getVowel(str)
console.log(result, 'vowels');