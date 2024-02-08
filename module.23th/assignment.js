function calculateMoney(ticketSale){
    if(ticketSale < 0) {
        return "Please input positive number!"
    }
    let income = 120 * ticketSale
    const fee = 500 + (8 * 50)
    const remaining = income - fee
    return `Remaining ${remaining} tk`
}

function checkName(name){
    if(typeof name !== "string") {
        return "Invalid!"
    }

    const lowNameChar = name.toLowerCase()
    const lastChar = lowNameChar.charAt(lowNameChar.length - 1)

    if(lastChar === "a" || lastChar === "y" || lastChar === "i" || lastChar === "e" || lastChar === "o" || lastChar === "u" || lastChar === "w") {
        return "Good Name"
    }
    else {
        return "Bad Name"
    }
}

function deleteInvalids(array) {
    if(!Array.isArray(array)) {
        return 'Invalid datatype! Please input an Array.'
    }
    const newArr = []
    for(const item of array) {
        if(typeof item === 'number' && !isNaN(item)) {
            newArr.push(item)
        }
    }
    return newArr
}

function password(obj) {
    if(typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return 'invalid! Input'
    }

    if(!('name' in obj) || !('birthYear' in obj) || !('siteName' in obj)) {
        return 'Invalid! Missing info'
    }

    const name = obj.name.toLowerCase()
    const birthYear = obj.birthYear
    const siteName = obj.siteName.toLowerCase()

    if(typeof birthYear !== 'number' || birthYear.toString().length !== 4) {
        return 'Invalid! Birth year'
    }

    const capChar = siteName[0].toUpperCase()

    const newPass = `${capChar}${siteName.slice(1)}#${name}@${birthYear}`

    return newPass
}

function monthlySavings(arr, livingCost) {
    if(!Array.isArray(arr) || typeof livingCost !== 'number') {
        return 'Invalid! Input'
    }
    else if(arr.length === 0) {
        return 'You have no earnings!'
    }
    else if(livingCost === 0) {
        return 'You have no cost!'
    }

    let income = 0
    for(let item of arr) {
        income += item

        if(item >= 3000) {
            income -= item * 0.2
        }
    }

    const savings = income - livingCost

    if(savings < 0) {
        return 'Earn more!'
    }

    return savings
}