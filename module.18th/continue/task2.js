function odd(from, to) {
    for(let i = from; i <= to; i++) {
        if(i % 2 !== 0 || i % 5 === 0) {
            continue
        }
        console.log(i);
    }
}

odd(55, 85)