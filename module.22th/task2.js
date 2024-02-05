const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'me']

function getFriend(arr) {
    let shortName = arr[0]
    for(const item of arr) {
        if(item.length < shortName.length) {
            shortName = item
        }
    }
    return shortName
}

const shortNamedFriend = getFriend(friends)
console.log(shortNamedFriend, 'is my short named friend')