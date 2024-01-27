const mark = 90

if (mark <= 100 && mark >= 0) {
    if (mark >= 90 && mark <= 100) {
        console.log(`A grade`);
    }
    else if (mark >= 80 && mark < 90) {
        console.log(`B grade`)
    }
    else if (mark >= 70 && mark < 80) {
        console.log(`C grade`)
    }
    else if (mark >= 60 && mark < 70) {
        console.log(`D grade`)
    }
    else if (mark >= 0 && mark < 60) {
        console.log(`Fail`)
    }
    else {
        console.log(`Invalid information`);
    }
}
else {
    console.log(`Something went wrong!`);
}