function even(from, to) {
    for(let i = from; i <= to; i++) {
        if(i % 2 === 1) {
            continue
        }
        console.log(i);
    }
}

even(1, 40)