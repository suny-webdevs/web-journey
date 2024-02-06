function addition(from, to, stop) {
    let sum = 0
    let i = from
    while(i <= to) {
        if(i === stop + 1) {
            break
        }
        sum += i
        i++
    }
    console.log(sum);
}

addition(1, 200, 100)