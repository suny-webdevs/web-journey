function celsius_to_fahrenheit(num) {
    return (num * 9/5) + 32 
}
const celsius = 37
const fahrenheit = celsius_to_fahrenheit(celsius)
console.log(fahrenheit, 'degree fahrenheit');