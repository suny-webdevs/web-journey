const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]

const max = (arr1, arr2) => {
    const newArr = [...arr1, ...arr2]
    const maxOfArr = Math.max(...newArr)
    return maxOfArr
}

console.log(`Maximum number of arrays: `, max(arr1, arr2))