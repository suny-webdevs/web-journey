function getLargeWord(sentence) {
    const arr = sentence.split(" ")
    let longest = 0
    let word = null
    for(let i = 0; i < arr.length; i++) {
        if(longest < arr[i].length) {
            longest = arr[i].length
            word = arr[i]
        }
    }
    return word
}

const sentence = 'I am learning Programming to become a programmer'
const result = getLargeWord(sentence)
console.log(`"${result}" is the large word of the sentence: ${sentence}`);