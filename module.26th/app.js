// Triangle Area Calculation function
document.querySelector('#triangle-area').addEventListener('click', function() {
    const base = getInputValueById('#triangle-b')
    const height = getInputValueById('#triangle-h')
    const result = 0.5 * base * height
    setInnerTextById('#output-tri', result)
    getOutput(base, height, result, 0.5)
})
// Rectangle Area Calculation Function
document.querySelector('#btnR').addEventListener('click', function() {
    const width = getInputValueById('#inputW')
    const length = getInputValueById('#inputI')
    const result = width * length
    setInnerTextById('#output-rect', result)
    getOutput(width, length, result)
})
// Parallelogram Area Calculation Function
document.querySelector('#btnP').addEventListener('click', function() {
    const base = getInputValueById('#inputB')
    const height = getInputValueById('#inputH')
    const result = 0.5 * base * height
    setInnerTextById('#output-boxP', result)
    getOutput(base, height, result, 0.5)
})
// Rhombus Area Calculation Function
document.querySelector('#btnRR').addEventListener('click', function() {
    const d1 = getInputValueById('#inputD1')
    const d2 = getInputValueById('#inputD2')
    const result = 0.5 * d1 * d2
    setInnerTextById('#output-rombo', result)
    getOutput(d1, d2, result, 0.5)
})
// Pentagon Area Calculation Function
document.querySelector('#btn-penta').addEventListener('click', function() {
    const p = getInputValueById('#input-penta1')
    const a = getInputValueById('#input-penta2')
    const result = 0.5 * p * a
    setInnerTextById('#output-penta', result)
    getOutput(p, a, result, 0.5)
})
// Ellipse Area Calculation Function
document.querySelector('#btn-elli').addEventListener('click', function() {
    const a = getInputValueById('#input-elli1')
    const b = getInputValueById('#input-elli2')
    const result = 3.14 * a * b
    setInnerTextById('#output-elli', result)
    getOutput(a, b, result, 3.14)
})

function setInnerTextById(elementID, result) {
    const element = document.querySelector(elementID)
    element.innerText = result
}

function getInputValueById(inputFieldById) {
    const inputField = document.querySelector(inputFieldById)
    const inputFieldText = inputField.value
    const inputValue = parseFloat(inputFieldText)
    return inputValue
}

function getOutput(num1, num2, result, con) {
    const outputBox = document.querySelector('#output-box')
    const p = document.createElement('p')

    if(con <= 0 || con === undefined) {
        p.innerText = `${num1} X ${num2} = ${result} cm square`
        outputBox.appendChild(p)
    }
    else {
        p.innerText = `${con} X ${num1} X ${num2} = ${result} cm square` 
        outputBox.appendChild(p)
    }
}