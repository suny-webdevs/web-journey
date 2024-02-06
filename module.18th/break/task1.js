function counter(from, to, stop) {
    for(let i = from; i <= to; i++) {
        if(i === stop + 1) {
            break
        }
        console.log(i);
    }
}

counter(1, 200, 100)