const weight = 79
const height = 167 / 100
const bmi = weight / (height * height)

if (bmi < 18.5) {
    console.log(`You are underweight`);
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`Normal`);
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log(`You are overweight`);
}
else {
    console.log(`Something went wrong!`);
}
