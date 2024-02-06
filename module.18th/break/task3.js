function counter(from, to) {
    for(let i = from; i <= to; i++) {
        if(Math.sqrt(i) % 1 === 0 && i > 1) {
            console.log(i);
            break
        }
    }
}

counter(1, 100)