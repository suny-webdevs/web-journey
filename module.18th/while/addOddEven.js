// Addition of odd numbers
console.log(`\nAddition odd numbers 81 to 131\n`);
let num1 = 81
let sum1 = 0
while (num1 <= 131) {
    if (num1 % 2 === 1) {
        console.log('(' + sum1 + '+' + num1 + ')');
        sum1 += num1
        console.log(sum1);
    }
    num1++
}

// Addition of even numbers
console.log(`\nAddition even numbers 206 to 311\n`);
let num2 = 206
let sum2 = 0
while (num2 <= 311) {
    if (num2 % 2 === 0) {
        console.log('(' + sum2 + '+' + num2 + ')');
        sum2 += num2
        console.log(sum2);
    }
    num2++
}