let price = 800
let age = 9
let child = age<10 ? true : false
let seniorCitizen = age>=60 ? true : false
let isStudent = age > 10 && age < 30 ? true : false

if (isStudent) {
    console.log(`Get 50% discount\nTicket price: ${price - (price*(50/100))}tk`);
}
else if (child) {
    console.log(`No charge`);
}
else if (seniorCitizen) {
    console.log(`Get 15% discount\nTicket price: ${price - (price*(15/100))}tk`);
}
else {
    console.log(`Ticket price: ${price}tk`);
}