let books = ['Public relations', 'Intermediate Mathematics', 'All about Python']
let isInclude = books.includes('All about javascript')
if (!isInclude) {
    console.log(`JavaScript book isn't include in this list`);
}
else {
    console.log(books);
}

// let books = ['Public relations', 'Intermediate Mathematics', 'All about Python', 'All about javascript']
// let isInclude = books.includes('All about javascript')
// if (!isInclude) {
//     console.log(`JavaScript book isn't include in this list`);
// }
// else {
//     console.log(books);
// }