function hideElementById(elementID) {
    const element = document.getElementById(elementID)
    element.classList.add('hidden')
}

function showElementById(elementID) {
    const element = document.getElementById(elementID)
    element.classList.remove('hidden')
}

function addBgColorByID(elementID, bgColor) {
    const element = document.getElementById(elementID)
    element.classList.add(bgColor)
}

function removeBgColorByID(elementID, bgColor) {
    const element = document.getElementById(elementID)
    element.classList.remove(bgColor)
}

function handleEnterKey(e) {
    if(e.key === 'Enter') {
        hideElementById('homepage')
        showElementById('playground')

        playGame()
    }
}

function handleKeyPress(e) {
    const key = e.key
    const currentAlphabet = document.querySelector('#currentAlphabet').innerText.toLowerCase()
    console.log(currentAlphabet, key)

    if(key === currentAlphabet) {
        console.log('You get a point');

        const scoreElement = document.querySelector('#score-output')
        const scoreOutput = scoreElement.innerText
        const score = parseInt(scoreOutput)
        const newScore = score + 1
        scoreElement.innerText = newScore

        removeBgColorByID(currentAlphabet, 'bg-orange-400')
        playGame()
    }
    else {
        const lifeElement = document.querySelector('#life-output')
        const lifeOutput = lifeElement.innerText
        const life = parseInt(lifeOutput)
        const newLife = life - 1
        lifeElement.innerText = newLife
        
        if(newLife < 1) {
            hideElementById('playground')
            showElementById('scorePage')

            const scoreElement = document.querySelector('#score-output')
            const scoreOutput = scoreElement.innerText
            const score = parseInt(scoreOutput)
            const newScore = score + 1

            const finalScoreOutputElement = document.querySelector('#finalScoreOutput')
            const finalScoreOutput = finalScoreOutputElement.innerText
            const finalScore = parseInt(finalScoreOutput)
            const newFinalScore = finalScore + newScore
            finalScoreOutputElement.innerText = newFinalScore
        }
        console.log('You lose a life point')
    }
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')

    const randomNumber = Math.floor(Math.random() * 25)

    const alphabet = alphabets[randomNumber]
    return alphabet
}