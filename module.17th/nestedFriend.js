const myScore = 90
const friendScore = 35

if (myScore > 80 && myScore <= 100) {
    if (friendScore > 80 && friendScore <= 100) {
        console.log(`Go for a lunch`);
    }
    else if (friendScore > 60 && friendScore < 80) {
        console.log(`Good luck next time`);
    }
    else if (friendScore > 40 && friendScore < 60) {
        console.log(`Unseen message`);
    }
    else if (friendScore < 40 && friendScore > 0) {
        console.log(`Blocked`);
    }
    else {
        console.log(`Input valid info`);
    }
}
else {
    console.log(`Go home and sleep and act sad`);
}