document.querySelector('#btnHome').addEventListener('click', function(e) {
    hideElementById('homepage')
    showElementById('playground')

    playGame()
})

document.querySelector('#playAgain').addEventListener('click', function() {
    hideElementById('scorePage')
    showElementById('playground')

    playGame()
})

document.addEventListener('keyup', handleEnterKey)
document.addEventListener('keyup', handleKeyPress)

function playGame() {
    const alphabet = getRandomAlphabet()
    const currentAlphabetElement = document.querySelector('#currentAlphabet')

    currentAlphabetElement.innerText = alphabet

    addBgColorByID(alphabet, 'bg-orange-400')
}