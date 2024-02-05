const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
]

function avgRate(products) {
    let average = 0
    for(const product of products) {
        average += product.price / products.length
    }
    let finalAvg = Math.ceil(average)
    return finalAvg
}

const avgTotal = avgRate(phones)
console.log('Average rate is', avgTotal, 'tk')