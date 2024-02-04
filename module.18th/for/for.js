for (let index = 1; index <= 20; index += 2) {
    // console.log(index);
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // console.log(i);
    }
}

let total = 0
for (let i = 1; i <= 30; i++) {
    if(i % 3 === 0) {
        console.log(i);
        total += i
        console.log(`Total = ${total}`);
    }
}
console.log(`Total : ${total}`);