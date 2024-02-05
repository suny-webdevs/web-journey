const device = [
    {name: 'laptop', price: 35000},
    {name: 'tablet', price: 15000},
    {name: 'mobile', price: 20000},
    {name: 'desktop', price: 80000}
]

function getTotal(arr) {
    let sum = 0
    for(const item of arr) {
        sum += item.price
    }
    return sum
}

const total = getTotal(device)
console.log('Total amount',total, 'tk')